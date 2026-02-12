'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Zap, ArrowRight, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import RequestDemoModal from './RequestDemoModal';
import { AnimatedGridBackground } from './AnimatedGridBackground';

export function HeroRevamped() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Layer 1: Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Layer 2: Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Layer 3: Animated Grid with traveling pulses - ON TOP */}
      <div className="absolute inset-0 z-[1]">
        <AnimatedGridBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen pt-24 pb-12">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-300">Now available for enterprise teams</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-center max-w-5xl"
          >
            <span className="text-white">The GPU Cloud</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Built for Privacy
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl text-center leading-relaxed"
          >
            Run AI workloads on a global GPU network with end-to-end encryption.
            Your data stays private. Your models stay yours.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Lock, label: 'End-to-End Encrypted' },
              { icon: Shield, label: 'SOC2 Compliant' },
              { icon: Zap, label: 'Instant Scaling' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
              >
                <item.icon className="w-4 h-4 text-emerald-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-2xl shadow-white/10"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/docs">
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2 text-lg">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </Link>
          </motion.div>

          {/* Visual element - Abstract GPU visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Glowing card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10" />

                {/* Content */}
                <div className="relative grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">10,000+</div>
                    <div className="text-slate-400">GPUs Available</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">50ms</div>
                    <div className="text-slate-400">Average Latency</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-slate-400">Uptime SLA</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 md:-left-8 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-emerald-300 text-sm font-medium">H100 Ready</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 md:-right-8 px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-violet-300 text-sm font-medium">Zero Trust</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
