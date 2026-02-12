'use client';

import { motion } from 'framer-motion';
import { Globe, Shield, Clock, CreditCard, Zap, Server, CheckCircle, ArrowRight, Building2, Lock, Headphones, FileCheck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemoModal';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const features = [
  {
    icon: Shield,
    title: 'SOC2 Type II Compliant',
    description: 'Enterprise-grade security with full audit trails and compliance documentation.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime SLA',
    description: 'Guaranteed availability with financial penalties for any downtime.',
  },
  {
    icon: CreditCard,
    title: 'Fiat Payments',
    description: 'Pay with credit card, wire transfer, or invoicing. No crypto required.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 enterprise support with dedicated account managers and SLAs.',
  },
  {
    icon: Lock,
    title: 'Data Sovereignty',
    description: 'Choose your compute region. Your data never leaves your control.',
  },
  {
    icon: FileCheck,
    title: 'Custom Contracts',
    description: 'Flexible MSAs, BAAs for healthcare, and custom procurement terms.',
  },
];

const gpuTiers = [
  { name: 'NVIDIA RTX 4090', vram: '24GB', price: '$0.40', useCase: 'Inference, Rendering' },
  { name: 'NVIDIA A100', vram: '80GB', price: '$2.00', useCase: 'Training, Large Models' },
  { name: 'NVIDIA H100', vram: '80GB TEE', price: '$3.50', useCase: 'Confidential Compute' },
  { name: 'NVIDIA B200', vram: '192GB', price: '$5.00', useCase: 'Next-Gen AI' },
];

const useCases = [
  'AI/ML Model Training',
  'Large Language Model Inference',
  'Video & 3D Rendering',
  'Scientific Computing',
  'Drug Discovery Simulations',
  'Financial Modeling',
];

export default function MarketplacePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PublicPageLayout className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">ENTERPRISE MARKETPLACE</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise GPU Compute
              <span className="block text-blue-600">Without the Complexity</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Production-grade GPU infrastructure with SOC2 compliance, SLA guarantees, and fiat payments.
              Scale your AI workloads without crypto complexity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                Contact Sales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/docs"
                className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: 'SOC2', label: 'Type II Certified' },
              { value: '24/7', label: 'Enterprise Support' },
              { value: '$0', label: 'Crypto Required' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Enterprise Requirements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything your procurement, security, and engineering teams need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Pay only for what you use. Volume discounts available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuTiers.map((gpu, index) => (
              <motion.div
                key={gpu.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-900">{gpu.name}</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {gpu.price}<span className="text-lg text-slate-500">/hr</span>
                </div>
                <div className="text-sm text-slate-500 mb-4">{gpu.vram} VRAM</div>
                <div className="text-sm text-blue-600">{gpu.useCase}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Powering Enterprise AI
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From Fortune 500 companies to fast-growing startups, teams trust BitSage for their most demanding GPU workloads.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Quick Start</span>
                </div>
                <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
{`# No crypto wallet needed
$ bitsage login --enterprise

# Submit your first job
$ bitsage compute run \\
    --gpu H100 \\
    --script train.py \\
    --billing invoice

Job submitted: job_abc123
Estimated cost: $45.00`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your AI Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with a free trial or talk to our enterprise team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://marketplace.bitsage.network"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Launch Marketplace
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PublicPageLayout>
  );
}
