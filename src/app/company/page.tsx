import { Metadata } from 'next';
import { Award } from 'lucide-react';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company - BitSage Network',
  description: 'Learn about BitSage Network, our mission, team, partnerships, and career opportunities.',
};

export default function CompanyPage() {
  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BitSage Network
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're building the future of verifiable compute infrastructure, 
              enabling trust and transparency in distributed computing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize access to high-performance computing while ensuring every computation 
                is verifiable, transparent, and trustworthy through zero-knowledge proofs.
              </p>
              <p className="text-lg text-slate-600">
                We believe that the future of computing requires not just performance and scale, 
                but also verifiability and trust. BitSage Network makes this vision a reality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Transparency:</strong> Every computation is verifiable and auditable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Innovation:</strong> Pushing the boundaries of distributed computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Accessibility:</strong> Making high-performance computing available to all</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Reliability:</strong> Enterprise-grade infrastructure and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Partnerships */}
      <section id="partnerships" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Partnerships</h2>
            <p className="text-lg text-slate-600">Working with industry leaders to build the future of compute</p>
          </div>

          {/* Featured Partnership - NVIDIA */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">NVIDIA Partner Network</h3>
                <p className="text-green-700 font-medium">Official Technology Partner</p>
              </div>
            </div>
            <p className="text-slate-700 mb-6 text-lg">
              BitSage Network has joined the NVIDIA Partner Network, enabling enterprise customers to leverage 
              cutting-edge GPU acceleration with verified compute capabilities. This partnership provides access 
              to the latest NVIDIA hardware and optimization tools for AI training, inference, and high-performance computing workloads.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">Hardware Access</h4>
                <p className="text-sm text-slate-600">Priority access to latest NVIDIA GPUs including H100, A100, and RTX series</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">Technical Support</h4>
                <p className="text-sm text-slate-600">Direct technical support and optimization guidance from NVIDIA engineers</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2">Enterprise Solutions</h4>
                <p className="text-sm text-slate-600">Joint go-to-market initiatives for enterprise AI and HPC customers</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technology Partners</h3>
              <p className="text-slate-600 mb-6">
                Collaborating with leading hardware manufacturers, cloud providers, and blockchain networks 
                to deliver cutting-edge infrastructure.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• NVIDIA Partner Network (GPU acceleration)</li>
                <li>• Cloud infrastructure integrations</li>
                <li>• Blockchain protocol collaborations</li>
                <li>• Developer tool integrations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Enterprise Customers</h3>
              <p className="text-slate-600 mb-6">
                Trusted by leading companies across AI, media, gaming, and research industries 
                for mission-critical workloads.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Fortune 500 AI companies</li>
                <li>• Major media and entertainment studios</li>
                <li>• Leading research institutions</li>
                <li>• Innovative startups and scale-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-slate-600">Help us build the future of verifiable computing</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Open Positions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Co-Founder / Business Lead</h4>
                    <p className="text-sm text-slate-600">Leadership • Equity • Remote/SF</p>
                  </div>
                  <Link 
                    href="/careers/co-founder-business-lead"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Senior Backend Engineer</h4>
                    <p className="text-sm text-slate-600">Distributed Systems • Remote/SF</p>
                  </div>
                  <Link 
                    href="/careers/senior-backend-engineer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">DevOps Engineer</h4>
                    <p className="text-sm text-slate-600">Infrastructure • Remote/NYC</p>
                  </div>
                  <Link 
                    href="/careers/devops-engineer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Frontend Engineer</h4>
                    <p className="text-sm text-slate-600">React/TypeScript • Remote/SF</p>
                  </div>
                  <Link 
                    href="/careers/frontend-engineer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Marketing Manager</h4>
                    <p className="text-sm text-slate-600">Growth Marketing • Remote/SF</p>
                  </div>
                  <Link 
                    href="/careers/marketing-manager"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600">Ready to discuss how BitSage can power your compute needs?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Sales</h3>
              <p className="text-slate-600 mb-4">Discuss enterprise solutions and pricing</p>
              <Link 
                href="/waitlist"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Support</h3>
              <p className="text-slate-600 mb-4">Get help with technical questions</p>
              <Link 
                href="/waitlist"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Partnerships</h3>
              <p className="text-slate-600 mb-4">Explore partnership opportunities</p>
              <Link 
                href="/waitlist"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
