import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import { PlatformContent } from '@/components/PlatformContent';

export const metadata: Metadata = {
  title: 'Platform Overview - BitSage Network',
  description: 'Discover BitSage\'s verifiable compute infrastructure with Sage Cloud, Mesh, Forge, and Proof systems.',
};

export default function PlatformPage() {
  return (
    <PublicPageLayout className="bg-white">
      <PlatformContent />
    </PublicPageLayout>
  );
}