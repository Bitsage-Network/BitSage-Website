'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Server, Shield, Zap, ArrowRight, CheckCircle, Cpu, TrendingUp,
  DollarSign, Clock, Globe, Lock, Users, Wallet, Calculator,
  Monitor, HardDrive, Wifi, ChevronRight, Play
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const gpuOptions = [
  { name: 'RTX 3080', vram: '10GB', dailyLow: 8, dailyHigh: 15, tier: 'Entry' },
  { name: 'RTX 3090', vram: '24GB', dailyLow: 12, dailyHigh: 25, tier: 'Mid' },
  { name: 'RTX 4090', vram: '24GB', dailyLow: 15, dailyHigh: 40, tier: 'High' },
  { name: 'A100 40GB', vram: '40GB', dailyLow: 30, dailyHigh: 80, tier: 'Pro' },
  { name: 'A100 80GB', vram: '80GB', dailyLow: 40, dailyHigh: 100, tier: 'Pro' },
  { name: 'H100 80GB', vram: '80GB', dailyLow: 70, dailyHigh: 150, tier: 'Enterprise' },
];

const steps = [
  {
    step: '01',
    title: 'Install Node Software',
    description: 'Download and run our lightweight node client. Works on Linux, Windows, and macOS.',
    icon: Monitor,
  },
  {
    step: '02',
    title: 'Connect Your Wallet',
    description: 'Link your Starknet wallet to receive payments. Stake SAGE tokens to join the network.',
    icon: Wallet,
  },
  {
    step: '03',
    title: 'Start Earning 24/7',
    description: 'Your GPU automatically accepts jobs and earns crypto. Monitor earnings in real-time.',
    icon: TrendingUp,
  },
];

const requirements = [
  { label: 'GPU', value: 'RTX 3080 / A4000+', icon: Cpu, detail: 'NVIDIA with 10GB+ VRAM' },
  { label: 'RAM', value: '16GB+', icon: HardDrive, detail: 'System memory' },
  { label: 'Internet', value: '100 Mbps+', icon: Wifi, detail: 'Stable connection' },
  { label: 'Uptime', value: '95%+', icon: Clock, detail: 'For maximum earnings' },
];

const benefits = [
  {
    icon: DollarSign,
    title: '80% Revenue Share',
    description: 'Industry-leading payout. Keep 80% of all compute fees.',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Cryptographic Verification',
    description: 'All jobs verified on-chain. Fair payment guaranteed.',
  },
  {
    icon: Zap,
    title: 'Instant Payments',
    description: 'Earnings settle to your wallet automatically.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with enterprise clients worldwide.',
  },
  {
    icon: Lock,
    title: 'Slashing Protection',
    description: 'Fair dispute resolution with proof verification.',
  },
  {
    icon: Users,
    title: 'Community Rewards',
    description: 'Earn SAGE tokens for uptime and participation.',
  },
];

export default function ProvidersPage() {
  const [selectedGpu, setSelectedGpu] = useState(gpuOptions[2]); // RTX 4090 default
  const [gpuCount, setGpuCount] = useState(1);

  const monthlyLow = selectedGpu.dailyLow * 30 * gpuCount;
  const monthlyHigh = selectedGpu.dailyHigh * 30 * gpuCount;

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 mb-6">
                <Server className="w-4 h-4" />
                <span className="text-sm font-semibold">GPU PROVIDER NETWORK</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Turn Your GPUs Into
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Passive Income
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Join the BitSage network and earn crypto by providing GPU compute power.
                80% revenue share — the highest in decentralized compute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/waitlist"
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <Wallet className="w-5 h-5" />
                  Join Provider Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/docs/providers"
                  className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Setup Guide
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '80%', label: 'Revenue Share' },
                  { value: '5,000+', label: 'GPUs Online' },
                  { value: '$1M+', label: 'Paid Out' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Earnings Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Earnings Calculator</h3>
              </div>

              <div className="p-6">
                {/* GPU Selection */}
                <div className="mb-6">
                  <label className="text-sm text-slate-400 mb-2 block">Select Your GPU</label>
                  <div className="grid grid-cols-2 gap-2">
                    {gpuOptions.map((gpu) => (
                      <button
                        key={gpu.name}
                        onClick={() => setSelectedGpu(gpu)}
                        className={`p-3 rounded-xl text-left transition-all ${
                          selectedGpu.name === gpu.name
                            ? 'bg-emerald-500/20 border-2 border-emerald-500/50'
                            : 'bg-slate-700/30 border-2 border-transparent hover:border-slate-600'
                        }`}
                      >
                        <div className="text-sm font-semibold text-white">{gpu.name}</div>
                        <div className="text-xs text-slate-500">{gpu.vram} VRAM</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* GPU Count */}
                <div className="mb-6">
                  <label className="text-sm text-slate-400 mb-2 block">Number of GPUs</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGpuCount(Math.max(1, gpuCount - 1))}
                      className="w-10 h-10 rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-600 transition-all"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center">
                      <span className="text-3xl font-bold text-white">{gpuCount}</span>
                      <span className="text-slate-400 ml-2">GPU{gpuCount > 1 ? 's' : ''}</span>
                    </div>
                    <button
                      onClick={() => setGpuCount(Math.min(16, gpuCount + 1))}
                      className="w-10 h-10 rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-600 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Estimated Earnings */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-6 border border-emerald-500/20">
                  <div className="text-sm text-slate-400 mb-2">Estimated Monthly Earnings</div>
                  <div className="text-4xl font-bold text-white mb-1">
                    ${monthlyLow.toLocaleString()} - ${monthlyHigh.toLocaleString()}
                  </div>
                  <div className="text-sm text-emerald-400">
                    ${selectedGpu.dailyLow * gpuCount} - ${selectedGpu.dailyHigh * gpuCount}/day
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    * Estimates based on current network demand. Actual earnings may vary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '80%', label: 'Revenue to Providers' },
              { value: '24/7', label: 'Automated Earnings' },
              { value: '99.9%', label: 'Payment Reliability' },
              { value: '<1hr', label: 'Avg. Settlement Time' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
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
              Why Providers Choose BitSage
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The most rewarding and reliable network for GPU compute providers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`p-6 rounded-2xl border transition-all ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border-emerald-500/30'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  benefit.highlight ? 'bg-emerald-500/30' : 'bg-slate-700'
                }`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.highlight ? 'text-emerald-400' : 'text-slate-300'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${benefit.highlight ? 'text-emerald-300' : 'text-white'}`}>
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
                Got a gaming PC or workstation? You're probably ready to start earning.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {requirements.map((req) => (
                  <div key={req.label} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <req.icon className="w-5 h-5 text-emerald-400 mb-2" />
                    <div className="text-sm text-slate-400">{req.label}</div>
                    <div className="text-lg font-semibold text-white">{req.value}</div>
                    <div className="text-xs text-slate-500">{req.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Supported GPUs
                </h3>
                <div className="space-y-3">
                  {gpuOptions.map((gpu) => (
                    <div key={gpu.name} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                      <div>
                        <div className="font-medium text-white">{gpu.name}</div>
                        <div className="text-xs text-slate-500">{gpu.vram} VRAM</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-emerald-400">${gpu.dailyLow}-${gpu.dailyHigh}/day</div>
                        <div className={`text-xs px-2 py-0.5 rounded-full ${
                          gpu.tier === 'Enterprise' ? 'bg-violet-500/20 text-violet-300' :
                          gpu.tier === 'Pro' ? 'bg-cyan-500/20 text-cyan-300' :
                          gpu.tier === 'High' ? 'bg-emerald-500/20 text-emerald-300' :
                          'bg-slate-600/50 text-slate-400'
                        }`}>
                          {gpu.tier}
                        </div>
                      </div>
                    </div>
                  ))}
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
              Start Earning in 3 Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-emerald-500/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Monetize Your GPUs?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of providers earning passive income with their idle GPU power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all flex items-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                Join Provider Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/validators"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Learn About Validators
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
