'use client';

import { motion } from 'framer-motion';
import { Globe, Network, Server, Shield, Boxes } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Globe,
    title: 'Sage Cloud',
    description: 'Web & API entry point for jobs. Submit, monitor, and manage your GPU workloads through our unified interface and developer-friendly APIs.',
    image: '/images/platform/sage-cloud-dashboard.svg',
    imageAlt: 'Sage Cloud Dashboard Interface'
  },
  {
    icon: Network,
    title: 'Sage Mesh',
    description: 'Global P2P network fabric connecting thousands of GPU providers worldwide. Decentralized routing and intelligent job distribution.',
    image: '/images/platform/sage-mesh-architecture.png',
    imageAlt: 'Sage Mesh Network Architecture'
  },
  {
    icon: Server,
    title: 'Sage Forge',
    description: 'Node execution environment where your jobs run. Containerized workloads with GPU access, secure isolation, and real-time monitoring.',
    image: '/images/platform/sage-forge-desktop.svg',
    imageAlt: 'Sage Forge Desktop Application'
  },
  {
    icon: Shield,
    title: 'Sage Proof',
    description: 'ZK verification system providing cryptographic proof of execution. Every job comes with verifiable attestations and tamper-proof results.',
    image: '/images/platform/sage-proof-math.svg',
    imageAlt: 'Sage Proof Mathematical Verification'
  },
];

export function PlatformFeatures() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        {/* Fine dot pattern texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}></div>
        
        {/* Very subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-slate-50 to-emerald-50/40"></div>
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
            <Boxes className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">CORE ARCHITECTURE</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Verifiable compute infrastructure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four-layer architecture designed for secure, scalable, and verifiable GPU compute across a global decentralized network.
          </p>
        </motion.div>

        {/* Architecture layers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-48 bg-slate-50">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/platform"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors group"
          >
            Learn more about the platform
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

