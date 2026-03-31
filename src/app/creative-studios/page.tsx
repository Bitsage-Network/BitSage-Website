'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Film, ArrowRight, CheckCircle, Globe,
  Palette, Mail, Layers, Code2,
  Clapperboard, Building2, Gamepad2, Wand2
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const useCases = [
  { icon: Film, title: '3D Rendering & Animation', description: 'Blender, Maya, Cinema 4D, and Houdini renders with cryptographic proof of completion.', examples: ['Feature films', 'Animated series', 'Commercial spots'] },
  { icon: Clapperboard, title: 'VFX & Compositing', description: 'After Effects, Nuke, and DaVinci Resolve workflows at scale.', examples: ['Visual effects', 'Color grading', 'Motion graphics'] },
  { icon: Gamepad2, title: 'Game Asset Baking', description: 'Lightmaps, texture baking, and LOD generation for game engines.', examples: ['Unreal Engine', 'Unity', 'Custom engines'] },
  { icon: Building2, title: 'Architectural Visualization', description: 'V-Ray, Corona, and Lumion renders for architecture and real estate.', examples: ['Interiors', 'Exteriors', 'Walkthroughs'] },
];

const features = [
  'Blender & Maya native support', 'Houdini simulation caching', 'After Effects render queues', 'DaVinci Resolve integration',
  'Progress monitoring dashboard', 'Multi-format output (EXR, PNG, MP4)', 'Version control for assets', 'Team collaboration tools',
];

const pricingComparison = [
  { service: 'BitSage Network', price: '$0.35', unit: '/GPU-hr', savings: '', highlight: true },
  { service: 'Traditional Render Farm', price: '$0.85', unit: '/GPU-hr', savings: '59% more expensive', highlight: false },
  { service: 'AWS/GCP On-Demand', price: '$1.20', unit: '/GPU-hr', savings: '71% more expensive', highlight: false },
];

const supportedSoftware = [
  { name: 'Blender', category: '3D' }, { name: 'Maya', category: '3D' }, { name: 'Houdini', category: 'VFX' }, { name: 'Cinema 4D', category: '3D' },
  { name: 'After Effects', category: 'Motion' }, { name: 'DaVinci Resolve', category: 'Color' }, { name: 'Nuke', category: 'Compositing' }, { name: 'V-Ray', category: 'Render' },
];

export default function CreativeStudiosPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({ email, source: 'creative-studios-waitlist' });
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
              <Palette className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600">Creative Studios</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">Coming Q2 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              GPU Power for{' '}
              <span className="text-[--accent]">Creative Professionals</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Render Blender, Maya, Houdini, and Unreal Engine projects on our distributed GPU network.
              Verified results, transparent pricing, studio-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/waitlist" className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm">
                Join creative beta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/docs" className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all text-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for creative workflows</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">From feature films to game development, BitSage handles your heaviest creative workloads.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div key={useCase.title} className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <useCase.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((ex) => (
                    <span key={ex} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">{ex}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Software */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Pipeline</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Seamless pipeline integration</h2>
              <p className="text-lg text-slate-500 mb-8">BitSage integrates directly with your existing creative tools. Submit jobs without changing your workflow.</p>
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
                <Wand2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white text-sm">Supported Software</span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-3">
                {supportedSoftware.map((sw) => (
                  <div key={sw.name} className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                    <span className="font-medium text-white text-sm">{sw.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-400">{sw.category}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 px-6 pb-4 text-center">+ Custom render pipelines via API</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Save up to 60% on rendering</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Compared to traditional render farms and cloud providers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingComparison.map((tier) => (
              <div key={tier.service} className={`p-6 rounded-xl border ${
                tier.highlight ? 'bg-white border-slate-900 ring-1 ring-slate-900' : 'bg-white border-slate-200'
              }`}>
                {tier.highlight && <div className="text-xs font-bold text-[--accent] mb-2">BEST VALUE</div>}
                <div className="text-lg font-semibold text-slate-900 mb-1">{tier.service}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{tier.price}</div>
                <div className="text-sm text-slate-500 mb-4">{tier.unit}</div>
                {tier.savings && <div className="text-sm text-red-500">{tier.savings}</div>}
                {tier.highlight && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                    {['Verified results', 'No hidden fees', 'Pay only for compute'].map((f) => (
                      <div key={f} className="text-sm text-slate-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />{f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">* Prices are estimates for RTX 4090 equivalent. Final pricing at launch.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Upload Project', desc: 'Upload your .blend, .ma, or scene files via dashboard or CLI.', icon: Layers },
              { step: '02', title: 'Configure Render', desc: 'Set output format, frame range, and quality settings.', icon: Code2 },
              { step: '03', title: 'Distribute & Render', desc: 'Jobs are split across verified GPUs worldwide.', icon: Globe },
              { step: '04', title: 'Download Results', desc: 'Get rendered frames with proof of correct execution.', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div key={item.step} className="relative p-6 rounded-xl bg-slate-50 border border-slate-200"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="text-4xl font-bold text-slate-100 absolute top-4 right-4">{item.step}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the creative beta</h2>
          <p className="text-lg text-slate-400 mb-8">Be among the first studios to render on BitSage&apos;s distributed network.</p>

          {!isSubscribed ? (
            <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@studio.com"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none" required />
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
              <p className="text-slate-400 text-sm">We&apos;ll notify you when Creative Studios launches.</p>
            </div>
          )}

          <div className="mt-6">
            <Link href="/waitlist" className="text-slate-400 hover:text-white text-sm underline">Or join the full enterprise waitlist</Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
