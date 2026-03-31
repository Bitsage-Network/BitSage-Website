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
    <PublicPageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-white bg-mesh-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6">
              <FlaskConical className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-600">RESEARCH LABS</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-xs font-bold">COMING Q2 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Accelerate Scientific{' '}
              <span className="text-[--accent]">Discovery</span>
            </h1>

            <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Run molecular dynamics, climate models, genomics pipelines, and physics simulations
              on verified GPU infrastructure. Research-grade compute with cryptographic proof.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-lg text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Apply for Research Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg text-sm hover:border-slate-300 hover:shadow-sm transition-all"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Scientific Computing
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From drug discovery to climate modeling, BitSage powers breakthrough research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.applications.map((app) => (
                    <span key={app} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compliance & Data Security
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Designed for research institutions with strict data handling requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HPC Integration */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Integrate with Your HPC Workflows
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                BitSage works alongside your existing research infrastructure. Submit jobs from
                Jupyter, integrate with SLURM clusters, or use our native API.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-500">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Integrations Grid */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-2">
                  <Database className="w-5 h-5 text-slate-400" />
                  <span className="font-semibold text-white">Supported Integrations</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {integrations.map((int) => (
                      <div key={int.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-800">
                        <span className="font-medium text-white">{int.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">{int.type}</span>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Academic Partnership Program
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
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
                className={`p-6 rounded-xl border ${
                  plan.popular
                    ? 'bg-white border-slate-900 ring-1 ring-slate-900'
                    : 'bg-white border-slate-200 hover:shadow-md hover:border-slate-300'
                } transition-all`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-[--accent] mb-2">MOST POPULAR</div>
                )}
                <div className="text-xl font-bold text-slate-900 mb-1">{plan.tier}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{plan.price}</div>
                <div className="text-sm text-slate-500 mb-4">{plan.desc}</div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-slate-500 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
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
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apply for Research Access
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join leading research institutions already exploring BitSage for scientific computing.
              Academic pricing available.
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
                      placeholder="Enter your .edu email"
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-slate-600 focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all"
                  >
                    Apply
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-slate-800 rounded-xl p-6 max-w-md mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <p className="text-white font-semibold">Application received!</p>
                <p className="text-slate-400 text-sm">We&apos;ll be in touch about research access soon.</p>
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/waitlist"
                className="text-slate-400 hover:text-white underline text-sm"
              >
                Or join the full enterprise waitlist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
