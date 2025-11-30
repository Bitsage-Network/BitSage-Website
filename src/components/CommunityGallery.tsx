'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Heart, Eye, Sparkles } from 'lucide-react';

// Placeholder gallery items - will be replaced with real community creations
const galleryItems = [
  {
    id: 1,
    title: 'Cyberpunk Cityscape',
    creator: 'DigitalDreamer',
    likes: 234,
    views: 1205,
    type: 'AI Art',
    placeholder: '🌃'
  },
  {
    id: 2,
    title: 'Fantasy Character',
    creator: 'ArtMage',
    likes: 567,
    views: 2890,
    type: 'AI Art',
    placeholder: '🧙‍♂️'
  },
  {
    id: 3,
    title: 'Sci-Fi Render',
    creator: 'VFXPro',
    likes: 892,
    views: 4521,
    type: 'VFX',
    placeholder: '🚀'
  },
  {
    id: 4,
    title: 'Game Asset Pack',
    creator: 'GameDev123',
    likes: 445,
    views: 2301,
    type: 'Gaming',
    placeholder: '🎮'
  },
  {
    id: 5,
    title: 'Abstract Neural Art',
    creator: 'AIArtist',
    likes: 723,
    views: 3654,
    type: 'AI Art',
    placeholder: '🎨'
  },
  {
    id: 6,
    title: 'Motion Graphics',
    creator: 'MotionMaster',
    likes: 334,
    views: 1876,
    type: 'VFX',
    placeholder: '✨'
  },
];

export function CommunityGallery() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-sage-gold-400" />
            <span className="text-sm text-sage-300">Community Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Amazing Creations</span>
            <br />
            <span className="text-white">From Our Community</span>
          </h2>
          <p className="text-xl text-sage-400 max-w-2xl mx-auto">
            Get inspired by what others are creating with BitSage
          </p>
        </motion.div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden p-0">
                {/* Image placeholder - aspect ratio 4:3 */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-sage-800 to-sage-900 flex items-center justify-center text-6xl overflow-hidden">
                  {item.placeholder}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-sage-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-5 h-5" />
                        <span className="text-sm">{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sage-200 group-hover:text-sage-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs px-2 py-1 glass rounded-full text-sage-400">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm text-sage-500">by {item.creator}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* View more CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="text-sage-cyan-400 hover:text-sage-cyan-300 font-semibold transition-colors">
            View Full Gallery →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

