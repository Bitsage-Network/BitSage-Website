'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Layers, Cpu, Clock, ArrowRight, CheckCircle, Shield, Zap,
  Film, Brain, FlaskConical, Box, BarChart3, Bell, Mail,
  Server, Globe, Lock, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const useCases = [
  {
    icon: Film,
    title: '3D Rendering & VFX',
    description: 'Blender, Maya, Houdini renders with cryptographic proof of completion.',
    color: 'amber',
  },
  {
    icon: Brain,
    title: 'AI Model Training',
    description: 'Distributed PyTorch & TensorFlow training across verified GPUs.',
    color: 'cyan',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Simulations',
    description: 'Molecular dynamics, CFD, and climate modeling at scale.',
    color: 'emerald',
  },
  {
    icon: Lock,
    title: 'ZK Proof Generation',
    description: 'Generate zero-knowledge proofs with verified computation.',
    color: 'violet',
  },
];

const features = [
  'Cryptographic result verification',
  'Parallel job processing',
  'Progress monitoring dashboard',
  'Cost-effective spot pricing',
  'Result attestation on-chain',
  'Priority queue for enterprise',
  'Auto-retry on failures',
  'Detailed job analytics',
];

const pricingTiers = [
  { gpu: 'RTX 4090', price: '$0.35', unit: '/GPU-hr', best: 'Rendering' },
  { gpu: 'A100 40GB', price: '$1.80', unit: '/GPU-hr', best: 'Training' },
  { gpu: 'H100 80GB', price: '$3.20', unit: '/GPU-hr', best: 'Large Models' },
];

export default function BatchComputePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({
          email,
          source: 'batch-compute-waitlist',
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
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 mb-6">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">BATCH COMPUTE</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-900 text-xs font-bold">COMING Q2 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Large-Scale GPU Jobs
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                With Verified Results
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Submit rendering, training, and simulation workloads to our distributed GPU network.
              Every result is cryptographically verified for integrity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Join Waitlist
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

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Heavy Workloads
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From Hollywood VFX to cutting-edge AI research, batch compute handles it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const colors: Record<string, string> = {
                amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
                cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
                emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
                violet: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
              };
              return (
                <motion.div
                  key={useCase.title}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors[useCase.color]} flex items-center justify-center mb-4`}>
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-slate-400">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Everything you need to run production workloads with confidence.
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
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold text-white">Estimated Pricing</span>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {pricingTiers.map((tier) => (
                      <div key={tier.gpu} className="flex items-center justify-between p-4 rounded-xl bg-slate-700/30">
                        <div>
                          <div className="font-semibold text-white">{tier.gpu}</div>
                          <div className="text-xs text-slate-500">Best for {tier.best}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-cyan-400">{tier.price}</div>
                          <div className="text-xs text-slate-500">{tier.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    * Prices are estimates. Final pricing available at launch.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Batch Compute Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Upload Job', desc: 'Submit your workload via API, CLI, or dashboard.', icon: Server },
              { step: '02', title: 'Distribute', desc: 'Jobs are split across verified GPU providers.', icon: Globe },
              { step: '03', title: 'Execute & Verify', desc: 'Results are cryptographically verified.', icon: Shield },
              { step: '04', title: 'Deliver', desc: 'Get results with proof of correct execution.', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-cyan-500/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Notify Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Early Access
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Be the first to know when Batch Compute launches. Join the waitlist for priority access.
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
                    className="px-6 py-4 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-50 transition-all"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">You're on the list!</p>
                <p className="text-cyan-100 text-sm">We'll notify you when Batch Compute launches.</p>
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
