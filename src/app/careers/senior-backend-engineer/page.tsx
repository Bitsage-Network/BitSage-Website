import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Senior Backend Engineer - BitSage Network',
  description: 'Join BitSage Network as a Senior Backend Engineer. Build distributed systems and verifiable computing infrastructure.',
};

export default function SeniorBackendEngineerPage() {
  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/company" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">Senior Backend Engineer</h1>
          
          <div className="flex flex-wrap gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Remote / San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>$180k - $250k + Equity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            
            {/* About the Role */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Role</h2>
              <p className="text-slate-600 mb-4">
                We're looking for a Senior Backend Engineer to help build the core infrastructure of BitSage Network. 
                You'll work on distributed systems that orchestrate GPU compute across a global network while ensuring 
                cryptographic verification of all computations.
              </p>
              <p className="text-slate-600">
                This is a unique opportunity to work on cutting-edge technology at the intersection of distributed 
                systems, blockchain, and high-performance computing.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Design and implement distributed systems for job orchestration and resource management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Build APIs and services for enterprise customers and node providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement cryptographic verification systems for compute integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimize performance for high-throughput, low-latency workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Work with blockchain protocols and smart contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborate with DevOps on infrastructure and deployment</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We're Looking For</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>5+ years of backend engineering experience with distributed systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong proficiency in Go, Rust, or similar systems programming languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with microservices, message queues, and event-driven architectures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Knowledge of containerization (Docker, Kubernetes) and cloud platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Understanding of cryptography, consensus algorithms, or blockchain technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with high-performance computing or GPU workloads (preferred)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong problem-solving skills and attention to detail</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive salary ($180k - $250k) plus significant equity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive health, dental, and vision insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remote-first culture with flexible working hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Top-tier hardware and development tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional development budget and conference attendance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Work with cutting-edge technology and brilliant colleagues</span>
                </li>
              </ul>
            </div>

            {/* Apply */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Ready to Join Us?</h3>
              <p className="text-slate-600 mb-4">
                Help us build the infrastructure that will power the next generation of verifiable computing. 
                We're looking for engineers who are excited about solving complex distributed systems challenges.
              </p>
              <Link 
                href="/waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
