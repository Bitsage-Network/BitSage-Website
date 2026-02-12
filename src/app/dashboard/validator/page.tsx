/**
 * Validator Dashboard Page
 * Manage GPUs, view earnings, and monitor active rentals
 */

import { ValidatorDashboard } from '@/components/webapp/ValidatorDashboard';

export const metadata = {
  title: 'Validator Dashboard | BitSage Network',
  description: 'Manage your GPUs, view earnings, and monitor active rentals',
};

export default function ValidatorDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ValidatorDashboard />
      </div>
    </div>
  );
}
