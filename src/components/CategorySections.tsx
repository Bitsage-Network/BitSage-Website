'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Film, Gamepad2, Code, Rocket, ArrowRight, Shield, Lock, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'vfx',
    name: 'VFX & Rendering',
    icon: Film,
    description: 'Professional VFX rendering with encrypted project files and confidential output delivery.',
    image: '/images/categories/ai-portrait-artistic.jpg',
    privacyFeature: 'Encrypted Assets',
    tools: ['Blender', 'After Effects', 'Nuke', 'DaVinci'],
  },
  {
    id: 'rendering',
    name: 'Architecture & Product',
    icon: Rocket,
    description: 'Photorealistic renders with IP protection. Your designs never leave secure enclaves.',
    image: '/images/categories/architectural-interior.jpg',
    privacyFeature: 'IP Protected',
    tools: ['V-Ray', 'KeyShot', 'Octane', 'Corona'],
  },
  {
    id: 'gaming',
    name: 'Game Development',
    icon: Gamepad2,
    description: 'Next-gen asset generation with confidential compute. Protect unreleased game content.',
    image: '/images/categories/game-environment-scifi.jpg',
    privacyFeature: 'Secure Enclaves',
    tools: ['UE5', 'Unity', 'Houdini', 'ZBrush'],
  },
  {
    id: 'ai',
    name: 'AI & ML Training',
    icon: Code,
    description: 'Train models on sensitive data with zero data exposure. Full privacy guarantees.',
    image: '/images/categories/ai-generated-landscape.jpg',
    privacyFeature: 'Zero Data Exposure',
    tools: ['PyTorch', 'TensorFlow', 'JAX', 'ONNX'],
  },
];

export function CategorySections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Dark background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Shield className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-semibold text-violet-300">CONFIDENTIAL COMPUTE</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy-First GPU Workloads
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your data stays encrypted. Your IP stays protected. Run any workload with full confidentiality.
          </p>
        </motion.div>

        {/* Compact 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 overflow-hidden transition-all duration-300">
                {/* Image with overlay */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                  {/* Privacy badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/90 text-white text-xs font-semibold">
                      <Lock className="w-3 h-3" />
                      {category.privacyFeature}
                    </div>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900/90 backdrop-blur-sm flex items-center justify-center border border-slate-700">
                      <category.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Lock, label: 'End-to-End Encryption', desc: 'Data encrypted at rest & transit' },
            { icon: Shield, label: 'Secure Enclaves', desc: 'TEE-protected execution' },
            { icon: EyeOff, label: 'Zero Knowledge', desc: 'Providers never see your data' },
            { icon: Eye, label: 'Audit Trails', desc: 'Cryptographic proof of privacy' },
          ].map((feature, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 text-center">
              <feature.icon className="w-6 h-6 text-violet-400 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white mb-1">{feature.label}</div>
              <div className="text-xs text-slate-500">{feature.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/obelysk"
            className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors group"
          >
            Learn about our privacy architecture
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

