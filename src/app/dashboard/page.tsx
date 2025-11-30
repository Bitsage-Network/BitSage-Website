import ComingSoon from '@/components/ComingSoon';

export default function DashboardComingSoonPage() {
  return (
    <ComingSoon
      title="BitSage Dashboard"
      description="Manage your compute jobs, monitor performance, track earnings, and access advanced analytics through our comprehensive dashboard interface."
      features={[
        "Job Management Interface",
        "Real-time Monitoring", 
        "Performance Analytics",
        "Cost Tracking",
        "Resource Utilization",
        "Earnings Dashboard",
        "Network Statistics",
        "Verification Reports",
        "API Management"
      ]}
      estimatedLaunch="Q1 2026"
      notifyEmail={true}
    />
  );
}
