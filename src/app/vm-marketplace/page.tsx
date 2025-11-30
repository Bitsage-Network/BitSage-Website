import ComingSoon from '@/components/ComingSoon';

export default function VMMarketplacePage() {
  return (
    <ComingSoon
      title="VM Marketplace"
      description="Deploy and manage virtual machines with GPU access across our global decentralized network. Get the flexibility of cloud computing with the cost savings and transparency of blockchain."
      features={[
        "GPU-enabled Virtual Machines",
        "Container Orchestration", 
        "Auto-scaling Infrastructure",
        "Global Node Network",
        "Competitive Pricing",
        "Resource Monitoring",
        "TEE Security Options",
        "One-click Deployment",
        "Custom VM Images"
      ]}
      estimatedLaunch="Q1 2026"
      notifyEmail={true}
    />
  );
}
