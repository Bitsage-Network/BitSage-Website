import ComingSoon from '@/components/ComingSoon';

export default function BatchComputePage() {
  return (
    <ComingSoon
      title="Batch Compute Jobs"
      description="Submit large-scale computational tasks with cryptographic verification. Perfect for 3D rendering, AI training, scientific simulations, and ZK proof generation with guaranteed result integrity."
      features={[
        "Cryptographic Result Verification",
        "3D Rendering & Animation", 
        "AI Model Training",
        "Scientific Simulations",
        "ZK Proof Generation",
        "Parallel Job Processing",
        "Cost-effective Pricing",
        "Progress Monitoring",
        "Result Attestation"
      ]}
      estimatedLaunch="Q2 2026"
      notifyEmail={true}
    />
  );
}
