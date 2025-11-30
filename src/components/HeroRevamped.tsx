'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, TrendingUp, Shield, Zap, Server } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
// Removed animated background for enterprise design
import { AnimatedGridBackground } from './AnimatedGridBackground';

// Enterprise value propositions - qualified claims
const keyMetrics = [
  { 
    value: '40-70%', 
    label: 'Lower TCO',
    trend: 'Cost Savings',
    description: 'Significant cost savings compared to traditional cloud providers',
    icon: TrendingUp
  },
  { 
    value: '99.9%+', 
    label: 'Uptime SLA',
    trend: 'Reliability',
    description: 'Enterprise-grade reliability with global capacity',
    icon: Shield
  },
  { 
    value: 'ZK-Verified', 
    label: 'Job Attestation',
    trend: 'Proof System',
    description: 'Tamper-evident logs and proof of execution',
    icon: Zap
  },
];

export function HeroRevamped() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Grid Background with flowing lights */}
      <AnimatedGridBackground />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/50 to-emerald-50/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center min-h-screen pt-24 pb-12 lg:py-0">
          
          {/* Left side - Streamlined Content (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Partnership Badge - Clean Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 sm:py-3 text-sm font-medium text-emerald-800 shadow-sm"
            >
              <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="whitespace-nowrap">NVIDIA Partner Network</span>
            </motion.div>
            
            {/* Powerful Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Verifiable GPU Compute
                </motion.span>
                <motion.span 
                  className="block text-slate-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  for Enterprise AI
                </motion.span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Run AI workloads and rendering tasks on global GPUs with cryptographic proof of execution. 
                Scale on demand and control spend.
              </p>
            </motion.div>
            
            {/* Documentation Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-2"
            >
              <div className="text-sm text-slate-600">
                <Link href="/docs" className="text-emerald-600 hover:text-emerald-700 underline font-medium transition-colors">
                  Review Documentation
                </Link>
              </div>
            </motion.div>
            
            {/* CTAs - Clear User Journeys */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/waitlist" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg whitespace-nowrap">
                  <span>Join Waitlist</span>
                </button>
              </Link>

              <Link href="/providers" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-900 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-lg whitespace-nowrap">
                  <span>Become a Provider</span>
                </button>
              </Link>
            </motion.div>
            
            {/* Enterprise Trust */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Shield className="w-5 h-5 text-emerald-600" />
              <span className="text-sm text-slate-600 font-medium">SOC2 Compliant • 99.9% Uptime SLA</span>
            </motion.div>
          </motion.div>
          
          {/* Right side - Stunning 3D Visualization (3 columns) */}
          <motion.div
            className="lg:col-span-3 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
                    <div className="relative h-auto lg:h-[600px] space-y-3 xs:space-y-4 sm:space-y-6">
                      {/* Console Screenshot Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden"
                      >
                        {/* Console Header */}
                        <div className="bg-slate-800 px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 border-b border-slate-700">
                          <div className="flex items-center gap-1.5 xs:gap-2">
                            <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
                              <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                              <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                              <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                            </div>
                            <span className="text-slate-300 text-xs xs:text-sm font-medium ml-2 xs:ml-3 sm:ml-4 truncate">BitSage Console</span>
                          </div>
                        </div>
                        
                        {/* Console Content */}
                        <div className="p-3 xs:p-4 sm:p-6 space-y-2 xs:space-y-3 sm:space-y-4">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-white font-semibold text-xs xs:text-sm sm:text-base truncate">Job: ResNet-50 Inference</h3>
                            <span className="px-2 xs:px-3 py-0.5 xs:py-1 bg-emerald-500/20 text-emerald-400 text-[10px] xs:text-xs sm:text-sm font-medium rounded-full border border-emerald-500/30 whitespace-nowrap flex-shrink-0">
                              ✓ Verified
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 xs:gap-4 sm:gap-6 text-xs xs:text-sm">
                            <div className="space-y-1 xs:space-y-2">
                              <div>
                                <span className="text-slate-400">Job ID:</span>
                                <span className="text-white ml-1 xs:ml-2 font-mono text-[10px] xs:text-xs">job_7f3a9b2c</span>
                              </div>
                              <div>
                                <span className="text-slate-400">GPU:</span>
                                <span className="text-white ml-1 xs:ml-2">RTX 4090</span>
                              </div>
                            </div>
                            <div className="space-y-1 xs:space-y-2">
                              <div>
                                <span className="text-slate-400">Duration:</span>
                                <span className="text-white ml-1 xs:ml-2">2.3s</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Cost:</span>
                                <span className="text-white ml-1 xs:ml-2">$0.0023</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-slate-800 rounded p-2 xs:p-3">
                            <div className="flex items-center justify-between mb-1 xs:mb-2 gap-2">
                              <div className="text-slate-400 text-[10px] xs:text-xs whitespace-nowrap">Attestation (hash):</div>
                              <div className="flex gap-1 xs:gap-2 flex-shrink-0">
                                <button className="text-[10px] xs:text-xs text-emerald-400 hover:text-emerald-300 transition-colors">Copy</button>
                                <button className="text-[10px] xs:text-xs text-emerald-400 hover:text-emerald-300 transition-colors hidden xs:inline">View proof</button>
                              </div>
                            </div>
                            <div className="text-emerald-400 font-mono text-[9px] xs:text-[10px] sm:text-xs break-all overflow-hidden">
                              0x7f3a9b2c8d1e5f6a9b2c8d1e5f6a7b3c9d2e6f8a1b4c7d0e3f6a9b2c8d1e5f6a
                            </div>
                          </div>
                        </div>
              </motion.div>
              
                      {/* Code Snippet with Language Tabs */}
              <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden"
                      >
                        <div className="bg-slate-800 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 border-b border-slate-700 flex items-center justify-between overflow-x-auto">
                          <div className="flex gap-2 xs:gap-3 sm:gap-4">
                            <button className="text-[10px] xs:text-xs font-medium text-emerald-400 border-b border-emerald-400 pb-0.5 xs:pb-1 whitespace-nowrap">cURL</button>
                            <button className="text-[10px] xs:text-xs font-medium text-slate-400 hover:text-slate-300 transition-colors whitespace-nowrap">Python</button>
                            <button className="text-[10px] xs:text-xs font-medium text-slate-400 hover:text-slate-300 transition-colors whitespace-nowrap">Node</button>
                          </div>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 overflow-x-auto">
                          <pre className="text-[9px] xs:text-[10px] sm:text-xs text-slate-300 font-mono leading-relaxed" style={{ fontFamily: 'JetBrains Mono, SF Mono, Monaco, monospace' }}>
{`curl -X POST https://api.bitsage.network/jobs \\
  -H "Authorization: Bearer $TOKEN" \\
  -d @resnet50_infer.json

# Returns:
{
  "job_id": "job_7f3a9b2c",
  "proof_uri": "https://proofs.bitsage.network/7f3a9b2c",
  "attestation_hash": "0x7f3a9b2c8d1e5f6a..."
}`}
                          </pre>
                        </div>
              </motion.div>
            </div>
          </motion.div>
      </div>
      
        {/* Spectacular Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
      >
        <motion.div
            className="flex flex-col items-center gap-2 text-white/60 cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-medium group-hover:text-white/80 transition-colors">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors"
              animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
