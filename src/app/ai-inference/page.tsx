'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Zap, Cpu, ArrowRight, CheckCircle, Shield, Globe,
  Brain, Mail, Code2, Lock, TrendingUp, Activity, Network
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const capabilities = [
  { icon: Zap, title: 'Ultra-Low Latency', description: 'Sub-100ms inference times with edge-optimized routing.', stat: '<100ms', statLabel: 'P99 Latency' },
  { icon: TrendingUp, title: 'Auto-Scaling', description: 'Scale from zero to thousands of requests automatically.', stat: '10,000+', statLabel: 'RPS Capacity' },
  { icon: Globe, title: 'Global Edge', description: 'Deploy models close to your users worldwide.', stat: '12', statLabel: 'Edge Regions' },
  { icon: Shield, title: 'Private Inference', description: 'TEE-enabled inference for sensitive data.', stat: '100%', statLabel: 'Data Privacy' },
];

const modelTypes = [
  { type: 'LLMs', examples: 'Llama, Mistral, Falcon', icon: Brain },
  { type: 'Vision', examples: 'Stable Diffusion, SDXL', icon: Activity },
  { type: 'Audio', examples: 'Whisper, Bark', icon: Network },
  { type: 'Custom', examples: 'Your fine-tuned models', icon: Code2 },
];

const features = [
  'OpenAI-compatible API', 'Streaming responses', 'Batch inference', 'Model versioning',
  'A/B testing', 'Usage analytics', 'Cost monitoring', 'Rate limiting',
];

export default function AIInferencePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({ email, source: 'ai-inference-waitlist' });
        if (result.success) { setIsSubscribed(true); setEmail(''); }
      } catch (error) { console.error('Subscription error:', error); }
    }
  };

  return (
    <PublicPageLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white bg-mesh-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
              <Brain className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600">AI Inference</span>
              <span className="px-2 py-0.5 rounded-full bg-[--accent-light] text-[--accent] text-xs font-bold">Coming Q1 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Deploy AI Models{' '}
              <span className="text-[--accent]">At The Edge</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Low-latency model serving on our global GPU network. Auto-scale from zero,
              pay only for what you use, with optional privacy-preserving inference.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="group px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all text-sm"
              >
                View documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <cap.icon className="w-6 h-6 text-slate-500 mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{cap.stat}</div>
                <div className="text-xs text-slate-400 mb-3">{cap.statLabel}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-500">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Models</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Deploy any model
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                From open-source LLMs to your custom fine-tuned models,
                we support all major frameworks and architectures.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {modelTypes.map((model) => (
                  <div key={model.type} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <model.icon className="w-5 h-5 text-slate-500 mb-2" />
                    <div className="font-semibold text-slate-900">{model.type}</div>
                    <div className="text-xs text-slate-500">{model.examples}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code example */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white text-sm">Quick Start</span>
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
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Production-ready features
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Everything you need to run AI inference at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-500">
              Pay only for compute time. Scale to zero when idle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { tier: 'Starter', price: 'Free', desc: '1M tokens/month', features: ['Community models', 'Shared GPUs', 'Best-effort latency'] },
              { tier: 'Pro', price: '$0.50', desc: 'per 1M tokens', features: ['All models', 'Dedicated GPUs', 'Low latency SLA'], popular: true },
              { tier: 'Enterprise', price: 'Custom', desc: 'volume pricing', features: ['Private deployment', 'TEE inference', 'Custom SLAs'] },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`p-6 rounded-xl border ${
                  plan.popular
                    ? 'bg-slate-50 border-slate-900 ring-1 ring-slate-900'
                    : 'bg-white border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-[--accent] mb-2">MOST POPULAR</div>
                )}
                <div className="text-lg font-semibold text-slate-900 mb-1">{plan.tier}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{plan.price}</div>
                <div className="text-sm text-slate-500 mb-4">{plan.desc}</div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            * Pricing is estimated. Final pricing available at launch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get early access
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Be among the first to deploy AI models on BitSage&apos;s inference platform.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-white/20 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Notify me
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-slate-800 rounded-xl p-6 max-w-md mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-white font-semibold">You&apos;re on the list!</p>
              <p className="text-slate-400 text-sm">We&apos;ll notify you when AI Inference launches.</p>
            </div>
          )}

          <div className="mt-6">
            <Link href="/waitlist" className="text-slate-400 hover:text-white text-sm underline">
              Or join the full enterprise waitlist
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
