'use client';

import { motion } from 'framer-motion';
import { Palette, Film, Gamepad2, Code2, ArrowRight, Bot, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sages = [
  {
    name: 'Render Sage',
    role: 'Video & VFX Specialist',
    icon: Film,
    description: 'Expert in Blender, Maya, Nuke, and After Effects. Optimizes render settings, manages distributed rendering, and ensures color-accurate output.',
    specialty: 'Professional Rendering',
    image: '/images/sages/render-sage.jpg',
  },
  {
    name: 'Compute Sage',
    role: 'ML Training Expert',
    icon: Code2,
    description: 'Specialist in PyTorch and TensorFlow distributed training. Helps configure multi-GPU setups, optimize hyperparameters, and manage training workflows.',
    specialty: 'AI/ML Training',
    image: '/images/sages/compute-sage.jpg',
  },
  {
    name: 'Game Sage',
    role: 'Real-time Rendering',
    icon: Gamepad2,
    description: 'Unity and Unreal Engine expert. Assists with lightmap baking, asset optimization, and real-time rendering pipeline configuration.',
    specialty: 'Game Development',
    image: '/images/sages/game-sage.jpg',
  },
  {
    name: 'Studio Sage',
    role: 'Production Pipeline',
    icon: Palette,
    description: 'Helps manage complex production workflows. Integrates with render farms, handles file management, and optimizes batch processing.',
    specialty: 'Workflow Automation',
    image: '/images/sages/studio-sage.jpg',
  },
];

export function SageShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white to-emerald-50/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Bot className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">AI ASSISTANTS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powered by intelligent
            <br />
            <span className="text-emerald-600">workflow assistants</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered specialists that understand your tools, optimize your settings, and help you get the most out of BitSage's distributed GPU network.
          </p>
        </motion.div>
        
        {/* AI Assistants grid - Professional cards with cool images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sages.map((sage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Cool AI assistant image */}
              <div className="relative w-full h-80 overflow-hidden bg-slate-100">
                <Image
                  src={sage.image}
                  alt={sage.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                
                {/* Professional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5" />
                
                {/* Professional icon badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center">
                    <sage.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                
                {/* Specialty badge - Professional */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-semibold text-slate-800">{sage.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Professional content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {sage.name}
                  </h3>
                  <div className="text-sm font-medium text-emerald-600 mb-4">{sage.role}</div>
                  <p className="text-slate-600 leading-relaxed">{sage.description}</p>
                </div>
                
                {/* Professional capabilities */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Bot className="w-4 h-4" />
                  <span>AI-Powered Assistant</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Professional CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to chat with our community?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join creators, developers, and enterprises in our Discord community. Get help, share projects, and connect with AI assistants.
            </p>
            <div className="flex justify-center">
              <a
                href="https://discord.gg/QAXDpa7F5K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chatting
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

