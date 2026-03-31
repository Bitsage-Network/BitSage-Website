'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Cpu, Clock, CheckCircle, Bot, Film, Gamepad2, Brain, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const networkJobs = [
  {
    id: 1,
    title: 'Research Agent Pipeline',
    type: 'OpenClaw Agent',
    organization: 'EnterpriseAI',
    jobId: 'agent-8k4m2n',
    region: 'us-east-1',
    icon: Bot,
    gpu: 'H100',
    progress: 72,
    eta: '~3 min',
    status: 'running',
    category: 'agents',
    image: null
  },
  {
    id: 2,
    title: 'Character Animation Render',
    type: 'Blender Cycles',
    organization: 'StudioBlend',
    jobId: 'job-7f3a2b',
    region: 'eu-west-1',
    icon: Film,
    gpu: 'RTX 4090',
    progress: 67,
    eta: '18 min',
    status: 'running',
    category: 'vfx',
    image: '/images/marketplace/blender-character-render.jpg'
  },
  {
    id: 3,
    title: 'Code Review Agent',
    type: 'OpenClaw Agent',
    organization: 'DevOpsTeam',
    jobId: 'agent-3x7y9z',
    region: 'us-west-2',
    icon: Bot,
    gpu: 'A100',
    progress: 45,
    eta: '~8 min',
    status: 'running',
    category: 'agents',
    image: null
  },
  {
    id: 4,
    title: 'LoRA Model Fine-tuning',
    type: 'Stable Diffusion XL',
    organization: 'AITrainer',
    jobId: 'job-9k2m4n',
    region: 'eu-central-1',
    icon: Brain,
    gpu: 'H100',
    progress: 84,
    eta: '12 min',
    status: 'running',
    category: 'ai',
    image: '/images/marketplace/stable-diffusion-training.jpg'
  },
  {
    id: 5,
    title: 'Data Analysis Agent',
    type: 'OpenClaw Agent',
    organization: 'FinanceOrg',
    jobId: 'agent-5c7v9b',
    region: 'ap-southeast-1',
    icon: Bot,
    gpu: 'A100',
    progress: 91,
    eta: '~1 min',
    status: 'running',
    category: 'agents',
    image: null
  },
  {
    id: 6,
    title: 'Lumen Lightmap Bake',
    type: 'Unreal Engine 5',
    organization: 'GameDev Pro',
    jobId: 'job-3c5v7b',
    region: 'us-central-1',
    icon: Gamepad2,
    gpu: 'RTX 4090',
    progress: 58,
    eta: '22 min',
    status: 'running',
    category: 'gaming',
    image: '/images/marketplace/unreal-engine-baking.jpg'
  },
  {
    id: 7,
    title: 'Support Ticket Agent',
    type: 'OpenClaw Agent',
    organization: 'SaaSCompany',
    jobId: 'agent-1a3b5c',
    region: 'eu-west-2',
    icon: Bot,
    gpu: 'H100',
    progress: 100,
    eta: 'Complete',
    status: 'completed',
    category: 'agents',
    image: null
  },
  {
    id: 8,
    title: 'Explosion VFX Simulation',
    type: 'Houdini Pyro',
    organization: 'VFXMaster',
    jobId: 'job-5x7y9z',
    region: 'us-west-1',
    icon: Film,
    gpu: 'RTX 4090',
    progress: 43,
    eta: '35 min',
    status: 'running',
    category: 'vfx',
    image: '/images/marketplace/houdini-vfx-simulation.jpg'
  },
  {
    id: 9,
    title: 'LLM Inference Batch',
    type: 'Llama 3 70B',
    organization: 'MLPlatform',
    jobId: 'job-8h4j6k',
    region: 'us-east-2',
    icon: Brain,
    gpu: 'H100 x2',
    progress: 76,
    eta: '8 min',
    status: 'running',
    category: 'ai',
    image: '/images/marketplace/comfyui-batch-generation.jpg'
  },
];

const tabs = [
  { id: 'all', label: 'All Jobs', icon: Activity },
  { id: 'agents', label: 'OpenClaw Agents', icon: Bot },
  { id: 'ai', label: 'AI/ML', icon: Brain },
  { id: 'vfx', label: 'VFX', icon: Film },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
];

export function ActiveMarketplace() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [jobs, setJobs] = useState(networkJobs);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobs(prev => prev.map(job => {
        if (job.status === 'completed') return job;
        const newProgress = Math.min(100, job.progress + Math.random() * 2);
        return {
          ...job,
          progress: Math.round(newProgress),
          status: newProgress >= 100 ? 'completed' : 'running',
          eta: newProgress >= 100 ? 'Complete' : job.eta
        };
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredJobs = jobs.filter(job => {
    if (selectedTab === 'all') return true;
    return job.category === selectedTab;
  });

  const tabCounts = tabs.reduce((acc, tab) => {
    acc[tab.id] = jobs.filter(job => tab.id === 'all' ? true : job.category === tab.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section ref={ref} className="py-24 bg-white relative bg-mesh-green">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold text-[--accent] uppercase tracking-wider">Live Network</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            See what&apos;s running right now
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            AI agents, rendering pipelines, and ML training -- all executing across verified GPU nodes in real time.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {tabCounts[tab.id]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Jobs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden flex flex-col">
                {/* Top section */}
                <div className="h-20 relative overflow-hidden flex-shrink-0">
                  {job.image !== null && job.image !== undefined ? (
                    <>
                      <Image
                        src={job.image}
                        alt={job.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
                      <div className="absolute inset-0 p-3 flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <job.icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-900 text-sm truncate">
                            {job.title}
                          </h3>
                          <p className="text-xs text-slate-500 truncate">{job.organization}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          job.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {job.status === 'completed' ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Done
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              Live
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-full p-3 flex items-center bg-slate-50">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-3 flex-shrink-0">
                        <job.icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 text-sm truncate">
                          {job.title}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">{job.organization}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        job.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {job.status === 'completed' ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Done
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Live
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom section */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        {job.gpu}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.eta}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full ${
                      job.type.includes('OpenClaw')
                        ? 'bg-violet-100 text-violet-700 border border-violet-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {job.type}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Progress</span>
                      <span className="font-mono text-slate-700">{job.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          job.status === 'completed'
                            ? 'bg-emerald-500'
                            : 'bg-[--accent]'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${job.progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { value: '127', label: 'Active Jobs', icon: Activity },
            { value: '4', label: 'OpenClaw Agents', icon: Bot },
            { value: '2.4K', label: 'GPUs Online', icon: Cpu },
            { value: '99.9%', label: 'Uptime', icon: Zap },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-200">
              <stat.icon className="w-5 h-5 text-slate-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors text-sm"
            >
              <Activity className="w-4 h-4" />
              Explore the network
            </Link>
            <Link
              href="/openclaw"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-600 rounded-lg font-semibold transition-all text-sm"
            >
              Deploy an agent
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
