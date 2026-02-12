'use client';

import { motion } from 'framer-motion';
import { Globe, Server, Shield, Lock, Wallet, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    icon: Globe,
    title: 'Enterprise Marketplace',
    description: 'Production-grade GPU compute for enterprises. SOC2 compliant, SLA-backed infrastructure without the crypto complexity.',
    href: '/marketplace',
    external: false,
    badge: 'Enterprise',
    badgeColor: 'bg-blue-500',
    features: ['99.9% Uptime SLA', 'Fiat Payments', 'Dedicated Support'],
  },
  {
    icon: Server,
    title: 'Validator Network',
    description: 'Full crypto DEGEN mode. Stake, validate, and earn from the decentralized compute network. Max APY for true believers.',
    href: '/validators',
    external: false,
    badge: 'Crypto',
    badgeColor: 'bg-amber-500',
    features: ['80% Revenue Share', 'Token Rewards', 'Governance Rights'],
  },
  {
    icon: Lock,
    title: 'Obelysk Protocol',
    description: 'Privacy-enabled DeFi on the Stark Curve. Dark pool trading, privacy wallets, private staking, and encrypted sending.',
    href: '/obelysk',
    external: false,
    badge: 'New',
    badgeColor: 'bg-violet-500',
    features: ['Dark Pool Trading', 'Privacy Wallets', 'Private Staking'],
  },
];

export function PlatformFeatures() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">ECOSYSTEM</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From enterprise-grade compute to full crypto DEGEN mode. Privacy-first DeFi to verified GPU workloads. We&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {product.external ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <ProductCard product={product} />
                </a>
              ) : (
                <Link href={product.href} className="block h-full">
                  <ProductCard product={product} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* OpenClaw Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Link
            href="/openclaw"
            className="block"
          >
            <div className="relative rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-[1px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                          HOT
                        </span>
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">
                          NEW INTEGRATION
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Run Agentic AI Workflows on BitSage
                      </h3>
                      <p className="text-slate-300 max-w-2xl">
                        OpenClaw&apos;s powerful agentic workflows now run on BitSage&apos;s verified GPU infrastructure. Build, deploy, and scale AI agents with cryptographic proof of execution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap group-hover:gap-4 transition-all">
                    <span>Explore OpenClaw</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="relative h-full rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-emerald-500/10">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
            <product.icon className="w-7 h-7 text-emerald-400" />
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full text-white ${product.badgeColor}`}>
            {product.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Learn more</span>
          {product.external ? (
            <ExternalLink className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
}

