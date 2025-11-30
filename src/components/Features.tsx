'use client';

import { motion } from 'framer-motion';
import { Card, CardTitle, CardDescription } from './ui/Card';
import { Palette, Video, Gamepad2, Code, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'AI Art Generation',
    description: 'Create stunning images with state-of-the-art AI models. From photorealistic portraits to abstract masterpieces.',
    color: 'text-sage-500',
    bgColor: 'bg-sage-500/10',
  },
  {
    icon: Video,
    title: 'Video & VFX Rendering',
    description: 'Powerful GPU rendering for video processing, motion graphics, and visual effects. Industry-standard workflows.',
    color: 'text-sage-cyan-400',
    bgColor: 'bg-sage-cyan-400/10',
  },
  {
    icon: Gamepad2,
    title: 'Game Asset Creation',
    description: 'Generate textures, 3D models, and game-ready assets. Perfect for indie developers and AAA studios alike.',
    color: 'text-sage-gold-400',
    bgColor: 'bg-sage-gold-400/10',
  },
  {
    icon: Code,
    title: 'ML Model Training',
    description: 'Train and fine-tune machine learning models on distributed GPUs. Scale your AI experiments effortlessly.',
    color: 'text-sage-cyan-300',
    bgColor: 'bg-sage-cyan-300/10',
  },
  {
    icon: Sparkles,
    title: 'Specialized Sages',
    description: 'AI assistants expert in their craft. Get guidance, optimize workflows, and create like never before.',
    color: 'text-sage-400',
    bgColor: 'bg-sage-400/10',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Distributed GPU network ensures your jobs complete quickly. Real-time progress tracking and instant results.',
    color: 'text-sage-gold-300',
    bgColor: 'bg-sage-gold-300/10',
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Magical Capabilities</span>
          </h2>
          <p className="text-xl text-sage-400 max-w-2xl mx-auto">
            Everything you need to bring your creative visions to life, powered by decentralized GPU compute
          </p>
        </motion.div>
        
        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

