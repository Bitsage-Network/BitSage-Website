'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

export function CommunitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">JOIN OUR COMMUNITY</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Be Part of the</span>
            <br />
            <span className="text-emerald-400">GPU Revolution</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join creators, developers, and studios building the future of verifiable computing with BitSage. 
            From Hollywood productions to cutting-edge AI research.
          </p>
        </motion.div>
        
        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Discord Card */}
          <motion.a
            href="https://discord.gg/QAXDpa7F5K"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Join Discord
                  </h3>
                  <p className="text-slate-400 text-sm">Growing community</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Connect with creators, get help from AI assistants, and stay updated on the latest BitSage developments.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span>Join Community</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* X (Twitter) Card */}
          <motion.a
            href="https://x.com/bitsagenetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Follow on X
                  </h3>
                  <p className="text-slate-400 text-sm">Latest updates</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Get real-time updates, announcements, and insights from the BitSage team and community.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span>Follow Updates</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join?
            </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get early access to BitSage and be part of the decentralized GPU revolution. 
              Limited spots available for our pre-launch.
            </p>
            
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-600/25 transition-all"
              >
                Join Waitlist
          </button>
        </motion.div>
        
        {/* Request Demo Modal */}
        <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}

