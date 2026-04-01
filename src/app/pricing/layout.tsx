import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - BitSage Network',
  description: 'Simple, transparent GPU compute pricing. Pay per GPU-hour with no hidden fees or long-term contracts.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
