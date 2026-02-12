'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Terminal, Copy, Check, Zap, Clock, Shield, Cpu, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Zap, label: 'Sub-minute job starts', color: 'text-amber-600 bg-amber-50' },
  { icon: Clock, label: 'Cost estimation before run', color: 'text-blue-600 bg-blue-50' },
  { icon: Shield, label: 'TEE secure execution', color: 'text-violet-600 bg-violet-50' },
  { icon: Lock, label: 'End-to-end encrypted', color: 'text-emerald-600 bg-emerald-50' },
];

const gpuTiers = [
  { name: 'RTX 4090', price: '$0.40/hr', vram: '24GB' },
  { name: 'A100', price: '$2.00/hr', vram: '80GB' },
  { name: 'H100', price: '$3.50/hr', vram: '80GB TEE' },
];

const examples = [
  {
    id: 'cli',
    title: 'CLI',
    icon: Terminal,
    description: 'One command to submit, monitor, and download',
    language: 'bash',
    code: `# Install & authenticate
npm i -g @bitsage/cli
export BITSAGE_API_KEY=sk_live_...

# Estimate before you run
bitsage render estimate scene.blend \\
  --frames 1-100 --gpu H100

# Submit job with budget controls
bitsage render submit scene.blend \\
  --engine blender \\
  --frames 1-100 \\
  --gpu H100 \\
  --budget 25USD \\
  --tee enabled \\
  --out ./renders

# Real-time monitoring
bitsage jobs watch <JOB_ID>

# Download when complete
bitsage jobs download <JOB_ID>`,
  },
  {
    id: 'python',
    title: 'Python',
    icon: Code2,
    description: 'Full SDK with async support',
    language: 'python',
    code: `from bitsage import Bitsage

client = Bitsage(api_key="sk_live_...")

# Estimate cost before running
estimate = client.render.estimate(
    project_file="scene.blend",
    frames=[1, 100],
    gpu_tier="H100",
    tee_enabled=True
)
print(f"Cost: \${estimate.cost} | ETA: {estimate.duration}")

# Submit with privacy options
job = client.render.submit(
    project_file="scene.blend",
    engine="blender",
    frames=[1, 100],
    gpu_tier="H100",
    tee_enabled=True,      # Secure enclave
    encrypt_output=True,   # E2E encryption
    budget=25.0
)

# Stream progress in real-time
for update in job.stream():
    print(f"Frame {update.frame}: {update.status}")`,
  },
  {
    id: 'inference',
    title: 'AI Inference',
    icon: Cpu,
    description: 'Deploy models with privacy guarantees',
    language: 'python',
    code: `from bitsage import Bitsage

client = Bitsage(api_key="sk_live_...")

# Deploy LLM with TEE protection
model = client.inference.deploy(
    model="llama-3-70b",
    gpu_tier="H100",
    gpu_count=2,
    tee_enabled=True,  # Data never leaves enclave
    max_batch_size=32
)

# Private inference - input/output encrypted
response = model.complete(
    prompt="Analyze this confidential document...",
    max_tokens=500,
    private=True  # Zero-knowledge mode
)

# Batch inference with privacy
results = model.batch([
    {"prompt": "Query 1", "private": True},
    {"prompt": "Query 2", "private": True},
])

# Cleanup
model.terminate()`,
  },
];

const highlightCode = (code: string, language: string) => {
  if (language === 'python') {
    let highlighted = code;
    const protectedItems: string[] = [];

    highlighted = highlighted.replace(/(f?["'])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      const coloredString = match.startsWith('f')
        ? `<span class="text-emerald-400">f</span><span class="text-emerald-300">${match.slice(1)}</span>`
        : `<span class="text-emerald-300">${match}</span>`;
      protectedItems.push(coloredString);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });

    highlighted = highlighted.replace(/(#.*$)/gm, (match) => {
      protectedItems.push(`<span class="text-slate-500">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });

    highlighted = highlighted.replace(/\b(from|import|def|class|if|else|elif|for|while|try|except|finally|with|as|return|yield|break|continue|pass|lambda|global|nonlocal|assert|del|raise|in|is|not|and|or)\b/g,
      '<span class="text-violet-400 font-medium">$1</span>');

    highlighted = highlighted.replace(/\b(True|False|None)\b/g,
      '<span class="text-orange-400 font-medium">$1</span>');

    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g,
      '<span class="text-amber-400">$1</span>');

    highlighted = highlighted.replace(/(\w+)(?=\s*\()/g,
      '<span class="text-blue-400">$1</span>');

    highlighted = highlighted.replace(/\.(\w+)/g,
      '.<span class="text-cyan-400">$1</span>');

    protectedItems.forEach((item, index) => {
      highlighted = highlighted.replace(`__PROTECTED_${index}__`, item);
    });

    return highlighted;

  } else if (language === 'bash') {
    let highlighted = code;
    const protectedItems: string[] = [];

    highlighted = highlighted.replace(/(#.*$)/gm, (match) => {
      protectedItems.push(`<span class="text-slate-500">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });

    highlighted = highlighted.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      protectedItems.push(`<span class="text-emerald-300">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });

    highlighted = highlighted.replace(/(\$\w+)/g, '<span class="text-amber-400">$1</span>');
    highlighted = highlighted.replace(/(<[A-Z_]+>)/g, '<span class="text-slate-500">$1</span>');
    highlighted = highlighted.replace(/(--?\w+[-\w]*)/g, '<span class="text-cyan-400">$1</span>');
    highlighted = highlighted.replace(/^(\w+)/gm, '<span class="text-violet-400 font-medium">$1</span>');

    protectedItems.forEach((item, index) => {
      highlighted = highlighted.replace(`__PROTECTED_${index}__`, item);
    });

    return highlighted;
  }

  return code;
};

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState(examples[0].id);
  const [copied, setCopied] = useState(false);

  const activeExample = examples.find(ex => ex.id === activeTab)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold">DEVELOPERS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Start GPU jobs in minutes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple CLI & Python SDK with built-in privacy. No YAML, no config files—just code.
          </p>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${feature.color} border border-current/10`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <feature.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tabs + GPU info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tabs */}
            <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200">
              {examples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setActiveTab(example.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                    activeTab === example.id
                      ? 'bg-white shadow-sm border border-slate-200'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === example.id ? 'bg-emerald-100' : 'bg-slate-100'
                  }`}>
                    <example.icon className={`w-5 h-5 ${
                      activeTab === example.id ? 'text-emerald-600' : 'text-slate-500'
                    }`} />
                  </div>
                  <div>
                    <div className={`font-semibold ${
                      activeTab === example.id ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {example.title}
                    </div>
                    <div className="text-xs text-slate-500">{example.description}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* GPU Tiers */}
            <motion.div
              className="bg-slate-900 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold">Available GPUs</span>
              </div>
              <div className="space-y-3">
                {gpuTiers.map((gpu) => (
                  <div key={gpu.name} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                    <div>
                      <div className="font-medium">{gpu.name}</div>
                      <div className="text-xs text-slate-400">{gpu.vram}</div>
                    </div>
                    <div className="text-emerald-400 font-mono text-sm">{gpu.price}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/docs/pricing"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
              >
                View all GPUs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Code display */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
              {/* Code header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-slate-400 font-mono">
                    {activeExample.id === 'cli' ? 'terminal' : 'main.py'}
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Code content */}
              <div className="bg-slate-950 p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed">
                  <code
                    className="font-mono"
                    style={{ fontFamily: 'JetBrains Mono, SF Mono, Monaco, Consolas, monospace' }}
                    dangerouslySetInnerHTML={{
                      __html: highlightCode(activeExample.code, activeExample.language)
                    }}
                  />
                </pre>
              </div>

              {/* Code footer with live indicator */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs text-slate-400">Ready to run</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    TEE Available
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    E2E Encrypted
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/docs/quickstart"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg"
            >
              <Terminal className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs/api-reference"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Code2 className="w-5 h-5" />
              API Reference
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
