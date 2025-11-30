'use client';

import { motion } from 'framer-motion';
import { Server, Shield, Network, DollarSign, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { PublicPageLayout } from '@/components/PublicPageLayout';

export default function ProvidersPage() {

  const benefits = [
    {
      title: 'Fair Compensation',
      description: 'Competitive rates for verified compute workloads',
      icon: DollarSign,
    },
    {
      title: 'Secure Network',
      description: 'Enterprise-grade security protects your hardware',
      icon: Shield,
    },
    {
      title: 'Verified Work',
      description: 'Cryptographic proof ensures fair payment for completed jobs',
      icon: Network,
    },
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our simple installer',
      icon: Zap,
    },
  ];

  const requirements = [
    'NVIDIA GPU (GTX 1060 or better)',
    'Stable internet connection (10+ Mbps)',
    'Windows 10/11 or Linux',
    '8GB+ RAM recommended',
    'Available 24/7 for maximum earnings',
  ];

  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Earn Money with
                <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Your GPUs
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-green-100 mb-8"
              >
                Turn your idle GPU power into passive income with competitive market rates. 
                Be among the first providers to join BitSage Network's verifiable distributed compute infrastructure.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="/waitlist"
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Server className="w-4 h-4" />
                  <span>Join Waitlist</span>
                </a>
              </motion.div>
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Premium Network Benefits</h3>
              <p className="text-sm text-green-200 mb-6">Join the future of verifiable distributed computing</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Premium Pricing</h4>
                    <p className="text-green-100 text-sm">
                      Earn competitive rates for verified compute workloads with transparent, 
                      market-driven pricing that rewards quality providers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Verified Workloads</h4>
                    <p className="text-green-100 text-sm">
                      All compute jobs are cryptographically verified, ensuring you're 
                      compensated fairly for legitimate, high-value work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Enterprise Demand</h4>
                    <p className="text-green-100 text-sm">
                      Access to high-value enterprise workloads including AI training, 
                      scientific computing, and professional rendering projects.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-400/20">
                  <p className="text-center text-green-200 text-sm">
                    <strong>Early Provider Benefits:</strong> Priority access, higher earnings potential, 
                    and exclusive partnership opportunities for testnet participants.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Providers Choose BitSage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of the future of verifiable distributed computing. 
              Join our waitlist to be notified when provider onboarding begins.
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hardware Requirements
            </h2>
            <p className="text-xl text-slate-600">
              Make sure your setup meets these minimum requirements to start earning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={requirement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{requirement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Will Work
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            When we launch, you'll be able to start earning in just 3 simple steps.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Download & Install</h3>
              <p className="text-slate-600">Install the BitSage Node software on your system</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Configure & Connect</h3>
              <p className="text-slate-600">Set up your wallet and connect to the network</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Start Earning</h3>
              <p className="text-slate-600">Your GPUs automatically process jobs and earn rewards</p>
            </div>
          </div>

          <a 
            href="/waitlist"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <Server className="w-4 h-4" />
            <span>Join Waitlist Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PublicPageLayout>
  );
}
