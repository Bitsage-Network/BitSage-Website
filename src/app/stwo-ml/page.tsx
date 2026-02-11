'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Layers, Timer, BarChart3, GitBranch, Terminal, ArrowRight, ExternalLink, Lock, ChevronRight, Activity, CheckCircle2, Brain, Server } from 'lucide-react';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Proving Time', value: '37.64s', detail: 'Qwen3-14B', icon: Timer },
  { label: 'Verification', value: '206ms', detail: 'On-chain', icon: Zap },
  { label: 'Speedup', value: '98x', detail: 'vs baseline STWO', icon: BarChart3 },
  { label: 'Trace Reduction', value: '1,700x', detail: '5120x5120 matrices', icon: Layers },
  { label: 'Tests Passing', value: '292', detail: 'Full coverage', icon: CheckCircle2 },
];

const pipeline = [
  {
    step: '01',
    title: 'Confidential GPU Layer',
    description: 'TEE-attested H200 GPUs execute model inference in a secure enclave. Model weights never leave the trusted execution environment.',
    icon: Lock,
    color: 'cyan',
    tags: ['H200 GPU', 'TEE Attestation', 'Enclave'],
  },
  {
    step: '02',
    title: 'ML Proof Generation',
    description: 'Sumcheck protocol over the M31 field verifies every matrix multiplication. GPU-parallel round reduction with CUDA kernels at 256 threads per block.',
    icon: Cpu,
    color: 'blue',
    tags: ['Sumcheck', 'M31 Field', 'CUDA Kernels'],
  },
  {
    step: '03',
    title: 'Recursive Compression',
    description: 'Raw proofs compress from 17MB down to ~1KB via recursive Circle STARKs. FRI commitments over circle groups yield constant-size verification.',
    icon: Layers,
    color: 'indigo',
    tags: ['Circle STARKs', 'FRI', '17MB to 1KB'],
  },
  {
    step: '04',
    title: 'On-Chain Settlement',
    description: 'Cairo verifier on Starknet validates the recursive proof. Permanent, immutable proof-of-inference stored on-chain for any model.',
    icon: Shield,
    color: 'violet',
    tags: ['Cairo Verifier', 'Starknet', 'Immutable'],
  },
];

const technicalCards = [
  {
    title: 'Sumcheck Protocol',
    description: 'Verifies matrix multiplications via multilinear extensions. Each A*B product is reduced to a univariate polynomial check — O(n) verifier cost for O(n^2) computation.',
    code: 'prove_matmul_sumcheck(A, B, C)\n  → rounds: Vec<(QM31, QM31, QM31)>\n  → final_claim: QM31',
    icon: Terminal,
  },
  {
    title: 'Circle STARKs',
    description: 'Arithmetic over the Mersenne-31 field (2^31 - 1). FRI commitment scheme operates on circle groups, enabling efficient polynomial evaluation and composition.',
    code: 'M31 → CM31 (complex)\n  → QM31 (degree-4 secure field)\n  where j² = 2 + i',
    icon: GitBranch,
  },
  {
    title: 'GPU Kernels',
    description: 'Custom CUDA kernels for sumcheck round reduction. 256 threads per block with shared-memory tree reduce. Auto-dispatches to GPU when k >= 16,384.',
    code: 'sumcheck_round_kernel<<<blocks, 256>>>\n  → s0, s1, s2 parallel reduction\n  → shared memory tree reduce',
    icon: Cpu,
  },
  {
    title: 'Tiled MatMul',
    description: 'Proves 5120x5120 matrices by chunking the k-dimension. Each tile produces a sub-proof, composed into a standard format. 4GB memory budget with auto-dispatch.',
    code: 'prove_tiled_matmul(A, B, tile_size)\n  → compose_tiled_proof(sub_proofs)\n  → standard MatMulProof',
    icon: Layers,
  },
];

const competitors = [
  {
    name: 'STWO-ML',
    highlight: true,
    gpu: true,
    modelSize: 'Qwen3-14B',
    provingTime: '37.64s',
    onChainVerify: true,
    recursiveProofs: true,
    openSource: true,
  },
  {
    name: 'zkLLM',
    highlight: false,
    gpu: false,
    modelSize: '13B (limited)',
    provingTime: '~15min',
    onChainVerify: false,
    recursiveProofs: false,
    openSource: false,
  },
  {
    name: 'LuminAIR',
    highlight: false,
    gpu: false,
    modelSize: 'Small models',
    provingTime: '~5min',
    onChainVerify: true,
    recursiveProofs: false,
    openSource: true,
  },
  {
    name: 'ICICLE-STWO',
    highlight: false,
    gpu: true,
    modelSize: 'General circuits',
    provingTime: 'Varies',
    onChainVerify: false,
    recursiveProofs: false,
    openSource: true,
  },
];

const supportedOps = [
  'MatMul', 'Add', 'Mul', 'LayerNorm', 'Softmax', 'Attention', 'Embedding', 'Conv2D', 'Quantize',
];

const contracts = [
  {
    name: 'StweMlVerifier v3',
    address: '0x04f8c5377d94baa15291832dc3821c2fc235a95f0823f86add32f828ea965a15',
    description: 'ML model verification with SAGE payment and trusted submitter control',
  },
  {
    name: 'StweMlStarkVerifier',
    address: '0x005928ac548dc2719ef1b34869db2b61c2a55a4b148012fad742262a8d674fba',
    description: 'Recursive STARK proof verification on Starknet',
  },
  {
    name: 'Elo Cairo Verifier',
    address: '0x0531182369ea82331ac39854faab986ba61907c2f88aa75120636a427ff8569e',
    description: 'Generic on-chain sumcheck verifier — pure cryptographic verification',
  },
];

// Pipeline demo steps
const demoSteps = [
  { label: 'Model Input', size: '14B params', icon: Brain },
  { label: 'Layer Processing', size: '4 matmuls', icon: Cpu },
  { label: 'Proof Generation', size: '17 MB', icon: Terminal },
  { label: 'Recursive Compress', size: '~1 KB', icon: Layers },
  { label: 'On-Chain Verified', size: 'Starknet', icon: Shield },
];

export default function StwoMlPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">GPU-ACCELERATED ZKML</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">STWO-ML</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Verifiable AI Prover
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Prove any ML model&apos;s inference is correct with GPU-parallelized Circle STARKs.
              From Qwen3-14B to production models — cryptographic proof in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  View Documentation
                </button>
              </Link>
              <a href="https://github.com/Bitsage-Network/stwo-ml" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  GitHub
                  <ExternalLink className="w-4 h-4" />
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
                <Layers className="w-4 h-4 text-cyan-500" />
                <span>Circle STARKs</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span>H200 GPU</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-500" />
                <span>On-Chain Verified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Stats Bar */}
      <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 mb-3">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
                <div className="text-xs text-slate-600">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">ARCHITECTURE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A four-layer pipeline from confidential GPU inference to permanent on-chain proof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-500/20 mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-400 border border-slate-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {index < pipeline.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-500/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-24 bg-slate-950 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Deep Dive
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Circle STARKs, GPU kernels, and tiled proving at production scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <card.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-5">
                    {card.description}
                  </p>

                  <div className="rounded-lg bg-slate-900/80 border border-slate-700/50 p-4 font-mono text-sm text-cyan-300 whitespace-pre-line">
                    {card.code}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supported Operations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Supported Operations
            </h3>
            <div className="flex flex-wrap gap-3">
              {supportedOps.map((op) => (
                <span
                  key={op}
                  className="px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-mono text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {op}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Pipeline Demo */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">LIVE DEMO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proving Pipeline
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Watch a 14-billion parameter model go from inference to on-chain verification
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Pipeline visualization */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-white">Qwen3-14B Proving Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs text-slate-500">Simulated</span>
                </div>
              </div>

              {/* Steps */}
              <div className="p-6 space-y-4">
                {demoSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  const isComplete = index < activeStep;

                  return (
                    <motion.div
                      key={step.label}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-500/50'
                          : isComplete
                          ? 'bg-slate-800/30 border-slate-700/30'
                          : 'bg-slate-900/30 border-slate-800/30'
                      }`}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                        isActive ? 'bg-cyan-500/20' : isComplete ? 'bg-emerald-500/20' : 'bg-slate-800/50'
                      }`}>
                        {isComplete ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <step.icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium transition-colors duration-500 ${
                          isActive ? 'text-white' : isComplete ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {step.label}
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2.5, ease: 'linear' }}
                            className="h-1 mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        )}
                      </div>
                      <div className={`font-mono text-sm transition-colors duration-500 ${
                        isActive ? 'text-cyan-300' : isComplete ? 'text-slate-500' : 'text-slate-700'
                      }`}>
                        {step.size}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>Rust + CUDA</span>
                  <span>Circle STARKs</span>
                  <span>M31 Field</span>
                </div>
                <div className="text-xs text-cyan-400 font-mono">
                  17 MB → ~1 KB compression
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-24 bg-slate-950 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Compare
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The only ZKML prover with GPU acceleration, recursive proofs, and on-chain verification
            </p>
          </motion.div>

          {/* Desktop table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block overflow-hidden rounded-2xl border border-slate-800"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-400">Prover</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">GPU Support</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">Model Size</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">Proving Time</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">On-Chain Verify</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">Recursive Proofs</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-400">Open Source</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp) => (
                  <tr
                    key={comp.name}
                    className={`border-t border-slate-800 ${comp.highlight ? 'bg-cyan-500/5' : 'bg-slate-900/30'}`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${comp.highlight ? 'text-cyan-300' : 'text-white'}`}>
                        {comp.name}
                      </span>
                      {comp.highlight && (
                        <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                          OURS
                        </span>
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {comp.gpu ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="text-center px-6 py-4 text-sm text-slate-300">{comp.modelSize}</td>
                    <td className="text-center px-6 py-4">
                      <span className={`font-mono text-sm ${comp.highlight ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {comp.provingTime}
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      {comp.onChainVerify ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="text-center px-6 py-4">
                      {comp.recursiveProofs ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="text-center px-6 py-4">
                      {comp.openSource ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {competitors.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 rounded-xl border ${comp.highlight ? 'bg-cyan-500/5 border-cyan-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`font-bold ${comp.highlight ? 'text-cyan-300' : 'text-white'}`}>{comp.name}</span>
                  {comp.highlight && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">OURS</span>}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-slate-500">GPU</div>
                  <div className="text-slate-300">{comp.gpu ? 'Yes' : 'No'}</div>
                  <div className="text-slate-500">Model Size</div>
                  <div className="text-slate-300">{comp.modelSize}</div>
                  <div className="text-slate-500">Proving Time</div>
                  <div className="text-slate-300 font-mono">{comp.provingTime}</div>
                  <div className="text-slate-500">On-Chain</div>
                  <div className="text-slate-300">{comp.onChainVerify ? 'Yes' : 'No'}</div>
                  <div className="text-slate-500">Recursive</div>
                  <div className="text-slate-300">{comp.recursiveProofs ? 'Yes' : 'No'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployed Contracts */}
      <section id="contracts" className="py-24 bg-slate-900 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">ON-CHAIN</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Deployed on Starknet
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Live verification contracts on Starknet Sepolia — inspect and verify proofs on-chain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contracts.map((contract, index) => (
              <motion.div
                key={contract.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {contract.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{contract.description}</p>
                  <div className="font-mono text-xs text-slate-500 bg-slate-900/50 rounded-lg p-3 mb-4 break-all">
                    {contract.address}
                  </div>
                  <a
                    href={`https://sepolia.starkscan.co/contract/${contract.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View on Starkscan
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-cyan-950/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">GET STARTED</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prove Your AI
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Cryptographic proof that your model computed correctly — from inference to on-chain settlement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Read the Docs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/obelysk">
                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                  <Server className="w-5 h-5" />
                  Obelysk Protocol
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
