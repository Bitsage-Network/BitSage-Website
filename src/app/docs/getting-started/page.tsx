import ComingSoon from '@/components/ComingSoon';

export default function GettingStartedPage() {
  return (
    <ComingSoon
      title="BitSage Testnet"
      description="We're currently in testnet phase and not accepting new users yet. Join our waitlist to be notified when we launch mainnet and start onboarding developers."
      features={[
        "Early Access to BitSage Network",
        "Priority Onboarding", 
        "Exclusive Testnet Updates",
        "Developer Documentation Access",
        "Community Discord Access",
        "Beta Testing Opportunities",
        "Launch Day Benefits",
        "Technical Support Priority"
      ]}
      estimatedLaunch="Q1 2026"
      notifyEmail={true}
    />
  );
}
