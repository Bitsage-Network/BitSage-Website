'use client';

import { useState, useMemo } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { useValidatorEarnings, useEarningsHistory, useBillingTransactions } from '@/lib/hooks/useValidator';
import { WalletConnect } from './WalletConnect';
import { useToast } from '@/components/ui/Toast';
import { SectionErrorBoundary } from '@/components/ui/ErrorBoundary';
import { SimpleBarChart, SimpleLineChart } from '@/components/ui/Chart';
import type { BillingTransaction } from '@/lib/api/coordinator';

// Time Period Selector
type TimePeriod = '7d' | '30d' | '90d';

// Earnings Overview Card
function EarningsOverview() {
  const { earnings, isLoading, withdraw, syncFromChain } = useValidatorEarnings();
  const toast = useToast();
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleWithdraw = async () => {
    if (!withdrawAmount || isWithdrawing) return;

    setIsWithdrawing(true);
    try {
      const amount = parseFloat(withdrawAmount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount');
      }
      await withdraw(amount);
      setWithdrawAmount('');
      toast.success('Withdrawal Initiated', 'Your withdrawal is being processed on-chain.');
    } catch (error) {
      toast.error('Withdrawal Failed', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsWithdrawing(false);
    }
  };

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      await syncFromChain();
      toast.success('Sync Complete', 'Earnings synced from on-chain data.');
    } catch (error) {
      toast.error('Sync Failed', error instanceof Error ? error.message : 'Failed to sync');
    } finally {
      setIsSyncing(false);
    }
  };

  if (isLoading && !earnings) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-1/3 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-3 bg-gray-700 rounded w-16 mb-2" />
              <div className="h-7 bg-gray-700 rounded w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-white">Earnings Summary</h2>
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 self-start sm:self-auto"
          >
            <svg className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Sync from chain
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Available</p>
            <p className="text-2xl font-bold text-green-400">
              {earnings?.available.toLocaleString() || '0'} <span className="text-sm font-normal">SAGE</span>
            </p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Total Earned</p>
            <p className="text-xl font-semibold text-white">
              {earnings?.total_earned.toLocaleString() || '0'} <span className="text-sm font-normal text-gray-400">SAGE</span>
            </p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Withdrawn</p>
            <p className="text-xl font-semibold text-gray-300">
              {earnings?.total_withdrawn.toLocaleString() || '0'} <span className="text-sm font-normal text-gray-400">SAGE</span>
            </p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-sm text-gray-400">Active Rentals</p>
            <p className="text-xl font-semibold text-white">
              {earnings?.active_rentals || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Withdraw section */}
      <div className="p-4 sm:p-6 bg-gray-700/30">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Withdraw Earnings</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Amount to withdraw"
              className="w-full px-4 py-2.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={() => setWithdrawAmount(String(earnings?.available || 0))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:text-purple-300 font-medium"
            >
              MAX
            </button>
          </div>
          <button
            onClick={handleWithdraw}
            disabled={!withdrawAmount || isWithdrawing || !earnings?.available}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium text-white transition-colors"
          >
            {isWithdrawing ? 'Processing...' : 'Withdraw'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Withdrawals are processed on-chain and may take a few minutes to confirm.
        </p>
      </div>
    </div>
  );
}

// Earnings Chart Section - Uses real data with fallback
function EarningsChart({ period, setPeriod }: { period: TimePeriod; setPeriod: (p: TimePeriod) => void }) {
  const { history, isLoading, error } = useEarningsHistory(period);

  // Transform API data to chart format
  const chartData = useMemo(() => {
    if (history.length > 0) {
      return history.map((point) => ({
        label: formatDateLabel(point.date, period),
        value: point.amount,
      }));
    }
    // No data - return empty for "no data" display
    return [];
  }, [history, period]);

  const stats = useMemo(() => {
    if (chartData.length === 0) {
      return { total: 0, avg: 0, max: { label: '-', value: 0 } };
    }
    const total = chartData.reduce((sum, d) => sum + d.value, 0);
    const avg = Math.round(total / chartData.length);
    const max = chartData.reduce((m, d) => (d.value > m.value ? d : m), chartData[0]);
    return { total, avg, max };
  }, [chartData]);

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/4 mb-4" />
          <div className="h-40 bg-gray-700/50 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-white">Earnings History</h2>
          <div className="flex gap-2">
            {(['7d', '30d', '90d'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  period === p
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                {p === '7d' ? '7 Days' : p === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="text-sm text-yellow-400 mb-4">
            Unable to load chart data. Showing cached or empty state.
          </div>
        )}

        <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
          <div>
            <p className="text-sm text-gray-400">Total ({period === '7d' ? 'Week' : period === '30d' ? 'Month' : 'Quarter'})</p>
            <p className="text-2xl font-bold text-white">{stats.total.toLocaleString()} SAGE</p>
          </div>
          <div className="h-8 w-px bg-gray-700 hidden sm:block" />
          <div>
            <p className="text-sm text-gray-400">Daily Average</p>
            <p className="text-lg font-semibold text-white">{stats.avg.toLocaleString()} SAGE</p>
          </div>
          <div className="h-8 w-px bg-gray-700 hidden sm:block" />
          <div>
            <p className="text-sm text-gray-400">Best Day</p>
            <p className="text-lg font-semibold text-green-400">{stats.max.value.toLocaleString()} SAGE</p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        {chartData.length === 0 ? (
          <div className="h-40 flex items-center justify-center text-gray-500">
            No earnings data for this period
          </div>
        ) : period === '7d' ? (
          <SimpleBarChart data={chartData} height={160} />
        ) : (
          <SimpleLineChart data={chartData} height={160} />
        )}
      </div>
    </div>
  );
}

// Helper to format date labels
function formatDateLabel(dateStr: string, period: TimePeriod): string {
  const date = new Date(dateStr);
  if (period === '7d') {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  } else if (period === '30d') {
    return date.getDate().toString();
  } else {
    return date.toLocaleDateString('en-US', { month: 'short' });
  }
}

// Transaction History - Uses real data
function TransactionHistory() {
  const { transactions, isLoading, error, hasMore, loadMore } = useBillingTransactions();

  if (isLoading && transactions.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-5 bg-gray-700 rounded w-1/4" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full" />
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded w-1/3 mb-2" />
                <div className="h-3 bg-gray-700 rounded w-1/4" />
              </div>
              <div className="h-4 bg-gray-700 rounded w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
        <button className="text-sm text-purple-400 hover:text-purple-300">
          Export CSV
        </button>
      </div>

      {error && (
        <div className="p-4 text-sm text-yellow-400 border-b border-gray-700">
          Unable to load transactions. Please try again.
        </div>
      )}

      {transactions.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No transactions yet
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {transactions.map((tx) => (
            <TransactionRow key={tx.id} transaction={tx} />
          ))}
        </div>
      )}

      {hasMore && transactions.length > 0 && (
        <div className="p-4 border-t border-gray-700 text-center">
          <button
            onClick={loadMore}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Load More Transactions
          </button>
        </div>
      )}
    </div>
  );
}

function TransactionRow({ transaction: tx }: { transaction: BillingTransaction }) {
  const amount = tx.type === 'withdrawal' ? -tx.amount : tx.amount;
  const isPositive = amount >= 0;

  return (
    <div className="p-4 sm:px-6 hover:bg-gray-700/30 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            tx.type === 'earning' ? 'bg-green-500/20' :
            tx.type === 'withdrawal' ? 'bg-purple-500/20' : 'bg-blue-500/20'
          }`}>
            {tx.type === 'earning' ? (
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            ) : tx.type === 'withdrawal' ? (
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
          </div>
          <div>
            <p className="font-medium text-white">
              {tx.description || (tx.rental_id ? `Rental #${tx.rental_id.slice(0, 8)}` : tx.type)}
            </p>
            <p className="text-sm text-gray-400">{new Date(tx.created_at).toLocaleString()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-semibold ${isPositive ? 'text-green-400' : 'text-purple-400'}`}>
            {isPositive ? '+' : ''}{amount.toLocaleString()} SAGE
          </p>
          <p className={`text-xs ${
            tx.status === 'confirmed' ? 'text-green-500' :
            tx.status === 'pending' ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {tx.status}
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export function ValidatorEarningsPage() {
  const wallet = useWalletStore((state) => state.wallet);
  const { isLoading, refresh } = useValidatorEarnings();
  const [period, setPeriod] = useState<TimePeriod>('7d');

  if (!wallet?.isConnected) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 sm:p-12 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Connect your Starknet wallet to view your earnings and transaction history.
          </p>
          <WalletConnect />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Earnings</h1>
          <p className="text-gray-400 mt-1">Track your earnings and withdrawals</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={refresh}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            title="Refresh"
          >
            <svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <WalletConnect />
        </div>
      </div>

      {/* Earnings Overview */}
      <SectionErrorBoundary sectionName="Earnings Overview">
        <EarningsOverview />
      </SectionErrorBoundary>

      {/* Earnings Chart */}
      <SectionErrorBoundary sectionName="Earnings Chart">
        <EarningsChart period={period} setPeriod={setPeriod} />
      </SectionErrorBoundary>

      {/* Transaction History */}
      <SectionErrorBoundary sectionName="Transaction History">
        <TransactionHistory />
      </SectionErrorBoundary>
    </div>
  );
}

export default ValidatorEarningsPage;
