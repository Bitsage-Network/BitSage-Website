'use client';

import { motion } from 'framer-motion';
import {
  Film, Brain, Zap, FlaskConical, Lock, Layers,
  ArrowRight, CheckCircle, Code2, Copy, Check,
  Server, Globe, Clock, Cpu
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import { useState } from 'react';

const workflows = [
  {
    id: 'batch-rendering',
    icon: Film,
    title: 'Batch Rendering Workflow',
    description: 'Render 3D scenes, animations, and visual effects across distributed GPUs.',
    color: 'amber',
    steps: [
      'Upload project files (.blend, .ma, scene)',
      'Configure render settings (resolution, format, frames)',
      'Jobs distributed to available GPU nodes',
      'Frames rendered in parallel with progress tracking',
      'Results verified and delivered with proof',
    ],
    code: `from bitsage import BatchJob

# Create a rendering job
job = BatchJob.create(
    type="blender",
    project="animation.blend",
    frames="1-240",
    output_format="exr",
    gpu_type="RTX_4090"
)

# Submit and monitor
job.submit()
job.wait()

# Download results
job.download("./renders/")`,
    useCases: ['Feature film VFX', 'Animation studios', 'Architectural visualization'],
    estimatedCost: '$0.35/GPU-hr',
  },
  {
    id: 'ai-training',
    icon: Brain,
    title: 'AI Training Workflow',
    description: 'Distributed model training with checkpointing and verification.',
    color: 'cyan',
    steps: [
      'Upload training script and dataset',
      'Configure distributed training parameters',
      'Training distributed across GPU cluster',
      'Checkpoints saved and verified',
      'Final model delivered with training metrics',
    ],
    code: `from bitsage import TrainingJob

# Configure distributed training
job = TrainingJob.create(
    script="train.py",
    dataset="s3://bucket/data",
    gpus=8,
    gpu_type="H100",
    checkpoint_interval=1000
)

# Start training
job.submit()

# Monitor progress
for update in job.stream():
    print(f"Step {update.step}: loss={update.loss}")`,
    useCases: ['LLM fine-tuning', 'Computer vision', 'Reinforcement learning'],
    estimatedCost: '$3.20/GPU-hr',
  },
  {
    id: 'realtime-inference',
    icon: Zap,
    title: 'Real-time Inference Workflow',
    description: 'Deploy models for low-latency serving with auto-scaling.',
    color: 'violet',
    steps: [
      'Upload model artifacts (ONNX, PyTorch, TensorFlow)',
      'Configure serving parameters and scaling',
      'Model deployed to edge regions',
      'Auto-scaling based on request volume',
      'Pay only for actual inference time',
    ],
    code: `from bitsage import Inference

# Deploy a model
deployment = Inference.deploy(
    model="meta-llama/Llama-3-70B",
    gpu="H100",
    min_replicas=1,
    max_replicas=10,
    regions=["us-east", "eu-west"]
)

# Make requests
response = deployment.generate(
    prompt="Explain quantum computing",
    max_tokens=500
)`,
    useCases: ['Chatbots & assistants', 'Content generation', 'Real-time translation'],
    estimatedCost: '$0.50/1M tokens',
  },
  {
    id: 'scientific-simulation',
    icon: FlaskConical,
    title: 'Scientific Simulation Workflow',
    description: 'Run molecular dynamics, climate models, and physics simulations.',
    color: 'purple',
    steps: [
      'Upload simulation configuration and input files',
      'Configure compute resources and duration',
      'Simulation runs on verified GPU cluster',
      'Intermediate results checkpointed',
      'Final results verified and delivered',
    ],
    code: `from bitsage import SimulationJob

# Configure molecular dynamics simulation
job = SimulationJob.create(
    type="gromacs",
    config="protein.gro",
    topology="topol.top",
    steps=10000000,
    gpus=4,
    gpu_type="A100"
)

# Submit and monitor
job.submit()
trajectory = job.wait()

# Analyze results
trajectory.download("./results/")`,
    useCases: ['Drug discovery', 'Materials science', 'Climate modeling'],
    estimatedCost: '$1.80/GPU-hr',
  },
  {
    id: 'zk-proof',
    icon: Lock,
    title: 'ZK Proof Generation Workflow',
    description: 'Generate zero-knowledge proofs with GPU acceleration.',
    color: 'emerald',
    steps: [
      'Submit computation witness and circuit',
      'Proof generation distributed across GPUs',
      'Proofs verified on-chain',
      'Results delivered with attestation',
    ],
    code: `from bitsage import ZKJob

# Generate ZK proof
job = ZKJob.create(
    circuit="transfer.r1cs",
    witness="witness.wtns",
    proving_key="proving.key",
    gpu_type="RTX_4090"
)

# Generate proof
proof = job.generate()

# Verify on-chain
tx = proof.verify_on_chain(network="starknet")`,
    useCases: ['Private transactions', 'Rollup proving', 'Identity verification'],
    estimatedCost: '$0.35/GPU-hr',
  },
  {
    id: 'hybrid',
    icon: Layers,
    title: 'Hybrid Workflow',
    description: 'Combine multiple workflow types in a single pipeline.',
    color: 'rose',
    steps: [
      'Define pipeline stages (training → inference → verification)',
      'Configure dependencies and data flow',
      'Pipeline executes across workflow types',
      'Results from each stage verified',
      'Final output delivered with full provenance',
    ],
    code: `from bitsage import Pipeline

# Define hybrid pipeline
pipeline = Pipeline([
    # Stage 1: Train model
    TrainingJob(script="train.py", gpus=4),

    # Stage 2: Deploy for inference
    InferenceDeployment(model="\${stage1.output}"),

    # Stage 3: Generate proofs
    ZKJob(witness="\${stage2.output}")
])

# Execute pipeline
results = pipeline.run()`,
    useCases: ['ML pipelines', 'Data processing', 'Complex workflows'],
    estimatedCost: 'Varies by stage',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30', gradient: 'from-amber-500 to-orange-500' },
  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', gradient: 'from-cyan-500 to-emerald-500' },
  violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30', gradient: 'from-violet-500 to-fuchsia-500' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', gradient: 'from-purple-500 to-violet-500' },
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30', gradient: 'from-emerald-500 to-cyan-500' },
  rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30', gradient: 'from-rose-500 to-pink-500' },
};

function CodeBlock({ code, color }: { code: string; color: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <Code2 className={`w-4 h-4 ${colorMap[color].text}`} />
          <span className="text-xs text-slate-400">Python</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

function WorkflowCard({ workflow, index }: { workflow: typeof workflows[0]; index: number }) {
  const colors = colorMap[workflow.color];

  return (
    <motion.div
      id={workflow.id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
        {/* Header */}
        <div className={`px-6 py-4 bg-gradient-to-r ${colors.gradient} bg-opacity-10`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
              <workflow.icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{workflow.title}</h3>
              <p className="text-sm text-slate-400">{workflow.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Steps and Info */}
            <div className="space-y-6">
              {/* Steps */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">How It Works</h4>
                <ol className="space-y-2">
                  {workflow.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.bg} ${colors.text} text-xs font-bold flex items-center justify-center`}>
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-400">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {workflow.useCases.map((useCase) => (
                    <span key={useCase} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Estimated Cost */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Estimated cost:</span>
                <span className={`text-sm font-semibold ${colors.text}`}>{workflow.estimatedCost}</span>
              </div>
            </div>

            {/* Right: Code */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Quick Start</h4>
              <CodeBlock code={workflow.code} color={workflow.color} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkflowsPage() {
  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 mb-6">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">WORKFLOW TEMPLATES</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pre-Built Workflow Templates
            </h1>

            <p className="text-lg text-slate-400 mb-8">
              Get started quickly with templates for common GPU compute patterns.
              Each workflow includes step-by-step guides, code examples, and cost estimates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {workflows.map((workflow) => {
              const colors = colorMap[workflow.color];
              return (
                <a
                  key={workflow.id}
                  href={`#${workflow.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border ${colors.text} text-sm font-medium hover:opacity-80 transition-opacity`}
                >
                  <workflow.icon className="w-4 h-4" />
                  {workflow.title.replace(' Workflow', '')}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {workflows.map((workflow, index) => (
              <WorkflowCard key={workflow.id} workflow={workflow} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-slate-400 mb-8">
              Check out our documentation for detailed guides, API references, and SDK downloads.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/getting-started"
                className="group px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all"
              >
                View Full Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
