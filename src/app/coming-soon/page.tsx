import ComingSoon from '@/components/ComingSoon';
import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function ComingSoonPage() {
  return (
    <PublicPageLayout>
      <ComingSoon
        title="Amazing Features Coming Soon"
        description="We're building the future of decentralized compute. These cutting-edge features will revolutionize how you access and verify computational resources."
        features={[
          "Advanced ZK Proof Verification",
          "Multi-Region GPU Clusters", 
          "Real-time AI Model Serving",
          "Federated Learning Networks",
          "Cross-chain Integrations",
          "Enterprise Dashboard",
          "Advanced Analytics",
          "Custom Verification Tiers",
          "Automated Scaling"
        ]}
        estimatedLaunch="Q2 2026"
        notifyEmail={true}
      />
    </PublicPageLayout>
  );
}
