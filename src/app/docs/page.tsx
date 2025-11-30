import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import { BookOpen, FileText, Code, Users, ExternalLink, Download, Eye, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation - BitSage Network',
  description: 'Comprehensive API reference, guides, and technical documentation for BitSage Network.',
};

export default function DocsPage() {
  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
        </div>

        <div className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">DOCUMENTATION</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Technical</span>
                <br />
                <span className="text-emerald-400">Documentation</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Everything you need to build on BitSage Network - from architecture overviews
                to comprehensive API references and enterprise integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <FileText className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">WHITEPAPER</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The BitSage Manifesto
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical whitepaper covering the vision, architecture, and mathematical foundations
              of verifiable GPU compute on the decentralized network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Manifesto Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Vision & Architecture</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Dive deep into the mathematical foundations, zero-knowledge proof systems, and
                      decentralized architecture that powers verifiable GPU compute at scale.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-slate-700">ZK Proof Systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-slate-700">Mathematical Foundations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-slate-700">Network Economics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-slate-700">Scalability Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Sections Preview */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-500" />
                    Executive Summary
                  </h4>
                  <p className="text-slate-600 text-sm">
                    High-level overview of the BitSage vision and technological approach.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    Security Model
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Cryptographic foundations and zero-knowledge verification systems.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-500" />
                    Tokenomics
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Economic incentives, governance, and network participation models.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                    Technical Roadmap
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Development phases and future network capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Manifesto Actions */}
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Read the Manifesto</h3>

                <div className="space-y-4">
                  <Link
                    href="/manifesto"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-600/25"
                  >
                    <Eye className="w-5 h-5" />
                    Review Online
                    <ExternalLink className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://github.com/Bitsage-Network/BitSage-Knowledge-Base"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 rounded-xl font-semibold transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="text-xs text-slate-400 space-y-1">
                    <div>• Comprehensive technical documentation</div>
                    <div>• Mathematical proof systems</div>
                    <div>• Network architecture details</div>
                    <div>• Economic models & incentives</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Access</h4>
                <div className="space-y-3">
                  <Link href="/docs/architecture-overview" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">Architecture Overview</span>
                  </Link>
                  <Link href="/docs/benchmark-tco-brief" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">TCO Analysis</span>
                  </Link>
                  <a href="https://github.com/Bitsage-Network" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8">
              <Zap className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">GET STARTED</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Building</h2>
            <p className="text-lg text-slate-600">Choose your path to start building with BitSage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Start Guide</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Get up and running with your first job in under 5 minutes with our interactive tutorial.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Account setup & authentication</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>API key generation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>First job submission</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Result verification</span>
                </div>
              </div>
              <Link href="/docs/getting-started" className="w-full inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-600/25">
                Start Tutorial
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Code className="w-6 h-6 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">API Reference</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Comprehensive documentation for all BitSage APIs, endpoints, and integration patterns.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>REST API endpoints</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>WebSocket connections</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Authentication methods</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Response schemas & SDKs</span>
                </div>
              </div>
              <Link href="/docs/api-reference" className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 rounded-xl font-semibold transition-all">
                View API Docs
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Download className="w-6 h-6 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">SDKs & Tools</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Official SDKs, command-line tools, and Docker images for seamless integration.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Python & Node.js SDKs</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>CLI tools & Docker images</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Integration examples</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Enterprise connectors</span>
                </div>
              </div>
              <Link href="/docs/sdks" className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 rounded-xl font-semibold transition-all">
                Download SDKs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8">
              <BookOpen className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">DOCUMENTATION</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Documentation</h2>
            <p className="text-lg text-slate-600">Detailed guides and technical specifications for every aspect of the platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Platform Architecture</h3>
                  <p className="text-slate-600">Four-layer verifiable compute infrastructure</p>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/docs/architecture-overview" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Sage Cloud - Application Layer</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/architecture-overview" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Sage Mesh - Network Layer</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/architecture-overview" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Sage Forge - Node Layer</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/architecture-overview" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Sage Proof - Verification Layer</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Job Management</h3>
                  <p className="text-slate-600">End-to-end job lifecycle and monitoring</p>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/docs/api-reference" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Job Submission & APIs</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/api-reference" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Monitoring & Status Updates</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/api-reference" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Result Verification</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/api-reference" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Error Handling & Troubleshooting</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Security & Privacy</h3>
                  <p className="text-slate-600">Cryptographic foundations and compliance</p>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/docs/security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Authentication & Access Control</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">End-to-End Encryption</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Zero-Knowledge Proofs</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Compliance & Certifications</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Node Operations</h3>
                  <p className="text-slate-600">Provider infrastructure and management</p>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/docs/providers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Node Setup & Configuration</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/providers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Resource Management</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/network" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Network Monitoring</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
                <Link href="/docs/troubleshooting" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 group-hover:text-emerald-600 font-medium">Troubleshooting & Support</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <Code className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">CODE EXAMPLES</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready-to-Use Code</h2>
            <p className="text-lg text-slate-600">Production-ready code snippets for common use cases and integrations</p>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-200">
            <div className="p-8 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Submit a GPU Compute Job</h3>
                  <p className="text-slate-400">Python SDK example for rendering workloads</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                    <span className="text-xs font-medium text-emerald-400">Python</span>
                  </div>
                  <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-8">
              <pre className="text-sm text-slate-100 overflow-x-auto">{`import asyncio
from bitsage import BitSageClient

async def main():
    # Initialize client with API key
    client = BitSageClient(api_key="your-api-key")

    # Submit GPU compute job
    job = await client.jobs.submit(
        type="render",
        input={
            "scene": "https://storage.example.com/scene.blend",
            "frames": [1, 100],
            "resolution": [1920, 1080],
            "engine": "blender"
        },
        resources={
            "gpu": "RTX-4090",
            "memory": "16GB",
            "storage": "100GB"
        },
        verification="zk-proof"
    )

    print(f"Job submitted: {job.id}")
    print("Estimated cost: $" + str(job.cost_estimate))
    print(f"Expected completion: {job.eta}")

    # Monitor job progress
    async for update in client.jobs.monitor(job.id):
        print(f"Progress: {update.progress}% - {update.status}")

    # Get final result with cryptographic proof
    result = await client.jobs.get_result(job.id)
    print(f"Result verified with proof: {result.proof_hash}")

if __name__ == "__main__":
    asyncio.run(main())`}</pre>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              View complete API documentation and additional code examples
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/api-reference" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-600/25">
                <BookOpen className="w-4 h-4" />
                API Reference
              </Link>
              <Link href="/docs/sdks" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 rounded-xl font-semibold transition-all">
                <Download className="w-4 h-4" />
                Download SDKs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Community */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8">
              <Users className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">COMMUNITY</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Help & Connect</h2>
            <p className="text-lg text-slate-600">Join our vibrant community of developers, creators, and GPU providers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Discord Community</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Real-time chat with developers, get help from AI assistants, and stay updated
                with the latest BitSage developments and announcements.
              </p>
              <a
                href="https://discord.gg/QAXDpa7F5K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-[#5865F2]/25"
              >
                <span>Join Discord</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Knowledge Base</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Explore our comprehensive technical documentation, whitepapers, and
                detailed guides covering all aspects of the BitSage platform.
              </p>
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 rounded-xl font-semibold transition-all"
              >
                <span>Read Manifesto</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Shield className="w-8 h-8 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise Support</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Dedicated support for enterprise customers with SLA guarantees,
                priority assistance, and direct access to our technical team.
              </p>
              <Link href="/company#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-600/25">
                <span>Contact Support</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
