'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Cpu, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Live network activity - Diverse creative and enterprise workloads
const networkJobs = [
  { 
    id: 1, 
    title: 'Character Animation Render', 
    type: 'Blender Cycles', 
    organization: 'StudioBlend', 
    jobId: 'job-7f3a2b1c',
    region: 'us-east-1',
    image: '/images/marketplace/blender-character-render.jpg',
    gpu: 'RTX 4090',
    progress: 67,
    eta: '18 min',
    status: 'running'
  },
  { 
    id: 2, 
    title: 'LoRA Model Fine-tuning', 
    type: 'Stable Diffusion', 
    organization: 'AITrainer', 
    jobId: 'job-9k2m4n8p',
    region: 'eu-west-1',
    image: '/images/marketplace/stable-diffusion-training.jpg',
    gpu: 'H100',
    progress: 84,
    eta: '12 min',
    status: 'running'
  },
  { 
    id: 3, 
    title: 'Explosion VFX Simulation', 
    type: 'Houdini Pyro', 
    organization: 'VFXMaster', 
    jobId: 'job-5x7y9z1a',
    region: 'us-west-2',
    image: '/images/marketplace/houdini-vfx-simulation.jpg',
    gpu: 'RTX 4090',
    progress: 43,
    eta: '35 min',
    status: 'running'
  },
  { 
    id: 4, 
    title: 'Lumen Lightmap Bake', 
    type: 'Unreal Engine 5', 
    organization: 'GameDev Pro', 
    jobId: 'job-3c5v7b9n',
    region: 'ap-southeast-1',
    image: '/images/marketplace/unreal-engine-baking.jpg',
    gpu: 'H200',
    progress: 58,
    eta: '22 min',
    status: 'running'
  },
  { 
    id: 5, 
    title: 'Data Pipeline Processing', 
    type: 'n8n Automation', 
    organization: 'AutomateX', 
    jobId: 'job-8h4j6k2l',
    region: 'us-central-1',
    image: '/images/marketplace/n8n-automation-dashboard.jpg',
    gpu: 'RTX 3090',
    progress: 76,
    eta: '8 min',
    status: 'running'
  },
  { 
    id: 6, 
    title: '4K Video Color Grade', 
    type: 'DaVinci Resolve', 
    organization: 'ColoristPro', 
    jobId: 'job-2m8n4p6q',
    region: 'eu-central-1',
    image: '/images/marketplace/davinci-resolve-rendering.jpg',
    gpu: 'RTX 4080',
    progress: 34,
    eta: '45 min',
    status: 'running'
  },
  { 
    id: 7, 
    title: 'Batch AI Image Generation', 
    type: 'ComfyUI', 
    organization: 'AICreator', 
    jobId: 'job-1a3b5c7d',
    region: 'us-west-1',
    image: '/images/marketplace/comfyui-batch-generation.jpg',
    gpu: 'H100',
    progress: 23,
    eta: '28 min',
    status: 'running'
  },
  { 
    id: 8, 
    title: 'PBR Texture Baking', 
    type: 'Substance Designer', 
    organization: 'TexArtist', 
    jobId: 'job-9e2f4g6h',
    region: 'eu-west-2',
    image: '/images/marketplace/substance-designer-baking.jpg',
    gpu: 'RTX 3090 Ti',
    progress: 100,
    eta: 'Complete',
    status: 'completed'
  },
];

const tabs = ['All Jobs', 'Running', 'Completed', 'AI Art', 'VFX', 'Gaming', 'Video'];

export function ActiveMarketplace() {
  const [selectedTab, setSelectedTab] = useState('All Jobs');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Filter jobs based on selected tab
  const filteredJobs = networkJobs.filter(job => {
    switch (selectedTab) {
      case 'All Jobs':
        return true;
      case 'Running':
        return job.status === 'running';
      case 'Completed':
        return job.status === 'completed';
      case 'AI Art':
        return job.type.includes('Stable Diffusion') || 
               job.type.includes('ComfyUI') || 
               job.title.toLowerCase().includes('ai') ||
               job.title.toLowerCase().includes('model');
      case 'VFX':
        return job.type.includes('Houdini') || 
               job.type.includes('Blender') || 
               job.title.toLowerCase().includes('vfx') ||
               job.title.toLowerCase().includes('explosion') ||
               job.title.toLowerCase().includes('animation');
      case 'Gaming':
        return job.type.includes('Unreal Engine') || 
               job.title.toLowerCase().includes('game') ||
               job.title.toLowerCase().includes('lightmap') ||
               job.title.toLowerCase().includes('lumen');
      case 'Video':
        return job.type.includes('DaVinci') || 
               job.title.toLowerCase().includes('video') ||
               job.title.toLowerCase().includes('color') ||
               job.title.toLowerCase().includes('grade');
      default:
        return true;
    }
  });
  
  // Calculate tab counts once
  const tabCounts = tabs.reduce((acc, tab) => {
    acc[tab] = networkJobs.filter(job => {
      switch (tab) {
        case 'All Jobs': return true;
        case 'Running': return job.status === 'running';
        case 'Completed': return job.status === 'completed';
        case 'AI Art': return job.type.includes('Stable Diffusion') || job.type.includes('ComfyUI') || job.title.toLowerCase().includes('ai') || job.title.toLowerCase().includes('model');
        case 'VFX': return job.type.includes('Houdini') || job.type.includes('Blender') || job.title.toLowerCase().includes('vfx') || job.title.toLowerCase().includes('explosion') || job.title.toLowerCase().includes('animation');
        case 'Gaming': return job.type.includes('Unreal Engine') || job.title.toLowerCase().includes('game') || job.title.toLowerCase().includes('lightmap') || job.title.toLowerCase().includes('lumen');
        case 'Video': return job.type.includes('DaVinci') || job.title.toLowerCase().includes('video') || job.title.toLowerCase().includes('color') || job.title.toLowerCase().includes('grade');
        default: return true;
      }
    }).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-white to-emerald-50/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with filters */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">LIVE NETWORK</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Live workloads across the network
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-time view of creative and enterprise workloads running on BitSage. From VFX and game assets to AI training and data processing.
          </p>
        </motion.div>
          
        {/* Category tabs - Mobile Optimized */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 scrollbar-hide">
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl min-w-max md:min-w-0 mx-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-3 md:px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 text-sm md:text-base ${
                    selectedTab === tab
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{tab}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedTab === tab
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {tabCounts[tab]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Network jobs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Beautiful image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Status overlay */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      item.status === 'completed' 
                        ? 'bg-green-100/90 text-green-700 border border-green-200/50' 
                        : 'bg-blue-100/90 text-blue-700 border border-blue-200/50'
                    }`}>
                      {item.status === 'completed' ? (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Complete
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Running
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* GPU info overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-slate-200/50">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-slate-700 font-semibold">{item.gpu}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 z-10 border-t border-slate-200/50">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-slate-600 font-medium">Progress</span>
                      <span className="font-mono text-slate-900">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          item.status === 'completed' 
                            ? 'bg-green-500' 
                            : 'bg-gradient-to-r from-emerald-500 to-blue-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Job details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.organization}</p>
                  </div>
                  
                  {/* Technical details */}
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <span className="text-slate-500">Job ID:</span>
                      <span className="ml-2 font-mono text-slate-700">{item.jobId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Region:</span>
                      <span className="ml-2 text-slate-700">{item.region}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500">Framework:</span>
                      <span className="ml-2 text-slate-700">{item.type}</span>
                    </div>
                  </div>
                  
                  {/* Time remaining and CTA */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      {item.status === 'completed' ? 'Completed' : `${item.eta} remaining`}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Network stats */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">127</div>
              <div className="text-slate-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2.4K</div>
              <div className="text-slate-600">GPUs Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-slate-600">Network Uptime</div>
            </div>
          </div>
          
          <a
            href="/network"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            <Activity className="w-5 h-5" />
            View Network Status
          </a>
        </motion.div>
      </div>
    </section>
  );
}

