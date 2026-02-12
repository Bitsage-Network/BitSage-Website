'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Film, Cpu, ArrowRight, CheckCircle, Shield, Globe,
  Palette, BarChart3, Bell, Mail, Server, Clock,
  Box, Layers, Code2, Lock, TrendingUp, Clapperboard,
  Building2, Gamepad2, Wand2
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const useCases = [
  {
    icon: Film,
    title: '3D Rendering & Animation',
    description: 'Blender, Maya, Cinema 4D, and Houdini renders with cryptographic proof of completion.',
    examples: ['Feature films', 'Animated series', 'Commercial spots'],
  },
  {
    icon: Clapperboard,
    title: 'VFX & Compositing',
    description: 'After Effects, Nuke, and DaVinci Resolve workflows at scale.',
    examples: ['Visual effects', 'Color grading', 'Motion graphics'],
  },
  {
    icon: Gamepad2,
    title: 'Game Asset Baking',
    description: 'Lightmaps, texture baking, and LOD generation for game engines.',
    examples: ['Unreal Engine', 'Unity', 'Custom engines'],
  },
  {
    icon: Building2,
    title: 'Architectural Visualization',
    description: 'V-Ray, Corona, and Lumion renders for architecture and real estate.',
    examples: ['Interiors', 'Exteriors', 'Walkthroughs'],
  },
];

const features = [
  'Blender & Maya native support',
  'Houdini simulation caching',
  'After Effects render queues',
  'DaVinci Resolve integration',
  'Progress monitoring dashboard',
  'Multi-format output (EXR, PNG, MP4)',
  'Version control for assets',
  'Team collaboration tools',
];

const pricingComparison = [
  { service: 'BitSage Network', price: '$0.35', unit: '/GPU-hr', savings: '-', highlight: true },
  { service: 'Traditional Render Farm', price: '$0.85', unit: '/GPU-hr', savings: '59% more', highlight: false },
  { service: 'AWS/GCP On-Demand', price: '$1.20', unit: '/GPU-hr', savings: '71% more', highlight: false },
];

const supportedSoftware = [
  { name: 'Blender', category: '3D' },
  { name: 'Maya', category: '3D' },
  { name: 'Houdini', category: 'VFX' },
  { name: 'Cinema 4D', category: '3D' },
  { name: 'After Effects', category: 'Motion' },
  { name: 'DaVinci Resolve', category: 'Color' },
  { name: 'Nuke', category: 'Compositing' },
  { name: 'V-Ray', category: 'Render' },
];

export default function CreativeStudiosPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({
          email,
          source: 'creative-studios-waitlist',
        });
        if (result.success) {
          setIsSubscribed(true);
          setEmail('');
        }
      } catch (error) {
        console.error('Subscription error:', error);
      }
    }
  };

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects - Amber/Orange theme */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 mb-6">
              <Palette className="w-4 h-4" />
              <span className="text-sm font-semibold">CREATIVE STUDIOS</span>
              <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-xs font-bold">COMING Q2 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GPU Power for
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Creative Professionals
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Render Blender, Maya, Houdini, and Unreal Engine projects on our distributed GPU network.
              Verified results, transparent pricing, and studio-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Join Creative Beta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Creative Workflows
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From feature films to game development, BitSage handles your heaviest creative workloads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example) => (
                    <span key={example} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400">
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Pipeline Integration
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                BitSage integrates directly with your existing creative tools and render managers.
                Submit jobs without changing your workflow.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Supported Software Grid */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-white">Supported Software</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {supportedSoftware.map((sw) => (
                      <div key={sw.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-700/30">
                        <span className="font-medium text-white">{sw.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">{sw.category}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    + Custom render pipelines via API
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Save Up to 60% on Rendering
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Compared to traditional render farms and cloud providers, BitSage delivers
              significant cost savings with verifiable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingComparison.map((tier) => (
              <motion.div
                key={tier.service}
                className={`p-6 rounded-2xl border ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-amber-500/10 to-orange-500/10 border-amber-500/30'
                    : 'bg-slate-800/50 border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {tier.highlight && (
                  <div className="text-xs font-bold text-amber-400 mb-2">BEST VALUE</div>
                )}
                <div className="text-lg font-bold text-white mb-1">{tier.service}</div>
                <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>
                <div className="text-sm text-slate-500 mb-4">{tier.unit}</div>
                {tier.savings !== '-' && (
                  <div className="text-sm text-red-400">{tier.savings}</div>
                )}
                {tier.highlight && (
                  <div className="mt-4 pt-4 border-t border-amber-500/30">
                    <ul className="space-y-2">
                      <li className="text-sm text-slate-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        Verified results
                      </li>
                      <li className="text-sm text-slate-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        No hidden fees
                      </li>
                      <li className="text-sm text-slate-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        Pay only for compute
                      </li>
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            * Prices are estimates for RTX 4090 equivalent. Final pricing available at launch.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Upload Project', desc: 'Upload your .blend, .ma, or scene files via our dashboard or CLI.', icon: Layers },
              { step: '02', title: 'Configure Render', desc: 'Set output format, frame range, and quality settings.', icon: Code2 },
              { step: '03', title: 'Distribute & Render', desc: 'Jobs are split across verified GPUs worldwide.', icon: Globe },
              { step: '04', title: 'Download Results', desc: 'Get rendered frames with proof of correct execution.', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-amber-500/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Notify Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Creative Beta
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Be among the first studios to render on BitSage's distributed network.
              Priority access for early sign-ups.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-all"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">You're on the list!</p>
                <p className="text-amber-100 text-sm">We'll notify you when Creative Studios launches.</p>
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/waitlist"
                className="text-white/80 hover:text-white underline text-sm"
              >
                Or join the full enterprise waitlist →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
