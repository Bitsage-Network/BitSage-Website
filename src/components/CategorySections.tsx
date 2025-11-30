'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Film, Gamepad2, Code, Rocket, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'vfx',
    name: 'Hollywood-Grade VFX',
    icon: Film,
    description: 'Professional VFX rendering, compositing, and motion graphics for blockbuster films, TV series, and commercial productions',
    image: '/images/categories/ai-portrait-artistic.jpg',
    link: '/solutions',
    items: [
      { title: 'Film Production', emoji: '🎥', metric: '4K-8K renders' },
      { title: 'Motion Graphics', emoji: '✨', metric: 'After Effects' },
      { title: 'Color Grading', emoji: '🎨', metric: 'DaVinci Resolve' },
      { title: 'VFX Compositing', emoji: '🌟', metric: 'Nuke, Fusion' },
    ]
  },
  {
    id: 'rendering',
    name: 'Photorealistic Rendering',
    icon: Rocket,
    description: 'Architectural visualization, product renders, and character animation with cinema-quality photorealism',
    image: '/images/categories/architectural-interior.jpg',
    link: '/solutions',
    items: [
      { title: 'Architecture Viz', emoji: '🏗️', metric: 'Blender, V-Ray' },
      { title: 'Product Renders', emoji: '💎', metric: 'KeyShot, Octane' },
      { title: 'Character Animation', emoji: '🦸', metric: 'Maya, Houdini' },
      { title: 'VR/AR Content', emoji: '🥽', metric: 'Unity, Unreal' },
    ]
  },
  {
    id: 'gaming',
    name: 'Triple-A Game Assets',
    icon: Gamepad2,
    description: 'Next-gen game environments, character models, and real-time rendering for Unreal Engine 5 and Unity',
    image: '/images/categories/game-environment-scifi.jpg',
    link: '/solutions',
    items: [
      { title: 'Environment Design', emoji: '🏙️', metric: 'UE5, Unity' },
      { title: 'Character Models', emoji: '🦸', metric: 'ZBrush, Maya' },
      { title: 'Lightmap Baking', emoji: '💡', metric: 'Lumen, Unity' },
      { title: 'Asset Generation', emoji: '🗿', metric: 'Substance, Houdini' },
    ]
  },
  {
    id: 'ai',
    name: 'AI Model Training & Generation',
    icon: Code,
    description: 'Large-scale AI training, fine-tuning custom models, and high-quality generative AI outputs',
    image: '/images/categories/ai-generated-landscape.jpg',
    link: '/solutions',
    items: [
      { title: 'Model Training', emoji: '🔬', metric: 'PyTorch, TensorFlow' },
      { title: 'Image Generation', emoji: '🎨', metric: 'Stable Diffusion, DALL-E' },
      { title: 'Fine-tuning', emoji: '⚙️', metric: 'LoRA, DreamBooth' },
      { title: 'Batch Inference', emoji: '⚡', metric: 'High throughput' },
    ]
  },
];

export function CategorySections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-50 to-emerald-50/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">USE CASES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enterprise GPU compute
            <br />
            <span className="text-emerald-600">for every industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From Hollywood-grade VFX to enterprise AI training. Power your most demanding workloads with verifiable, scalable GPU infrastructure.
          </p>
        </motion.div>
        
        {/* Category cards */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Beautiful image - Takes up 3/5 of the width */}
                <div className="lg:col-span-3 relative h-80 lg:h-[480px] overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={catIndex === 0}
                      style={{
                        objectPosition: 'center center'
                      }}
                    />
                  </div>
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
                  
                  {/* Category badge overlay - Enhanced */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <category.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-semibold text-slate-800">{category.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating action hint */}
                  <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-emerald-600 text-white p-3 rounded-full shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Right: Content - Takes up 2/5 of the width */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-50/50 to-white">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Popular workflows - Enhanced */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-5 font-bold flex items-center gap-2">
                      <div className="w-4 h-px bg-emerald-500"></div>
                      Popular Workflows
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="bg-white rounded-xl p-4 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 hover:shadow-md transition-all cursor-pointer group/item"
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: catIndex * 0.1 + itemIndex * 0.08 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{item.emoji}</div>
                            <div className="flex-1">
                              <h5 className="text-sm font-semibold text-slate-800 mb-1 group-hover/item:text-emerald-700 transition-colors">
                                {item.title}
                              </h5>
                              <p className="text-xs text-slate-500">{item.metric}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover/item:text-emerald-600 opacity-0 group-hover/item:opacity-100 transition-all" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced CTA */}
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 transition-all group/btn self-start"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

