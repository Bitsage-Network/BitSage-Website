import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import JobApplicationForm from '@/components/JobApplicationForm';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Co-Founder / Business Lead - BitSage Network',
  description: 'Join BitSage Network as Co-Founder and Business Lead. Lead business strategy, partnerships, and growth for the future of verifiable computing.',
};

export default function CoFounderBusinessLeadPage() {
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
          
          <h1 className="text-4xl font-bold mb-4">Co-Founder / Business Lead</h1>
          
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
              <span>Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Equity + Competitive Salary</span>
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
                We're seeking an exceptional Co-Founder and Business Lead to join BitSage Network at the ground floor. 
                This is a unique opportunity to shape the future of verifiable computing and build a revolutionary 
                decentralized infrastructure company from the ground up.
              </p>
              <p className="text-slate-600">
                As Co-Founder, you'll lead business strategy, partnerships, fundraising, and go-to-market execution 
                while working closely with our technical team to bring verifiable GPU computing to enterprises worldwide.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lead business strategy and vision for BitSage Network's growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Drive enterprise partnerships and customer acquisition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lead fundraising efforts and investor relations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Build and manage business development, sales, and marketing teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop go-to-market strategies for enterprise and developer segments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Establish strategic partnerships with cloud providers, GPU manufacturers, and enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Shape company culture, hiring, and organizational development</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We're Looking For</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>7+ years of business leadership experience, preferably in B2B SaaS, infrastructure, or blockchain</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proven track record of building and scaling enterprise businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with fundraising (Series A/B preferred) and investor relations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong network in enterprise technology, cloud computing, or AI/ML space</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Understanding of distributed systems, blockchain, or high-performance computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Entrepreneurial mindset with experience in early-stage startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Excellent communication and leadership skills</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Significant equity stake as Co-Founder</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive salary and comprehensive benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Opportunity to shape the future of verifiable computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Work with cutting-edge technology and world-class team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remote-first culture with flexible working arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Access to top-tier investors and advisors</span>
                </li>
              </ul>
            </div>

            {/* Apply */}
            <div className="col-span-2">
              <JobApplicationForm position="Co-Founder / Business Lead" />
            </div>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
