'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Cpu, Box, ArrowRight, Globe, Server, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

const solutions = [
  {
    icon: Zap,
    title: 'Rendering',
    description: 'Deploy and scale rendering for 3D, VFX, and video generation with enterprise-grade reliability.',
    features: ['Sub-minute job starts', 'Auto-scaling compute', 'Frame-by-frame tracking'],
    href: '/docs/render-api',
  },
  {
    icon: Code2,
    title: 'AI Compute',
    description: 'Run inference and training with elastic GPU access. Every result is cryptographically verified.',
    features: ['LLM inference', 'Model fine-tuning', 'Batch processing'],
    href: '/docs/compute-api',
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    description: 'AI-powered workflow optimization and asset management for creative and technical teams.',
    features: ['Pipeline orchestration', 'Asset optimization', 'Quality assurance'],
    href: '/docs/automation',
  },
  {
    icon: Box,
    title: 'Batch Processing',
    description: 'Scale to thousands of GPU workers for large-scale parallel compute jobs.',
    features: ['Parallel execution', 'Cost optimization', 'Queue management'],
    href: '/docs/batch-processing',
  },
];

const platforms = [
  {
    icon: Globe,
    title: 'Marketplace',
    description: 'Production-grade GPU compute with SOC2 compliance, SLA guarantees, and fiat payments.',
    href: '/marketplace',
    badge: 'Enterprise',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Server,
    title: 'Validator Network',
    description: 'Provide GPUs, validate compute jobs, and earn fees. The supply side of BitSage.',
    href: '/validators',
    badge: 'Earn',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Lock,
    title: 'Obelysk Protocol',
    description: 'On-chain privacy layer built on Stark. Dark pool trading, private staking, encrypted wallets.',
    href: '/obelysk',
    badge: 'Privacy',
    badgeColor: 'bg-violet-100 text-violet-700',
  },
];

export function ProductCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative bg-mesh-blue">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Solutions Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">What you can build</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            GPU compute for every workload
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Rendering, inference, training, batch processing -- all running on verified hardware with cryptographic proof of execution.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-6">
                  <solution.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 text-[--accent] font-medium text-sm hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">How it works</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                One network. Every layer.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                BitSage connects GPU demand with verified supply. The marketplace serves enterprise teams, validators power the network, and Obelysk adds an on-chain privacy layer. All built on the same verifiable infrastructure.
              </p>
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/network-section.jpg"
                alt="BitSage global GPU network"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={platform.href} className="block h-full group">
                  <div className="h-full p-8 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold mb-6 ${platform.badgeColor}`}>
                      {platform.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                      <platform.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[--accent] transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {platform.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[--accent] font-medium text-sm">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/docs"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors text-sm"
            >
              Read the docs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:text-slate-900 transition-all text-sm"
            >
              Request access
            </button>
          </div>
        </motion.div>
      </div>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
