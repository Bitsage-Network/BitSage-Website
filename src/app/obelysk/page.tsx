'use client';

import { motion } from 'framer-motion';
import { Lock, Shield, Wallet, Eye, EyeOff, ArrowRight, Sparkles, Zap, ArrowDownUp, Bitcoin, TrendingUp, TrendingDown, Activity, Layers, ChevronRight } from 'lucide-react';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: Lock,
    title: 'Dark Pool Trading',
    description: 'Execute large trades without market impact. Privacy-enabled order matching on the Stark Curve ensures your trading strategy stays confidential.',
    benefits: ['Zero slippage on large orders', 'Hidden order flow', 'MEV protection'],
  },
  {
    icon: Wallet,
    title: 'Privacy Wallets',
    description: 'Fully encrypted wallet infrastructure. Your balances, transaction history, and counterparties remain private while maintaining full auditability when needed.',
    benefits: ['Encrypted balances', 'Private transaction history', 'Selective disclosure'],
  },
  {
    icon: Shield,
    title: 'Private Staking',
    description: 'Earn yield without revealing your stake. Anonymous participation in network validation with verifiable rewards and governance rights.',
    benefits: ['Hidden stake amounts', 'Anonymous yield', 'Governance participation'],
  },
  {
    icon: EyeOff,
    title: 'Encrypted Sending',
    description: 'Send tokens with full privacy over the Stark Curve. Recipients, amounts, and timing are all encrypted while maintaining cryptographic proof of transfer.',
    benefits: ['Hidden recipients', 'Encrypted amounts', 'Provable transfers'],
  },
];

// Static initial orderbook data (prevents hydration mismatch)
const initialOrderbook = {
  bids: [
    { price: '42148.50', amount: '0.8234', total: '34721.00', hidden: true },
    { price: '42133.25', amount: '1.2500', total: '52666.50', hidden: false },
    { price: '42118.00', amount: '0.5000', total: '21059.00', hidden: true },
    { price: '42103.75', amount: '1.8750', total: '78944.50', hidden: false },
    { price: '42088.50', amount: '0.3200', total: '13468.30', hidden: true },
    { price: '42073.25', amount: '2.1000', total: '88353.80', hidden: false },
    { price: '42058.00', amount: '0.7500', total: '31543.50', hidden: false },
    { price: '42043.75', amount: '1.4200', total: '59702.10', hidden: true },
  ],
  asks: [
    { price: '42182.25', amount: '0.6500', total: '27418.50', hidden: false },
    { price: '42197.50', amount: '1.1200', total: '47261.20', hidden: true },
    { price: '42212.75', amount: '0.9800', total: '41368.50', hidden: false },
    { price: '42228.00', amount: '1.5500', total: '65453.40', hidden: true },
    { price: '42243.25', amount: '0.4200', total: '17742.20', hidden: false },
    { price: '42258.50', amount: '1.8200', total: '76910.50', hidden: true },
    { price: '42273.75', amount: '0.5800', total: '24518.80', hidden: false },
    { price: '42289.00', amount: '2.0500', total: '86692.50', hidden: false },
  ],
};

// Generate random orderbook for client-side updates
const generateOrderbook = () => {
  const bids = Array.from({ length: 8 }, (_, i) => ({
    price: (42150 - i * 15 - Math.random() * 10).toFixed(2),
    amount: (Math.random() * 2 + 0.1).toFixed(4),
    total: (Math.random() * 80000 + 5000).toFixed(2),
    hidden: Math.random() > 0.6,
  }));
  const asks = Array.from({ length: 8 }, (_, i) => ({
    price: (42180 + i * 15 + Math.random() * 10).toFixed(2),
    amount: (Math.random() * 2 + 0.1).toFixed(4),
    total: (Math.random() * 80000 + 5000).toFixed(2),
    hidden: Math.random() > 0.6,
  }));
  return { bids, asks };
};

// Simulated recent trades
const recentTrades = [
  { price: '42,156.78', amount: '0.8234', side: 'buy', time: '12:45:32', private: true },
  { price: '42,148.22', amount: '1.2500', side: 'sell', time: '12:45:28', private: false },
  { price: '42,152.00', amount: '0.5000', side: 'buy', time: '12:45:15', private: true },
  { price: '42,160.50', amount: '2.1000', side: 'buy', time: '12:45:02', private: true },
  { price: '42,145.30', amount: '0.3200', side: 'sell', time: '12:44:58', private: false },
];

const supportedAssets = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '₿', color: 'text-orange-500' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', color: 'text-blue-400' },
  { name: 'SAGE', symbol: 'SAGE', icon: '◆', color: 'text-emerald-400' },
  { name: 'Stablecoins', symbol: 'USDC/USDT', icon: '$', color: 'text-green-400' },
];

export default function ObelyskPage() {
  const [orderbook, setOrderbook] = useState(initialOrderbook);
  const [selectedPair, setSelectedPair] = useState('BTC/USDC');

  // Simulate orderbook updates (only on client after mount)
  useEffect(() => {
    // Start random updates only after hydration
    const interval = setInterval(() => {
      setOrderbook(generateOrderbook());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-8"
            >
              <Lock className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">PRIVACY-FIRST DEFI</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Obelysk</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Protocol
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Trade Bitcoin and crypto assets with complete privacy. Dark pool orderbook,
              encrypted transactions, and zero-knowledge proofs on the Stark Curve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/waitlist">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Join Waitlist
                </button>
              </Link>
              <a href="#demo">
                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <Bitcoin className="w-4 h-4 text-orange-500" />
                <span>Private BTC Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Stark Curve Cryptography</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Zero-Knowledge Proofs</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Private Bitcoin Trading Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Bitcoin className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-orange-300">TRADE BITCOIN PRIVATELY</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Bitcoin. Your Privacy.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Finally trade BTC without exposing your wallet, balance, or trading history to the world.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: EyeOff,
                  title: 'Hidden Order Flow',
                  description: 'Your buy and sell orders are encrypted. No one can front-run or copy your trades.',
                },
                {
                  icon: Shield,
                  title: 'Wallet Privacy',
                  description: 'Your BTC balance and transaction history remain completely private on-chain.',
                },
                {
                  icon: ArrowDownUp,
                  title: 'Anonymous Swaps',
                  description: 'Swap BTC for stablecoins or other assets without linking your identity.',
                },
                {
                  icon: Lock,
                  title: 'Institutional Grade',
                  description: 'Execute large orders without market impact. Perfect for whales and institutions.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Supported Assets */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900/80 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-violet-400" />
                  Supported Assets
                </h3>
                <div className="space-y-4">
                  {supportedAssets.map((asset, index) => (
                    <motion.div
                      key={asset.symbol}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl ${asset.color}`}>{asset.icon}</div>
                        <div>
                          <div className="font-semibold text-white">{asset.name}</div>
                          <div className="text-sm text-slate-500">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Trade privately</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <p className="text-sm text-violet-300">
                    <span className="font-semibold">Coming soon:</span> Cross-chain private bridges for BTC from Bitcoin mainnet.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Pool Orderbook Demo */}
      <section id="demo" className="py-24 bg-slate-900 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
              <Activity className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">LIVE DEMO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dark Pool Orderbook
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See how privacy-preserving trading works. Hidden orders are encrypted—only you know your position.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Orderbook */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="w-5 h-5 text-orange-500" />
                      <span className="font-bold text-white">{selectedPair}</span>
                    </div>
                    <span className="text-emerald-400 font-mono">$42,156.78</span>
                    <span className="text-xs text-emerald-400">+2.4%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-slate-500">Live</span>
                  </div>
                </div>

                {/* Orderbook Grid */}
                <div className="grid grid-cols-2 divide-x divide-slate-800">
                  {/* Bids */}
                  <div className="p-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3 px-2">
                      <span>Price (USDC)</span>
                      <span>Amount (BTC)</span>
                    </div>
                    <div className="space-y-1">
                      {orderbook.bids.map((bid, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative flex items-center justify-between px-2 py-1.5 rounded text-sm"
                        >
                          <div
                            className="absolute inset-0 bg-emerald-500/10 rounded"
                            style={{ width: `${Math.min(100, (parseFloat(bid.amount) / 2) * 100)}%` }}
                          />
                          <span className="relative text-emerald-400 font-mono">${bid.price}</span>
                          <span className="relative text-slate-300 font-mono flex items-center gap-2">
                            {bid.hidden ? (
                              <>
                                <EyeOff className="w-3 h-3 text-violet-400" />
                                <span className="text-violet-400">***</span>
                              </>
                            ) : (
                              bid.amount
                            )}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Asks */}
                  <div className="p-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3 px-2">
                      <span>Price (USDC)</span>
                      <span>Amount (BTC)</span>
                    </div>
                    <div className="space-y-1">
                      {orderbook.asks.map((ask, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative flex items-center justify-between px-2 py-1.5 rounded text-sm"
                        >
                          <div
                            className="absolute inset-0 bg-red-500/10 rounded"
                            style={{ width: `${Math.min(100, (parseFloat(ask.amount) / 2) * 100)}%` }}
                          />
                          <span className="relative text-red-400 font-mono">${ask.price}</span>
                          <span className="relative text-slate-300 font-mono flex items-center gap-2">
                            {ask.hidden ? (
                              <>
                                <EyeOff className="w-3 h-3 text-violet-400" />
                                <span className="text-violet-400">***</span>
                              </>
                            ) : (
                              ask.amount
                            )}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer legend */}
                <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-emerald-500/30" />
                      <span className="text-slate-500">Bid Depth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-red-500/30" />
                      <span className="text-slate-500">Ask Depth</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-violet-400">
                    <EyeOff className="w-3 h-3" />
                    <span>Hidden orders (encrypted)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Trades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-slate-950 rounded-2xl border border-slate-800 h-full">
                <div className="px-6 py-4 border-b border-slate-800">
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-violet-400" />
                    Recent Trades
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  {recentTrades.map((trade, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-900/50"
                    >
                      <div className="flex items-center gap-3">
                        {trade.side === 'buy' ? (
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                        <div>
                          <div className={`font-mono text-sm ${trade.side === 'buy' ? 'text-emerald-400' : 'text-red-400'}`}>
                            ${trade.price}
                          </div>
                          <div className="text-xs text-slate-500">{trade.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-sm text-slate-300">
                          {trade.private ? (
                            <span className="flex items-center gap-1 text-violet-400">
                              <Lock className="w-3 h-3" />
                              Private
                            </span>
                          ) : (
                            `${trade.amount} BTC`
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="px-4 pb-4">
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <p className="text-xs text-violet-300">
                      <span className="font-bold">~60% of trades</span> on Obelysk use privacy mode, hiding order sizes from public view.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { step: '01', title: 'Submit Encrypted Order', desc: 'Your order is encrypted with ZK proofs. Only the matching engine sees it.' },
              { step: '02', title: 'Private Matching', desc: 'Orders match in a secure enclave. No front-running or MEV extraction possible.' },
              { step: '03', title: 'Settlement', desc: 'Trades settle on-chain with privacy. Your balance updates are encrypted.' },
            ].map((item, i) => (
              <div key={item.step} className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="text-4xl font-bold text-violet-500/30 mb-3">{item.step}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive privacy tools built on zero-knowledge cryptography
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={feature.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <div className="h-full p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:bg-violet-500/30 transition-colors">
                    <feature.icon className="w-7 h-7 text-violet-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-violet-950/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">EARLY ACCESS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Trade Privately?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join the waitlist for early access to Obelysk Protocol. Be among the first to trade Bitcoin with complete privacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/waitlist">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all">
                  Read Documentation
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
