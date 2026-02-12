'use client';

import { motion } from 'framer-motion';
import { Sparkles, X, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white z-[100] overflow-hidden">
      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${20 + i * 15}%`, top: '50%' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Content */}
          <div className="flex items-center gap-3 flex-1 justify-center text-center">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 flex-shrink-0 text-yellow-300" />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium">
              <span className="font-bold text-yellow-300">NEW:</span> Run <span className="font-bold">Agentic AI Workflows</span> on BitSage
            </span>
            <Link
              href="/openclaw"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-xs font-bold transition-all group backdrop-blur-sm"
            >
              <Zap className="w-3 h-3" />
              OpenClaw
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

