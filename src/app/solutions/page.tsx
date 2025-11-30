'use client';

import { motion } from 'framer-motion';
import { Film, Gamepad2, Code, Rocket, ArrowRight, Layers, CheckCircle, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const solutions = [
  {
    id: 'vfx',
    name: 'Hollywood-Grade VFX',
    icon: Film,
    description: 'Professional VFX rendering, compositing, and motion graphics for blockbuster films, TV series, and commercial productions',
    image: '/images/categories/ai-portrait-artistic.jpg',
    features: [
      'Film Production (4K-8K renders)',
      'Motion Graphics (After Effects)',
      'Color Grading (DaVinci Resolve)',
      'VFX Compositing (Nuke, Fusion)'
    ],
    benefits: [
      'Up to 70% cost savings vs traditional render farms',
      'Sub-minute job deployment',
      'Cryptographic proof of execution',
      'Global GPU availability 24/7'
    ]
  },
  {
    id: 'rendering',
    name: 'Photorealistic Rendering',
    icon: Rocket,
    description: 'Architectural visualization, product renders, and character animation with cinema-quality photorealism',
    image: '/images/categories/architectural-interior.jpg',
    features: [
      'Architecture Viz (Blender, V-Ray)',
      'Product Renders (KeyShot, Octane)',
      'Character Animation (Maya, Houdini)',
      'VR/AR Content (Unity, Unreal)'
    ],
    benefits: [
      'Elastic scaling from 1 to 1000+ GPUs',
      'Real-time progress monitoring',
      'Automatic quality assurance',
      'Enterprise-grade security'
    ]
  },
  {
    id: 'gaming',
    name: 'Triple-A Game Assets',
    icon: Gamepad2,
    description: 'Next-gen game environments, character models, and real-time rendering for Unreal Engine 5 and Unity',
    image: '/images/categories/game-environment-scifi.jpg',
    features: [
      'Environment Design (UE5, Unity)',
      'Character Models (ZBrush, Maya)',
      'Lightmap Baking (Lumen, Unity)',
      'Asset Generation (Substance, Houdini)'
    ],
    benefits: [
      'Optimized for game development workflows',
      'Batch processing for asset pipelines',
      'Version control integration',
      'Team collaboration tools'
    ]
  },
  {
    id: 'ai',
    name: 'AI Model Training & Generation',
    icon: Code,
    description: 'Large-scale AI training, fine-tuning custom models, and high-quality generative AI outputs',
    image: '/images/categories/ai-generated-landscape.jpg',
    features: [
      'Model Training (PyTorch, TensorFlow)',
      'Image Generation (Stable Diffusion, DALL-E)',
      'Fine-tuning (LoRA, DreamBooth)',
      'Batch Inference (High throughput)'
    ],
    benefits: [
      'Multi-GPU distributed training',
      'Custom model deployment',
      'API endpoints for inference',
      'Data privacy and security'
    ]
  },
];

export default function SolutionsPage() {
  return (
    <PublicPageLayout className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">SOLUTIONS</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GPU compute solutions
            <br />
            <span className="text-emerald-600">for every industry</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From Hollywood-grade VFX to enterprise AI training. Power your most demanding workloads with verifiable, scalable GPU infrastructure.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/enterprises"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Zap className="w-5 h-5" />
              Get Started
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              View Documentation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-96 overflow-hidden bg-slate-100">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                            <solution.icon className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800">{solution.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {solution.name}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4 font-bold">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4 font-bold">
                        Enterprise Benefits
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join creators and enterprises preparing for the future of verifiable GPU computing.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/enterprises"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Zap className="w-5 h-5" />
              Start Computing
            </Link>
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Become a Provider
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}