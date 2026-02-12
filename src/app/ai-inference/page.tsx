'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Zap, Cpu, ArrowRight, CheckCircle, Shield, Globe,
  Brain, BarChart3, Bell, Mail, Server, Clock,
  Gauge, Network, Code2, Lock, TrendingUp, Activity
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const capabilities = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Sub-100ms inference times with edge-optimized routing.',
    stat: '<100ms',
    statLabel: 'P99 Latency',
  },
  {
    icon: TrendingUp,
    title: 'Auto-Scaling',
    description: 'Scale from zero to thousands of requests automatically.',
    stat: '10,000+',
    statLabel: 'RPS Capacity',
  },
  {
    icon: Globe,
    title: 'Global Edge',
    description: 'Deploy models close to your users worldwide.',
    stat: '12',
    statLabel: 'Edge Regions',
  },
  {
    icon: Shield,
    title: 'Private Inference',
    description: 'TEE-enabled inference for sensitive data.',
    stat: '100%',
    statLabel: 'Data Privacy',
  },
];

const supportedFrameworks = [
  { name: 'PyTorch', logo: '🔥' },
  { name: 'TensorFlow', logo: '🧠' },
  { name: 'ONNX', logo: '⚡' },
  { name: 'Hugging Face', logo: '🤗' },
  { name: 'vLLM', logo: '🚀' },
  { name: 'TensorRT', logo: '💚' },
];

const features = [
  'OpenAI-compatible API',
  'Streaming responses',
  'Batch inference',
  'Model versioning',
  'A/B testing',
  'Usage analytics',
  'Cost monitoring',
  'Rate limiting',
];

const modelTypes = [
  { type: 'LLMs', examples: 'Llama, Mistral, Falcon', icon: Brain },
  { type: 'Vision', examples: 'Stable Diffusion, SDXL', icon: Activity },
  { type: 'Audio', examples: 'Whisper, Bark', icon: Network },
  { type: 'Custom', examples: 'Your fine-tuned models', icon: Code2 },
];

export default function AIInferencePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({
          email,
          source: 'ai-inference-waitlist',
        });
        if (result.success) {
          setIsSubscribed(true);
          setEmail('');
        }
      } catch (error) {
        console.error('Subscription error:', error);
      }
    }
  };

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-semibold">AI INFERENCE</span>
              <span className="px-2 py-0.5 rounded-full bg-fuchsia-500 text-white text-xs font-bold">COMING Q1 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Deploy AI Models
              <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                At The Edge
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Low-latency model serving on our global GPU network. Auto-scale from zero,
              pay only for what you use, with optional privacy-preserving inference.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <cap.icon className="w-8 h-8 text-violet-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-1">{cap.stat}</div>
                <div className="text-xs text-slate-500 mb-3">{cap.statLabel}</div>
                <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Deploy Any Model
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                From open-source LLMs to your custom fine-tuned models,
                we support all major frameworks and architectures.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {modelTypes.map((model) => (
                  <div key={model.type} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <model.icon className="w-5 h-5 text-violet-400 mb-2" />
                    <div className="font-semibold text-white">{model.type}</div>
                    <div className="text-xs text-slate-500">{model.examples}</div>
                  </div>
                ))}
              </div>

              {/* Frameworks */}
              <div className="flex flex-wrap gap-3">
                {supportedFrameworks.map((fw) => (
                  <div key={fw.name} className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300 flex items-center gap-2">
                    <span>{fw.logo}</span>
                    <span>{fw.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Code example */}
              <div className="bg-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-violet-400" />
                  <span className="font-semibold text-white">Quick Start</span>
                </div>
                <div className="p-6">
                  <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
{`from bitsage import Inference

# Deploy a model
model = Inference.deploy(
    model="meta-llama/Llama-3-70B",
    gpu="H100",
    replicas="auto"  # Auto-scale
)

# Run inference
response = model.generate(
    prompt="Explain quantum computing",
    max_tokens=500,
    private=True  # TEE inference
)

print(response.text)`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Production-Ready Features
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to run AI inference at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-400">
              Pay only for compute time. Scale to zero when idle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { tier: 'Starter', price: 'Free', desc: '1M tokens/month', features: ['Community models', 'Shared GPUs', 'Best-effort latency'] },
              { tier: 'Pro', price: '$0.50', desc: 'per 1M tokens', features: ['All models', 'Dedicated GPUs', 'Low latency SLA'], popular: true },
              { tier: 'Enterprise', price: 'Custom', desc: 'volume pricing', features: ['Private deployment', 'TEE inference', 'Custom SLAs'] },
            ].map((plan) => (
              <motion.div
                key={plan.tier}
                className={`p-6 rounded-2xl border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 border-violet-500/30'
                    : 'bg-slate-800/50 border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-violet-400 mb-2">MOST POPULAR</div>
                )}
                <div className="text-xl font-bold text-white mb-1">{plan.tier}</div>
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-sm text-slate-500 mb-4">{plan.desc}</div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-slate-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            * Pricing is estimated. Final pricing available at launch.
          </p>
        </div>
      </section>

      {/* CTA / Notify Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Early Access
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Be among the first to deploy AI models on BitSage's inference platform.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-all"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">You're on the list!</p>
                <p className="text-violet-100 text-sm">We'll notify you when AI Inference launches.</p>
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/waitlist"
                className="text-white/80 hover:text-white underline text-sm"
              >
                Or join the full enterprise waitlist →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
