/**
 * Jobs Dashboard Page
 */

import { JobMonitoringDashboard } from '@/components/webapp/JobMonitoringDashboard';

export const metadata = {
  title: 'Jobs Dashboard | BitSage Network',
  description: 'Monitor your compute jobs in real-time',
};

export default function JobsDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Jobs Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time monitoring of all your compute jobs
          </p>
        </div>

        <JobMonitoringDashboard />
      </div>
    </div>
  );
}

