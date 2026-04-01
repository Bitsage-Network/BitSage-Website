'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RequestDemoModal from './RequestDemoModal';

export function HeroRevamped() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafb 40%, #f0f4f3 100%)' }}>

      {/* Hero illustration - right side, transparent PNG */}
      <div className="absolute top-0 right-0 w-[55%] h-full hidden lg:block pointer-events-none select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-illustration.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="55vw"
            style={{ objectPosition: '60% 55%' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center py-20 sm:py-24 lg:py-32 max-w-xl lg:max-w-[540px] mx-auto lg:mx-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.35 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200/80 rounded-full px-3.5 py-1.5 text-[13px] font-medium mb-5 w-fit shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-slate-600">Trusted by AI teams worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="text-[2rem] xs:text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.025em] text-slate-900"
          >
            The Privacy Cloud{' '}
            <br className="hidden xs:block" />
            for <span className="text-[--accent]">AI</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="mt-4 text-base sm:text-[1.0625rem] text-slate-500 max-w-[420px] leading-relaxed"
          >
            GPU compute with zero-knowledge verification. Every result is mathematically proven correct -- no hardware trust required. Private execution, provable output.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            {[
              { icon: CheckCircle, label: 'ZK-Verified Results' },
              { icon: Lock, label: 'Encrypted Execution' },
              { icon: Zap, label: 'Sub-Minute Starts' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-[12px] text-slate-500 shadow-sm"
              >
                <item.icon className="w-3 h-3 text-slate-400" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="mt-7 flex flex-col xs:flex-row gap-3 w-full xs:w-auto"
          >
            <Link href="/waitlist">
              <button className="group w-full xs:w-auto px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2 text-[15px]">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full xs:w-auto px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all duration-150 flex items-center justify-center gap-2 text-[15px]"
            >
              Request a demo
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="mt-3 text-[12px] text-slate-400"
          >
            No credit card required
          </motion.p>

          {/* Mobile illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 lg:hidden relative w-full aspect-[3/2]"
          >
            <Image
              src="/images/hero/hero-illustration.png"
              alt="GPU server protected by crystal shield"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
