'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FlaskConical, Cpu, ArrowRight, CheckCircle, Shield, Globe,
  Atom, BarChart3, Bell, Mail, Server, Clock,
  Dna, Cloud, Code2, Lock, TrendingUp, GraduationCap,
  FileText, Database, Microscope
} from 'lucide-react';
import Link from 'next/link';
import { PublicPageLayout } from '@/components/PublicPageLayout';

const researchAreas = [
  {
    icon: Dna,
    title: 'Drug Discovery & Molecular Simulation',
    description: 'GROMACS, AMBER, and OpenMM molecular dynamics at scale with verified results.',
    applications: ['Protein folding', 'Drug binding', 'MD simulations'],
  },
  {
    icon: Cloud,
    title: 'Climate & Weather Modeling',
    description: 'WRF, CESM, and custom climate models with cryptographic verification.',
    applications: ['Weather prediction', 'Climate projections', 'Atmospheric research'],
  },
  {
    icon: Microscope,
    title: 'Genomics & Bioinformatics',
    description: 'GPU-accelerated genome analysis, variant calling, and sequence alignment.',
    applications: ['GWAS studies', 'RNA-seq', 'Single-cell analysis'],
  },
  {
    icon: Atom,
    title: 'Physics & Material Science',
    description: 'DFT calculations, quantum simulations, and materials modeling.',
    applications: ['VASP/QE', 'Quantum chemistry', 'Materials discovery'],
  },
];

const features = [
  'SLURM integration',
  'Jupyter notebook support',
  'HPC job scheduling',
  'Multi-node simulations',
  'Data versioning',
  'Reproducible workflows',
  'Academic pricing',
  'Grant-friendly invoicing',
];

const complianceFeatures = [
  { title: 'Data Sovereignty', description: 'Choose compute regions to comply with data residency requirements', icon: Globe },
  { title: 'Encrypted Storage', description: 'AES-256 encryption at rest for all research data', icon: Lock },
  { title: 'Audit Trails', description: 'Complete logs of all compute operations for compliance', icon: FileText },
  { title: 'IRB Compatible', description: 'Workflows designed for institutional review board approval', icon: Shield },
];

const integrations = [
  { name: 'SLURM', type: 'Job Scheduler' },
  { name: 'PBS/Torque', type: 'Job Scheduler' },
  { name: 'Jupyter', type: 'Notebooks' },
  { name: 'Nextflow', type: 'Workflows' },
  { name: 'Snakemake', type: 'Workflows' },
  { name: 'Singularity', type: 'Containers' },
];

export default function ResearchLabsPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { formService } = await import('@/lib/formSubmission');
        const result = await formService.submitNewsletter({
          email,
          source: 'research-labs-waitlist',
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
        {/* Background effects - Violet/Purple theme */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
              <FlaskConical className="w-4 h-4" />
              <span className="text-sm font-semibold">RESEARCH LABS</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs font-bold">COMING Q2 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accelerate Scientific
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Discovery
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Run molecular dynamics, climate models, genomics pipelines, and physics simulations
              on verified GPU infrastructure. Research-grade compute with cryptographic proof.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Apply for Research Access
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

      {/* Research Areas Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Scientific Computing
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From drug discovery to climate modeling, BitSage powers breakthrough research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.applications.map((app) => (
                    <span key={app} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-400">
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Data Security
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Designed for research institutions with strict data handling requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HPC Integration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Integrate with Your HPC Workflows
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                BitSage works alongside your existing research infrastructure. Submit jobs from
                Jupyter, integrate with SLURM clusters, or use our native API.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Integrations Grid */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-2">
                  <Database className="w-5 h-5 text-violet-400" />
                  <span className="font-semibold text-white">Supported Integrations</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {integrations.map((int) => (
                      <div key={int.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-700/30">
                        <span className="font-medium text-white">{int.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-400">{int.type}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    + Direct API for custom integrations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Academic Partnership Program
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Special pricing and support for universities and research institutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                tier: 'Academic',
                price: '50% off',
                desc: 'Standard pricing',
                features: ['Verified .edu email', 'Up to 10,000 GPU-hrs/mo', 'Standard support'],
              },
              {
                tier: 'Research Grant',
                price: 'Custom',
                desc: 'Volume pricing',
                features: ['Grant documentation', 'Unlimited GPU-hrs', 'Priority support', 'Dedicated account manager'],
                popular: true,
              },
              {
                tier: 'Institutional',
                price: 'Enterprise',
                desc: 'Campus-wide access',
                features: ['Multi-department', 'SSO integration', 'On-premise gateway', 'SLA guarantee'],
              },
            ].map((plan) => (
              <motion.div
                key={plan.tier}
                className={`p-6 rounded-2xl border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-violet-500/10 to-purple-500/10 border-violet-500/30'
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
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Notify Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apply for Research Access
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Join leading research institutions already exploring BitSage for scientific computing.
              Academic pricing available.
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
                      placeholder="Enter your .edu email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-all"
                  >
                    Apply
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Application received!</p>
                <p className="text-violet-100 text-sm">We'll be in touch about research access soon.</p>
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
