import { HeroRevamped } from '@/components/HeroRevamped';

import { ProductCategories } from '@/components/ProductCategories';
import { CodeExamples } from '@/components/CodeExamples';
import { ActiveMarketplace } from '@/components/ActiveMarketplace';
import { StwoMlShowcase } from '@/components/StwoMlShowcase';
import { CTASection } from '@/components/CTASection';
import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function Home() {
  return (
    <PublicPageLayout>
      <HeroRevamped />

      <ProductCategories />
      <CodeExamples />
      <ActiveMarketplace />
      <StwoMlShowcase />
      <CTASection />
    </PublicPageLayout>
  );
}
