/**
 * Validator Dashboard Hooks
 * React hooks for validator earnings, GPU management, and rentals
 */

import { useState, useEffect, useCallback } from 'react';
import { coordinatorAPI } from '@/lib/api/coordinator';
import type {
  ValidatorEarnings,
  MarketplaceGpu,
  RentalSession,
  RegisterGpuRequest,
  GpuAvailability,
  EarningsHistoryPoint,
  BillingTransaction,
  RentalTemplate,
} from '@/lib/api/coordinator';
import { useWalletStore } from '@/store/walletStore';

// ==================== Validator Earnings Hook ====================

interface UseValidatorEarningsReturn {
  earnings: ValidatorEarnings | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  withdraw: (amount: number) => Promise<{ tx_hash: string; amount: number }>;
  syncFromChain: () => Promise<void>;
}

export function useValidatorEarnings(): UseValidatorEarningsReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [earnings, setEarnings] = useState<ValidatorEarnings | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setEarnings(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getValidatorEarnings(wallet.address);
      setEarnings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch earnings');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  const withdraw = useCallback(async (amount: number) => {
    if (!wallet?.address) {
      throw new Error('Wallet not connected');
    }

    const result = await coordinatorAPI.withdrawEarnings(wallet.address, amount);
    // Refresh earnings after withdrawal
    await refresh();
    return result;
  }, [wallet?.address, refresh]);

  const syncFromChain = useCallback(async () => {
    if (!wallet?.address) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    try {
      const data = await coordinatorAPI.syncValidatorEarnings(wallet.address);
      setEarnings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sync earnings');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll for updates every 30 seconds
  useEffect(() => {
    if (!wallet?.address) return;

    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [wallet?.address, refresh]);

  return { earnings, isLoading, error, refresh, withdraw, syncFromChain };
}

// ==================== Validator GPUs Hook ====================

interface UseValidatorGpusReturn {
  gpus: MarketplaceGpu[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  registerGpu: (gpu: RegisterGpuRequest) => Promise<MarketplaceGpu>;
  updateAvailability: (gpuId: string, availability: GpuAvailability) => Promise<void>;
}

export function useValidatorGpus(): UseValidatorGpusReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [gpus, setGpus] = useState<MarketplaceGpu[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setGpus([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Use server-side filtering by validator_wallet for efficiency
      // Falls back to client-side filtering if backend returns all GPUs
      const gpuList = await coordinatorAPI.listMarketplaceGpus({
        validator_wallet: wallet.address,
      });

      // Double-check filtering in case backend doesn't support the parameter yet
      const validatorGpus = gpuList.filter(
        (gpu) => gpu.validator_wallet.toLowerCase() === wallet.address.toLowerCase()
      );
      setGpus(validatorGpus);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch GPUs');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  const registerGpu = useCallback(async (gpu: RegisterGpuRequest): Promise<MarketplaceGpu> => {
    if (!wallet?.address) {
      throw new Error('Wallet not connected');
    }

    // Ensure the GPU is registered to this wallet
    const gpuWithWallet = {
      ...gpu,
      validator_wallet: wallet.address,
    };

    const result = await coordinatorAPI.registerGpu(gpuWithWallet);
    // Refresh GPU list
    await refresh();
    return result;
  }, [wallet?.address, refresh]);

  const updateAvailability = useCallback(async (gpuId: string, availability: GpuAvailability) => {
    await coordinatorAPI.updateGpuAvailability(gpuId, availability);
    await refresh();
  }, [refresh]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll for updates every 30 seconds (same as earnings)
  useEffect(() => {
    if (!wallet?.address) return;

    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [wallet?.address, refresh]);

  return { gpus, isLoading, error, refresh, registerGpu, updateAvailability };
}

// ==================== Validator Rentals Hook ====================

interface UseValidatorRentalsReturn {
  rentals: RentalSession[];
  activeRentals: RentalSession[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useValidatorRentals(): UseValidatorRentalsReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [rentals, setRentals] = useState<RentalSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setRentals([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Get rentals where this wallet is the validator
      const allRentals = await coordinatorAPI.getUserRentals(wallet.address);
      // Filter for rentals where we're the validator (not tenant)
      const validatorRentals = allRentals.filter(
        (r) => r.validator_wallet.toLowerCase() === wallet.address.toLowerCase()
      );
      setRentals(validatorRentals);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch rentals');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Poll for updates every 15 seconds
  useEffect(() => {
    if (!wallet?.address) return;

    const interval = setInterval(refresh, 15000);
    return () => clearInterval(interval);
  }, [wallet?.address, refresh]);

  const activeRentals = rentals.filter(
    (r) => r.status === 'Running' || r.status === 'Provisioning'
  );

  return { rentals, activeRentals, isLoading, error, refresh };
}

// ==================== Combined Validator Dashboard Hook ====================

interface ValidatorDashboardData {
  earnings: ValidatorEarnings | null;
  gpus: MarketplaceGpu[];
  activeRentals: RentalSession[];
  totalRentals: number;
  isLoading: boolean;
  error: string | null;
}

export function useValidatorDashboard(): ValidatorDashboardData & {
  refresh: () => Promise<void>;
} {
  const { earnings, isLoading: earningsLoading, error: earningsError, refresh: refreshEarnings } = useValidatorEarnings();
  const { gpus, isLoading: gpusLoading, error: gpusError, refresh: refreshGpus } = useValidatorGpus();
  const { rentals, activeRentals, isLoading: rentalsLoading, error: rentalsError, refresh: refreshRentals } = useValidatorRentals();

  const refresh = useCallback(async () => {
    await Promise.all([refreshEarnings(), refreshGpus(), refreshRentals()]);
  }, [refreshEarnings, refreshGpus, refreshRentals]);

  return {
    earnings,
    gpus,
    activeRentals,
    totalRentals: rentals.length,
    isLoading: earningsLoading || gpusLoading || rentalsLoading,
    error: earningsError || gpusError || rentalsError,
    refresh,
  };
}

// ==================== Escrow Balance Hook ====================

interface UseEscrowBalanceReturn {
  balance: {
    available: number;
    reserved: number;
    totalDeposited: number;
    totalSpent: number;
  } | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  deposit: (amount: number, txHash?: string) => Promise<void>;
}

export function useEscrowBalance(): UseEscrowBalanceReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [balance, setBalance] = useState<UseEscrowBalanceReturn['balance']>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setBalance(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getEscrowBalance(wallet.address);
      setBalance({
        available: data.available,
        reserved: data.reserved,
        totalDeposited: data.total_deposited,
        totalSpent: data.total_spent,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch balance');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address]);

  const deposit = useCallback(async (amount: number, txHash?: string) => {
    if (!wallet?.address) {
      throw new Error('Wallet not connected');
    }

    await coordinatorAPI.depositEscrow(wallet.address, amount, txHash);
    // Refresh balance after deposit
    await refresh();
  }, [wallet?.address, refresh]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { balance, isLoading, error, refresh, deposit };
}

// ==================== Earnings History Hook ====================

type EarningsPeriod = '7d' | '30d' | '90d';

interface UseEarningsHistoryReturn {
  history: EarningsHistoryPoint[];
  isLoading: boolean;
  error: string | null;
  period: EarningsPeriod;
  setPeriod: (period: EarningsPeriod) => void;
  refresh: () => Promise<void>;
}

export function useEarningsHistory(initialPeriod: EarningsPeriod = '7d'): UseEarningsHistoryReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [history, setHistory] = useState<EarningsHistoryPoint[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState<EarningsPeriod>(initialPeriod);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setHistory([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getEarningsHistory(wallet.address, period);
      setHistory(data);
    } catch (err) {
      // If API fails, generate fallback data from billing records
      setError(err instanceof Error ? err.message : 'Failed to fetch history');
      // Fallback: empty array - will show "no data" in chart
      setHistory([]);
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address, period]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { history, isLoading, error, period, setPeriod, refresh };
}

// ==================== Billing Transactions Hook ====================

interface UseBillingTransactionsReturn {
  transactions: BillingTransaction[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}

export function useBillingTransactions(limit: number = 20): UseBillingTransactionsReturn {
  const wallet = useWalletStore((state) => state.wallet);
  const [transactions, setTransactions] = useState<BillingTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentLimit, setCurrentLimit] = useState(limit);

  const refresh = useCallback(async () => {
    if (!wallet?.address) {
      setTransactions([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.getBillingTransactions(wallet.address, currentLimit);
      setTransactions(data);
      setHasMore(data.length >= currentLimit);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch transactions');
    } finally {
      setIsLoading(false);
    }
  }, [wallet?.address, currentLimit]);

  const loadMore = useCallback(async () => {
    setCurrentLimit(prev => prev + limit);
  }, [limit]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { transactions, isLoading, error, refresh, hasMore, loadMore };
}

// ==================== Templates Hook ====================

interface UseTemplatesReturn {
  templates: RentalTemplate[];
  templateIds: string[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useTemplates(): UseTemplatesReturn {
  const [templates, setTemplates] = useState<RentalTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await coordinatorAPI.listTemplates();
      setTemplates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch templates');
      // Fallback to default templates if API fails
      setTemplates([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Convenience: list of template IDs for GPU registration
  const templateIds = templates.map((t) => t.id);

  return { templates, templateIds, isLoading, error, refresh };
}
