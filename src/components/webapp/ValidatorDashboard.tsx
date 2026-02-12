'use client';

import { useState } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { useValidatorDashboard, useValidatorEarnings, useValidatorGpus, useEarningsHistory, useEscrowBalance, useTemplates } from '@/lib/hooks/useValidator';
import { useRealTimeEarnings } from '@/lib/hooks/useRealTimeEarnings';
import { useJobStats } from '@/lib/hooks/useCoordinator';
import { useValidatorStatus, useNetworkStats, useJobAnalytics, useDashboardWebSocket, useContracts } from '@/lib/hooks/useDashboard';
import { WalletConnect } from './WalletConnect';
import { useToast } from '@/components/ui/Toast';
import { SkeletonCard, SkeletonEarnings, SkeletonGpuList, SkeletonRentals } from '@/components/ui/Skeleton';
import { SectionErrorBoundary } from '@/components/ui/ErrorBoundary';
import { SimpleBarChart, Sparkline } from '@/components/ui/Chart';
import { ConnectionStatus } from '@/components/ui/ConnectionStatus';
import { LiveEarningsDisplay, EarningsTicker } from '@/components/ui/LiveEarnings';
import type { MarketplaceGpu, RegisterGpuRequest, GpuBackend, JobStats } from '@/lib/api/coordinator';

// ==================== Stats Card Component ====================

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
}

function StatCard({ title, value, subtitle, icon, trend }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-lg sm:text-2xl font-bold text-white truncate">{value}</p>
          {subtitle && <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>}
          {trend && (
            <p className={`text-xs sm:text-sm mt-2 ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}% from last week
            </p>
          )}
        </div>
        <div className="p-2 sm:p-3 bg-gray-700/50 rounded-lg shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
}

// ==================== On-Chain Status Section ====================

function OnChainStatusSection() {
  const { status, isLoading, error, refresh } = useValidatorStatus();
  const { stats: networkStats } = useNetworkStats();
  const { contracts } = useContracts();
  const { status: wsStatus } = useDashboardWebSocket({ autoConnect: true });

  if (isLoading && !status) {
    return <SkeletonCard className="h-64" />;
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400">
        <p>Failed to load on-chain status: {error}</p>
        <button onClick={refresh} className="mt-2 text-sm underline">Try again</button>
      </div>
    );
  }

  const explorerUrl = contracts?.explorer_base_url || 'https://sepolia.starkscan.co';

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">On-Chain Status</h2>
            <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
              wsStatus === 'connected'
                ? 'bg-green-500/10 text-green-400'
                : wsStatus === 'connecting' || wsStatus === 'reconnecting'
                ? 'bg-yellow-500/10 text-yellow-400'
                : 'bg-gray-500/10 text-gray-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                wsStatus === 'connected' ? 'bg-green-400' :
                wsStatus === 'connecting' || wsStatus === 'reconnecting' ? 'bg-yellow-400 animate-pulse' :
                'bg-gray-400'
              }`} />
              {wsStatus === 'connected' ? 'Live' : wsStatus}
            </span>
          </div>
          <button
            onClick={refresh}
            disabled={isLoading}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            <svg className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700/30 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Stake Status</p>
            <p className={`text-lg font-semibold ${status?.is_registered ? 'text-green-400' : 'text-yellow-400'}`}>
              {status?.is_registered ? 'Registered' : 'Not Registered'}
            </p>
            <p className="text-xs text-gray-500">{status?.stake_tier || 'No tier'}</p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Staked Amount</p>
            <p className="text-lg font-semibold text-white">{status?.staked_amount_formatted || '0 SAGE'}</p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Reputation</p>
            <p className="text-lg font-semibold text-purple-400">{status?.reputation_score || 0}</p>
            <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
              <div
                className="bg-purple-500 h-1.5 rounded-full"
                style={{ width: `${Math.min((status?.reputation_score || 0) / 10, 100)}%` }}
              />
            </div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Uptime</p>
            <p className="text-lg font-semibold text-blue-400">{(status?.uptime_percent || 0).toFixed(1)}%</p>
          </div>
        </div>
      </div>

      {/* Network Stats */}
      {networkStats && (
        <div className="p-4 sm:p-6 bg-gray-700/20">
          <p className="text-xs text-gray-400 mb-3">Network Overview</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Active Workers</p>
              <p className="text-white font-medium">{networkStats.active_workers} / {networkStats.total_workers}</p>
            </div>
            <div>
              <p className="text-gray-400">Jobs (24h)</p>
              <p className="text-white font-medium">{networkStats.jobs_last_24h.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Total Staked</p>
              <p className="text-white font-medium">{networkStats.total_staked_formatted}</p>
            </div>
            <div>
              <p className="text-gray-400">Network Utilization</p>
              <p className="text-white font-medium">{networkStats.network_utilization.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Contract Links */}
      {contracts && (
        <div className="p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 mb-2">Smart Contracts</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={`${explorerUrl}/contract/${contracts.sage_token}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              SAGE Token
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`${explorerUrl}/contract/${contracts.prover_staking}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              Staking
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`${explorerUrl}/contract/${contracts.reputation_manager}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              Reputation
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== Earnings Section ====================

function EarningsSection() {
  const { earnings, isLoading, withdraw, syncFromChain } = useValidatorEarnings();
  const { balance: escrowBalance, deposit } = useEscrowBalance();
  const { earnings: realTimeEarnings, isLive, recentEvents } = useRealTimeEarnings({
    interval: 10000, // Refresh every 10 seconds
    useStreaming: true, // Enable SSE streaming for real-time job updates
  });
  const toast = useToast();
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isDepositing, setIsDepositing] = useState(false);
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

  const handleDeposit = async () => {
    if (!depositAmount || isDepositing) return;

    setIsDepositing(true);
    try {
      const amount = parseFloat(depositAmount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount');
      }
      await deposit(amount);
      setDepositAmount('');
      toast.success('Deposit Successful', `${amount} SAGE deposited to escrow.`);
    } catch (error) {
      toast.error('Deposit Failed', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsDepositing(false);
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
    return <SkeletonEarnings />;
  }

  // Use real-time earnings if available, fallback to polled data
  const activeEarnings = realTimeEarnings || earnings;
  const hasActiveRentals = (activeEarnings?.active_rentals || 0) > 0;
  // Get actual rate from real-time earnings
  const ratePerHour = realTimeEarnings?.earnings_per_hour || 0;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Earnings</h2>
            {isLive && hasActiveRentals && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            <svg className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="hidden sm:inline">Sync from chain</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Available</p>
            {hasActiveRentals && isLive ? (
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-green-400 tabular-nums">
                  <EarningsTicker
                    initialValue={activeEarnings?.available || 0}
                    ratePerHour={ratePerHour}
                    isActive={hasActiveRentals}
                  />
                </span>
                <span className="text-sm text-gray-400">SAGE</span>
              </div>
            ) : (
              <p className="text-xl sm:text-2xl font-bold text-green-400">
                {activeEarnings?.available.toLocaleString() || '0'} <span className="text-sm text-gray-400">SAGE</span>
              </p>
            )}
            {hasActiveRentals && ratePerHour > 0 && (
              <p className="text-xs text-green-400/70 mt-0.5">+{ratePerHour} SAGE/hr</p>
            )}
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Total Earned</p>
            <p className="text-lg sm:text-xl font-semibold text-white">
              {activeEarnings?.total_earned.toLocaleString() || '0'} <span className="text-sm text-gray-400">SAGE</span>
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Withdrawn</p>
            <p className="text-lg sm:text-xl font-semibold text-gray-300">
              {activeEarnings?.total_withdrawn.toLocaleString() || '0'} <span className="text-sm text-gray-400">SAGE</span>
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Active Rentals</p>
            <p className="text-lg sm:text-xl font-semibold text-white">
              {activeEarnings?.active_rentals || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Earnings Events */}
      {recentEvents.length > 0 && (
        <div className="px-4 sm:px-6 pb-4 border-b border-gray-700">
          <h3 className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Recent Activity</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {recentEvents.slice(0, 5).map((event, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    event.type === 'job_completed' ? 'bg-blue-400' :
                    event.type === 'rental_billing' ? 'bg-green-400' :
                    event.type === 'withdrawal' ? 'bg-orange-400' : 'bg-purple-400'
                  }`} />
                  <span className="text-gray-300 capitalize">
                    {event.type.replace('_', ' ')}
                  </span>
                  {event.job_id && (
                    <span className="text-gray-500 text-xs">#{event.job_id.slice(0, 8)}</span>
                  )}
                </div>
                <span className={`font-medium ${
                  event.type === 'withdrawal' ? 'text-orange-400' : 'text-green-400'
                }`}>
                  {event.type === 'withdrawal' ? '-' : '+'}{event.amount.toLocaleString()} SAGE
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Escrow Balance Section */}
      {escrowBalance && (
        <div className="px-4 sm:px-6 pb-4 border-b border-gray-700">
          <h3 className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Escrow Balance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <p className="text-xs text-gray-500">Available</p>
              <p className="text-sm font-semibold text-green-400">{escrowBalance.available.toLocaleString()} SAGE</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Reserved</p>
              <p className="text-sm font-semibold text-yellow-400">{escrowBalance.reserved.toLocaleString()} SAGE</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Deposited</p>
              <p className="text-sm font-semibold text-white">{escrowBalance.totalDeposited.toLocaleString()} SAGE</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Spent</p>
              <p className="text-sm font-semibold text-gray-400">{escrowBalance.totalSpent.toLocaleString()} SAGE</p>
            </div>
          </div>
        </div>
      )}

      {/* Deposit & Withdraw Section */}
      <div className="p-4 sm:p-6 bg-gray-700/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Deposit */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Deposit SAGE
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="Amount to deposit"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2.5 sm:py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <button
                onClick={handleDeposit}
                disabled={!depositAmount || isDepositing}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium text-white transition-colors"
              >
                {isDepositing ? 'Processing...' : 'Deposit'}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Deposit SAGE to your escrow for renting GPUs.
            </p>
          </div>

          {/* Withdraw */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              Withdraw Earnings
            </h3>
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
                  onClick={() => setWithdrawAmount(String(activeEarnings?.available || 0))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:text-purple-300 font-medium"
                >
                  MAX
                </button>
              </div>
              <button
                onClick={handleWithdraw}
                disabled={!withdrawAmount || isWithdrawing || !activeEarnings?.available}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium text-white transition-colors"
              >
                {isWithdrawing ? 'Processing...' : 'Withdraw'}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Withdraw validator earnings on-chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Earnings Chart Section ====================

function EarningsChartSection() {
  const { history, isLoading, period, setPeriod } = useEarningsHistory('7d');

  // Transform API data to chart format
  const chartData = history.length > 0
    ? history.map((point) => ({
        label: new Date(point.date).toLocaleDateString('en-US', { weekday: 'short' }),
        value: point.amount,
      }))
    : []; // Empty if no data

  const totalWeek = chartData.reduce((sum, d) => sum + d.value, 0);
  const avgDaily = chartData.length > 0 ? Math.round(totalWeek / chartData.length) : 0;
  const trend = chartData.length >= 2
    ? ((chartData[chartData.length - 1].value - chartData[0].value) / (chartData[0].value || 1) * 100).toFixed(1)
    : '0';
  const isPositive = parseFloat(trend) >= 0;

  const periodLabels = { '7d': 'week', '30d': 'month', '90d': 'quarter' } as const;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Earnings Overview</h2>
            {isLoading && (
              <svg className="w-4 h-4 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
          </div>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as '7d' | '30d' | '90d')}
            className="w-full sm:w-auto px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:items-baseline gap-3 sm:gap-4 mt-2">
          <div>
            <p className="text-xs sm:text-sm text-gray-400">Total this {periodLabels[period]}</p>
            <p className="text-lg sm:text-2xl font-bold text-white">{totalWeek.toLocaleString()} <span className="text-sm text-gray-400">SAGE</span></p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-gray-700" />
          <div>
            <p className="text-xs sm:text-sm text-gray-400">Daily average</p>
            <p className="text-base sm:text-lg font-semibold text-white">{avgDaily.toLocaleString()} <span className="text-sm text-gray-400">SAGE</span></p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-gray-700" />
          <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
            <p className="text-xs sm:text-sm text-gray-400">Trend</p>
            <span className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {isPositive ? '+' : ''}{trend}%
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        {chartData.length > 0 ? (
          <SimpleBarChart data={chartData} height={140} />
        ) : (
          <div className="h-[140px] flex items-center justify-center text-gray-500">
            {isLoading ? 'Loading earnings data...' : 'No earnings data for this period'}
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== Job Analytics Section ====================

function JobAnalyticsSection() {
  const { stats, loading, error } = useJobStats(true, 15000); // Refresh every 15s

  if (loading && !stats) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 animate-pulse">
        <div className="h-5 bg-gray-700 rounded w-1/4 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-3 bg-gray-700 rounded w-16 mb-2" />
              <div className="h-6 bg-gray-700 rounded w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-white mb-2">Job Analytics</h2>
        <p className="text-gray-400 text-sm">Unable to load job statistics</p>
      </div>
    );
  }

  const successRate = stats?.success_rate ?? 0;
  const avgCompletionTime = stats?.average_completion_time_secs ?? 0;
  const jobsPerMinute = stats?.jobs_per_minute ?? 0;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Job Analytics</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Success Rate */}
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Success Rate</span>
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white">{successRate.toFixed(1)}%</p>
            <div className="mt-2 h-2 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(successRate, 100)}%` }}
              />
            </div>
          </div>

          {/* Average Completion Time */}
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Avg Completion</span>
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white">
              {avgCompletionTime < 60
                ? `${avgCompletionTime.toFixed(0)}s`
                : `${(avgCompletionTime / 60).toFixed(1)}m`}
            </p>
            <p className="text-xs text-gray-500 mt-1">per job</p>
          </div>

          {/* Throughput */}
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Throughput</span>
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white">{jobsPerMinute.toFixed(1)}</p>
            <p className="text-xs text-gray-500 mt-1">jobs/min</p>
          </div>

          {/* Total Jobs */}
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Total Jobs</span>
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-white">{(stats?.total_jobs ?? 0).toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">
              {stats?.active_jobs ?? 0} active
            </p>
          </div>
        </div>

        {/* Job Breakdown */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400">Completed:</span>
              <span className="text-white font-medium">{(stats?.completed_jobs ?? 0).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-gray-400">Active:</span>
              <span className="text-white font-medium">{stats?.active_jobs ?? 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-gray-400">Failed:</span>
              <span className="text-white font-medium">{stats?.failed_jobs ?? 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-500" />
              <span className="text-gray-400">Cancelled:</span>
              <span className="text-white font-medium">{stats?.cancelled_jobs ?? 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== GPU List Section ====================

function GpuListSection() {
  const { gpus, isLoading, updateAvailability } = useValidatorGpus();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const getAvailabilityBadge = (availability: MarketplaceGpu['availability']) => {
    if (availability === 'Available') {
      return <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Available</span>;
    }
    if (availability === 'Offline') {
      return <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">Offline</span>;
    }
    if (typeof availability === 'object' && 'InUse' in availability) {
      return <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">In Use</span>;
    }
    if (typeof availability === 'object' && 'PartiallyAvailable' in availability) {
      return <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Partial</span>;
    }
    return <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">Unknown</span>;
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Your GPUs</h2>
          <p className="text-sm text-gray-400 mt-1">{gpus.length} GPU(s) registered</p>
        </div>
        <button
          onClick={() => setShowRegisterModal(true)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Register GPU
        </button>
      </div>

      {isLoading && gpus.length === 0 ? (
        <div className="divide-y divide-gray-700">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gray-700/50 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-700/50 rounded animate-pulse" />
                  <div className="h-3 w-48 bg-gray-700/50 rounded animate-pulse" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right space-y-1">
                  <div className="h-3 w-12 bg-gray-700/50 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-700/50 rounded animate-pulse" />
                </div>
                <div className="h-8 w-8 bg-gray-700/50 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : gpus.length === 0 ? (
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No GPUs Registered</h3>
          <p className="text-gray-400 mb-4">Register your first GPU to start earning SAGE tokens.</p>
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white transition-colors"
          >
            Register GPU
          </button>
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {gpus.map((gpu) => (
            <div key={gpu.id} className="p-4 hover:bg-gray-700/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-white">{gpu.gpu_model}</h3>
                      {getAvailabilityBadge(gpu.availability)}
                    </div>
                    <p className="text-sm text-gray-400">
                      {gpu.vram_gb}GB VRAM | {gpu.rate_sage_per_hour} SAGE/hr | {gpu.total_rentals} rentals
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right mr-4">
                    <p className="text-sm text-gray-400">Uptime</p>
                    <p className="font-medium text-white">{gpu.uptime_percent.toFixed(1)}%</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="text-sm text-gray-400">Rating</p>
                    <p className="font-medium text-yellow-400">{gpu.rating.toFixed(1)}/5.0</p>
                  </div>
                  <button
                    onClick={() => {
                      const newStatus = gpu.availability === 'Available' ? 'Offline' : 'Available';
                      updateAvailability(gpu.id, newStatus);
                    }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-colors"
                    title={gpu.availability === 'Available' ? 'Set Offline' : 'Set Available'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Register GPU Modal */}
      {showRegisterModal && (
        <GpuRegisterModal onClose={() => setShowRegisterModal(false)} />
      )}
    </div>
  );
}

// ==================== GPU Register Modal ====================

function GpuRegisterModal({ onClose }: { onClose: () => void }) {
  const { registerGpu } = useValidatorGpus();
  const { templates, templateIds, isLoading: templatesLoading } = useTemplates();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    gpu_model: 'RTX 4090',
    vram_gb: 24,
    backend: 'Cuda' as GpuBackend,
    mig_capable: false,
    rate_sage_per_hour: 50,
    region: '',
  });

  const handleTemplateToggle = (templateId: string) => {
    setSelectedTemplates((prev) =>
      prev.includes(templateId)
        ? prev.filter((t) => t !== templateId)
        : [...prev, templateId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const gpu: RegisterGpuRequest = {
        id: '', // Server will generate UUID
        validator_wallet: '', // Will be filled by hook
        gpu_model: formData.gpu_model,
        vram_gb: formData.vram_gb,
        backend: formData.backend,
        mig_capable: formData.mig_capable,
        rate_sage_per_hour: formData.rate_sage_per_hour,
        region: formData.region || undefined,
        supported_templates: selectedTemplates.length > 0 ? selectedTemplates : templateIds,
      };

      await registerGpu(gpu);
      toast.success('GPU Registered', `${formData.gpu_model} has been added to the marketplace.`);
      onClose();
    } catch (error) {
      toast.error('Registration Failed', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-xl border border-gray-600 shadow-2xl w-full max-w-lg">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">Register GPU</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">GPU Model</label>
              <select
                value={formData.gpu_model}
                onChange={(e) => setFormData({ ...formData, gpu_model: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="RTX 4090">NVIDIA RTX 4090</option>
                <option value="RTX 3090">NVIDIA RTX 3090</option>
                <option value="A100">NVIDIA A100</option>
                <option value="H100">NVIDIA H100</option>
                <option value="L40">NVIDIA L40</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">VRAM (GB)</label>
                <input
                  type="number"
                  value={formData.vram_gb}
                  onChange={(e) => setFormData({ ...formData, vram_gb: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Rate (SAGE/hr)</label>
                <input
                  type="number"
                  value={formData.rate_sage_per_hour}
                  onChange={(e) => setFormData({ ...formData, rate_sage_per_hour: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Backend</label>
              <select
                value={formData.backend}
                onChange={(e) => setFormData({ ...formData, backend: e.target.value as GpuBackend })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Cuda">CUDA</option>
                <option value="Metal">Metal (Apple)</option>
                <option value="Vulkan">Vulkan</option>
                <option value="OpenCL">OpenCL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Region (optional)</label>
              <input
                type="text"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                placeholder="e.g., us-west, eu-central"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="mig_capable"
                checked={formData.mig_capable}
                onChange={(e) => setFormData({ ...formData, mig_capable: e.target.checked })}
                className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="mig_capable" className="text-sm text-gray-300">
                MIG Capable (Multi-Instance GPU)
              </label>
            </div>

            {/* Supported Templates */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Supported Templates
                {templatesLoading && <span className="ml-2 text-xs text-gray-500">(loading...)</span>}
              </label>
              {templates.length > 0 ? (
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {templates.map((template) => (
                    <label
                      key={template.id}
                      className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTemplates.includes(template.id)}
                        onChange={() => handleTemplateToggle(template.id)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-white">{template.name}</span>
                        <span className="text-xs text-gray-400 ml-2">({template.min_vram_gb}GB+)</span>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  {templatesLoading ? 'Loading templates...' : 'All templates will be supported'}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {selectedTemplates.length === 0 ? 'All templates selected by default' : `${selectedTemplates.length} selected`}
              </p>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 rounded-lg font-medium text-white transition-colors"
              >
                {isSubmitting ? 'Registering...' : 'Register GPU'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// ==================== Active Rentals Section ====================

function ActiveRentalsSection() {
  const { activeRentals, totalRentals, isLoading } = useValidatorDashboard();

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">Active Rentals</h2>
        <p className="text-sm text-gray-400 mt-1">
          {activeRentals.length} active | {totalRentals} total
        </p>
      </div>

      {isLoading && activeRentals.length === 0 ? (
        <div className="divide-y divide-gray-700">
          {[1, 2].map((i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-28 bg-gray-700/50 rounded animate-pulse" />
                <div className="h-3 w-40 bg-gray-700/50 rounded animate-pulse" />
              </div>
              <div className="text-right space-y-1">
                <div className="h-4 w-24 bg-gray-700/50 rounded animate-pulse" />
                <div className="h-3 w-36 bg-gray-700/50 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : activeRentals.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-400">No active rentals</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {activeRentals.map((rental) => (
            <div key={rental.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{rental.template_id}</p>
                  <p className="text-sm text-gray-400">
                    Tenant: {rental.tenant_wallet.slice(0, 8)}...{rental.tenant_wallet.slice(-6)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-400">
                    +{rental.rate_sage_per_hour} SAGE/hr
                  </p>
                  <p className="text-sm text-gray-400">
                    Expires: {new Date(rental.expires_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ==================== Main Dashboard Component ====================

export function ValidatorDashboard() {
  const wallet = useWalletStore((state) => state.wallet);
  const { earnings, gpus, activeRentals, isLoading, refresh } = useValidatorDashboard();

  if (!wallet?.isConnected) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-12 text-center">
          <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Connect your Starknet wallet to access your validator dashboard, view earnings, and manage your GPUs.
          </p>
          <WalletConnect />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with wallet */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Validator Dashboard</h1>
            <ConnectionStatus className="hidden sm:flex" />
          </div>
          <p className="text-sm sm:text-base text-gray-400 mt-1">Manage your GPUs and earnings</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <ConnectionStatus className="sm:hidden" showLabel={false} />
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Available Earnings"
          value={`${earnings?.available.toLocaleString() || '0'} SAGE`}
          icon={
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Registered GPUs"
          value={gpus.length}
          subtitle={`${gpus.filter(g => g.availability === 'Available').length} available`}
          icon={
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          }
        />
        <StatCard
          title="Active Rentals"
          value={activeRentals.length}
          icon={
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        <StatCard
          title="Total Earned"
          value={`${earnings?.total_earned.toLocaleString() || '0'} SAGE`}
          icon={
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          }
        />
      </div>

      {/* On-Chain Status Section */}
      <SectionErrorBoundary sectionName="On-Chain Status">
        <OnChainStatusSection />
      </SectionErrorBoundary>

      {/* Earnings Section */}
      <SectionErrorBoundary sectionName="Earnings">
        <EarningsSection />
      </SectionErrorBoundary>

      {/* Earnings Chart */}
      <SectionErrorBoundary sectionName="Earnings Chart">
        <EarningsChartSection />
      </SectionErrorBoundary>

      {/* Job Analytics */}
      <SectionErrorBoundary sectionName="Job Analytics">
        <JobAnalyticsSection />
      </SectionErrorBoundary>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionErrorBoundary sectionName="GPU List">
          <GpuListSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Active Rentals">
          <ActiveRentalsSection />
        </SectionErrorBoundary>
      </div>
    </div>
  );
}

export default ValidatorDashboard;
