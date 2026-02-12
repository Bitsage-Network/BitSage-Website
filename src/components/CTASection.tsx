'use client';

import { motion } from 'framer-motion';
import { Sparkles, Rocket, Globe, ArrowRight, Zap, Lock, Server, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

const ctas = [
  {
    icon: Globe,
    title: 'Enterprise Marketplace',
    description: 'Production-grade GPU compute with SOC2 compliance, SLA guarantees, and fiat payments. No crypto required.',
    badge: 'Enterprise',
    badgeColor: 'bg-blue-500',
    link: '/marketplace',
    external: false,
  },
  {
    icon: Server,
    title: 'Become a Validator',
    description: 'Full crypto DEGEN mode. Stake your GPUs, validate compute jobs, and earn 80% of all fees. Max rewards for believers.',
    badge: 'Crypto',
    badgeColor: 'bg-amber-500',
    link: '/validators',
    external: false,
    highlight: true,
  },
  {
    icon: Lock,
    title: 'Obelysk Protocol',
    description: 'Privacy-enabled DeFi on the Stark Curve. Dark pool trading, privacy wallets, and private staking.',
    badge: 'New',
    badgeColor: 'bg-violet-500',
    link: '/obelysk',
    external: false,
  },
];

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Dark background with effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        {/* Glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">CHOOSE YOUR PATH</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether you need enterprise compute, want to earn as a validator, or explore privacy DeFi - we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctas.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {cta.external ? (
                <a href={cta.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <CTACard cta={cta} />
                </a>
              ) : (
                <Link href={cta.link || '#'} className="block h-full">
                  <CTACard cta={cta} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate-400 mb-6">Not sure where to start?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25"
          >
            <Sparkles className="w-5 h-5" />
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

function CTACard({ cta }: { cta: typeof ctas[0] }) {
  return (
    <div className={`
      h-full rounded-2xl p-8 flex flex-col border transition-all duration-300
      ${cta.highlight
        ? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border-amber-500/50 shadow-lg shadow-amber-500/10'
        : 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50'
      }
      group-hover:shadow-xl group-hover:-translate-y-1
    `}>
      {/* Badge at top */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 self-start text-white ${cta.badgeColor}`}>
        <span className="text-xs font-bold">{cta.badge}</span>
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
        cta.highlight ? 'bg-amber-500/20' : 'bg-slate-700'
      }`}>
        <cta.icon className={`w-8 h-8 ${cta.highlight ? 'text-amber-400' : 'text-emerald-400'}`} />
      </div>

      {/* Content */}
      <h3 className={`text-2xl font-bold mb-3 transition-colors ${
        cta.highlight ? 'text-amber-300 group-hover:text-amber-200' : 'text-white group-hover:text-emerald-300'
      }`}>
        {cta.title}
      </h3>
      <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
        {cta.description}
      </p>

      {/* CTA Button */}
      <div className={`
        w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
        ${cta.highlight
          ? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
          : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
        }
      `}>
        <span>Get Started</span>
        {cta.external ? (
          <ExternalLink className="w-4 h-4" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </div>
    </div>
  );
}

