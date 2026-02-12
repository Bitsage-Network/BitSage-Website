import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import {
  BookOpen, FileText, Code, Users, ExternalLink, Download,
  Shield, Zap, Rocket, ArrowRight, Layers, Terminal,
  Cpu, Globe, Lock, GitBranch
} from 'lucide-react';
import Link from 'next/link';
import { CopyButton } from './CopyButton';

export const metadata: Metadata = {
  title: 'Documentation - BitSage Network',
  description: 'Comprehensive API reference, guides, and technical documentation for BitSage Network.',
};

const codeExample = `from bitsage import BitSageClient

# Initialize client
client = BitSageClient(api_key="your-api-key")

# Submit a GPU job
job = client.jobs.submit(
    type="render",
    input={"scene": "scene.blend", "frames": [1, 100]},
    gpu="RTX-4090",
    verification="zk-proof"
)

# Monitor progress
for update in client.jobs.monitor(job.id):
    print(f"Progress: {update.progress}%")

# Get verified result
result = client.jobs.get_result(job.id)
print(f"Proof: {result.proof_hash}")`;

const quickLinks = [
  {
    title: 'Getting Started',
    description: 'Set up your environment and submit your first job',
    href: '/docs/getting-started',
    icon: Rocket,
    color: 'emerald',
  },
  {
    title: 'Workflow Templates',
    description: 'Pre-built templates for common GPU workloads',
    href: '/docs/workflows',
    icon: Layers,
    color: 'cyan',
  },
  {
    title: 'Architecture Overview',
    description: 'Understand the four-layer network architecture',
    href: '/docs/architecture-overview',
    icon: GitBranch,
    color: 'violet',
  },
  {
    title: 'Benchmarks & TCO',
    description: 'Performance benchmarks and cost analysis',
    href: '/docs/benchmark-tco-brief',
    icon: Zap,
    color: 'amber',
  },
];

const docSections = [
  {
    title: 'Platform',
    icon: Globe,
    items: [
      { label: 'Architecture Overview', href: '/docs/architecture-overview' },
      { label: 'Network Status', href: '/network' },
      { label: 'Security Model', href: '/manifesto#security' },
      { label: 'Verification System', href: '/manifesto#verification' },
    ],
  },
  {
    title: 'Developers',
    icon: Code,
    items: [
      { label: 'Quick Start Guide', href: '/docs/getting-started' },
      { label: 'API Reference', href: '/docs/api-reference' },
      { label: 'SDKs & Libraries', href: '/docs/sdks' },
      { label: 'Workflow Templates', href: '/docs/workflows' },
    ],
  },
  {
    title: 'Providers',
    icon: Cpu,
    items: [
      { label: 'Become a Provider', href: '/providers' },
      { label: 'Node Setup', href: '/docs/node-setup' },
      { label: 'Earnings & Rewards', href: '/docs/provider-economics' },
      { label: 'Validator Dashboard', href: 'https://validators.bitsage.network', external: true },
    ],
  },
  {
    title: 'Resources',
    icon: FileText,
    items: [
      { label: 'Whitepaper / Manifesto', href: '/manifesto' },
      { label: 'Blog', href: '/blog' },
      { label: 'GitHub', href: 'https://github.com/Bitsage-Network', external: true },
      { label: 'Discord Community', href: 'https://discord.gg/QAXDpa7F5K', external: true },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
  amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
};

export default function DocsPage() {
  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">DOCUMENTATION</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build with BitSage
            </h1>

            <p className="text-lg text-slate-400 mb-8">
              Everything you need to integrate verifiable GPU compute into your applications.
              From quick start guides to comprehensive API references.
            </p>

            {/* Search placeholder */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here Banner */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/docs/getting-started" className="block group">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-6 md:p-8 hover:from-emerald-500 hover:to-cyan-500 transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">New to BitSage? Start Here</h2>
                    <p className="text-emerald-100">Get up and running with your first GPU job in minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const colors = colorMap[link.color];
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all"
                >
                  <div className={`w-10 h-10 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center mb-4`}>
                    <link.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-400">{link.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Documentation Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docSections.map((section) => (
              <div key={section.title} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors py-1"
                      >
                        <span>{item.label}</span>
                        {item.external && <ExternalLink className="w-3 h-3" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Simple, Powerful API
              </h2>
              <p className="text-slate-400 mb-6">
                Submit GPU jobs with just a few lines of code. Our Python SDK handles authentication,
                job scheduling, monitoring, and result verification automatically.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  OpenAI-compatible API for inference
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Real-time job monitoring via WebSocket
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Cryptographic verification of results
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Python, Node.js, and CLI support
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs/api-reference"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all"
                >
                  <Code className="w-4 h-4" />
                  API Reference
                </Link>
                <Link
                  href="/docs/sdks"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-xl font-medium transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download SDKs
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">main.py</span>
                  <CopyButton code={codeExample} />
                </div>
              </div>
              <pre className="p-4 text-sm text-slate-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm mb-4">
                  <FileText className="w-3 h-3" />
                  WHITEPAPER
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The BitSage Manifesto
                </h2>
                <p className="text-slate-400 mb-6">
                  Deep dive into the technical architecture, cryptographic foundations,
                  economic models, and roadmap for verifiable GPU compute.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Shield className="w-4 h-4 text-violet-400" />
                    ZK Proof Systems
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Lock className="w-4 h-4 text-violet-400" />
                    Security Model
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Zap className="w-4 h-4 text-violet-400" />
                    Tokenomics
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <GitBranch className="w-4 h-4 text-violet-400" />
                    Architecture
                  </div>
                </div>
                <Link
                  href="/manifesto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all"
                >
                  Read Manifesto
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-48 h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
                  <FileText className="w-16 h-16 text-violet-400/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Get Help & Connect</h2>
            <p className="text-slate-400">Join our community of developers and GPU providers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://discord.gg/QAXDpa7F5K"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-[#5865F2]/50 transition-all text-center"
            >
              <div className="w-12 h-12 bg-[#5865F2]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5865F2]/30 transition-colors">
                <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-1">Discord</h3>
              <p className="text-sm text-slate-400">Chat with the community</p>
            </a>

            <a
              href="https://github.com/Bitsage-Network"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-500 transition-all text-center"
            >
              <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600/50 transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-1">GitHub</h3>
              <p className="text-sm text-slate-400">View source & contribute</p>
            </a>

            <Link
              href="/company#contact"
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-emerald-500/50 transition-all text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Enterprise Support</h3>
              <p className="text-sm text-slate-400">Get dedicated assistance</p>
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
