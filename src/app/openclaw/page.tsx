'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, Play, GitBranch, Bot, Workflow, Shield, Lock, Cpu, Brain, Layers, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemoModal';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const features = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    description: 'Deploy AI agents that think, plan, and execute complex multi-step workflows without human intervention.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Orchestration',
    description: 'Chain together LLMs, tools, APIs, and custom logic into powerful automated pipelines.',
  },
  {
    icon: Brain,
    title: 'Model Agnostic',
    description: 'Use GPT-4, Claude, Llama, or any model. Switch providers without changing your workflows.',
  },
  {
    icon: Layers,
    title: 'Memory & Context',
    description: 'Agents maintain context across sessions with built-in vector storage and retrieval.',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description: 'Run on BitSage confidential compute. Your data and prompts never leave secure enclaves.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC2 compliant infrastructure with audit logs and access controls.',
  },
];

const useCases = [
  {
    title: 'Research Automation',
    description: 'Agents that search, synthesize, and report on any topic.',
    icon: '🔬',
  },
  {
    title: 'Code Generation',
    description: 'Generate, test, and deploy code autonomously.',
    icon: '💻',
  },
  {
    title: 'Data Processing',
    description: 'Transform, analyze, and visualize data at scale.',
    icon: '📊',
  },
  {
    title: 'Customer Support',
    description: 'AI agents that resolve tickets end-to-end.',
    icon: '🎧',
  },
];

export default function OpenClawPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-6"
              animate={{ boxShadow: ['0 0 20px rgba(139, 92, 246, 0.3)', '0 0 40px rgba(139, 92, 246, 0.5)', '0 0 20px rgba(139, 92, 246, 0.3)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">OPENCLAW × BITSAGE</span>
              <span className="px-2 py-0.5 rounded-full bg-fuchsia-500 text-white text-xs font-bold">NEW</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Agentic AI Workflows
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                On Private Infrastructure
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Build and deploy autonomous AI agents that run on BitSage&apos;s confidential compute network.
              Your agents, your data, your control.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.openclaw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Try OpenClaw
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Visual preview */}
          <motion.div
            className="mt-16 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm p-8 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

              {/* Workflow visualization */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {['Input', 'Agent', 'Tools', 'LLM', 'Output'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <motion.div
                      className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {step}
                    </motion.div>
                    {i < 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <ArrowRight className="w-5 h-5 text-violet-500" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Code preview */}
              <div className="mt-8 bg-slate-950 rounded-xl p-6 font-mono text-sm">
                <div className="text-slate-500 mb-2"># Define your agent</div>
                <div className="text-violet-400">from openclaw import Agent, Tool</div>
                <div className="mt-4 text-slate-500"># Runs on BitSage confidential compute</div>
                <div><span className="text-fuchsia-400">agent</span> = Agent(</div>
                <div className="pl-4"><span className="text-cyan-400">model</span>=<span className="text-emerald-400">&quot;claude-3-opus&quot;</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">tools</span>=[web_search, code_exec, file_io],</div>
                <div className="pl-4"><span className="text-cyan-400">memory</span>=<span className="text-orange-400">True</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">private</span>=<span className="text-orange-400">True</span>  <span className="text-slate-500"># TEE execution</span></div>
                <div>)</div>
                <div className="mt-4"><span className="text-fuchsia-400">result</span> = agent.<span className="text-blue-400">run</span>(<span className="text-emerald-400">&quot;Research competitors and create report&quot;</span>)</div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why OpenClaw + BitSage?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The power of autonomous agents with the security of confidential compute.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-violet-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build Anything Autonomous
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                From research assistants to code generators, OpenClaw agents handle complex tasks end-to-end.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <motion.div
                    key={useCase.title}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl mb-2">{useCase.icon}</div>
                    <div className="font-semibold text-white mb-1">{useCase.title}</div>
                    <div className="text-sm text-slate-400">{useCase.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-6 h-6 text-violet-400" />
                  <span className="text-lg font-semibold text-white">Private by Default</span>
                </div>
                <div className="space-y-4">
                  {[
                    'Prompts encrypted end-to-end',
                    'Agent memory stored privately',
                    'Tool outputs never logged',
                    'Run in TEE secure enclaves',
                    'Zero data retention option',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 p-12 text-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10" />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-12 h-12 text-violet-400" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Building AI Agents Today
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Deploy autonomous workflows on privacy-first infrastructure. Free tier available.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.openclaw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/docs/openclaw"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PublicPageLayout>
  );
}
