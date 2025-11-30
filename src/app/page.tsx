import { HeroRevamped } from '@/components/HeroRevamped';
import { SocialProof } from '@/components/SocialProof';
import { ProductCategories } from '@/components/ProductCategories';
import { CodeExamples } from '@/components/CodeExamples';
import { PlatformFeatures } from '@/components/PlatformFeatures';
import { ActiveMarketplace } from '@/components/ActiveMarketplace';
import { CategorySections } from '@/components/CategorySections';
import { SageShowcase } from '@/components/SageShowcase';
import { CTASection } from '@/components/CTASection';
import { CommunitySection } from '@/components/CommunitySection';
import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function Home() {
  return (
    <PublicPageLayout showAnnouncementBanner={true}>
      <HeroRevamped />
      <SocialProof />
      
      {/* Developer-focused sections */}
      <ProductCategories />
      <CodeExamples />
      <PlatformFeatures />
      
      {/* Original sections */}
      <ActiveMarketplace />
      <CategorySections />
      <SageShowcase />
      <CTASection />
      <CommunitySection />
    </PublicPageLayout>
  );
}
