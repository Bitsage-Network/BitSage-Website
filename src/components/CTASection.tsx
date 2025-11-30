'use client';

import { motion } from 'framer-motion';
import { Sparkles, Rocket, Users, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

const ctas = [
  {
    icon: Sparkles,
    title: 'Join the Waitlist',
    description: 'Get priority access to the BitSage network and be first to experience decentralized GPU computing',
    badge: 'Early Access',
    action: 'modal',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Book a Demo',
    description: 'Schedule a personalized walkthrough and discover how BitSage can accelerate your projects',
    badge: 'For Teams',
    link: '/enterprises',
    highlight: false,
  },
  {
    icon: Rocket,
    title: 'Become a Provider',
    description: 'Share your idle GPU resources and earn crypto rewards while powering the decentralized network',
    badge: 'Earn Rewards',
    link: '/providers',
    highlight: false,
  },
];

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white to-emerald-50/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">GET STARTED</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Started with
            <br />
            <span className="text-emerald-600">BitSage Network</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the path that best fits your needs and join the decentralized GPU revolution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`
                  bg-white rounded-2xl p-8 h-full flex flex-col border shadow-sm
                  ${cta.highlight ? 'border-emerald-200 shadow-emerald-100/50' : 'border-slate-200'}
                  hover:border-emerald-300 hover:shadow-xl transition-all duration-300
                  group-hover:-translate-y-1
                `}
              >
                {/* Badge at top */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 self-start ${
                  cta.highlight 
                    ? 'bg-emerald-100 border border-emerald-200 text-emerald-700' 
                    : 'bg-slate-100 border border-slate-200 text-slate-700'
                }`}>
                  <span className="text-xs font-bold">{cta.badge}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  cta.highlight 
                    ? 'bg-emerald-100' 
                    : 'bg-slate-100'
                }`}>
                  <cta.icon className={`w-8 h-8 ${cta.highlight ? 'text-emerald-600' : 'text-slate-600'}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {cta.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {cta.description}
                </p>

                {/* CTA Button */}
                {cta.action === 'modal' ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`
                      w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
                      ${cta.highlight 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }
                    `}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={cta.link || '#'}
                    className={`
                      w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
                      ${cta.highlight 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }
                    `}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

