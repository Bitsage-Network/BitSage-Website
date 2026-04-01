'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Layers, ArrowRight, CheckCircle, Shield,
  Film, Brain, FlaskConical, Lock, BarChart3, Mail,
  Server, Globe
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const useCases = [
  { icon: Film, title: '3D Rendering & VFX', description: 'Blender, Maya, Houdini renders with cryptographic proof of completion.' },
  { icon: Brain, title: 'AI Model Training', description: 'Distributed PyTorch & TensorFlow training across verified GPUs.' },
  { icon: FlaskConical, title: 'Scientific Simulations', description: 'Molecular dynamics, CFD, and climate modeling at scale.' },
  { icon: Lock, title: 'ZK Proof Generation', description: 'Generate zero-knowledge proofs with verified computation.' },
];

const features = [
  'Cryptographic result verification', 'Parallel job processing', 'Progress monitoring dashboard', 'Cost-effective spot pricing',
  'Result attestation on-chain', 'Priority queue for enterprise', 'Auto-retry on failures', 'Detailed job analytics',
];

const pricingTiers = [
  { gpu: 'RTX 4090', price: '$0.35', unit: '/GPU-hr', best: 'Rendering' },
  { gpu: 'A100 40GB', price: '$1.80', unit: '/GPU-hr', best: 'Training' },
  { gpu: 'H100 80GB', price: '$3.20', unit: '/GPU-hr', best: 'Large Models' },
];

export default function BatchComputePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    document.title = 'Batch Compute - BitSage Network';
  }, []);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({ email, source: 'batch-compute-waitlist' });
        if (result.success) { setIsSubscribed(true); setEmail(''); }
      } catch (error) { console.error('Subscription error:', error); }
    }
  };

  return (
    <PublicPageLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white bg-mesh-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
              <Layers className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600">Batch Compute</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">Coming Q2 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Large-Scale GPU Jobs.{' '}
              <span className="text-[--accent]">Verified Results.</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Submit rendering, training, and simulation workloads to our distributed GPU network.
              Every result is cryptographically verified for integrity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all text-sm"
              >
                View documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for heavy workloads
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From Hollywood VFX to cutting-edge AI research, batch compute handles it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <useCase.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-500">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Enterprise-grade batch processing
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                Everything you need to run production workloads with confidence.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white text-sm">Estimated Pricing</span>
              </div>
              <div className="p-6 space-y-4">
                {pricingTiers.map((tier) => (
                  <div key={tier.gpu} className="flex items-center justify-between p-4 rounded-xl bg-slate-800">
                    <div>
                      <div className="font-medium text-white">{tier.gpu}</div>
                      <div className="text-xs text-slate-500">Best for {tier.best}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-400">{tier.price}</div>
                      <div className="text-xs text-slate-500">{tier.unit}</div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-slate-500 text-center pt-2">
                  * Prices are estimates. Final pricing at launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How batch compute works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Upload Job', desc: 'Submit your workload via API, CLI, or dashboard.', icon: Server },
              { step: '02', title: 'Distribute', desc: 'Jobs are split across verified GPU providers.', icon: Globe },
              { step: '03', title: 'Execute & Verify', desc: 'Results are cryptographically verified.', icon: Shield },
              { step: '04', title: 'Deliver', desc: 'Get results with proof of correct execution.', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-6 rounded-xl bg-white border border-slate-200"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-4xl font-bold text-slate-100 absolute top-4 right-4">
                  {item.step}
                </div>
                <item.icon className="w-6 h-6 text-slate-500 mb-4" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get early access
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Be the first to know when Batch Compute launches.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                  Notify me
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-slate-800 rounded-xl p-6 max-w-md mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-white font-semibold">You&apos;re on the list!</p>
              <p className="text-slate-400 text-sm">We&apos;ll notify you when Batch Compute launches.</p>
            </div>
          )}

          <div className="mt-6">
            <Link href="/waitlist" className="text-slate-400 hover:text-white text-sm underline">
              Or join the full enterprise waitlist
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
