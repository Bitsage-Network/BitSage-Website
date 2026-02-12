'use client';

import { motion } from 'framer-motion';
import { Film, Gamepad2, Code2, ArrowRight, Bot, MessageCircle, Sparkles, Send, Cpu, Layers, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const sages = [
  {
    name: 'Render Sage',
    role: 'VFX & Video Assistant',
    icon: Film,
    description: 'Ask me about Blender, Maya, Nuke renders. I help optimize settings and manage distributed rendering jobs.',
    specialty: 'Professional Rendering',
    image: '/images/sages/render-sage.jpg',
    commands: ['/render-help', '/optimize-scene', '/estimate-cost'],
    color: 'amber',
  },
  {
    name: 'Compute Sage',
    role: 'ML Training Assistant',
    icon: Cpu,
    description: 'PyTorch & TensorFlow expert. I configure multi-GPU training, optimize hyperparameters, and monitor your jobs.',
    specialty: 'AI/ML Training',
    image: '/images/sages/compute-sage.jpg',
    commands: ['/train-model', '/gpu-status', '/benchmark'],
    color: 'cyan',
  },
  {
    name: 'Game Sage',
    role: 'Game Dev Assistant',
    icon: Gamepad2,
    description: 'Unity & Unreal specialist. I assist with lightmap baking, LOD optimization, and real-time rendering pipelines.',
    specialty: 'Game Development',
    image: '/images/sages/game-sage.jpg',
    commands: ['/bake-lights', '/optimize-assets', '/ue5-help'],
    color: 'emerald',
  },
  {
    name: 'Starknet Sage',
    role: 'Web3 Dev Assistant',
    icon: Code2,
    description: 'Cairo & Starknet expert. I help with smart contract development, deployment, and testing on Starknet.',
    specialty: 'Blockchain Development',
    image: '/images/sages/studio-sage.jpg',
    commands: ['/cairo-help', '/deploy-contract', '/verify-proof'],
    color: 'violet',
  },
];

export function SageShowcase() {
  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
    violet: { bg: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-200', light: 'bg-violet-50' },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-50/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Bot className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700">MEET THE SAGES</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            AI Assistants on
            <span className="text-violet-600"> Discord </span>
            &
            <span className="text-cyan-500"> Telegram</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Sages are AI-powered assistants that live in your community channels. Ask questions, get help with your workflows, and interact naturally through chat.
          </p>

          {/* Platform badges */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://discord.gg/QAXDpa7F5K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] text-white rounded-xl font-medium hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
            >
              <DiscordIcon className="w-5 h-5" />
              Join Discord
            </a>
            <a
              href="https://t.me/bitsage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0088cc] text-white rounded-xl font-medium hover:bg-[#006699] transition-all shadow-lg shadow-[#0088cc]/20"
            >
              <TelegramIcon className="w-5 h-5" />
              Join Telegram
            </a>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Example Conversation</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">You</div>
                <div className="flex-1 bg-slate-800 rounded-xl rounded-tl-none p-3">
                  @RenderSage I need to render a 4K animation, 500 frames. What GPU should I use?
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <Film className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 bg-emerald-900/50 border border-emerald-500/30 rounded-xl rounded-tl-none p-3">
                  <span className="text-emerald-400 font-semibold">Render Sage:</span> For 4K Blender Cycles with 500 frames, I recommend <span className="text-amber-400">RTX 4090</span> for best price/performance. Estimated time: ~4 hours. Cost: ~$8.
                  <div className="mt-2 flex gap-2">
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs">🚀 /start-render</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs">💰 /estimate-cost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sages.map((sage, index) => {
            const colors = colorClasses[sage.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl border ${colors.border} overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={sage.image}
                    alt={sage.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                    <sage.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 -mt-8 relative">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${colors.light} ${colors.text} text-xs font-medium mb-3`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                    {sage.specialty}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{sage.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{sage.role}</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{sage.description}</p>

                  {/* Commands */}
                  <div className="flex flex-wrap gap-1.5">
                    {sage.commands.map((cmd) => (
                      <span key={cmd} className="px-2 py-1 bg-slate-100 rounded text-xs font-mono text-slate-600">
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* OpenClaw connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Powered by OpenClaw
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need More Than Chat?
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Sages are built on <strong>OpenClaw</strong> — our agentic AI platform. Deploy autonomous agents that run complex multi-step workflows, integrate with your tools, and execute tasks end-to-end on BitSage's private infrastructure.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/openclaw"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 rounded-xl font-semibold hover:bg-white/90 transition-all"
                  >
                    <Layers className="w-5 h-5" />
                    Explore OpenClaw
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://www.openclaw.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    <Zap className="w-5 h-5" />
                    Try OpenClaw
                  </a>
                </div>
              </div>

              {/* Agent illustration */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-xs text-white/60 mb-2">agent_workflow.py</div>
                <pre className="text-sm font-mono text-white/90 overflow-x-auto">
{`from openclaw import Agent

agent = Agent(
  name="ResearchBot",
  model="claude-3-opus",
  tools=[web, code, files],
  private=True  # TEE
)

agent.run(
  "Analyze competitors"
)`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

