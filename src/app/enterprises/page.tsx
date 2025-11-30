'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Network, Globe, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';

export default function EnterprisesPage() {

  const useCases = [
    {
      title: 'AI & Machine Learning',
      description: 'Train and deploy models at scale with verifiable results',
      features: ['Model Training', 'Inference at Scale', 'Distributed Computing', 'Cost Optimization'],
      icon: Zap,
    },
    {
      title: '3D Rendering & VFX',
      description: 'Professional content creation with guaranteed output quality',
      features: ['Real-time Rendering', 'Batch Processing', 'Quality Assurance', 'Fast Turnaround'],
      icon: Play,
    },
    {
      title: 'Scientific Computing',
      description: 'Research and simulation with cryptographic proof of accuracy',
      features: ['Complex Simulations', 'Data Analysis', 'Research Computing', 'Verified Results'],
      icon: Network,
    },
  ];

  const benefits = [
    {
      title: 'Verifiable Results',
      description: 'Every computation comes with zero-knowledge proof of correctness',
      icon: Shield,
    },
    {
      title: 'Global Network',
      description: 'Access GPUs worldwide for optimal performance and cost',
      icon: Globe,
    },
    {
      title: 'Pay-per-Use',
      description: 'Only pay for actual compute time with transparent pricing',
      icon: Zap,
    },
    {
      title: 'Enterprise APIs',
      description: 'Seamless integration with your existing workflows',
      icon: Network,
    },
  ];

  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Access Distributed
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GPU Infrastructure
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              The future of enterprise GPU computing with verifiable results. Join our waitlist 
              to be among the first to access cryptographically verified compute infrastructure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/waitlist"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/manifesto"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                <span>Read Manifesto</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Perfect for Your Workloads
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're training AI models, rendering content, or running simulations, 
              BitSage Network provides the compute power you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-6">{useCase.description}</p>
                
                <ul className="space-y-2">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose BitSage Network?
            </h2>
            <p className="text-xl text-slate-600">
              Enterprise-grade features that set us apart from traditional cloud providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for the Future of Computing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading enterprises preparing for verifiable, distributed GPU infrastructure.
          </p>
          
          <Link 
            href="/waitlist"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <span>Join Waitlist Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </PublicPageLayout>
  );
}
