'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, Eye } from 'lucide-react';
import { useRef } from 'react';

// Recent compute jobs running on BitSage
const recentJobs = [
  { id: 1, title: '4K Film Scene Render', creator: 'StudioVFX', gpuHours: '12.5', type: 'Video Rendering', emoji: '🎬', color: 'from-purple-500 to-cyan-500' },
  { id: 2, title: 'ML Model Training', creator: 'DataScience_AI', gpuHours: '8.2', type: 'AI Training', emoji: '🧠', color: 'from-cyan-500 to-blue-500' },
  { id: 3, title: 'Game Environment', creator: 'IndieDev', gpuHours: '15.1', type: '3D Rendering', emoji: '🎮', color: 'from-red-500 to-orange-500' },
  { id: 4, title: 'Physics Simulation', creator: 'SciCompute', gpuHours: '9.8', type: 'Simulation', emoji: '⚡', color: 'from-pink-500 to-purple-500' },
];

const liveStats = [
  { label: 'GPU Hours/Day', value: '2,847', icon: Zap, change: '+312' },
  { label: 'Active Projects', value: '1,234', icon: TrendingUp, change: '+89' },
  { label: 'Network GPUs', value: '456', icon: Eye, change: '+23' },
];

export function MarketplaceHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden pt-16">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-sage-950 via-sage-900 to-sage-cyan-900"
        style={{ y, opacity }}
      />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sage-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Live indicator */}
              <motion.div
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-sage-300">Pre-Launch · Coming Soon</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Decentralized</span>
                <br />
                <span className="gradient-text">GPU Compute</span>
              </h1>
              
              <p className="text-xl text-sage-300 mb-8 max-w-xl">
                Professional GPU rendering for video, 3D, VFX, game development, and AI model training. 
                Powered by distributed compute and specialized Sage assistants.
              </p>
              
              {/* Live stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {liveStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="glass-strong rounded-lg p-3 text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className="w-5 h-5 text-sage-cyan-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-sage-500">{stat.label}</div>
                    <div className="text-xs text-green-400 mt-1">{stat.change}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-sage-600 to-sage-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sage-500/50 transition-all flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Creating
                </button>
                <button className="px-6 py-3 glass-strong text-sage-300 rounded-lg font-semibold hover:bg-sage-800/50 transition-all">
                  Browse Marketplace
                </button>
              </div>
            </motion.div>
            
            {/* Right side - Trending carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-sage-cyan-400" />
                  <span className="text-lg font-bold text-sage-200">Recent Jobs</span>
                </div>
                
                <div className="space-y-3">
                  {recentJobs.map((item, i) => (
                    <motion.div
                      key={item.id}
                      className="glass rounded-xl p-4 flex items-center gap-4 cursor-pointer group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 8 }}
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}>
                        {item.emoji}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-sage-200 group-hover:text-sage-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-sage-500">{item.type}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-semibold text-sage-300">{item.gpuHours}h</div>
                        <div className="text-xs text-sage-500">GPU time</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="glass px-4 py-2 rounded-full text-sm text-sage-400">
          Scroll to explore →
        </div>
      </motion.div>
    </section>
  );
}

