import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketing Manager - BitSage Network',
  description: 'Join BitSage Network as a Marketing Manager. Drive growth and brand awareness for distributed GPU computing platform.',
};

export default function MarketingManagerPage() {
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
          
          <h1 className="text-4xl font-bold mb-4">Marketing Manager</h1>
          
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
              <span>Marketing</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>$120k - $160k + Equity</span>
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
                We're seeking a Marketing Manager to drive growth and brand awareness for BitSage Network. 
                You'll be responsible for developing and executing marketing strategies that reach both 
                enterprise customers and GPU providers in the distributed computing ecosystem.
              </p>
              <p className="text-slate-600">
                This is an opportunity to shape the marketing strategy for a revolutionary technology 
                at the intersection of AI, blockchain, and distributed computing.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop and execute comprehensive marketing strategies for B2B and B2C audiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create compelling content for technical and enterprise audiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manage digital marketing campaigns across multiple channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Build and grow our presence in developer and enterprise communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Coordinate conference participation, webinars, and thought leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analyze marketing performance and optimize campaigns for growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborate with sales team on lead generation and nurturing</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We're Looking For</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>4+ years of marketing experience, preferably in B2B SaaS or infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience marketing to technical audiences (developers, engineers, CTOs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong content creation skills and ability to explain complex technical concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proficiency with marketing tools (HubSpot, Google Analytics, social media platforms)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Understanding of blockchain, AI/ML, or distributed computing (preferred)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experience with developer marketing and community building</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data-driven approach to marketing with strong analytical skills</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive salary ($120k - $160k) plus significant equity</span>
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
                  <span>Marketing budget and access to premium tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conference attendance and professional development opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Opportunity to build marketing function from the ground up</span>
                </li>
              </ul>
            </div>

            {/* Apply */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Ready to Join Us?</h3>
              <p className="text-slate-600 mb-4">
                Help us tell the story of verifiable computing and build awareness for the future of distributed infrastructure. 
                We're looking for marketers who are excited about cutting-edge technology and enterprise growth.
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
