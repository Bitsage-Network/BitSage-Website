'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Cpu, Clock, CheckCircle, Bot, Sparkles, Film, Gamepad2, Brain, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Live network activity - Diverse creative, enterprise, and AI agent workloads
const networkJobs = [
  {
    id: 1,
    title: 'Research Agent Pipeline',
    type: 'OpenClaw Agent',
    organization: 'EnterpriseAI',
    jobId: 'agent-8k4m2n',
    region: 'us-east-1',
    icon: Bot,
    iconColor: 'text-violet-400',
    bgColor: 'bg-violet-500/20',
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
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
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
    iconColor: 'text-violet-400',
    bgColor: 'bg-violet-500/20',
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
    iconColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
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
    iconColor: 'text-violet-400',
    bgColor: 'bg-violet-500/20',
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
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
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
    iconColor: 'text-violet-400',
    bgColor: 'bg-violet-500/20',
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
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
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
    iconColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
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

  // Simulate progress updates
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

  // Filter jobs based on selected tab
  const filteredJobs = jobs.filter(job => {
    if (selectedTab === 'all') return true;
    return job.category === selectedTab;
  });

  // Calculate tab counts
  const tabCounts = tabs.reduce((acc, tab) => {
    acc[tab.id] = jobs.filter(job => tab.id === 'all' ? true : job.category === tab.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-300">LIVE NETWORK</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Workloads
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real-time view of AI agents, rendering, and compute jobs running across the network.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-2 p-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${selectedTab === tab.id ? 'text-emerald-400' : ''}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedTab === tab.id
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-700 text-slate-500'
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50 transition-all overflow-hidden flex flex-col">
                {/* Top section: Image banner OR Icon header - FIXED HEIGHT */}
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
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
                      <div className="absolute inset-0 p-3 flex items-center">
                        <div className={`w-10 h-10 rounded-lg ${job.bgColor} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <job.icon className={`w-5 h-5 ${job.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors truncate">
                            {job.title}
                          </h3>
                          <p className="text-xs text-slate-400 truncate">{job.organization}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          job.status === 'completed'
                            ? 'bg-emerald-500/30 text-emerald-300'
                            : 'bg-blue-500/30 text-blue-300'
                        }`}>
                          {job.status === 'completed' ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Done
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                              Live
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-full p-3 flex items-center bg-gradient-to-r from-slate-800/50 to-slate-800/30">
                      <div className={`w-10 h-10 rounded-lg ${job.bgColor} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <job.icon className={`w-5 h-5 ${job.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors truncate">
                          {job.title}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">{job.organization}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        job.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {job.status === 'completed' ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Done
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom section: Details + Progress */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-3 text-slate-400">
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
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                        : 'bg-slate-700/50 text-slate-400'
                    }`}>
                      {job.type}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-mono text-slate-300">{job.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          job.status === 'completed'
                            ? 'bg-emerald-500'
                            : job.type.includes('OpenClaw')
                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                            : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: '127', label: 'Active Jobs', icon: Activity },
            { value: '4', label: 'OpenClaw Agents', icon: Bot },
            { value: '2.4K', label: 'GPUs Online', icon: Cpu },
            { value: '99.9%', label: 'Uptime', icon: Zap },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all"
            >
              <Activity className="w-5 h-5" />
              View Full Network
            </Link>
            <Link
              href="/openclaw"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Deploy an Agent
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
