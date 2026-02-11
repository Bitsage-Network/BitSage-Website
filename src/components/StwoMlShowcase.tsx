'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Layers, Timer, ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  { icon: Timer, label: '37.64s', desc: 'Qwen3-14B Proving', color: 'cyan' },
  { icon: Zap, label: '206ms', desc: 'On-chain Verification', color: 'blue' },
  { icon: Layers, label: '1,700x', desc: 'Trace Reduction', color: 'indigo' },
  { icon: Shield, label: '17MB→1KB', desc: 'Recursive Compression', color: 'violet' },
];

const capabilities = [
  'Circle STARKs over M31 field',
  'CUDA GPU kernels (H200)',
  'Recursive proof compression',
  'On-chain Cairo verifier',
  '9 supported ML operations',
  '292 tests passing',
];

export function StwoMlShowcase() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/10 to-slate-950" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">VERIFIABLE AI</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              STWO-ML
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Prover</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              GPU-accelerated zero-knowledge proofs for ML inference. Prove that any model — from small classifiers to Qwen3-14B — computed correctly, with cryptographic certainty verified on Starknet.
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/stwo-ml"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Terminal className="w-4 h-4" />
                Explore STWO-ML
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/Bitsage-Network/stwo-ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Stats + Pipeline visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/80 rounded-2xl border border-slate-700/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-white text-sm">Proving Pipeline</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Qwen3-14B</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-slate-800">
                {highlights.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900 p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-slate-500 uppercase tracking-wide">{stat.desc}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Pipeline steps */}
              <div className="px-6 py-5 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  {['Model', 'GPU Prove', 'Compress', 'Verify'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        i === 3 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-xs text-slate-400 hidden sm:inline">{step}</span>
                      {i < 3 && (
                        <div className="w-4 sm:w-8 h-px bg-slate-700 mx-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
