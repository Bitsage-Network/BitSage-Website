import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';

export const metadata: Metadata = {
  title: 'Network Status - BitSage Network',
  description: 'Real-time network status, node dashboard, performance metrics, and governance information.',
};

export default function NetworkPage() {
  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Network Status
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Monitor BitSage Network performance, node status, and governance activities in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">--</div>
              <div className="text-slate-600">Network Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">--</div>
              <div className="text-slate-600">Active Nodes</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">--</div>
              <div className="text-slate-600">Jobs Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">--</div>
              <div className="text-slate-600">Total Compute Power</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Network Health</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">API Response Time</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Job Queue Length</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Average Job Duration</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Network activity will appear here</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Job completions will be tracked</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Governance updates will be shown</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Node Dashboard */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Node Dashboard</h2>
            <p className="text-lg text-slate-600">Monitor and manage network participation</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Network Nodes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Node ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">GPU Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Uptime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">No nodes available</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">--</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">--</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-500">Offline</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Network Governance</h2>
            <p className="text-lg text-slate-600">Participate in network decisions and protocol upgrades</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Active Proposals</h3>
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="text-center text-slate-400 py-8">
                    <p className="text-sm">Governance proposals will appear here when the network launches</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Governance Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Proposals</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Active Voters</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Participation Rate</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Treasury Balance</span>
                  <span className="text-slate-400 font-medium">--</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
