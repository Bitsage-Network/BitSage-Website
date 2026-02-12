'use client';

import { useState } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { useValidatorGpus, useTemplates } from '@/lib/hooks/useValidator';
import { WalletConnect } from './WalletConnect';
import { useToast } from '@/components/ui/Toast';
import { SectionErrorBoundary } from '@/components/ui/ErrorBoundary';
import type { MarketplaceGpu, RegisterGpuRequest, GpuBackend, GpuAvailability } from '@/lib/api/coordinator';

// GPU Stats Summary
function GpuStatsSummary({ gpus }: { gpus: MarketplaceGpu[] }) {
  const totalGpus = gpus.length;
  const availableGpus = gpus.filter(g => g.availability === 'Available').length;
  const inUseGpus = gpus.filter(g => typeof g.availability === 'object' && 'InUse' in g.availability).length;
  const totalVram = gpus.reduce((sum, g) => sum + g.vram_gb, 0);
  const avgRate = gpus.length > 0 ? Math.round(gpus.reduce((sum, g) => sum + g.rate_sage_per_hour, 0) / gpus.length) : 0;
  const avgUptime = gpus.length > 0 ? (gpus.reduce((sum, g) => sum + g.uptime_percent, 0) / gpus.length).toFixed(1) : '0';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      <StatCard label="Total GPUs" value={totalGpus} />
      <StatCard label="Available" value={availableGpus} color="text-green-400" />
      <StatCard label="In Use" value={inUseGpus} color="text-yellow-400" />
      <StatCard label="Total VRAM" value={`${totalVram}GB`} />
      <StatCard label="Avg Rate" value={`${avgRate} SAGE/hr`} />
      <StatCard label="Avg Uptime" value={`${avgUptime}%`} />
    </div>
  );
}

function StatCard({ label, value, color = 'text-white' }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className={`text-lg sm:text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

// GPU Card Component
function GpuCard({
  gpu,
  onToggleAvailability,
  onEdit,
  isExpanded,
  onToggleExpand,
}: {
  gpu: MarketplaceGpu;
  onToggleAvailability: (gpuId: string, status: GpuAvailability) => void;
  onEdit: (gpu: MarketplaceGpu) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  const getStatusBadge = () => {
    if (gpu.availability === 'Available') {
      return <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Available</span>;
    }
    if (gpu.availability === 'Offline') {
      return <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">Offline</span>;
    }
    if (typeof gpu.availability === 'object' && 'InUse' in gpu.availability) {
      const mins = gpu.availability.InUse.available_in_minutes;
      return (
        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
          In Use {mins ? `(${mins}m)` : ''}
        </span>
      );
    }
    return <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">Unknown</span>;
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      {/* Main Content */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* GPU Icon & Info */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-white text-lg">{gpu.gpu_model}</h3>
                {getStatusBadge()}
              </div>
              <p className="text-sm text-gray-400">
                {gpu.vram_gb}GB VRAM • {gpu.backend} • {gpu.region || 'Global'}
              </p>
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500">Rate</p>
                <p className="font-semibold text-green-400">{gpu.rate_sage_per_hour}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Uptime</p>
                <p className="font-semibold text-white">{gpu.uptime_percent.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-semibold text-yellow-400">{gpu.rating.toFixed(1)}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleExpand}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                title="View Details"
              >
                <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-gray-700 p-4 sm:p-5 bg-gray-800/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">GPU ID</p>
              <p className="text-sm font-mono text-gray-300 break-all">{gpu.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Total Rentals</p>
              <p className="text-sm text-white">{gpu.total_rentals}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">MIG Capable</p>
              <p className="text-sm text-white">{gpu.mig_capable ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Supported Templates</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {gpu.supported_templates.slice(0, 3).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-xs bg-gray-700 text-gray-300 rounded">
                    {t}
                  </span>
                ))}
                {gpu.supported_templates.length > 3 && (
                  <span className="px-2 py-0.5 text-xs bg-gray-700 text-gray-400 rounded">
                    +{gpu.supported_templates.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onEdit(gpu)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Settings
            </button>
            {gpu.availability === 'Available' ? (
              <button
                onClick={() => onToggleAvailability(gpu.id, 'Offline')}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-sm font-medium text-red-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                Set Offline
              </button>
            ) : gpu.availability === 'Offline' ? (
              <button
                onClick={() => onToggleAvailability(gpu.id, 'Available')}
                className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-sm font-medium text-green-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Set Available
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

// Register GPU Modal
function RegisterGpuModal({ onClose }: { onClose: () => void }) {
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
    setSelectedTemplates(prev =>
      prev.includes(templateId)
        ? prev.filter(t => t !== templateId)
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
        <div className="bg-gray-800 rounded-xl border border-gray-600 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-800 flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Register GPU</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">GPU Model</label>
              <select
                value={formData.gpu_model}
                onChange={(e) => setFormData({ ...formData, gpu_model: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="RTX 4090">NVIDIA RTX 4090</option>
                <option value="RTX 3090">NVIDIA RTX 3090</option>
                <option value="A100">NVIDIA A100</option>
                <option value="H100">NVIDIA H100</option>
                <option value="L40">NVIDIA L40</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">VRAM (GB)</label>
                <input
                  type="number"
                  value={formData.vram_gb}
                  onChange={(e) => setFormData({ ...formData, vram_gb: parseInt(e.target.value) })}
                  className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Rate (SAGE/hr)</label>
                <input
                  type="number"
                  value={formData.rate_sage_per_hour}
                  onChange={(e) => setFormData({ ...formData, rate_sage_per_hour: parseInt(e.target.value) })}
                  className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Backend</label>
              <select
                value={formData.backend}
                onChange={(e) => setFormData({ ...formData, backend: e.target.value as GpuBackend })}
                className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
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
                className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
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

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Supported Templates</label>
              {templatesLoading ? (
                <div className="text-sm text-gray-400">Loading templates...</div>
              ) : templates.length === 0 ? (
                <div className="text-sm text-gray-500">All templates will be supported</div>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto bg-gray-700/50 rounded-lg p-3">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`template-${template.id}`}
                        checked={selectedTemplates.includes(template.id)}
                        onChange={() => handleTemplateToggle(template.id)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor={`template-${template.id}`} className="text-sm text-gray-300 flex-1">
                        {template.name}
                        <span className="text-gray-500 ml-2">({template.min_vram_gb}GB min)</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {selectedTemplates.length === 0 ? 'All templates selected by default' : `${selectedTemplates.length} template(s) selected`}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 rounded-lg font-medium text-white transition-colors"
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

// Main Page Component
export function ValidatorGPUsPage() {
  const wallet = useWalletStore((state) => state.wallet);
  const { gpus, isLoading, refresh, updateAvailability } = useValidatorGpus();
  const toast = useToast();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [expandedGpuId, setExpandedGpuId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'in_use' | 'offline'>('all');

  const handleToggleAvailability = async (gpuId: string, status: GpuAvailability) => {
    try {
      await updateAvailability(gpuId, status);
      toast.success('GPU Updated', `GPU status changed to ${status}`);
    } catch (error) {
      toast.error('Update Failed', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const filteredGpus = gpus.filter(gpu => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'available') return gpu.availability === 'Available';
    if (filterStatus === 'offline') return gpu.availability === 'Offline';
    if (filterStatus === 'in_use') return typeof gpu.availability === 'object' && 'InUse' in gpu.availability;
    return true;
  });

  if (!wallet?.isConnected) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 sm:p-12 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Connect your Starknet wallet to manage your GPUs on the marketplace.
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white">GPU Management</h1>
          <p className="text-gray-400 mt-1">Manage your GPUs on the marketplace</p>
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
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Register GPU</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <SectionErrorBoundary sectionName="GPU Stats">
        <GpuStatsSummary gpus={gpus} />
      </SectionErrorBoundary>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'available', 'in_use', 'offline'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filterStatus === status
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {status === 'all' ? 'All' : status === 'in_use' ? 'In Use' : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* GPU List */}
      <div className="space-y-4">
        {isLoading && gpus.length === 0 ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 p-5 animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-700 rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-32 bg-gray-700 rounded" />
                    <div className="h-4 w-48 bg-gray-700 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredGpus.length === 0 ? (
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-12 text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              {filterStatus === 'all' ? 'No GPUs Registered' : `No ${filterStatus.replace('_', ' ')} GPUs`}
            </h3>
            <p className="text-gray-400 mb-4">
              {filterStatus === 'all'
                ? 'Register your first GPU to start earning SAGE tokens.'
                : 'Try changing the filter to see other GPUs.'}
            </p>
            {filterStatus === 'all' && (
              <button
                onClick={() => setShowRegisterModal(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white transition-colors"
              >
                Register GPU
              </button>
            )}
          </div>
        ) : (
          filteredGpus.map((gpu) => (
            <SectionErrorBoundary key={gpu.id} sectionName={`GPU ${gpu.gpu_model}`}>
              <GpuCard
                gpu={gpu}
                onToggleAvailability={handleToggleAvailability}
                onEdit={() => toast.info('Edit Coming Soon', 'GPU editing will be available soon.')}
                isExpanded={expandedGpuId === gpu.id}
                onToggleExpand={() => setExpandedGpuId(expandedGpuId === gpu.id ? null : gpu.id)}
              />
            </SectionErrorBoundary>
          ))
        )}
      </div>

      {/* Register Modal */}
      {showRegisterModal && <RegisterGpuModal onClose={() => setShowRegisterModal(false)} />}
    </div>
  );
}

export default ValidatorGPUsPage;
