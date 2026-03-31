'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, GitBranch, Bot, Shield, Lock, Cpu, Brain, Layers, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemoModal';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const features = [
  { icon: Bot, title: 'Autonomous Agents', description: 'Deploy AI agents that think, plan, and execute complex multi-step workflows without human intervention.' },
  { icon: GitBranch, title: 'Workflow Orchestration', description: 'Chain together LLMs, tools, APIs, and custom logic into automated pipelines.' },
  { icon: Brain, title: 'Model Agnostic', description: 'Use GPT-4, Claude, Llama, or any model. Switch providers without changing your workflows.' },
  { icon: Layers, title: 'Memory & Context', description: 'Agents maintain context across sessions with built-in vector storage and retrieval.' },
  { icon: Shield, title: 'Privacy-First', description: 'Run on BitSage confidential compute. Your data and prompts never leave secure enclaves.' },
  { icon: Lock, title: 'Enterprise Security', description: 'SOC2 compliant infrastructure with audit logs and access controls.' },
];

const useCases = [
  { title: 'Research Automation', description: 'Agents that search, synthesize, and report on any topic.', icon: Brain },
  { title: 'Code Generation', description: 'Generate, test, and deploy code autonomously.', icon: Cpu },
  { title: 'Data Processing', description: 'Transform, analyze, and visualize data at scale.', icon: Layers },
  { title: 'Customer Support', description: 'AI agents that resolve tickets end-to-end.', icon: Bot },
];

export default function OpenClawPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PublicPageLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white bg-mesh-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
              <span className="text-slate-600">OpenClaw + BitSage</span>
              <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">New</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Agentic AI Workflows{' '}
              <span className="text-[--accent]">On Private Infrastructure</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Build and deploy autonomous AI agents that run on confidential compute.
              Your agents, your data, your control.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.openclaw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
              >
                Try OpenClaw
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all text-sm"
              >
                Watch demo
              </button>
            </div>
          </motion.div>

          {/* Code preview */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
              {/* Workflow steps */}
              <div className="bg-white px-8 py-6 border-b border-slate-200">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {['Input', 'Agent', 'Tools', 'LLM', 'Output'].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="px-5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm">
                        {step}
                      </div>
                      {i < 4 && <ArrowRight className="w-4 h-4 text-slate-300" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Code block */}
              <div className="bg-slate-950 p-6 font-mono text-sm">
                <div className="text-slate-500 mb-2"># Define your agent</div>
                <div className="text-violet-400">from openclaw import Agent, Tool</div>
                <div className="mt-4 text-slate-500"># Runs on BitSage confidential compute</div>
                <div><span className="text-blue-400">agent</span> = Agent(</div>
                <div className="pl-4"><span className="text-cyan-400">model</span>=<span className="text-emerald-400">&quot;claude-3-opus&quot;</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">tools</span>=[web_search, code_exec, file_io],</div>
                <div className="pl-4"><span className="text-cyan-400">memory</span>=<span className="text-orange-400">True</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">private</span>=<span className="text-orange-400">True</span>  <span className="text-slate-500"># TEE execution</span></div>
                <div>)</div>
                <div className="mt-4"><span className="text-blue-400">result</span> = agent.<span className="text-cyan-400">run</span>(<span className="text-emerald-400">&quot;Research competitors and create report&quot;</span>)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why OpenClaw + BitSage?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The power of autonomous agents with the security of confidential compute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Use cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Build anything autonomous
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                From research assistants to code generators, OpenClaw agents handle complex tasks end-to-end.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <div
                    key={useCase.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                      <useCase.icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <div className="font-semibold text-slate-900 mb-1 text-sm">{useCase.title}</div>
                    <div className="text-xs text-slate-500">{useCase.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-[--accent]" />
                <span className="text-lg font-semibold text-slate-900">Private by default</span>
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
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start building AI agents today
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Deploy autonomous workflows on privacy-first infrastructure. Free tier available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.openclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
            >
              Get started free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/docs"
              className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all text-sm"
            >
              Read documentation
            </Link>
          </div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PublicPageLayout>
  );
}
