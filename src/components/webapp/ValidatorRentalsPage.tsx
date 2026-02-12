'use client';

import { useState, useMemo } from 'react';
import {
  Activity,
  Clock,
  User,
  DollarSign,
  Play,
  AlertCircle,
  CheckCircle,
  XCircle,
  Filter,
  Calendar,
  ArrowUpRight,
  Cpu,
  Timer,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWalletStore } from '@/store/walletStore';
import { useValidatorRentals } from '@/lib/hooks/useValidator';
import { SectionErrorBoundary } from '@/components/ui/ErrorBoundary';
import { SkeletonRentals } from '@/components/ui/Skeleton';
import type { RentalSession } from '@/lib/api/coordinator';

// ============================================================================
// Types
// ============================================================================

type RentalStatusFilter = 'all' | 'active' | 'completed' | 'cancelled';

// Map API status to display status
function mapRentalStatus(apiStatus: string): 'active' | 'completed' | 'cancelled' | 'expired' {
  switch (apiStatus.toLowerCase()) {
    case 'running':
    case 'provisioning':
      return 'active';
    case 'completed':
    case 'stopped':
      return 'completed';
    case 'cancelled':
    case 'failed':
      return 'cancelled';
    case 'expired':
      return 'expired';
    default:
      return 'completed';
  }
}

// Calculate duration from start time
function calculateDuration(startedAt: string, expiresAt?: string): number {
  const start = new Date(startedAt).getTime();
  const end = expiresAt ? new Date(expiresAt).getTime() : Date.now();
  return (end - start) / (1000 * 60 * 60); // hours
}

// ============================================================================
// Utility Functions
// ============================================================================

function formatDuration(hours: number): string {
  if (hours < 1) {
    return `${Math.round(hours * 60)}m`;
  }
  if (hours < 24) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  const days = Math.floor(hours / 24);
  const remainingHours = Math.round(hours % 24);
  return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`;
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);

  if (diffHours < 1) {
    return `${Math.round(diffHours * 60)}m ago`;
  }
  if (diffHours < 24) {
    return `${Math.round(diffHours)}h ago`;
  }
  const days = Math.floor(diffHours / 24);
  return `${days}d ago`;
}

function getStatusColor(status: string): string {
  const mapped = mapRentalStatus(status);
  switch (mapped) {
    case 'active': return 'text-green-400 bg-green-400/10';
    case 'completed': return 'text-blue-400 bg-blue-400/10';
    case 'cancelled': return 'text-red-400 bg-red-400/10';
    case 'expired': return 'text-yellow-400 bg-yellow-400/10';
  }
}

function getStatusIcon(status: string) {
  const mapped = mapRentalStatus(status);
  switch (mapped) {
    case 'active': return Play;
    case 'completed': return CheckCircle;
    case 'cancelled': return XCircle;
    case 'expired': return AlertCircle;
  }
}

function truncateWallet(wallet: string): string {
  if (wallet.length <= 13) return wallet;
  return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
}

// ============================================================================
// Components
// ============================================================================

function RentalStatsSummary({ rentals }: { rentals: RentalSession[] }) {
  const stats = useMemo(() => {
    const active = rentals.filter(r => mapRentalStatus(r.status) === 'active');
    const completed = rentals.filter(r => mapRentalStatus(r.status) === 'completed');
    const totalEarned = rentals.reduce((sum, r) => sum + (r.total_spent || 0), 0);
    const totalHours = rentals.reduce((sum, r) => sum + calculateDuration(r.started_at, r.expires_at), 0);

    return {
      activeCount: active.length,
      completedCount: completed.length,
      totalRentals: rentals.length,
      totalEarned,
      totalHours,
      activeEarningsPerHour: active.reduce((sum, r) => sum + r.rate_sage_per_hour, 0),
    };
  }, [rentals]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-green-500/10">
            <Play className="w-4 h-4 text-green-400" />
          </div>
          <span className="text-sm text-gray-400">Active</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.activeCount}</p>
        <p className="text-xs text-gray-500 mt-1">
          {stats.activeEarningsPerHour} SAGE/hr
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <CheckCircle className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm text-gray-400">Completed</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.completedCount}</p>
        <p className="text-xs text-gray-500 mt-1">
          of {stats.totalRentals} total
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <DollarSign className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-sm text-gray-400">Total Earned</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.totalEarned.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-1">SAGE tokens</p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-cyan-500/10">
            <Timer className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-sm text-gray-400">Total Hours</span>
        </div>
        <p className="text-2xl font-bold text-white">{stats.totalHours.toFixed(1)}</p>
        <p className="text-xs text-gray-500 mt-1">compute hours</p>
      </div>
    </div>
  );
}

function RentalCard({ rental }: { rental: RentalSession }) {
  const [expanded, setExpanded] = useState(false);
  const displayStatus = mapRentalStatus(rental.status);
  const StatusIcon = getStatusIcon(rental.status);
  const duration = calculateDuration(rental.started_at, rental.expires_at);

  return (
    <div
      className={cn(
        "bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden",
        "transition-all duration-200 hover:border-gray-600/50"
      )}
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className={cn(
              "p-2 rounded-lg shrink-0",
              displayStatus === 'active' ? 'bg-green-500/10' : 'bg-gray-700/50'
            )}>
              <Cpu className={cn(
                "w-5 h-5",
                displayStatus === 'active' ? 'text-green-400' : 'text-gray-400'
              )} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-medium text-white truncate">{rental.template_id}</h3>
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
                  getStatusColor(rental.status)
                )}>
                  <StatusIcon className="w-3 h-3" />
                  {displayStatus}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">
                GPU: {rental.gpu_id || 'Assigning...'}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-white">
              {(rental.total_spent || 0).toLocaleString()} <span className="text-sm text-gray-400">SAGE</span>
            </p>
            <p className="text-xs text-gray-500">
              {displayStatus === 'active' ? 'earning' : 'earned'}
            </p>
          </div>
        </div>

        {/* Quick Info Row */}
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {truncateWallet(rental.tenant_wallet)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(duration)}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatTimeAgo(rental.started_at)}
          </span>
        </div>
      </button>

      {/* Expanded Details */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-700/50 pt-4 space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Rental ID</p>
              <p className="text-white font-mono text-xs">{rental.id}</p>
            </div>
            <div>
              <p className="text-gray-500">GPU ID</p>
              <p className="text-white font-mono text-xs">{rental.gpu_id || 'N/A'}</p>
            </div>
            <div>
              <p className="text-gray-500">Rate</p>
              <p className="text-white">{rental.rate_sage_per_hour} SAGE/hr</p>
            </div>
            <div>
              <p className="text-gray-500">Started</p>
              <p className="text-white">{new Date(rental.started_at).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-500">Expires</p>
              <p className="text-white">{new Date(rental.expires_at).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-500">Tenant</p>
              <p className="text-white font-mono text-xs">{rental.tenant_wallet}</p>
            </div>
          </div>

          {displayStatus === 'active' && (
            <div className="flex items-center gap-2 pt-2">
              <div className="flex-1 bg-gray-700/30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Live earnings</span>
                  <span className="flex items-center gap-1 text-green-400 text-xs">
                    <ArrowUpRight className="w-3 h-3" />
                    +{rental.rate_sage_per_hour} SAGE/hr
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RentalFilters({
  statusFilter,
  setStatusFilter,
}: {
  statusFilter: RentalStatusFilter;
  setStatusFilter: (status: RentalStatusFilter) => void;
}) {
  const statuses: { value: RentalStatusFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      <Filter className="w-4 h-4 text-gray-500 shrink-0" />
      {statuses.map((status) => (
        <button
          key={status.value}
          onClick={() => setStatusFilter(status.value)}
          className={cn(
            "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
            statusFilter === status.value
              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50"
          )}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
}

function EmptyRentals() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
        <Activity className="w-8 h-8 text-gray-600" />
      </div>
      <h3 className="text-lg font-medium text-white mb-2">No rental activity</h3>
      <p className="text-gray-400 max-w-sm mx-auto">
        When users rent your GPUs, their rental sessions will appear here.
      </p>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function ValidatorRentalsPage() {
  const { wallet } = useWalletStore();
  const { rentals, activeRentals, isLoading, error, refresh } = useValidatorRentals();
  const [statusFilter, setStatusFilter] = useState<RentalStatusFilter>('all');

  const filteredRentals = useMemo(() => {
    if (statusFilter === 'all') return rentals;
    return rentals.filter(r => mapRentalStatus(r.status) === statusFilter);
  }, [rentals, statusFilter]);

  const displayActiveRentals = useMemo(() =>
    filteredRentals.filter(r => mapRentalStatus(r.status) === 'active'),
    [filteredRentals]
  );

  const pastRentals = useMemo(() =>
    filteredRentals.filter(r => mapRentalStatus(r.status) !== 'active'),
    [filteredRentals]
  );

  if (!wallet) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
          <Activity className="w-10 h-10 text-gray-600" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
        <p className="text-gray-400">Connect your wallet to view rental activity</p>
      </div>
    );
  }

  if (isLoading && rentals.length === 0) {
    return (
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Rental Activity</h1>
          </div>
          <p className="text-gray-400">Track active and historical GPU rentals from your validators</p>
        </div>
        <SkeletonRentals />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Rental Activity</h1>
          </div>
          <p className="text-gray-400">Track active and historical GPU rentals from your validators</p>
        </div>
        <button
          onClick={refresh}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-colors"
        >
          <RefreshCw className={cn("w-4 h-4", isLoading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
          {error}
        </div>
      )}

      {/* Stats Summary */}
      <SectionErrorBoundary sectionName="Rental Stats">
        <RentalStatsSummary rentals={rentals} />
      </SectionErrorBoundary>

      {/* Filters */}
      <RentalFilters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />

      {/* Active Rentals */}
      {displayActiveRentals.length > 0 && (
        <SectionErrorBoundary sectionName="Active Rentals">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Active Rentals ({displayActiveRentals.length})
            </h2>
            <div className="space-y-3">
              {displayActiveRentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
          </div>
        </SectionErrorBoundary>
      )}

      {/* Past Rentals */}
      {pastRentals.length > 0 && (
        <SectionErrorBoundary sectionName="Rental History">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Rental History ({pastRentals.length})
            </h2>
            <div className="space-y-3">
              {pastRentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
          </div>
        </SectionErrorBoundary>
      )}

      {/* Empty State */}
      {filteredRentals.length === 0 && !isLoading && <EmptyRentals />}
    </div>
  );
}

export default ValidatorRentalsPage;
