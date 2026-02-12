/**
 * Validator GPU Management Page
 * Dedicated page for managing GPUs on the marketplace
 */

import { ValidatorGPUsPage } from '@/components/webapp/ValidatorGPUsPage';

export const metadata = {
  title: 'GPU Management | BitSage Network',
  description: 'Manage your GPUs on the BitSage marketplace',
};

export default function GPUsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ValidatorGPUsPage />
      </div>
    </div>
  );
}
