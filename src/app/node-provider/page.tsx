import ComingSoon from '@/components/ComingSoon';

export default function NodeProviderPage() {
  return (
    <ComingSoon
      title="Become a Node Provider"
      description="Monetize your GPU hardware by joining our decentralized compute network. Earn SAGE tokens by providing reliable, verifiable compute resources to developers worldwide."
      features={[
        "Easy Node Setup",
        "Automated Job Matching", 
        "Transparent Earnings",
        "Hardware Verification",
        "Reputation System",
        "Flexible Availability",
        "Performance Monitoring",
        "Secure Execution",
        "Community Support"
      ]}
      estimatedLaunch="Q1 2026"
      notifyEmail={true}
    />
  );
}
