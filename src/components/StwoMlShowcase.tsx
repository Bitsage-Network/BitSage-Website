'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Layers, Timer, ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const highlights = [
  { icon: Timer, label: '37.64s', desc: 'Qwen3-14B Proving' },
  { icon: Zap, label: '206ms', desc: 'On-chain Verification' },
  { icon: Layers, label: '1,700x', desc: 'Trace Reduction' },
  { icon: Shield, label: '17MB to 1KB', desc: 'Recursive Compression' },
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
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: Illustration + intro */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Verifiable AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              STWO-ML <span className="text-[--accent]">Prover</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              The first GPU-accelerated ZK prover for machine learning. Prove any model ran correctly -- from classifiers to 14B-parameter LLMs -- with on-chain verification on Starknet.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[--accent] flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/stwo-ml"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Explore STWO-ML
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://github.com/Bitsage-Network/stwo-ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-600 font-semibold rounded-lg transition-all text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-slate-50">
            <Image
              src="/images/hero/stwo-section.jpg"
              alt="Verified GPU data center"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Bottom: Pipeline card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white text-sm">Proving Pipeline</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono">Qwen3-14B</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800">
              {highlights.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 p-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-500 uppercase tracking-wide">{stat.desc}</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Pipeline steps */}
            <div className="px-6 py-5 border-t border-slate-800">
              <div className="flex items-center justify-between">
                {['Model Input', 'GPU Prove', 'Compress', 'On-Chain Verify'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      i === 3 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
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
    </section>
  );
}
