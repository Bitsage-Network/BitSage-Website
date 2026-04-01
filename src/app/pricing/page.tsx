'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDown, Cpu, Zap, ArrowRight, CheckCircle,
  DollarSign, Clock
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import RequestDemoModal from '@/components/RequestDemoModal';

const gpuPricing = [
  { gpu: 'RTX 4090', vram: '24GB', price: '$0.40/hr', bestFor: 'Inference & Rendering' },
  { gpu: 'A100 40GB', vram: '40GB', price: '$1.80/hr', bestFor: 'Model Training' },
  { gpu: 'A100 80GB', vram: '80GB', price: '$2.00/hr', bestFor: 'Large Models' },
  { gpu: 'H100 80GB', vram: '80GB', price: '$3.50/hr', bestFor: 'Confidential Compute' },
  { gpu: 'B200', vram: '192GB', price: '$5.00/hr', bestFor: 'Next-Gen AI' },
];

const inferenceTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      '1M tokens/mo',
      'Shared GPUs',
      'Best-effort latency',
      'Community models',
    ],
    cta: 'Get started',
    ctaLink: '/waitlist',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$0.50',
    period: 'per 1M tokens',
    features: [
      'Dedicated GPUs',
      'Low-latency SLA',
      'All models',
      'Priority support',
    ],
    cta: 'Get started',
    ctaLink: '/waitlist',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Private deployment',
      'ZK-verified inference',
      'Custom SLAs',
      'Dedicated account manager',
    ],
    cta: 'Contact us',
    ctaLink: null,
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'How does billing work?',
    answer: "You're billed per GPU-hour of compute used. Jobs are metered in real-time. No minimum commitment, no upfront payments.",
  },
  {
    question: "What's included in the free tier?",
    answer: '1 million tokens per month on shared GPUs with best-effort latency. No credit card required. Upgrade anytime.',
  },
  {
    question: 'Do you offer volume discounts?',
    answer: 'Yes. Teams using more than 10,000 GPU-hours per month qualify for custom enterprise pricing. Contact us for details.',
  },
  {
    question: 'How does provider payment work?',
    answer: 'Providers earn 80% of compute fees. Payments settle automatically to your connected wallet within one hour of job completion.',
  },
  {
    question: 'Is there a minimum contract?',
    answer: 'No. Pay-as-you-go with no minimums. Enterprise customers can opt for committed-use discounts with annual agreements.',
  },
  {
    question: 'What verification is included?',
    answer: 'All compute jobs include zero-knowledge proof of correct execution at no additional cost. Proofs are verifiable on-chain.',
  },
];

const providerStats = [
  { label: 'Revenue share', value: '80%', icon: DollarSign },
  { label: 'Automated', value: '24/7', icon: Clock },
  { label: 'Settlement', value: '<1hr', icon: Zap },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <PublicPageLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[--accent] mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Pay only for what you use. No hidden fees, no long-term contracts. Estimated pre-launch rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GPU Compute Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">GPU compute rates</h2>
          </motion.div>

          <motion.div
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Table header */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 px-6 py-4 border-b border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">GPU</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">VRAM</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Price/hr</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Best For</p>
            </div>
            {/* Table rows */}
            {gpuPricing.map((row, i) => (
              <div
                key={row.gpu}
                className={`grid sm:grid-cols-4 gap-2 sm:gap-4 px-6 py-4 ${
                  i < gpuPricing.length - 1 ? 'border-b border-slate-800' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-white font-medium text-sm">{row.gpu}</span>
                </div>
                <div className="sm:flex sm:items-center">
                  <span className="text-sm text-slate-400 sm:hidden font-medium">VRAM: </span>
                  <span className="text-sm text-slate-300">{row.vram}</span>
                </div>
                <div className="sm:flex sm:items-center">
                  <span className="text-sm text-slate-400 sm:hidden font-medium">Price: </span>
                  <span className="text-sm font-semibold text-[--accent]">{row.price}</span>
                </div>
                <div className="sm:flex sm:items-center">
                  <span className="text-sm text-slate-400 sm:hidden font-medium">Best for: </span>
                  <span className="text-sm text-slate-400">{row.bestFor}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <p className="text-sm text-slate-400 text-center mt-6">
            All prices are per GPU-hour. Volume discounts available.
          </p>
        </div>
      </section>

      {/* AI Inference Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI inference pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {inferenceTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className={`relative bg-white rounded-xl p-8 flex flex-col ${
                  tier.highlighted
                    ? 'border border-slate-900 ring-1 ring-slate-900'
                    : 'border border-slate-200'
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border border-slate-900 rounded-full text-xs font-semibold text-[--accent]">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-400 ml-1">/{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[--accent] mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.ctaLink ? (
                  <Link
                    href={tier.ctaLink}
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold text-center transition-colors ${
                      tier.highlighted
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                ) : (
                  <button
                    onClick={() => setDemoOpen(true)}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-center bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    {tier.cta}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Earnings */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Earn as a provider</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Provide GPU compute and earn 80% of fees -- the highest revenue share in the industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {providerStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <stat.icon className="w-5 h-5 text-[--accent] mx-auto mb-3" />
                <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[--accent] transition-colors"
            >
              View the earnings calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-[--accent] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need custom pricing?</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Enterprise teams, high-volume users, and research institutions qualify for custom rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setDemoOpen(true)}
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm"
              >
                Request a quote
              </button>
              <Link
                href="/docs"
                className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm text-center"
              >
                View documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </PublicPageLayout>
  );
}
