'use client';

/**
 * Job Monitoring Dashboard
 * Real-time job status tracking with stats and visualizations
 */

import { useJobs, useJobStats, useWorkers } from '@/lib/hooks/useCoordinator';
import { Job, JobStatus, WorkerInfo } from '@/lib/api/coordinator';

// Status badge component
function StatusBadge({ status }: { status: JobStatus }) {
  const config = {
    Queued: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300', icon: '⏳' },
    Processing: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', icon: '⚡' },
    Completed: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', icon: '✅' },
    Failed: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', icon: '❌' },
    Cancelled: { bg: 'bg-gray-100 dark:bg-gray-900/30', text: 'text-gray-700 dark:text-gray-300', icon: '🚫' },
  };

  const style = config[status] || config.Queued;

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${style.bg} ${style.text}`}>
      <span>{style.icon}</span>
      <span>{status}</span>
    </span>
  );
}

// Job card component
function JobCard({ job }: { job: Job }) {
  const runtime = job.completed_at && job.started_at 
    ? ((job.completed_at - job.started_at) / 60).toFixed(1)
    : job.started_at
    ? ((Date.now() / 1000 - job.started_at) / 60).toFixed(1)
    : '0';

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg">{job.job_type}</h3>
          <p className="text-sm text-gray-500 font-mono">{job.id}</p>
        </div>
        <StatusBadge status={job.status} />
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-500">GPU</p>
          <p className="font-semibold">{job.gpu_model || 'Auto'}</p>
        </div>
        <div>
          <p className="text-gray-500">Runtime</p>
          <p className="font-semibold">{runtime} min</p>
        </div>
        <div>
          <p className="text-gray-500">TEE</p>
          <p className="font-semibold">{job.tee_type === 'Full' ? '🔒 Enabled' : '⚪ None'}</p>
        </div>
        <div>
          <p className="text-gray-500">Worker</p>
          <p className="font-mono text-xs">{job.worker_id ? job.worker_id.slice(0, 8) : 'Pending'}</p>
        </div>
      </div>

      {job.error && (
        <div className="mt-3 p-2 bg-red-50 dark:bg-red-900/20 rounded text-sm text-red-700 dark:text-red-300">
          {job.error}
        </div>
      )}

      {job.result && (
        <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded text-sm">
          <p className="text-green-700 dark:text-green-300 font-semibold mb-1">Result Available</p>
          <a 
            href={job.result} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
          >
            View Result →
          </a>
        </div>
      )}
    </div>
  );
}

// Stats card component
function StatsCard({ title, value, subtitle, icon }: { title: string; value: string | number; subtitle?: string; icon: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

// Worker status component
function WorkerStatus({ workers }: { workers: WorkerInfo[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4">Active Workers</h3>
      <div className="space-y-3">
        {workers.map((worker) => (
          <div key={worker.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div>
              <p className="font-mono text-sm">{worker.id.slice(0, 12)}...</p>
              <p className="text-xs text-gray-500">
                {worker.gpus.length}x GPU | {worker.current_jobs}/{worker.max_jobs} jobs
              </p>
            </div>
            <div className="flex items-center gap-2">
              {worker.tee_cpu && <span className="text-xs">🔒 TEE</span>}
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                worker.status === 'Active' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                  : worker.status === 'Overloaded'
                  ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
              }`}>
                {worker.status}
              </span>
            </div>
          </div>
        ))}
        {workers.length === 0 && (
          <p className="text-gray-500 text-center py-4">No active workers</p>
        )}
      </div>
    </div>
  );
}

export function JobMonitoringDashboard() {
  const { jobs, loading: jobsLoading, error: jobsError } = useJobs(true, 5000);
  const { stats, loading: statsLoading } = useJobStats(true, 10000);
  const { workers, loading: workersLoading } = useWorkers(true, 15000);

  if (jobsLoading && !jobs.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⚡</div>
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (jobsError) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">
          ❌ Failed to Load Dashboard
        </h3>
        <p className="text-red-600 dark:text-red-400">{jobsError}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Make sure the coordinator is running at <code className="bg-red-100 dark:bg-red-900/30 px-1 py-0.5 rounded">
            {process.env.NEXT_PUBLIC_COORDINATOR_URL || 'http://localhost:8080'}
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Jobs" 
          value={stats?.total_jobs || 0} 
          icon="📊"
        />
        <StatsCard 
          title="Active Jobs" 
          value={stats?.active_jobs || 0}
          subtitle={`${stats?.jobs_per_minute.toFixed(1) || 0} jobs/min`}
          icon="⚡" 
        />
        <StatsCard 
          title="Success Rate" 
          value={`${((stats?.success_rate || 0) * 100).toFixed(1)}%`}
          subtitle={`${stats?.completed_jobs || 0} completed`}
          icon="✅" 
        />
        <StatsCard 
          title="Avg Time" 
          value={`${(stats?.average_completion_time_secs || 0) / 60}min`}
          subtitle={`${stats?.failed_jobs || 0} failed`}
          icon="⏱️" 
        />
      </div>

      {/* Workers Status */}
      <WorkerStatus workers={workers} />

      {/* Jobs List */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Jobs</h2>
          <button
            onClick={() => window.location.href = '/dashboard/submit'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + New Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.slice(0, 12).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {jobs.length === 0 && !jobsLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold mb-2">No Jobs Yet</h3>
            <p className="text-gray-500 mb-4">Submit your first job to get started!</p>
            <button
              onClick={() => window.location.href = '/dashboard/submit'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Submit Job
            </button>
          </div>
        )}
      </div>

      {/* Live Update Indicator */}
      {!jobsLoading && (
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Live updates enabled</span>
        </div>
      )}
    </div>
  );
}

