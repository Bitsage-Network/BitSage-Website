'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Cpu, Box, FileCode, ArrowRight, Users, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

const customerTypes = [
  { name: 'AI Startups', icon: Zap },
  { name: 'Game Studios', icon: Code2 },
  { name: 'VFX Houses', icon: Box },
  { name: 'Research Labs', icon: Cpu },
  { name: 'Indie Creators', icon: Users },
  { name: 'Enterprise Teams', icon: Shield },
];

const solutions = [
  {
    icon: Zap,
    title: 'Rendering Solutions',
    description: 'Deploy and scale rendering for 3D, VFX, and video generation with enterprise-grade reliability.',
    features: ['Sub-minute job starts', 'Auto-scaling compute', 'Frame-by-frame tracking'],
    cta: 'Learn more',
    href: '/docs/render-api',
  },
  {
    icon: Code2,
    title: 'AI Compute Solutions',
    description: 'Run inference and training for AI models with elastic GPU access and cryptographic verification.',
    features: ['LLM inference', 'Model fine-tuning', 'Batch processing'],
    cta: 'Learn more',
    href: '/docs/compute-api',
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    description: 'AI-powered workflow optimization and asset management for creative and technical teams.',
    features: ['Asset optimization', 'Workflow guidance', 'Quality assurance'],
    cta: 'Learn more',
    href: '/docs/automation',
  },
  {
    icon: Box,
    title: 'Batch Processing',
    description: 'Scale to thousands of GPU workers for large-scale rendering and compute jobs.',
    features: ['Parallel execution', 'Cost optimization', 'Queue management'],
    cta: 'Learn more',
    href: '/docs/batch-processing',
  },
];

export function ProductCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        {/* Fine dot pattern texture */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Subtle line pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Very subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 via-white to-emerald-50/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customer Types Strip - Light Version */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-slate-600 mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {customerTypes.map((type, index) => (
              <motion.div
                key={type.name}
                className="flex items-center gap-2 text-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <type.icon className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium">{type.name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Enterprise Security Badge - Light Version */}
          <motion.div
            className="inline-flex items-center gap-6 px-6 py-3 bg-white rounded-lg border border-slate-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">99.9% Uptime SLA Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
            <Code2 className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">SOLUTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powering any GPU workload
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From rendering to inference, training to batch processing, BitSage provides the infrastructure developers need to ship faster.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <solution.icon className="w-6 h-6 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 group-hover:gap-3 transition-all"
                >
                  {solution.cta}
                  <ArrowRight className="w-4 h-4" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <FileCode className="w-4 h-4" />
              View Documentation
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              Early Access
            </button>
          </div>
        </motion.div>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

