'use client';

import { motion } from 'framer-motion';
import { Award, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-green-700 text-white z-[100]">
      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-3">
          {/* Content */}
          <div className="flex items-center gap-3 flex-1 justify-center text-center">
            <Award className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">
              <span className="font-semibold">Partnership Announcement:</span> BitSage Network joins <span className="font-bold">NVIDIA Partner Network</span>
            </span>
            <a
              href="/company#partnerships"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-xs font-medium transition-all group backdrop-blur-sm"
            >
              Learn More
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
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

