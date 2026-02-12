'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { coordinatorAPI, type ValidatorEarnings, type RentalSession } from '@/lib/api/coordinator';

interface RealTimeEarnings {
  available: number;
  total_earned: number;
  total_withdrawn: number;
  active_rentals: number;
  earnings_per_hour: number;
  last_updated: Date;
}

interface EarningsEvent {
  type: 'earning' | 'withdrawal' | 'job_completed' | 'rental_billing';
  amount: number;
  rental_id?: string;
  job_id?: string;
  timestamp: string;
}

interface UseRealTimeEarningsOptions {
  /** Polling interval in milliseconds (default: 10000 - 10 seconds) */
  interval?: number;
  /** Whether to enable polling (default: true) */
  enabled?: boolean;
  /** Whether to use SSE streaming for real-time updates */
  useStreaming?: boolean;
  /** Max retry attempts for SSE connection (default: 5) */
  maxRetries?: number;
}

type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error' | 'retrying';

interface UseRealTimeEarningsReturn {
  earnings: RealTimeEarnings | null;
  isLoading: boolean;
  isLive: boolean;
  lastUpdated: Date | null;
  refresh: () => Promise<void>;
  setPollingEnabled: (enabled: boolean) => void;
  recentEvents: EarningsEvent[];
  /** SSE connection status */
  connectionStatus: ConnectionStatus;
  /** Last SSE error message */
  connectionError: string | null;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_COORDINATOR_URL || 'http://localhost:8080';

export function useRealTimeEarnings(
  options: UseRealTimeEarningsOptions = {}
): UseRealTimeEarningsReturn {
  const { interval = 10000, enabled = true, useStreaming = true, maxRetries = 5 } = options;
  const { wallet } = useWalletStore();

  const [earnings, setEarnings] = useState<RealTimeEarnings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [pollingEnabled, setPollingEnabled] = useState(enabled);
  const [recentEvents, setRecentEvents] = useState<EarningsEvent[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);
  const retryCountRef = useRef(0);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch earnings from API with actual rental rates
  const fetchEarnings = useCallback(async () => {
    if (!wallet?.address) {
      setEarnings(null);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch earnings and active rentals in parallel
      const [earningsData, rentalsData] = await Promise.all([
        coordinatorAPI.getValidatorEarnings(wallet.address),
        coordinatorAPI.getUserRentals(wallet.address),
      ]);

      const now = new Date();

      // Filter for active rentals where we're the validator
      const activeRentals = rentalsData.filter(
        (r: RentalSession) =>
          r.validator_wallet.toLowerCase() === wallet.address.toLowerCase() &&
          (r.status === 'Running' || r.status === 'Provisioning')
      );

      // Calculate actual earnings per hour by summing rates from active rentals
      const earningsPerHour = activeRentals.reduce(
        (sum: number, rental: RentalSession) => sum + (rental.rate_sage_per_hour || 0),
        0
      );

      const realTimeEarnings: RealTimeEarnings = {
        available: earningsData.available,
        total_earned: earningsData.total_earned,
        total_withdrawn: earningsData.total_withdrawn,
        active_rentals: activeRentals.length,
        earnings_per_hour: earningsPerHour,
        last_updated: now,
      };

      setEarnings(realTimeEarnings);
      setLastUpdated(now);
      setIsLive(true);
    } catch (error) {
      console.error('Failed to fetch earnings:', error);
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  // Handle incoming SSE events
  const handleEarningsEvent = useCallback((event: EarningsEvent) => {
    setRecentEvents((prev) => [event, ...prev].slice(0, 10)); // Keep last 10 events

    // Update earnings based on event type
    setEarnings((prev) => {
      if (!prev) return prev;

      switch (event.type) {
        case 'earning':
        case 'job_completed':
        case 'rental_billing':
          return {
            ...prev,
            available: prev.available + event.amount,
            total_earned: prev.total_earned + event.amount,
            last_updated: new Date(event.timestamp),
          };
        case 'withdrawal':
          return {
            ...prev,
            available: prev.available - event.amount,
            total_withdrawn: prev.total_withdrawn + event.amount,
            last_updated: new Date(event.timestamp),
          };
        default:
          return prev;
      }
    });

    setLastUpdated(new Date(event.timestamp));
  }, []);

  // Calculate retry delay with exponential backoff (1s, 2s, 4s, 8s, 16s max)
  const getRetryDelay = useCallback((attempt: number) => {
    return Math.min(1000 * Math.pow(2, attempt), 16000);
  }, []);

  // Connect to SSE with retry logic
  const connectSSE = useCallback(() => {
    if (!wallet?.address) return;

    // Close existing connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    // Clear any pending retry
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }

    setConnectionStatus('connecting');
    setConnectionError(null);

    try {
      const eventSource = new EventSource(
        `${API_BASE_URL}/api/v1/billing/earnings/stream?wallet=${wallet.address}`
      );

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data) as EarningsEvent;
          handleEarningsEvent(data);
        } catch (error) {
          console.error('Failed to parse earnings event:', error);
        }
      };

      eventSource.onerror = (event) => {
        const readyState = eventSource.readyState;

        // Determine error type based on readyState
        let errorMessage: string;
        if (readyState === EventSource.CLOSED) {
          errorMessage = 'Connection closed by server';
        } else if (readyState === EventSource.CONNECTING) {
          errorMessage = 'Connection interrupted, attempting to reconnect...';
        } else {
          errorMessage = 'SSE connection error';
        }

        console.warn(`SSE error (readyState: ${readyState}):`, errorMessage);
        eventSource.close();
        eventSourceRef.current = null;
        setIsLive(false);

        // Retry with exponential backoff if under max retries
        if (retryCountRef.current < maxRetries) {
          const delay = getRetryDelay(retryCountRef.current);
          retryCountRef.current += 1;
          setConnectionStatus('retrying');
          setConnectionError(`${errorMessage} Retrying in ${delay / 1000}s... (${retryCountRef.current}/${maxRetries})`);

          retryTimeoutRef.current = setTimeout(() => {
            connectSSE();
          }, delay);
        } else {
          // Max retries reached, fall back to polling only
          setConnectionStatus('error');
          setConnectionError(`SSE unavailable after ${maxRetries} attempts. Using polling for updates.`);
          console.log('SSE max retries reached, falling back to polling only');
        }
      };

      eventSource.onopen = () => {
        retryCountRef.current = 0; // Reset retry count on successful connection
        setConnectionStatus('connected');
        setConnectionError(null);
        setIsLive(true);
        console.log('SSE connection established');
      };

      eventSourceRef.current = eventSource;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setConnectionStatus('error');
      setConnectionError(`SSE not available: ${errorMsg}. Using polling.`);
      console.log('SSE not available, using polling:', errorMsg);
    }
  }, [wallet?.address, handleEarningsEvent, maxRetries, getRetryDelay]);

  // Setup SSE streaming for real-time earnings updates
  useEffect(() => {
    if (!useStreaming || !wallet?.address || !pollingEnabled) {
      setConnectionStatus('disconnected');
      return;
    }

    connectSSE();

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
      retryCountRef.current = 0;
    };
  }, [useStreaming, wallet?.address, pollingEnabled, connectSSE]);

  // Initial fetch
  useEffect(() => {
    if (wallet?.address) {
      fetchEarnings();
    }
  }, [wallet?.address, fetchEarnings]);

  // Polling as fallback (or primary if streaming disabled)
  useEffect(() => {
    if (!pollingEnabled || !wallet?.address) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(fetchEarnings, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [pollingEnabled, wallet?.address, interval, fetchEarnings]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    await fetchEarnings();
  }, [fetchEarnings]);

  return {
    earnings,
    isLoading,
    isLive,
    lastUpdated,
    refresh,
    setPollingEnabled,
    recentEvents,
    connectionStatus,
    connectionError,
  };
}

export default useRealTimeEarnings;
