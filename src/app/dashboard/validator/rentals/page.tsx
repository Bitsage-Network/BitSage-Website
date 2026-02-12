/**
 * Validator Rentals Page
 * Dedicated page for viewing rental activity and history
 */

import { ValidatorRentalsPage } from '@/components/webapp/ValidatorRentalsPage';

export const metadata = {
  title: 'Rental Activity | BitSage Network',
  description: 'Track GPU rental activity on BitSage Network',
};

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ValidatorRentalsPage />
      </div>
    </div>
  );
}
