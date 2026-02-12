/**
 * Dashboard Hooks
 * React hooks for validator dashboard, network stats, and real-time WebSocket updates
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { coordinatorAPI } from '@/lib/api/coordinator';
import type {
  ValidatorStatusResponse,
  GpuMetricsResponse,
  RewardsInfoResponse,
  NetworkStatsResponse,
  NetworkWorkersResponse,
  JobAnalyticsResponse,
  ContractsResponse,
  DashboardWsEvent,
  JobUpdateWsEvent,
  WorkerUpdateWsEvent,
  NetworkStatsWsEvent,
} from '@/lib/api/coordinator';
import { useWalletStore } from '@/store/walletStore';

// ==================== Validator Status Hook ====================

interface UseValidatorStatusReturn {
  status: ValidatorStatusResponse | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useValidatorStatus(): UseValidatorStatusReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [status, setStatus] = useState<ValidatorStatusResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setStatus(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getValidatorStatus(wallet.address);
      setStatus(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch validator status');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll every 30 seconds
  useEffect(() => {
    if (!wallet?.address) return;
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [wallet?.address, refresh]);

  return { status, isLoading, error, refresh };
}

// ==================== GPU Metrics Hook ====================

interface UseGpuMetricsReturn {
  gpuMetrics: GpuMetricsResponse | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useGpuMetrics(): UseGpuMetricsReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [gpuMetrics, setGpuMetrics] = useState<GpuMetricsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setGpuMetrics(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getValidatorGpuMetrics(wallet.address);
      setGpuMetrics(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch GPU metrics');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll every 15 seconds for GPU metrics (more frequent)
  useEffect(() => {
    if (!wallet?.address) return;
    const interval = setInterval(refresh, 15000);
    return () => clearInterval(interval);
  }, [wallet?.address, refresh]);

  return { gpuMetrics, isLoading, error, refresh };
}

// ==================== Network Stats Hook ====================

interface UseNetworkStatsReturn {
  stats: NetworkStatsResponse | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useNetworkStats(): UseNetworkStatsReturn {
  const [stats, setStats] = useState<NetworkStatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getNetworkStats();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch network stats');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll every 30 seconds
  useEffect(() => {
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [refresh]);

  return { stats, isLoading, error, refresh };
}

// ==================== Job Analytics Hook ====================

interface UseJobAnalyticsReturn {
  analytics: JobAnalyticsResponse | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useJobAnalytics(): UseJobAnalyticsReturn {
  const [analytics, setAnalytics] = useState<JobAnalyticsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getJobAnalytics();
      setAnalytics(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch job analytics');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll every 60 seconds (less frequent for analytics)
  useEffect(() => {
    const interval = setInterval(refresh, 60000);
    return () => clearInterval(interval);
  }, [refresh]);

  return { analytics, isLoading, error, refresh };
}

// ==================== Contracts Hook ====================

interface UseContractsReturn {
  contracts: ContractsResponse | null;
  isLoading: boolean;
  error: string | null;
}

export function useContracts(): UseContractsReturn {
  const [contracts, setContracts] = useState<ContractsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContracts = async () => {
      setIsLoading(true);
      try {
        const data = await coordinatorAPI.getContractAddresses();
        setContracts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contracts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContracts();
  }, []);

  return { contracts, isLoading, error };
}

// ==================== WebSocket Dashboard Hook ====================

type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error' | 'reconnecting';

interface UseDashboardWebSocketReturn {
  status: ConnectionStatus;
  lastEvent: DashboardWsEvent | null;
  jobUpdates: JobUpdateWsEvent[];
  workerUpdates: WorkerUpdateWsEvent[];
  networkStats: NetworkStatsWsEvent | null;
  connect: () => void;
  disconnect: () => void;
}

interface UseDashboardWebSocketOptions {
  autoConnect?: boolean;
  maxRetries?: number;
  retryDelay?: number;
  onJobUpdate?: (event: JobUpdateWsEvent) => void;
  onWorkerUpdate?: (event: WorkerUpdateWsEvent) => void;
  onNetworkStats?: (event: NetworkStatsWsEvent) => void;
}

export function useDashboardWebSocket(
  options: UseDashboardWebSocketOptions = {}
): UseDashboardWebSocketReturn {
  const {
    autoConnect = true,
    maxRetries = 5,
    retryDelay = 3000,
    onJobUpdate,
    onWorkerUpdate,
    onNetworkStats,
  } = options;

  const [status, setStatus] = useState<ConnectionStatus>('disconnected');
  const [lastEvent, setLastEvent] = useState<DashboardWsEvent | null>(null);
  const [jobUpdates, setJobUpdates] = useState<JobUpdateWsEvent[]>([]);
  const [workerUpdates, setWorkerUpdates] = useState<WorkerUpdateWsEvent[]>([]);
  const [networkStats, setNetworkStats] = useState<NetworkStatsWsEvent | null>(null);

  const cleanupRef = useRef<(() => void) | null>(null);
  const retryCountRef = useRef(0);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEvent = useCallback((event: DashboardWsEvent) => {
    setLastEvent(event);

    switch (event.type) {
      case 'JobUpdate':
        setJobUpdates((prev) => [event.data, ...prev.slice(0, 99)]); // Keep last 100
        onJobUpdate?.(event.data);
        break;
      case 'WorkerUpdate':
        setWorkerUpdates((prev) => {
          // Update existing or add new
          const existing = prev.findIndex((w) => w.worker_id === event.data.worker_id);
          if (existing >= 0) {
            const updated = [...prev];
            updated[existing] = event.data;
            return updated;
          }
          return [event.data, ...prev.slice(0, 99)];
        });
        onWorkerUpdate?.(event.data);
        break;
      case 'NetworkStats':
        setNetworkStats(event.data);
        onNetworkStats?.(event.data);
        break;
      default:
        // Handle other events as needed
        break;
    }
  }, [onJobUpdate, onWorkerUpdate, onNetworkStats]);

  const connect = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
    }

    setStatus('connecting');

    const cleanup = coordinatorAPI.connectDashboardWebSocket(
      handleEvent,
      (error) => {
        console.error('WebSocket error:', error);
        setStatus('error');

        // Attempt reconnect
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          setStatus('reconnecting');
          retryTimeoutRef.current = setTimeout(() => {
            connect();
          }, retryDelay * retryCountRef.current); // Exponential backoff
        }
      },
      () => {
        if (status !== 'disconnected') {
          setStatus('disconnected');
        }
      }
    );

    cleanupRef.current = cleanup;
    setStatus('connected');
    retryCountRef.current = 0; // Reset retry count on successful connect
  }, [handleEvent, maxRetries, retryDelay, status]);

  const disconnect = useCallback(() => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    setStatus('disconnected');
  }, []);

  // Auto-connect on mount
  useEffect(() => {
    if (autoConnect) {
      connect();
    }

    return () => {
      disconnect();
    };
  }, [autoConnect]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    status,
    lastEvent,
    jobUpdates,
    workerUpdates,
    networkStats,
    connect,
    disconnect,
  };
}

// ==================== Combined Dashboard Hook ====================

interface UseDashboardReturn {
  validatorStatus: ValidatorStatusResponse | null;
  gpuMetrics: GpuMetricsResponse | null;
  networkStats: NetworkStatsResponse | null;
  jobAnalytics: JobAnalyticsResponse | null;
  contracts: ContractsResponse | null;
  isLoading: boolean;
  error: string | null;
  wsStatus: ConnectionStatus;
  refresh: () => Promise<void>;
}

export function useDashboard(): UseDashboardReturn {
  const { status: validatorStatus, isLoading: vsLoading, error: vsError, refresh: vsRefresh } = useValidatorStatus();
  const { gpuMetrics, isLoading: gpuLoading, error: gpuError, refresh: gpuRefresh } = useGpuMetrics();
  const { stats: networkStats, isLoading: nsLoading, error: nsError, refresh: nsRefresh } = useNetworkStats();
  const { analytics: jobAnalytics, isLoading: jaLoading, error: jaError, refresh: jaRefresh } = useJobAnalytics();
  const { contracts, isLoading: cLoading, error: cError } = useContracts();
  const { status: wsStatus, networkStats: wsNetworkStats } = useDashboardWebSocket({
    onNetworkStats: (stats) => {
      // WebSocket provides more frequent updates
      console.log('Real-time network stats:', stats);
    },
  });

  const isLoading = vsLoading || gpuLoading || nsLoading || jaLoading || cLoading;
  const error = vsError || gpuError || nsError || jaError || cError;

  const refresh = useCallback(async () => {
    await Promise.all([
      vsRefresh(),
      gpuRefresh(),
      nsRefresh(),
      jaRefresh(),
    ]);
  }, [vsRefresh, gpuRefresh, nsRefresh, jaRefresh]);

  return {
    validatorStatus,
    gpuMetrics,
    networkStats: wsNetworkStats
      ? { ...networkStats!, ...wsNetworkStats } as NetworkStatsResponse
      : networkStats,
    jobAnalytics,
    contracts,
    isLoading,
    error,
    wsStatus,
    refresh,
  };
}
