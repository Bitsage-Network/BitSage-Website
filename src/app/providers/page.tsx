'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Server, Shield, Zap, ArrowRight, CheckCircle, Cpu, TrendingUp,
  DollarSign, Clock, Globe, Lock, Users, Wallet, Calculator,
  Monitor, HardDrive, Wifi
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
  { step: '01', title: 'Install Node Software', description: 'Download and run our lightweight node client. Works on Linux, Windows, and macOS.', icon: Monitor },
  { step: '02', title: 'Connect Your Wallet', description: 'Link your Starknet wallet to receive payments. Stake SAGE tokens to join the network.', icon: Wallet },
  { step: '03', title: 'Start Earning', description: 'Your GPU automatically accepts jobs and earns crypto. Monitor earnings in real-time.', icon: TrendingUp },
];

const requirements = [
  { label: 'GPU', value: 'RTX 3080 / A4000+', icon: Cpu, detail: 'NVIDIA with 10GB+ VRAM' },
  { label: 'RAM', value: '16GB+', icon: HardDrive, detail: 'System memory' },
  { label: 'Internet', value: '100 Mbps+', icon: Wifi, detail: 'Stable connection' },
  { label: 'Uptime', value: '95%+', icon: Clock, detail: 'For maximum earnings' },
];

const benefits = [
  { icon: DollarSign, title: '80% Revenue Share', description: 'Industry-leading payout. Keep 80% of all compute fees.', highlight: true },
  { icon: Shield, title: 'Verified Payments', description: 'All jobs verified on-chain. Fair payment guaranteed.' },
  { icon: Zap, title: 'Instant Settlement', description: 'Earnings settle to your wallet automatically.' },
  { icon: Globe, title: 'Global Demand', description: 'Connect with enterprise clients worldwide.' },
  { icon: Lock, title: 'Slashing Protection', description: 'Fair dispute resolution with proof verification.' },
  { icon: Users, title: 'Community Rewards', description: 'Earn SAGE tokens for uptime and participation.' },
];

export default function ProvidersPage() {
  const [selectedGpu, setSelectedGpu] = useState(gpuOptions[2]);
  const [gpuCount, setGpuCount] = useState(1);

  useEffect(() => {
    document.title = 'Become a Provider - BitSage Network';
  }, []);

  const monthlyLow = selectedGpu.dailyLow * 30 * gpuCount;
  const monthlyHigh = selectedGpu.dailyHigh * 30 * gpuCount;

  return (
    <PublicPageLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white bg-mesh-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
                <Server className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600">GPU Provider Network</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Turn Your GPUs Into{' '}
                <span className="text-[--accent]">Revenue</span>
              </h1>

              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Join the BitSage network and earn by providing GPU compute power.
                80% revenue share -- the highest in decentralized compute.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/waitlist"
                  className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Join provider waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Setup guide
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '80%', label: 'Revenue Share' },
                  { value: '5,000+', label: 'GPUs Online' },
                  { value: '$1M+', label: 'Paid Out' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Earnings Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-slate-500" />
                <h3 className="font-semibold text-slate-900">Earnings Calculator</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <label className="text-sm text-slate-500 mb-2 block">Select Your GPU</label>
                  <div className="grid grid-cols-2 gap-2">
                    {gpuOptions.map((gpu) => (
                      <button
                        key={gpu.name}
                        onClick={() => setSelectedGpu(gpu)}
                        className={`p-3 rounded-lg text-left transition-all ${
                          selectedGpu.name === gpu.name
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-sm font-semibold">{gpu.name}</div>
                        <div className={`text-xs ${selectedGpu.name === gpu.name ? 'text-slate-400' : 'text-slate-500'}`}>{gpu.vram} VRAM</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm text-slate-500 mb-2 block">Number of GPUs</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGpuCount(Math.max(1, gpuCount - 1))}
                      className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
                    >-</button>
                    <div className="flex-1 text-center">
                      <span className="text-3xl font-bold text-slate-900">{gpuCount}</span>
                      <span className="text-slate-500 ml-2">GPU{gpuCount > 1 ? 's' : ''}</span>
                    </div>
                    <button
                      onClick={() => setGpuCount(Math.min(16, gpuCount + 1))}
                      className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
                    >+</button>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-sm text-slate-500 mb-2">Estimated Monthly Earnings</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    ${monthlyLow.toLocaleString()} - ${monthlyHigh.toLocaleString()}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">
                    ${selectedGpu.dailyLow * gpuCount} - ${selectedGpu.dailyHigh * gpuCount}/day
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    * Estimates based on current network demand. Actual earnings may vary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '80%', label: 'Revenue to Providers' },
              { value: '24/7', label: 'Automated Earnings' },
              { value: '99.9%', label: 'Payment Reliability' },
              { value: '<1hr', label: 'Avg. Settlement Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why providers choose BitSage
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The most rewarding and reliable network for GPU compute providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`p-6 rounded-xl border transition-all ${
                  benefit.highlight
                    ? 'bg-slate-50 border-slate-900 ring-1 ring-slate-900'
                    : 'bg-white border-slate-200 hover:shadow-md hover:border-slate-300'
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Requirements</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Hardware you probably already have
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                Got a gaming PC or workstation? You&apos;re probably ready to start earning.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {requirements.map((req) => (
                  <div key={req.label} className="p-4 rounded-xl bg-white border border-slate-200">
                    <req.icon className="w-5 h-5 text-slate-500 mb-2" />
                    <div className="text-xs text-slate-500">{req.label}</div>
                    <div className="text-base font-semibold text-slate-900">{req.value}</div>
                    <div className="text-xs text-slate-400">{req.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Supported GPUs
              </h3>
              <div className="space-y-3">
                {gpuOptions.map((gpu) => (
                  <div key={gpu.name} className="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                    <div>
                      <div className="font-medium text-white text-sm">{gpu.name}</div>
                      <div className="text-xs text-slate-500">{gpu.vram} VRAM</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-emerald-400">${gpu.dailyLow}-${gpu.dailyHigh}/day</div>
                      <div className="text-xs text-slate-500">{gpu.tier}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Start earning in 3 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-8 rounded-xl bg-slate-50 border border-slate-200"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-5xl font-bold text-slate-100 absolute top-4 right-4">{item.step}</div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to monetize your GPUs?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join thousands of providers earning with their idle GPU power.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/waitlist"
              className="group px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2 text-sm"
            >
              Join provider waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/validators"
              className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-slate-600 hover:text-white transition-all text-sm"
            >
              Learn about validators
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
