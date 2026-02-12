'use client';

import { motion } from 'framer-motion';
import { Server, Coins, Shield, Zap, ArrowRight, CheckCircle, Cpu, TrendingUp, Lock, Users, Award, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemoModal';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const benefits = [
  {
    icon: Coins,
    title: '80% Revenue Share',
    description: 'Keep 80% of all compute fees. The highest payout in decentralized compute.',
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: 'SAGE Token Rewards',
    description: 'Earn additional SAGE tokens for network participation and uptime.',
  },
  {
    icon: Shield,
    title: 'Governance Rights',
    description: 'Vote on protocol upgrades, fee structures, and network parameters.',
  },
  {
    icon: Award,
    title: 'Reputation System',
    description: 'Build reputation for premium job access and higher earnings.',
  },
  {
    icon: Lock,
    title: 'Slashing Protection',
    description: 'Fair dispute resolution with cryptographic proof verification.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a community of GPU providers earning together.',
  },
];

const requirements = [
  { label: 'Minimum GPU', value: 'RTX 3080 / A4000', icon: Cpu },
  { label: 'VRAM Required', value: '10GB+', icon: Server },
  { label: 'Internet Speed', value: '100 Mbps+', icon: Zap },
  { label: 'Uptime Target', value: '95%+', icon: TrendingUp },
];

const earningsEstimate = [
  { gpu: 'RTX 4090', daily: '$15-40', monthly: '$450-1,200' },
  { gpu: 'A100 80GB', daily: '$40-100', monthly: '$1,200-3,000' },
  { gpu: 'H100 80GB', daily: '$70-150', monthly: '$2,100-4,500' },
];

export default function ValidatorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
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
              <Server className="w-4 h-4" />
              <span className="text-sm font-semibold">VALIDATOR NETWORK</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Earn Crypto with
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Your GPU Power
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Full DEGEN mode. Stake your GPUs, validate compute jobs, and earn 80% of all fees.
              Max rewards for true believers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-bold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                Start Earning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/docs/validators"
                className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all"
              >
                Read the Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '80%', label: 'Revenue Share' },
              { value: '10,000+', label: 'GPUs Online' },
              { value: '$2M+', label: 'Paid to Validators' },
              { value: '12-18%', label: 'Target APY' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-800 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Validate on BitSage?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The most rewarding decentralized compute network for GPU owners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`p-6 rounded-2xl border transition-all ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  benefit.highlight ? 'bg-amber-500/30' : 'bg-slate-700'
                }`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.highlight ? 'text-amber-400' : 'text-slate-300'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${benefit.highlight ? 'text-amber-300' : 'text-white'}`}>
                  {benefit.title}
                </h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Hardware Requirements
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Got a gaming PC or workstation? You&apos;re probably ready to start earning.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {requirements.map((req) => (
                  <div key={req.label} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <req.icon className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="text-sm text-slate-400">{req.label}</div>
                    <div className="text-lg font-semibold text-white">{req.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                    Earnings Estimate
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-slate-400 text-sm">
                        <th className="text-left pb-4">GPU</th>
                        <th className="text-right pb-4">Daily</th>
                        <th className="text-right pb-4">Monthly</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {earningsEstimate.map((row) => (
                        <tr key={row.gpu} className="border-t border-slate-700/50">
                          <td className="py-4 font-medium">{row.gpu}</td>
                          <td className="py-4 text-right text-emerald-400">{row.daily}</td>
                          <td className="py-4 text-right text-emerald-400 font-semibold">{row.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-500 mt-4">
                    * Estimates based on current network demand. Actual earnings may vary.
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
              Start in 3 Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Install Node Software', desc: 'Download and run the BitSage validator client. Works on Linux, Windows, and macOS.' },
              { step: '02', title: 'Stake SAGE Tokens', desc: 'Stake tokens to join the network. Higher stakes unlock premium job access.' },
              { step: '03', title: 'Start Earning', desc: 'Your GPU automatically accepts jobs and earns crypto 24/7.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-amber-500/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Put Your GPU to Work?
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              Join thousands of validators earning crypto with their idle GPU power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                Join the Network
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://validators.bitsage.network"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-slate-900/30 text-slate-900 font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Launch Validator App
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PublicPageLayout>
  );
}
