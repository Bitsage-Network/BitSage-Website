'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Cpu, Box, FileCode, ArrowRight, Users, Shield, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

const customerTypes = [
  'AI Startups',
  'Game Studios',
  'VFX Houses',
  'Research Labs',
  'Indie Creators',
  'Enterprise Teams',
];

const solutions = [
  {
    icon: Zap,
    title: 'Rendering Solutions',
    description: 'Deploy and scale rendering for 3D, VFX, and video generation with enterprise-grade reliability.',
    features: ['Sub-minute job starts', 'Auto-scaling compute', 'Frame-by-frame tracking'],
    href: '/docs/render-api',
    gradient: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/20',
  },
  {
    icon: Code2,
    title: 'AI Compute Solutions',
    description: 'Run inference and training for AI models with elastic GPU access and cryptographic verification.',
    features: ['LLM inference', 'Model fine-tuning', 'Batch processing'],
    href: '/docs/compute-api',
    gradient: 'from-emerald-500 to-cyan-600',
    bgGlow: 'bg-emerald-500/20',
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    description: 'AI-powered workflow optimization and asset management for creative and technical teams.',
    features: ['Asset optimization', 'Workflow guidance', 'Quality assurance'],
    href: '/docs/automation',
    gradient: 'from-violet-500 to-purple-600',
    bgGlow: 'bg-violet-500/20',
  },
  {
    icon: Box,
    title: 'Batch Processing',
    description: 'Scale to thousands of GPU workers for large-scale rendering and compute jobs.',
    features: ['Parallel execution', 'Cost optimization', 'Queue management'],
    href: '/docs/batch-processing',
    gradient: 'from-cyan-500 to-blue-600',
    bgGlow: 'bg-cyan-500/20',
  },
];

export function ProductCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trusted By Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-slate-500 mb-6 tracking-wide uppercase">Trusted by teams at</p>

          {/* Scrolling logos/names with gradient fade */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10" />

            <motion.div
              className="flex gap-12 items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {customerTypes.map((type, index) => (
                <motion.div
                  key={type}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{type}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
              <Clock className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-slate-300">SOLUTIONS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powering any GPU workload
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From rendering to inference, training to batch processing — the infrastructure developers need to ship faster.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70">
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${solution.bgGlow} rounded-full blur-3xl transition-opacity duration-300`}
                  animate={{ opacity: hoveredIndex === index ? 0.6 : 0.2 }}
                />

                {/* Icon with gradient background */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all"
                >
                  <span className={`bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/docs"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
            >
              <FileCode className="w-4 h-4" />
              View Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Request Early Access
            </button>
          </div>
        </motion.div>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
