import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function ArchitectureOverview() {
  return (
    <PublicPageLayout className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Architecture Overview</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Technical deep-dive into BitSage Network's verifiable compute architecture and zero-knowledge proof system.
          </p>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-slate-600">
              This technical documentation is currently being prepared. Please visit our main documentation or contact our technical team for detailed architecture information.
            </p>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  );
}
