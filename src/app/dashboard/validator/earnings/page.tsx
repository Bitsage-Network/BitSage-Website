/**
 * Validator Earnings Page
 * Dedicated page for viewing earnings and withdrawal history
 */

import { ValidatorEarningsPage } from '@/components/webapp/ValidatorEarningsPage';

export const metadata = {
  title: 'Earnings | BitSage Network',
  description: 'View and manage your validator earnings on BitSage Network',
};

export default function EarningsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ValidatorEarningsPage />
      </div>
    </div>
  );
}
