import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps Engineer - BitSage Network',
  description: 'Join BitSage Network as a DevOps Engineer. Build and manage infrastructure for distributed GPU computing.',
};

export default function DevOpsEngineerPage() {
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
          
          <h1 className="text-4xl font-bold mb-4">DevOps Engineer</h1>
          
          <div className="flex flex-wrap gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Remote / New York</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>$160k - $220k + Equity</span>
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
                We're seeking a DevOps Engineer to build and manage the infrastructure that powers BitSage Network's 
                distributed GPU computing platform. You'll work on scaling systems that coordinate thousands of nodes 
                across the globe while maintaining high availability and security.
              </p>
              <p className="text-slate-600">
                This role offers the opportunity to work with cutting-edge infrastructure technologies and help 
                build the backbone of verifiable distributed computing.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Design and manage Kubernetes clusters for distributed workload orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Build CI/CD pipelines for rapid, reliable deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement monitoring, logging, and alerting systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manage multi-cloud infrastructure across AWS, GCP, and Azure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimize infrastructure costs and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement security best practices and compliance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Support GPU-specific infrastructure and networking requirements</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We're Looking For</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>4+ years of DevOps/Infrastructure engineering experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong experience with Kubernetes, Docker, and container orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proficiency with cloud platforms (AWS, GCP, Azure) and Infrastructure as Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with monitoring tools (Prometheus, Grafana, ELK stack)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Knowledge of networking, security, and distributed systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scripting skills in Python, Bash, or similar languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with GPU infrastructure or HPC environments (preferred)</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive salary ($160k - $220k) plus significant equity</span>
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
                  <span>Access to cutting-edge infrastructure and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional development budget and conference attendance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Opportunity to shape infrastructure architecture from the ground up</span>
                </li>
              </ul>
            </div>

            {/* Apply */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Ready to Join Us?</h3>
              <p className="text-slate-600 mb-4">
                Help us build the infrastructure that will enable verifiable computing at global scale. 
                We're looking for engineers who are passionate about reliability, scalability, and innovation.
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
