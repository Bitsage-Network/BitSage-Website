import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function BenchmarkTCOBrief() {
  return (
    <PublicPageLayout className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Benchmark & TCO Brief</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Comprehensive analysis of BitSage Network performance and total cost of ownership compared to traditional cloud providers.
          </p>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-slate-600">
              This document is currently being prepared. Please contact our sales team for early access to our benchmark data and TCO analysis.
            </p>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  );
}
