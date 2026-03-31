'use client';

import React, { useState } from 'react';
import { Brain, Shield, Network, Cpu, Zap, Globe, Lock, TrendingUp, Users, Award, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import MermaidDiagram from '@/components/MermaidDiagram';
import MathFormula from '@/components/MathFormula';
import Image from 'next/image';

const sections = [
  'Executive Summary',
  'Vision & Philosophy',
  'Technical Architecture', 
  'Proof of Compute',
  'Compute Types & Capabilities',
  'Job Types & Workloads',
  'Creative & Artistic Computing',
  'ZK Proof Generation',
  'Scientific Computing',
  'Job Matching & Transportation',
  'Encryption & Security Model',
  'Scalability Architecture',
  'Multichain Integration',
  'Orderbook & Liquidity',
  'Burn Mechanics',
  'Mathematical Foundations',
  'Physical Principles',
  'Tokenomics',
  'Competitive Analysis',
  'Network Effects',
  'Roadmap',
  'References',
];

export default function ManifestoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <Navigation />
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-3 text-gray-900 hover:bg-gray-50 transition-colors shadow-lg"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 p-6 pb-4 border-b border-gray-200">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Image 
                  src="/SVG/BitSage.svg" 
                  alt="BitSage Logo" 
                  width={20} 
                  height={20}
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Manifesto</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section}>
                    <a 
                      href={`#${section.replace(/\s+/g, '-').toLowerCase()}`} 
                      className="block text-sm hover:text-blue-600 transition-colors font-medium py-2 border-l-2 border-transparent hover:border-blue-600 pl-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-t border-gray-200">
              <a 
                href="/" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Sticky Side Navigation */}
      <nav className="md:w-64 w-full md:sticky md:top-0 md:h-screen z-10 bg-gray-50/80 backdrop-blur-sm border-r border-gray-200 hidden md:block">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-6 pb-4">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Image 
                src="/SVG/BitSage.svg" 
                alt="BitSage Logo" 
                width={20} 
                height={20}
                className="w-5 h-5 filter brightness-0 invert"
              />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Manifesto</h2>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section.replace(/\s+/g, '-').toLowerCase()}`} 
                    className="block text-sm hover:text-blue-600 transition-colors font-medium py-1 border-l-2 border-transparent hover:border-blue-600 pl-3"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Technical Whitepaper v3.1</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-blue-800 bg-clip-text text-transparent">
            Bitsage Network Manifesto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Decentralized AI Compute Infrastructure: Where Blockchain Meets AI, Enhanced by Wisdom Specialists
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Zero-Knowledge Proofs</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Cryptographic Security</span>
            </div>
          </div>
        </div>

        {/* TL;DR Box */}
        <div className="mb-16 bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-emerald-600">BitSage</strong> is a decentralized GPU network with cryptographic proof of execution.
                We deliver <strong>98x faster ZK proofs</strong> using GPU-accelerated STARK verification,
                with <strong>30-60% cost savings</strong> compared to traditional cloud providers like AWS.
                Providers earn 80% of compute fees while users get verifiable, trustless GPU compute for AI, rendering, and scientific workloads.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Executive Summary */}
        <section id="executive-summary" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src="/SVG/BitSage.svg" 
                alt="BitSage Logo" 
                width={24} 
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </div>
            <h2 className="text-4xl font-bold">Executive Summary</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-blue-600">BitSage Network</strong> is building a decentralized marketplace for verifiable compute, starting with GPU-intensive workloads like 3D rendering, AI inference, and ZK proof generation. We provide cryptographic proof of execution integrity through our "Proof of Compute" model, offering 30-60% cost savings over traditional cloud providers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By connecting global GPU providers with developers who need verifiable results, BitSage democratizes access to high-performance computing while ensuring computational integrity through blockchain-based verification - without the overhead of proving every instruction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <Image 
                    src="/SVG/BitSage.svg" 
                    alt="BitSage Logo" 
                    width={16} 
                    height={16}
                    className="w-4 h-4 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Compute Layer</h3>
              </div>
              <p className="text-gray-600 text-sm">Decentralized GPU marketplace providing verifiable AI compute resources with blockchain security.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Network className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Wisdom Enhancement</h3>
              </div>
              <p className="text-gray-600 text-sm">Optional AI wisdom specialists that provide domain-specific insights to enhance compute workflows.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Economy Layer</h3>
              </div>
              <p className="text-gray-600 text-sm">SAGE token powers the wisdom economy, rewarding contribution and enabling global AI collaboration.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Innovations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Proof of Compute</h4>
                  <p className="text-gray-600 text-sm">Cryptographic verification of execution integrity, resource commitment, and result authenticity without full trace proving</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Tiered Verification</h4>
                  <p className="text-gray-600 text-sm">Different verification methods per workload: deterministic re-computation, TEE attestation, and sampling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Cost-Effective Access</h4>
                  <p className="text-gray-600 text-sm">30-60% savings over traditional cloud through global GPU marketplace and efficient resource utilization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Progressive Decentralization</h4>
                  <p className="text-gray-600 text-sm">Starting with proven workloads (rendering, inference) and expanding to complex AI as verification tech matures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Vision & Philosophy */}
        <section id="vision-&-philosophy" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-sm">
              <Image 
                src="/SVG/BitSage.svg" 
                alt="BitSage Logo" 
                width={24} 
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </div>
            <h2 className="text-4xl font-bold">Vision & Philosophy</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-700 mb-2">
                "The future of AI compute lies not in centralized datacenters, but in decentralized, verifiable marketplaces."
              </p>
              <footer className="text-blue-600">— Bitsage Network Foundation</footer>
            </blockquote>

            <h3 className="text-2xl font-semibold mb-4 text-blue-600">The Compute Centralization Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today's AI infrastructure suffers from compute centralization. While AI workloads demand massive GPU resources, access remains limited to
              a few major cloud providers with high costs, vendor lock-in, and limited transparency. This creates barriers: expensive compute,
              lack of verification, and missed opportunities for decentralized innovation.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Philosophical Foundation</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Compute Democratization</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  True innovation emerges from open access to compute resources. Bitsage democratizes GPU infrastructure,
                  making high-performance computing accessible to developers worldwide through decentralization.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Verifiable Computation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trust in computational results is paramount. Bitsage uses zero-knowledge proofs to verify AI computations,
                  ensuring results are authentic, reproducible, and tamper-proof.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Economic Fairness</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As AI compute becomes more valuable, it must remain accessible. Bitsage creates transparent markets
                  where providers and users benefit fairly, ensuring sustainable growth for all participants.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Inclusive Access</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI compute should benefit all developers. Bitsage democratizes access to high-performance GPU resources,
                  enabling creators, researchers, and entrepreneurs worldwide to access compute on demand.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-blue-600">The Bitsage Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We envision a future where AI compute infrastructure is:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Decentralized:</strong> AI compute resources distributed globally, eliminating single points of failure</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Verifiable:</strong> All AI computations cryptographically verified, ensuring trust and transparency</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Accessible:</strong> High-performance GPU compute available to developers worldwide, regardless of location</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Economically efficient:</strong> Market mechanisms optimize resource allocation and pricing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: Technical Architecture */}
        <section id="technical-architecture" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Technical Architecture</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            BitSage Network's architecture is built on proven blockchain infrastructure (StarkNet) with a focus on 
            practical verification methods. Rather than attempting full ZK-execution of every computation, we implement 
            "Proof of Compute" - verifying execution integrity, resource commitment, and result authenticity through 
            cryptographic receipts and selective verification techniques.
          </p>

          {/* Architecture Diagram */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 overflow-x-auto border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">System Architecture</h3>
            <MermaidDiagram
              chart={`flowchart TD
    API[SAGE API Gateway]
    SDK[Client SDKs]
    UI[Web Interface]
    
    JM[Job Manager]
    VM[Verification Manager]
    IM[Incentive Manager]
    GM[Governance Manager]
    
    WN1[GPU Clusters]
    WN2[CPU Farms]
    WN3[AI Accelerators]
    WN4[Edge Devices]
    
    ZK[ZK Proof Generator]
    VV[Proof Validators]
    CS[Consensus Engine]
    
    TOKEN[SAGE Token]
    STAKE[Staking Pools]
    REWARD[Reward System]
    BURN[Burn Mechanisms]
    
    API --> JM
    SDK --> JM
    UI --> API
    
    JM --> WN1
    JM --> WN2
    JM --> WN3
    JM --> WN4
    
    WN1 --> ZK
    WN2 --> ZK
    WN3 --> ZK
    WN4 --> ZK
    
    ZK --> VV
    VV --> CS
    CS --> VM
    
    VM --> IM
    IM --> REWARD
    REWARD --> TOKEN
    TOKEN --> STAKE
    STAKE --> WN1
    
    GM --> TOKEN
    TOKEN --> BURN
    
    classDef appLayer fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px,color:#1e40af
    classDef protocolLayer fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#6b21a8
    classDef computeLayer fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
    classDef verificationLayer fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#991b1b
    classDef economicLayer fill:#fed7aa,stroke:#ea580c,stroke-width:2px,color:#c2410c
    
    class API,SDK,UI appLayer
    class JM,VM,IM,GM protocolLayer
    class WN1,WN2,WN3,WN4 computeLayer
    class ZK,VV,CS verificationLayer
    class TOKEN,STAKE,REWARD,BURN economicLayer`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Layer 1: Verification Layer</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The foundation of trust in SAGE Network. Uses advanced zero-knowledge proof systems to verify computational integrity.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• STARK-based proof generation for scalability</li>
                <li>• Recursive proof composition for complex computations</li>
                <li>• Hardware-accelerated verification</li>
                <li>• Fraud proof mechanisms for dispute resolution</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Layer 2: Compute Layer</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Distributed network of compute providers offering specialized AI hardware and software capabilities.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• GPU clusters for parallel training</li>
                <li>• Specialized AI accelerators (TPUs, FPGAs)</li>
                <li>• Edge computing nodes for low-latency inference</li>
                <li>• Secure enclaves for confidential computing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Layer 3: Protocol Layer</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Smart contract infrastructure managing job orchestration, resource allocation, and network coordination.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Job scheduling and load balancing</li>
                <li>• Resource discovery and matching</li>
                <li>• Payment and settlement systems</li>
                <li>• Reputation and slashing mechanisms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Layer 4: Economic Layer</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Token-based incentive system aligning participant interests and ensuring sustainable network growth.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Dynamic pricing based on supply and demand</li>
                <li>• Staking requirements for compute providers</li>
                <li>• Reward distribution mechanisms</li>
                <li>• Governance token for protocol decisions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Technical Innovations</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">Recursive Zero-Knowledge Proofs</h4>
                <p className="text-gray-600 text-sm">
                  Novel application of recursive STARKs to verify arbitrarily complex AI computations while maintaining constant verification time.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Homomorphic Encryption Integration</h4>
                <p className="text-gray-600 text-sm">
                  Seamless integration with FHE schemes enabling computation on encrypted data without performance degradation.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">Adaptive Resource Allocation</h4>
                <p className="text-gray-600 text-sm">
                  ML-powered system that predicts compute demand and preemptively allocates resources for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Proof of Compute Model */}
        <section id="proof-of-compute" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Proof of Compute Model</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            BitSage implements "Proof of Compute" rather than full ZK-execution of workloads. This approach provides 
            cryptographic verification of execution integrity, resource commitment, and result authenticity without 
            the prohibitive overhead of proving every computational step.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">What We Prove vs. What We Don't</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-3">✅ What BitSage Proves</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Job completion with cryptographic receipts</li>
                  <li>• Resource commitment matching declared specs</li>
                  <li>• Output hash corresponds to claimed input</li>
                  <li>• Node identity and attestation</li>
                  <li>• Execution environment integrity (TEE when available)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-3">⚠️ What We Don't Claim</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Full ZK-execution trace of large AI workloads</li>
                  <li>• Proving every instruction of complex computations</li>
                  <li>• Real-time verification during job execution</li>
                  <li>• Verification of proprietary model architectures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Deterministic Re-computation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">For rendering and encoding jobs</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Re-render 2-5% of pixels/frames</li>
                <li>• Compare cryptographic hashes</li>
                <li>• Minimal overhead verification</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">TEE Attestation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">For AI inference and sensitive workloads</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Trusted Execution Environment proofs</li>
                <li>• Hardware-backed attestation</li>
                <li>• Spot-check sampling for validation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Native ZK Verification</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">For ZK proof generation jobs</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Proof correctness is self-verified</li>
                <li>• STARK/SNARK validation</li>
                <li>• Perfect use case for bootstrap market</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Verification by Workload Type</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Workload Type</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Verification Method</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Overhead</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Available Now</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3">3D Rendering</td>
                    <td className="py-2 px-3">Deterministic re-render + hash</td>
                    <td className="py-2 px-3">2-5%</td>
                    <td className="py-2 px-3"><span className="text-green-600">✅ Ready</span></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3">AI Inference</td>
                    <td className="py-2 px-3">TEE attestation + sampling</td>
                    <td className="py-2 px-3">&lt;5%</td>
                    <td className="py-2 px-3"><span className="text-green-600">✅ Ready</span></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3">ZK Proof Generation</td>
                    <td className="py-2 px-3">Native proof verification</td>
                    <td className="py-2 px-3">~0%</td>
                    <td className="py-2 px-3"><span className="text-green-600">✅ Ready</span></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-3">Small AI Training</td>
                    <td className="py-2 px-3">Checkpoint hash + batch replay</td>
                    <td className="py-2 px-3">5-10%</td>
                    <td className="py-2 px-3"><span className="text-yellow-600">⚠️ Prototype</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Large AI Training</td>
                    <td className="py-2 px-3">Requires clustered nodes</td>
                    <td className="py-2 px-3">TBD</td>
                    <td className="py-2 px-3"><span className="text-red-600">❌ Future</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Compute Types & Capabilities */}
        <section id="compute-types-&-capabilities" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Compute Types & Capabilities</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            BitSage Network categorizes compute resources into specific node classes with realistic performance specifications. 
            This tiered approach ensures users can select appropriate hardware for their workloads while maintaining cost efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Standard GPU Nodes</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Consumer and prosumer GPUs suitable for rendering, medium AI inference, and smaller model training.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• NVIDIA RTX 3080/4080, RTX A4000/A5000</li>
                <li>• 8-24 GB VRAM per GPU</li>
                <li>• 20-35 TFlops FP32 performance per GPU</li>
                <li>• Pricing: $0.10-$0.50 per GPU-hour</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">High-Memory Nodes</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Professional GPUs with large VRAM for complex AI models, high-resolution rendering, and memory-intensive workloads.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• NVIDIA A6000 (48GB), A100/H100 (80GB)</li>
                <li>• 40-80 GB VRAM per GPU</li>
                <li>• 35-60 TFlops FP32 performance per GPU</li>
                <li>• Pricing: $2.00-$8.00 per GPU-hour</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Clustered Nodes</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Multi-GPU systems with high-speed interconnects for distributed training and tightly-coupled simulations.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 4-16 GPUs with NVLink/NVSwitch</li>
                <li>• 256 GB - 1 TB system RAM</li>
                <li>• 100+ TFlops aggregate FP32 performance</li>
                <li>• Located in data centers for low latency</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Edge Nodes</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Regional nodes for low-latency inference and interactive applications requiring sub-150ms response times.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• NVIDIA Jetson AGX, RTX 3060/4060</li>
                <li>• 4-16 GB VRAM, optimized for inference</li>
                <li>• 5-15 TFlops FP32 performance</li>
                <li>• &lt;150ms latency within region</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-600 mb-2">AI Training</h5>
                <p className="text-gray-600 text-xs">
                  Large-scale neural network training, including image classification, object detection, and language models.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-600 mb-2">AI Inference</h5>
                <p className="text-gray-600 text-xs">
                  Real-time, low-latency AI model inference for applications like speech recognition, object tracking, and fraud detection.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-600 mb-2">Data Processing</h5>
                <p className="text-gray-600 text-xs">
                  High-speed data ingestion, transformation, and analysis for real-time monitoring and decision-making.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-600 mb-2">Edge Intelligence</h5>
                <p className="text-gray-600 text-xs">
                  AI models deployed directly on edge devices for autonomous decision-making and local processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Job Types & Workloads */}
        <section id="job-types-&-workloads" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Job Types & Workloads</h2>
          </div>

                     <p className="text-gray-600 leading-relaxed mb-8">
             BitSage Network provides two fundamental job types: Virtual Machine infrastructure (like Akash) that enables 
             flexible workloads, and specialized batch compute jobs that benefit from our verification model. 
             VMs serve as the foundation for most use cases, while batch jobs offer the highest verification guarantees.
           </p>

           {/* VM Infrastructure - The Foundation */}
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">🖥️ Virtual Machine Infrastructure (Primary Job Type)</h3>
             <p className="text-gray-700 text-sm mb-4">
               Like Akash Network, BitSage provides on-demand virtual machines with GPU access. This is our most flexible 
               and immediately viable offering, supporting any workload that can run in a containerized environment.
             </p>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">✅ What VMs Enable</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Web applications and APIs</li>
                   <li>• Development environments</li>
                   <li>• AI model training and inference</li>
                   <li>• Database and storage services</li>
                   <li>• Custom software deployment</li>
                   <li>• Blockchain nodes and validators</li>
               </ul>
             </div>
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">🔒 VM Verification Model</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Resource commitment proofs (CPU/GPU/RAM)</li>
                   <li>• Uptime and availability attestation</li>
                   <li>• TEE-based execution when available</li>
                   <li>• Container integrity verification</li>
                   <li>• Network and storage I/O monitoring</li>
                   <li>• SLA compliance tracking</li>
               </ul>
               </div>
             </div>
             </div>

           <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-green-600">Batch Compute Jobs</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Specialized workloads with high verification guarantees through deterministic execution and cryptographic proofs.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• 3D rendering (Blender, Cinema 4D)</li>
                 <li>• Video encoding (FFmpeg, x264/x265)</li>
                 <li>• ZK proof generation (STARK/SNARK)</li>
                 <li>• Monte Carlo simulations</li>
                 <li>• AI inference (deterministic models)</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-purple-600">Hybrid Workloads</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Complex applications that combine VM infrastructure with batch compute verification for optimal flexibility and trust.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• AI training with checkpoint verification</li>
                 <li>• Scientific simulations with result proofs</li>
                 <li>• Blockchain applications with ZK components</li>
                 <li>• Creative pipelines with render verification</li>
                 <li>• Data processing with integrity guarantees</li>
               </ul>
             </div>
           </div>

           {/* VM vs Batch Job Comparison */}
                     <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">VM Infrastructure vs Batch Compute Comparison</h3>
             <div className="overflow-x-auto">
               <table className="w-full text-sm">
                 <thead>
                   <tr className="border-b border-gray-300">
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Aspect</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Virtual Machines</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Batch Compute Jobs</th>
                   </tr>
                 </thead>
                 <tbody className="text-gray-700">
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Flexibility</td>
                     <td className="py-3 px-3">✅ Run any containerized workload</td>
                     <td className="py-3 px-3">⚠️ Limited to predefined job types</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Verification</td>
                     <td className="py-3 px-3">🔒 Resource commitment + uptime proofs</td>
                     <td className="py-3 px-3">🔐 Full cryptographic result verification</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Use Cases</td>
                     <td className="py-3 px-3">Web apps, APIs, training, development</td>
                     <td className="py-3 px-3">Rendering, encoding, ZK proofs, simulations</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Pricing</td>
                     <td className="py-3 px-3">$0.10-$8.00/hour (like Akash)</td>
                     <td className="py-3 px-3">Per-job pricing + 2-5% verification overhead</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Setup Time</td>
                     <td className="py-3 px-3">Minutes (container deployment)</td>
                     <td className="py-3 px-3">Seconds (job submission)</td>
                   </tr>
                   <tr>
                     <td className="py-3 px-3 font-medium">Market Readiness</td>
                     <td className="py-3 px-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ Ready Now</span></td>
                     <td className="py-3 px-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">🚀 Differentiator</span></td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>

           {/* Realistic Workload Specifications */}
           <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8 shadow-sm">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Realistic Resource Specifications</h3>
             <div className="grid md:grid-cols-3 gap-4">
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                 <h5 className="font-semibold text-blue-600 mb-2">VM Instances</h5>
                 <ul className="text-gray-600 text-xs space-y-1">
                   <li>• <strong>CPU:</strong> 2-64 cores</li>
                   <li>• <strong>RAM:</strong> 4GB-512GB</li>
                   <li>• <strong>GPU:</strong> 0-8 GPUs per instance</li>
                   <li>• <strong>Storage:</strong> 20GB-2TB NVMe</li>
                   <li>• <strong>Network:</strong> 1-10 Gbps</li>
                 </ul>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                 <h5 className="font-semibold text-green-600 mb-2">Batch Jobs</h5>
                 <ul className="text-gray-600 text-xs space-y-1">
                   <li>• <strong>Duration:</strong> Minutes to hours</li>
                   <li>• <strong>Parallelism:</strong> 1-1000+ nodes</li>
                   <li>• <strong>Input:</strong> MB to TB datasets</li>
                   <li>• <strong>Verification:</strong> 1-5% overhead</li>
                   <li>• <strong>Output:</strong> Cryptographically signed</li>
                 </ul>
               </div>
               <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                 <h5 className="font-semibold text-purple-600 mb-2">Latency Tiers</h5>
                 <ul className="text-gray-600 text-xs space-y-1">
                   <li>• <strong>Interactive:</strong> &lt;150ms (same region)</li>
                   <li>• <strong>Responsive:</strong> &lt;500ms (cross-region)</li>
                   <li>• <strong>Batch:</strong> Minutes to hours</li>
                   <li>• <strong>Bulk:</strong> Hours to days</li>
                   <li>• <strong>Archive:</strong> Best effort</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>

         {/* Section: Creative & Artistic Computing */}
         <section id="creative-&-artistic-computing" className="mb-20 scroll-mt-24">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
               <Award className="w-5 h-5 text-white" />
             </div>
             <h2 className="text-4xl font-bold">Creative & Artistic Computing</h2>
           </div>

           <p className="text-gray-600 leading-relaxed mb-8">
             BitSage Network focuses on creative workloads that are both verifiable and economically viable. 
             We start with embarrassingly parallel tasks like rendering and video encoding where verification 
             overhead is minimal, then expand to more complex workloads as our verification technology matures.
           </p>

           <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
             <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Ready Now: Verifiable Creative Computing</h3>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">3D Rendering (Blender, Cinema 4D)</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Deterministic frame rendering with fixed seeds</li>
                   <li>• 2-5% verification via spot re-rendering</li>
                   <li>• Frame watermarking with job ID + nonce</li>
                   <li>• Hash verification of output sequences</li>
               </ul>
             </div>
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">Video Encoding (FFmpeg, x264/x265)</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Segment-based parallel processing</li>
                   <li>• Checksum verification per segment</li>
                   <li>• 1-3% overhead for spot re-encoding</li>
                   <li>• Bitrate and quality validation</li>
               </ul>
               </div>
             </div>
             </div>

           <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-8">
             <h3 className="text-lg font-semibold mb-4 text-yellow-600">⚠️ Limited Support: Requires Licensing</h3>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">Proprietary Software (Maya, 3ds Max, After Effects)</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Customer must provide valid licenses</li>
                   <li>• Limited to licensed node pools</li>
                   <li>• Higher costs due to licensing overhead</li>
                   <li>• Verification same as open-source tools</li>
               </ul>
               </div>
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">AI Art Generation (Stable Diffusion)</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Seed-based deterministic generation</li>
                   <li>• Model weight verification via hashing</li>
                   <li>• Batch processing for NFT collections</li>
                   <li>• TEE attestation for sensitive prompts</li>
                 </ul>
               </div>
             </div>
             </div>

           <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 mb-8">
             <h3 className="text-lg font-semibold mb-4 text-red-600">❌ Not Suitable Yet: Complex Interactive Workflows</h3>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">Real-time Compositing & VFX</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Requires low-latency interaction</li>
                   <li>• Complex multi-layer dependencies</li>
                   <li>• Difficult to verify intermediate states</li>
                   <li>• Better suited for local/cloud hybrid</li>
               </ul>
               </div>
               <div>
                 <h4 className="font-semibold text-gray-900 mb-2">Live Streaming & Real-time Effects</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Sub-100ms latency requirements</li>
                   <li>• Continuous data streams</li>
                   <li>• No verification time budget</li>
                   <li>• Edge computing needed</li>
                 </ul>
               </div>
             </div>
           </div>

           {/* Realistic Creative Computing Economics */}
           <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Realistic Cost Comparison</h3>
             <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                 <h4 className="font-semibold text-blue-600 mb-2">BitSage Network</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• <strong>Consumer GPUs:</strong> $0.10-$0.50/hour</li>
                   <li>• <strong>Pro GPUs:</strong> $2.00-$8.00/hour</li>
                   <li>• +2-5% verification overhead</li>
                   <li>• Cryptographic receipts included</li>
                   <li>• Customer provides licenses (if needed)</li>
                 </ul>
               </div>
               <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                 <h4 className="font-semibold text-orange-600 mb-2">Traditional Render Farms</h4>
                 <ul className="text-gray-600 text-sm space-y-1">
                   <li>• <strong>Managed farms:</strong> $2.00-$15.00/hour</li>
                   <li>• Setup fees and minimums</li>
                   <li>• Software licensing included</li>
                   <li>• Trust-based quality assurance</li>
                   <li>• Technical support included</li>
                 </ul>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                 <h4 className="font-semibold text-green-600 mb-2">Realistic Savings</h4>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• <strong>30-60% typical savings</strong></li>
                   <li>• Up to 70% vs premium farms</li>
                   <li>• Best for batch workloads</li>
                   <li>• Requires technical expertise</li>
                   <li>• Self-service model</li>
                 </ul>
               </div>
             </div>
             
             <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
               <h5 className="font-semibold text-yellow-700 mb-2">⚠️ Important Considerations</h5>
               <ul className="text-yellow-700 text-sm space-y-1">
                 <li>• BitSage is self-service - you handle job setup, file management, and troubleshooting</li>
                 <li>• Traditional farms include technical support, managed workflows, and guaranteed SLAs</li>
                 <li>• Cost savings are highest for technically sophisticated users with batch workloads</li>
               </ul>
             </div>
           </div>

           {/* Creative Workload Capability Matrix */}
           <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Creative Workload Capability Matrix</h3>
             <div className="overflow-x-auto">
               <table className="w-full text-sm">
                 <thead>
                   <tr className="border-b border-gray-300">
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Workload Type</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Verification Method</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Overhead</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Status</th>
                     <th className="text-left py-3 px-3 font-semibold text-gray-900">Notes</th>
                   </tr>
                 </thead>
                 <tbody className="text-gray-700">
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Blender Rendering</td>
                     <td className="py-3 px-3">Deterministic re-render + hash</td>
                     <td className="py-3 px-3">2-5%</td>
                     <td className="py-3 px-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ Ready</span></td>
                     <td className="py-3 px-3">Perfect for batch frame rendering</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Video Encoding (FFmpeg)</td>
                     <td className="py-3 px-3">Segment checksum + spot re-encode</td>
                     <td className="py-3 px-3">1-3%</td>
                     <td className="py-3 px-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ Ready</span></td>
                     <td className="py-3 px-3">Excellent parallelization</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Maya/3ds Max Rendering</td>
                     <td className="py-3 px-3">Same as Blender</td>
                     <td className="py-3 px-3">2-5%</td>
                     <td className="py-3 px-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">⚠️ Licensed</span></td>
                     <td className="py-3 px-3">Customer must provide licenses</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Stable Diffusion</td>
                     <td className="py-3 px-3">Seed commitment + model hash</td>
                     <td className="py-3 px-3">&lt;1%</td>
                     <td className="py-3 px-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">✅ Ready</span></td>
                     <td className="py-3 px-3">Great for NFT batch generation</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">After Effects Compositing</td>
                     <td className="py-3 px-3">Layer-by-layer verification</td>
                     <td className="py-3 px-3">5-10%</td>
                     <td className="py-3 px-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">⚠️ Complex</span></td>
                     <td className="py-3 px-3">Simple comps only, requires licenses</td>
                   </tr>
                   <tr className="border-b border-gray-200">
                     <td className="py-3 px-3 font-medium">Real-time VFX</td>
                     <td className="py-3 px-3">Not applicable</td>
                     <td className="py-3 px-3">N/A</td>
                     <td className="py-3 px-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">❌ Not Suitable</span></td>
                     <td className="py-3 px-3">Latency requirements too strict</td>
                   </tr>
                   <tr>
                     <td className="py-3 px-3 font-medium">Live Streaming</td>
                     <td className="py-3 px-3">Not applicable</td>
                     <td className="py-3 px-3">N/A</td>
                     <td className="py-3 px-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">❌ Not Suitable</span></td>
                     <td className="py-3 px-3">Requires edge computing</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>

           {/* Creative Workflow Diagram */}
           <h3 className="text-xl font-semibold mb-4 text-blue-600">Verifiable Creative Workflow</h3>
           <MermaidDiagram
             chart={`graph TD
    subgraph "Content Creation"
        CA[Creative Asset/Scene]
        UP[Upload Encrypted Files]
        JC[Job Configuration]
        QS[Quality Settings]
    end
    
    subgraph "Distributed Rendering"
        JS[Job Splitting]
        WA[Worker Assignment]
        PR[Parallel Rendering]
        QC[Quality Verification]
    end
    
    subgraph "Verification & Assembly"
        ZK[ZK Proof Generation]
        FV[Frame Verification]
        AS[Asset Assembly]
        DL[Delivery & Payment]
    end
    
    subgraph "Creative Tools"
        BL[Blender]
        MA[Maya/3ds Max]
        AE[After Effects]
        UV[Unreal Engine]
    end
    
    CA --> UP
    UP --> JC
    JC --> QS
    QS --> JS
    
    JS --> WA
    WA --> PR
    PR --> QC
    QC --> ZK
    
    ZK --> FV
    FV --> AS
    AS --> DL
    
    BL --> CA
    MA --> CA
    AE --> CA
    UV --> CA
    
    style PR fill:#fce7f3,stroke:#be185d,stroke-width:2px,color:#9f1239
    style ZK fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0c4a6e
    style DL fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
    style CA fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
    style UP fill:#e0e7ff,stroke:#4338ca,stroke-width:2px,color:#312e81
    style JS fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px,color:#581c87
    style WA fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#047857
    style QC fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#dc2626
    style FV fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#d97706
    style AS fill:#f0f9ff,stroke:#0ea5e9,stroke-width:2px,color:#0284c7
`}
           />
         </section>

         {/* Section: ZK Proof Generation */}
         <section id="zk-proof-generation" className="mb-20 scroll-mt-24">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
               <Lock className="w-5 h-5 text-white" />
             </div>
             <h2 className="text-4xl font-bold">ZK Proof Generation</h2>
           </div>

           <p className="text-gray-600 leading-relaxed mb-8">
             ZK proof generation represents BitSage's most immediately viable use case - we can provide verifiable 
             compute for generating cryptographic proofs while the proofs themselves verify our work. This creates 
             a perfect bootstrap market serving Web3 projects that need STARK/SNARK generation at scale.
           </p>

           <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-indigo-600">STARK Proof Generation</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Scalable Transparent Arguments of Knowledge for large-scale verifiable computation.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Cairo program execution proofs</li>
                 <li>• StarkNet transaction batching</li>
                 <li>• Recursive proof composition</li>
                 <li>• Custom circuit optimization</li>
                 <li>• Parallel witness generation</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-blue-600">SNARK Systems</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Succinct Non-Interactive Arguments of Knowledge for efficient privacy-preserving protocols.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Groth16 & PLONK proof systems</li>
                 <li>• zk-SNARKs for privacy coins</li>
                 <li>• Circom circuit compilation</li>
                 <li>• Trusted setup ceremonies</li>
                 <li>• Universal setup systems (PLONK)</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-purple-600">Specialized Applications</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Domain-specific ZK proof generation for various blockchain and enterprise use cases.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Privacy-preserving DeFi protocols</li>
                 <li>• Blockchain rollup verification</li>
                 <li>• Identity verification systems</li>
                 <li>• Supply chain provenance</li>
                 <li>• Confidential voting systems</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-pink-600">Performance Optimization</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Advanced optimization techniques for reducing proof generation time and computational costs.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Hardware acceleration (GPU/FPGA)</li>
                 <li>• Parallel circuit evaluation</li>
                 <li>• Memory optimization strategies</li>
                 <li>• Batch proof generation</li>
                 <li>• Circuit-specific optimizations</li>
               </ul>
             </div>
           </div>

           {/* ZK Proof Generation Mathematics */}
           <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">STARK Complexity Analysis</h3>
            
            {/* Parameter Definitions */}
            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Key Parameters</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-2">
                  <div><span className="text-blue-600 font-mono">N</span> = Execution trace length (rows)</div>
                  <div><span className="text-blue-600 font-mono">λ</span> = Security parameter (80-128 bits)</div>
                </div>
                <div className="space-y-2">
                  <div><span className="text-blue-600 font-mono">d</span> = Maximum constraint degree</div>
                  <div><span className="text-blue-600 font-mono">b</span> = Blowup factor</div>
                </div>
              </div>
            </div>

             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-3">Prover Complexity</h4>
                 <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                   <div className="mb-2 text-blue-600">STARK Prover Time:</div>
                  <MathFormula formula={`T_{prove} = \\tilde{O}(N \\log N + \\lambda N)`} />
                   <div className="text-gray-600 text-xs mt-2">
                    FFT/MLE + Merkle/FRI operations; Õ hides polylog factors in (b,d)
                   </div>
                 </div>
                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                   <div className="mb-2 text-blue-600">Memory Requirements:</div>
                  <MathFormula formula={`M_{prove} = O(N) \\text{ to } \\tilde{O}(N)`} />
                   <div className="text-gray-600 text-xs mt-2">
                    Linear in trace length (streamed to polylog overhead)
                   </div>
                 </div>
               </div>
               <div>
                 <h4 className="font-semibold text-gray-900 mb-3">Verification Efficiency</h4>
                 <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                   <div className="mb-2 text-blue-600">Verification Time:</div>
                  <MathFormula formula={`T_{verify} = O(\\lambda \\log N + \\text{poly}(\\lambda))`} />
                   <div className="text-gray-600 text-xs mt-2">
                    Hash checks and field operations, plus constant commitments
                   </div>
                 </div>
                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                   <div className="mb-2 text-blue-600">Proof Size:</div>
                  <MathFormula formula={`|\\pi| = O(\\lambda \\log N)`} />
                   <div className="text-gray-600 text-xs mt-2">
                    Field elements/hashes (hundreds of KB in practice)
                   </div>
                 </div>
               </div>
             </div>

            {/* Practical Notes */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Implementation Notes</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-2">
                  <div>• Hash choice (Poseidon/Rescue/Keccak) dominates constants</div>
                  <div>• Security parameter λ affects query counts significantly</div>
                </div>
                <div className="space-y-2">
                  <div>• STARKs use execution traces, not R1CS constraints</div>
                  <div>• Transparent setup vs SNARKs' trusted setup</div>
                 </div>
               </div>
             </div>
           </div>

           {/* ZK Proof Generation Workflow */}
           <h3 className="text-xl font-semibold mb-4 text-blue-600">ZK Proof Generation Pipeline</h3>
           <MermaidDiagram
             chart={`graph TD
    subgraph "Circuit Design"
        CD[Circuit Definition]
        CO[Constraint Optimization]
        CS[Circuit Compilation]
    end
    
    subgraph "Witness Generation"
        WI[Witness Input]
        WC[Witness Computation]
        WV[Witness Validation]
    end
    
    subgraph "Proof Generation"
        PG[Prover Assignment]
        PC[Parallel Computation]
        PA[Proof Assembly]
        PV[Proof Verification]
    end
    
    subgraph "Optimization Layers"
        HW[Hardware Acceleration]
        BA[Batch Processing]
        CA[Circuit Caching]
        MO[Memory Optimization]
    end
    
    CD --> CO
    CO --> CS
    CS --> WI
    
    WI --> WC
    WC --> WV
    WV --> PG
    
    PG --> PC
    PC --> PA
    PA --> PV
    
    HW --> PC
    BA --> PC
    CA --> CO
    MO --> PC
    
    style PC fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0c4a6e
    style PA fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px,color:#1e40af
    style PV fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
    style CD fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
    style CO fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#d97706
    style CS fill:#fed7aa,stroke:#ea580c,stroke-width:2px,color:#c2410c
    style WI fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px,color:#581c87
    style WC fill:#ede9fe,stroke:#6d28d9,stroke-width:2px,color:#5b21b6
    style WV fill:#e9d5ff,stroke:#8b5cf6,stroke-width:2px,color:#7c3aed
    style PG fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#047857
    style HW fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#dc2626
    style BA fill:#f0f9ff,stroke:#0ea5e9,stroke-width:2px,color:#0284c7
    style CA fill:#e0e7ff,stroke:#4338ca,stroke-width:2px,color:#312e81
    style MO fill:#fce7f3,stroke:#be185d,stroke-width:2px,color:#9f1239
`}
           />
         </section>

         {/* Section: Scientific Computing */}
         <section id="scientific-computing" className="mb-20 scroll-mt-24">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
               <Globe className="w-5 h-5 text-white" />
             </div>
             <h2 className="text-4xl font-bold">Scientific Computing</h2>
           </div>

           <p className="text-gray-600 leading-relaxed mb-8">
             SAGE Network provides researchers, scientists, and institutions with access to high-performance computing 
             resources for complex simulations, modeling, and analysis. Our verifiable compute ensures reproducible 
             scientific results while dramatically reducing costs.
           </p>

           <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-emerald-600">Molecular Dynamics</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Large-scale molecular simulations for drug discovery, materials science, and biochemical research.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• GROMACS & AMBER simulations</li>
                 <li>• Protein folding studies</li>
                 <li>• Drug-target interaction modeling</li>
                 <li>• Materials property prediction</li>
                 <li>• Membrane dynamics simulation</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-green-600">Climate & Weather Modeling</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 High-resolution climate simulations and weather prediction models for environmental research.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Global circulation models (GCMs)</li>
                 <li>• Weather forecasting systems</li>
                 <li>• Climate change projections</li>
                 <li>• Atmospheric chemistry modeling</li>
                 <li>• Oceanographic simulations</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-teal-600">Computational Fluid Dynamics</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Advanced fluid flow simulations for aerospace, automotive, and engineering applications.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• OpenFOAM & ANSYS Fluent workflows</li>
                 <li>• Turbulence modeling (LES/DNS)</li>
                 <li>• Aerodynamic optimization</li>
                 <li>• Heat transfer analysis</li>
                 <li>• Multi-phase flow simulation</li>
               </ul>
             </div>

             <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
               <h3 className="text-xl font-semibold mb-4 text-blue-600">Financial Modeling</h3>
               <p className="text-gray-700 text-sm leading-relaxed mb-4">
                 Quantitative finance, risk analysis, and algorithmic trading model development and backtesting.
               </p>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li>• Monte Carlo risk simulations</li>
                 <li>• Portfolio optimization algorithms</li>
                 <li>• High-frequency trading backtests</li>
                 <li>• Credit risk modeling</li>
                 <li>• Derivative pricing models</li>
               </ul>
             </div>
           </div>

           {/* Scientific Computing Benefits */}
           <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Research Impact & Benefits</h3>
             <div className="grid md:grid-cols-3 gap-4">
               <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                 <h5 className="font-semibold text-emerald-600 mb-2">Reproducible Science</h5>
                 <p className="text-gray-600 text-xs">
                   Cryptographic verification ensures computational results are reproducible and verifiable by peers
                 </p>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                 <h5 className="font-semibold text-green-600 mb-2">Cost Democratization</h5>
                 <p className="text-gray-600 text-xs">
                   90%+ cost reduction enables smaller institutions to access supercomputing resources
                 </p>
               </div>
               <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                 <h5 className="font-semibold text-teal-600 mb-2">Global Collaboration</h5>
                 <p className="text-gray-600 text-xs">
                   Decentralized infrastructure enables seamless international research collaboration
                 </p>
               </div>
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                 <h5 className="font-semibold text-blue-600 mb-2">Accelerated Discovery</h5>
                 <p className="text-gray-600 text-xs">
                   Massive parallel processing enables larger, more complex simulations than ever before
                 </p>
               </div>
               <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                 <h5 className="font-semibold text-purple-600 mb-2">Open Science</h5>
                 <p className="text-gray-600 text-xs">
                   Transparent, verifiable computations support open science and peer review processes
                 </p>
               </div>
               <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                 <h5 className="font-semibold text-pink-600 mb-2">Environmental Impact</h5>
                 <p className="text-gray-600 text-xs">
                   Efficient resource utilization reduces energy consumption compared to dedicated clusters
                 </p>
               </div>
             </div>
           </div>

           {/* Scientific Computing Performance */}
           <h3 className="text-xl font-semibold mb-4 text-blue-600">Performance Scaling Example</h3>
           <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
             <h4 className="font-semibold text-gray-900 mb-3">Molecular Dynamics Simulation Scaling</h4>
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <h5 className="font-semibold text-emerald-600 mb-2">Traditional HPC Cluster</h5>
                 <ul className="text-gray-600 text-sm space-y-1">
                   <li>• 100M atom system: 72 hours on 512 cores</li>
                   <li>• Cost: $15,000-25,000 per simulation</li>
                   <li>• Queue wait times: 2-14 days</li>
                   <li>• Limited to institutional access</li>
                 </ul>
               </div>
               <div>
                 <h5 className="font-semibold text-blue-600 mb-2">SAGE Network</h5>
                 <ul className="text-gray-700 text-sm space-y-1">
                   <li>• Same system: 8 hours on 4096 cores</li>
                   <li>• Cost: $800-1,500 per simulation</li>
                   <li>• Instant resource availability</li>
                   <li>• Global access, any researcher</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>

        {/* Section: Job Matching & Transportation */}
        <section id="job-matching-&-transportation" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Job Matching & Transportation</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network's decentralized job market and transportation layer ensure efficient resource utilization and 
            optimal routing of compute tasks across the network.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Decentralized Job Market</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                A global marketplace where clients can post AI tasks and workers can bid for them.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Task posting and bidding</li>
                <li>• Real-time price discovery</li>
                <li>• Smart routing to optimal providers</li>
                <li>• Transparent task history and reputation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Resource Transportation</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Secure and efficient transportation of data and compute resources across the network.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Inter-chain data transfer</li>
                <li>• Cross-region compute resource sharing</li>
                <li>• Secure enclave transport</li>
                <li>• Decentralized storage for data</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Resource Orchestration</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Intelligent algorithms for optimal resource allocation and task distribution.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• ML-powered demand forecasting</li>
                <li>• Dynamic routing based on capacity</li>
                <li>• Efficient task bundling</li>
                <li>• Resource pooling across the network</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Network Effects</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The more compute resources and tasks available, the more valuable the network becomes.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Increased network throughput</li>
                <li>• Lower latency for all users</li>
                <li>• More diverse and robust AI ecosystem</li>
                <li>• Stronger security through redundancy</li>
              </ul>
            </div>
          </div>

                     {/* Job Matching Algorithm */}
           <h3 className="text-2xl font-semibold mb-4 text-blue-600">Intelligent Job Matching Algorithm</h3>
           <MermaidDiagram
             chart={`graph TD
    subgraph "Job Submission"
        JS[Job Submitted]
        JP[Parse Requirements]
        JH[Generate Job Hash]
        JP1[Set Priority & Budget]
    end
    
    subgraph "Resource Discovery"
        WS[Scan Worker Pool]
        WF[Filter by Capabilities]
        WGeo[Geographic Filtering]
        WRep[Reputation Filtering]
    end
    
    subgraph "Matching Algorithm"
        MA[Multi-Criteria Analysis]
        SC[Score Calculation]
        RR[Rank Resources]
        OSel[Optimal Selection]
    end
    
    subgraph "Scoring Factors"
        PCost[Price Score: 30%]
        PPerf[Performance Score: 25%]
        PRep[Reputation Score: 20%]
        PLat[Latency Score: 15%]
        PAv[Availability Score: 10%]
    end
    
    subgraph "Job Dispatch"
        JA[Job Assignment]
        RC[Resource Confirmation]
        EE[Execute & Encrypt]
        VM[Verify & Monitor]
    end
    
    JS --> JP
    JP --> JH
    JH --> JP1
    JP1 --> WS
    
    WS --> WF
    WF --> WGeo
    WGeo --> WRep
    WRep --> MA
    
    MA --> PCost
    MA --> PPerf
    MA --> PRep
    MA --> PLat
    MA --> PAv
    
    PCost --> SC
    PPerf --> SC
    PRep --> SC
    PLat --> SC
    PAv --> SC
    
    SC --> RR
    RR --> OSel
    OSel --> JA
    
    JA --> RC
    RC --> EE
    EE --> VM
    
    style MA fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0c4a6e
    style OSel fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px,color:#1e40af
    style VM fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
    style JS fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
    style JP fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#d97706
    style JH fill:#fed7aa,stroke:#ea580c,stroke-width:2px,color:#c2410c
    style JP1 fill:#fce7f3,stroke:#be185d,stroke-width:2px,color:#9f1239
    style WS fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px,color:#581c87
    style WF fill:#ede9fe,stroke:#6d28d9,stroke-width:2px,color:#5b21b6
    style WGeo fill:#e9d5ff,stroke:#8b5cf6,stroke-width:2px,color:#7c3aed
    style WRep fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#047857
    style SC fill:#f0f9ff,stroke:#0ea5e9,stroke-width:2px,color:#0284c7
    style RR fill:#e0e7ff,stroke:#4338ca,stroke-width:2px,color:#312e81
    style PCost fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#dc2626
    style PPerf fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#15803d
    style PRep fill:#f0f9ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8
    style PLat fill:#fefce8,stroke:#eab308,stroke-width:2px,color:#ca8a04
    style PAv fill:#f5f3ff,stroke:#a855f7,stroke-width:2px,color:#7e22ce
`}
           />

           <div className="bg-gray-50 rounded-xl p-6 mt-8 border border-gray-200">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Matching Algorithm Mathematics</h3>

             {/* Feature Vector Definition */}
             <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
               <h4 className="font-semibold text-gray-900 mb-3">Feature Vector (Job i → Node j)</h4>
               <div className="text-sm text-gray-700 space-y-2">
                 <div><span className="text-blue-600 font-mono">φ<sub>ij</sub></span> = [<span className="text-blue-600 font-mono">c<sub>ij</sub></span>, <span className="text-blue-600 font-mono">ℓ̂<sub>ij</sub><sup>p95</sup></span>, <span className="text-blue-600 font-mono">t̂<sub>ij</sub></span>, <span className="text-blue-600 font-mono">â<sub>ij</sub></span>, <span className="text-blue-600 font-mono">q̂<sub>ij</sub></span>]</div>
                 <div className="grid md:grid-cols-2 gap-4 mt-3">
                   <div className="space-y-1">
                     <div>• <span className="text-blue-600 font-mono">c<sub>ij</sub></span>: Effective cost ($/GPU-hr × hours + egress/storage)</div>
                     <div>• <span className="text-blue-600 font-mono">ℓ̂<sub>ij</sub><sup>p95</sup></span>: Predicted p95 end-to-end latency</div>
                   </div>
                   <div className="space-y-1">
                     <div>• <span className="text-blue-600 font-mono">t̂<sub>ij</sub></span>: Throughput proxy (tokens/s, frames/s)</div>
                     <div>• <span className="text-blue-600 font-mono">â<sub>ij</sub></span>: Availability Pr(no preemption ∧ node up)</div>
                     <div>• <span className="text-blue-600 font-mono">q̂<sub>ij</sub></span>: Quality score (pass rate/accuracy)</div>
                   </div>
                 </div>
               </div>
             </div>

             <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-3">Expected Utility Objective</h4>
                 <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                   <div className="mb-3 text-blue-600 font-semibold">Utility Function:</div>
                   <div className="text-sm text-gray-700 overflow-x-auto">
                     <div className="font-mono whitespace-nowrap mb-2">
                       max<sub>j</sub> U<sub>ij</sub> = α₁S̃<sub>perf</sub> + α₂S̃<sub>rep</sub> + α₃S̃<sub>avail</sub> − β₁S̃<sub>price</sub> − β₂S̃<sub>latency</sub> − γ₁Pr(ℓ &gt; L<sub>max</sub>) − γ₂Pr(evict)
                   </div>
                 </div>
                   <div className="text-gray-600 text-xs mt-3">
                     Benefits minus costs minus SLA penalties (scores percentile-clipped 1%-99%)
               </div>
                 </div>

                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                   <div className="mb-3 text-blue-600 font-semibold">Alternative Simple Form:</div>
                   <div className="text-sm text-gray-700 overflow-x-auto">
                     <div className="font-mono whitespace-nowrap mb-2">
                       S<sub>total</sub> = w<sup>⊤</sup>s, Σw<sub>k</sub> = 1, w<sub>k</sub> ≥ 0, s normalized per metric
                     </div>
                   </div>
                   <div className="text-gray-600 text-xs mt-3">
                     Weighted sum with normalized scores and convex weights
                   </div>
                 </div>
               </div>

               <div>
                 <h4 className="font-semibold text-gray-900 mb-3">Realistic Constraints</h4>
                 <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                   <div className="mb-3 text-blue-600 font-semibold">Hard Constraints:</div>
                   <div className="text-sm text-gray-700 space-y-2 font-mono">
                     <div>• <strong>Capacity:</strong> Σ<sub>i</sub> x<sub>ij</sub>·gpu_hrs<sub>i</sub> ≤ gpu_hrs<sub>j</sub></div>
                     <div>• <strong>VRAM fit:</strong> vram<sub>j</sub> ≥ model_req<sub>i</sub></div>
                     <div>• <strong>Compat.:</strong> dtype<sub>i</sub> ∈ dtypes<sub>j</sub>, accel<sub>i</sub> ⊆ capabilities<sub>j</sub></div>
                     <div>• <strong>SLA:</strong> Pr(ℓ<sub>ij</sub> ≤ L<sub>max</sub>) ≥ 1-δ</div>
                     <div>• <strong>Budget:</strong> Cost<sub>ij</sub> ≤ Budget<sub>i</sub></div>
                     <div>• <strong>Locality:</strong> region<sub>j</sub> ∈ ℛ<sub>i</sub>, data_policy<sub>j</sub> ⪰ policy<sub>i</sub></div>
                   </div>
                   <div className="text-gray-600 text-xs mt-3">
                     Resource constraints with probabilistic SLA guarantees
                 </div>
               </div>

                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                   <div className="mb-2 text-blue-600 font-semibold">Assignment Variables:</div>
                   <div className="text-sm text-gray-700 font-mono">
                     x<sub>ij</sub> ∈ &#123;0,1&#125; (single-match) or [0,1] (splittable)
                   </div>
                   <div className="text-gray-600 text-xs mt-2">
                     Binary for exclusive assignment, fractional for job splitting
                   </div>
                 </div>
             </div>
           </div>

             {/* Reputation System */}
             <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
               <h4 className="font-semibold text-gray-900 mb-3">Sybil-Resistant Reputation</h4>
               <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                 <div className="space-y-2">
                   <div><span className="text-blue-600 font-mono">rep_j</span> = Bayesian posterior with exponential decay</div>
                   <div>• Prior: <span className="text-blue-600 font-mono">α₀/(α₀+β₀)</span> successes out of <span className="text-blue-600 font-mono">α₀+β₀</span> trials</div>
                   <div>• Decay factor: <span className="text-blue-600 font-mono">e<sup>-λ·age</sup></span></div>
                 </div>
                 <div className="space-y-2">
                   <div>• Stake-weighted updates prevent sybil attacks</div>
                   <div>• Slashing for malicious behavior</div>
                   <div>• ZK/TEE attestations for result integrity</div>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
             <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Benefits</h3>
             <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                 <h5 className="font-semibold text-blue-600 mb-2">Optimal Resource Allocation</h5>
                 <p className="text-gray-600 text-xs">
                   Multi-criteria optimization ensures jobs are matched to the most suitable resources
                 </p>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                 <h5 className="font-semibold text-green-600 mb-2">Dynamic Adaptation</h5>
                 <p className="text-gray-600 text-xs">
                   Algorithm adapts to real-time network conditions and resource availability
                 </p>
               </div>
               <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                 <h5 className="font-semibold text-purple-600 mb-2">Fraud Prevention</h5>
                 <p className="text-gray-600 text-xs">
                   Reputation-based filtering and cryptographic verification prevent malicious behavior
                 </p>
               </div>
               <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                 <h5 className="font-semibold text-orange-600 mb-2">Cost Efficiency</h5>
                 <p className="text-gray-600 text-xs">
                   Price optimization and competition drive down costs for end users
                 </p>
               </div>
             </div>
           </div>
        </section>

        {/* Section: Encryption & Security Model */}
        <section id="encryption-&-security-model" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Encryption & Security Model</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network employs a robust encryption and security model to protect sensitive data and computational integrity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">End-to-End Encryption</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                All data and computations are encrypted in transit and at rest.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Zero-knowledge proofs ensure data integrity</li>
                <li>• Homomorphic encryption for secure computation</li>
                <li>• Secure enclave for confidential computing</li>
                <li>• Encrypted communication channels</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Access Control</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Fine-grained access control and permission management.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-factor authentication</li>
                <li>• Secure key management</li>
                <li>• Transparent audit logs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Consensus and Fault Tolerance</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Byzantine Fault Tolerance (BFT) and Proof of Stake (PoS) for robust consensus.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 2/3+ honest participation for liveness</li>
                <li>• 1/3+ Byzantine nodes for safety</li>
                <li>• Economic incentives for node participation</li>
                <li>• Byzantine fault tolerance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Reputation System</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Decentralized reputation and slashing mechanisms for malicious behavior.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Historical performance tracking</li>
                <li>• Fraud detection and dispute resolution</li>
                <li>• Slashing for malicious behavior</li>
                <li>• Reputation-based incentives</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Security Guarantees</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-600 mb-2">Computational Integrity</h5>
                <p className="text-gray-600 text-xs">
                  Zero-knowledge proofs ensure that the output of a computation is correct and cannot be tampered with.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-600 mb-2">Privacy</h5>
                <p className="text-gray-600 text-xs">
                  All data and models remain private by default, even from the compute provider.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-600 mb-2">Robust Consensus</h5>
                <p className="text-gray-600 text-xs">
                  Byzantine Fault Tolerance ensures network availability and consistency even under adversarial conditions.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-600 mb-2">Economic Incentives</h5>
                <p className="text-gray-600 text-xs">
                  Economic penalties for malicious behavior and rewards for honest participation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Scalability Architecture */}
        <section id="scalability-architecture" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Scalability Architecture</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network's architecture is designed to scale horizontally across a global network of nodes, 
            enabling unprecedented throughput and resource availability.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Multi-Region Deployment</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Nodes are deployed across multiple regions to minimize latency and provide redundancy.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 10+ regions globally</li>
                <li>• 100+ data centers</li>
                <li>• Low-latency edge nodes</li>
                <li>• Redundant infrastructure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Resource Pooling</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Compute resources are pooled across the network, allowing for efficient utilization and cost savings.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• GPU clusters, TPUs, CPU farms</li>
                <li>• Cross-region resource sharing</li>
                <li>• Dynamic allocation based on demand</li>
                <li>• Cost optimization for users</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Decentralized Storage</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Data and models are stored across a decentralized network of nodes, ensuring availability and durability.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• IPFS, Swarm, Filecoin</li>
                <li>• Encrypted data transfer</li>
                <li>• Distributed hash tables</li>
                <li>• Fault tolerance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Network Topology</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Small-world network properties minimize latency while maintaining robustness.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Short average path length</li>
                <li>• High clustering coefficient</li>
                <li>• Robust connectivity</li>
                <li>• Efficient routing</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Scalability Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-600 mb-2">Unlimited Scaling</h5>
                <p className="text-gray-600 text-xs">
                  Horizontal scaling to handle any workload, no theoretical limits.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-600 mb-2">Low Latency</h5>
                <p className="text-gray-600 text-xs">
                  Optimal routing and resource allocation minimize latency.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-600 mb-2">Cost Efficiency</h5>
                <p className="text-gray-600 text-xs">
                  Efficient resource utilization and cost optimization.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-600 mb-2">Resilience</h5>
                <p className="text-gray-600 text-xs">
                  Redundant infrastructure and decentralized storage ensure availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Multichain Integration */}
        <section id="multichain-integration" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Multichain Integration</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network is designed to be interoperable across multiple blockchain networks, enabling seamless 
            integration with existing ecosystems and protocols.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Cross-Chain Data</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Data and computational results can be transferred across different blockchain networks.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Inter-chain data transfer</li>
                <li>• Decentralized storage</li>
                <li>• Cross-chain computation</li>
                <li>• Interoperable AI models</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Interoperable AI</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                AI models and data can be trained and deployed across different blockchain networks.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Federated learning across chains</li>
                <li>• Cross-chain AI model marketplace</li>
                <li>• Interoperable AI pipelines</li>
                <li>• Decentralized AI research</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Cross-Chain Payments</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                SAGE Token can be used for payments across different blockchain networks.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Decentralized cross-chain payments</li>
                <li>• Cross-chain staking</li>
                <li>• Cross-chain governance</li>
                <li>• Interoperable economic incentives</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Interoperable Infrastructure</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                SAGE Network's infrastructure (compute, storage, network) can be accessed from any blockchain.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Multi-chain API gateway</li>
                <li>• Cross-chain worker nodes</li>
                <li>• Interoperable storage solutions</li>
                <li>• Multi-chain job market</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Integration Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-600 mb-2">Ecosystem Expansion</h5>
                <p className="text-gray-600 text-xs">
                  SAGE Network can be integrated into any blockchain, expanding its reach.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-600 mb-2">Cross-Chain AI</h5>
                <p className="text-gray-600 text-xs">
                  AI models and data can be trained and deployed across different networks.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-600 mb-2">Decentralized AI</h5>
                <p className="text-gray-600 text-xs">
                  AI research and development can be decentralized across multiple networks.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-600 mb-2">Interoperable Economy</h5>
                <p className="text-gray-600 text-xs">
                  SAGE Token and economic incentives can be used across different networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Orderbook & Liquidity */}
        <section id="orderbook-&-liquidity" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Orderbook & Liquidity</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network's decentralized orderbook and liquidity layer provides a robust foundation for the AI compute market.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Decentralized Orderbook</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                A global, permissionless orderbook for AI tasks and compute resources.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Real-time task posting and bidding</li>
                <li>• Smart routing to optimal providers</li>
                <li>• Transparent task history</li>
                <li>• Decentralized dispute resolution</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Liquidity Pooling</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                SAGE Token liquidity is pooled across the network, providing stable and liquid markets.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Decentralized liquidity pools</li>
                <li>• Stable price discovery</li>
                <li>• Cross-chain liquidity</li>
                <li>• Decentralized price oracles</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Market Efficiency</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Efficient resource allocation and price discovery through decentralized markets.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Real-time price updates</li>
                <li>• Optimal routing</li>
                <li>• Efficient task matching</li>
                <li>• Decentralized governance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Network Effects</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The more liquidity and tasks available, the more valuable the network becomes.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Increased market depth</li>
                <li>• Lower latency for all users</li>
                <li>• More diverse and robust AI ecosystem</li>
                <li>• Stronger security through redundancy</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-600 mb-2">Efficiency</h5>
                <p className="text-gray-600 text-xs">
                  Efficient resource allocation and price discovery.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-600 mb-2">Scalability</h5>
                <p className="text-gray-600 text-xs">
                  Horizontal scaling to handle any workload.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-600 mb-2">Security</h5>
                <p className="text-gray-600 text-xs">
                  Secure, encrypted communication and data storage.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-600 mb-2">Resilience</h5>
                <p className="text-gray-600 text-xs">
                  Redundant infrastructure and decentralized storage ensure availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Burn Mechanics */}
        <section id="burn-mechanics" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Advanced Burn Mechanics</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            SAGE Network implements sophisticated burn mechanisms with mathematical precision to ensure long-term 
            sustainability and value accrual. Our production-ready smart contracts execute these burns automatically 
            through governance-controlled parameters, creating deflationary pressure while maintaining network security.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Mathematical Framework */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-red-600">🧮 Mathematical Framework</h3>
              
              {/* Supply Definitions */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <h4 className="text-gray-900 font-bold mb-2 text-sm">Supply Definitions</h4>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>• <span className="text-blue-600 font-mono">S<sub>circ</sub>(t)</span>: Circulating supply (float)</div>
                  <div>• <span className="text-blue-600 font-mono">S<sub>fdv</sub>(t)</span>: Total supply (FDV basis)</div>
                  <div>• <span className="text-blue-600 font-mono">P(t)</span>: TWAP price (30-60m, outlier-clamped ±3σ)</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-gray-900 font-bold mb-2">Supply Evolution</h4>
                  <div className="text-sm text-gray-700 font-mono space-y-1">
                    <div>S<sub>circ</sub>(t+1) = S<sub>circ</sub>(t) + I<sub>to_circ</sub>(t) − B<sub>from_circ</sub>(t)</div>
                    <div>S<sub>fdv</sub>(t+1) = S<sub>fdv</sub>(t) + I<sub>total</sub>(t) − B<sub>total</sub>(t)</div>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    Separates circulating (float) from total supply (FDV) impact
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-gray-900 font-bold mb-2">Runway-Aware Inflation (PID-lite)</h4>
                  <div className="text-sm text-gray-700 font-mono">
                    r<sub>inf</sub>(t) = clip(r<sub>min</sub>, r<sub>max</sub>, k<sub>p</sub>e(t) + k<sub>i</sub>ē(t))
                  </div>
                  <div className="text-gray-600 text-xs mt-2">
                    <div>Where: e(t) = B<sup>⋆</sup><sub>USD</sub> − R<sub>USD</sub><sup>non-infl</sup>(t)</div>
                    <div className="mt-1">Avoids reflexive spirals by tracking budget error, not price</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-gray-900 font-bold mb-2">Revenue Burn (Auctioned)</h4>
                  <div className="text-sm text-gray-700 font-mono">
                    B<sub>rev</sub>(t) = min(ρ·R<sub>USD</sub>(t), B<sub>max</sub>) / P<sub>SAGE</sub><sup>TWAP</sup>(t)
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    70% of fees/POL yield/MEV rebates; executed via sealed-bid auctions
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="text-gray-900 font-bold mb-2">Buyback (Throttled with Breaker)</h4>
                  <div className="text-sm text-gray-700 font-mono">
                    B<sub>bb</sub>(t) = 1<sub>σ(t)≤σ<sub>max</sub></sub>·β·(Treasury<sub>USD</sub>(t) − Runway<sub>target</sub>)<sub>+</sub> / P<sub>SAGE</sub><sup>TWAP</sup>(t)
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    Rate-limited (β &lt; 1); halts if realized vol σ(t) &gt; threshold
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">⚙️ Implementation Guardrails</h3>
              
              <div className="space-y-3">
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Oracle Protection
                  </h4>
                  <p className="text-gray-700 text-xs">
                    30-60m median-of-medians TWAP; ±3σ outlier clamp; multiple venue feeds
                  </p>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    MEV-Resistant Execution
                  </h4>
                  <p className="text-gray-700 text-xs">
                    Sealed-bid batch auctions (CoW/Gnosis-style); commit-reveal parameters; randomized windows
                  </p>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    POL Buffer Target
                  </h4>
                  <p className="text-gray-700 text-xs">
                    Maintain ≥8-week notional volume at 1% max slippage; refill before any burn
                  </p>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Circuit Breakers
                  </h4>
                  <p className="text-gray-700 text-xs">
                    Throttle β and ρ if realized volatility &gt; σ<sub>max</sub> (24h window); no halts, just slower execution
                  </p>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Governance Controls
                  </h4>
                  <p className="text-gray-700 text-xs">
                    ±15% weight changes per 30-day epoch; 7-day timelock + emergency pause (multi-sig + on-chain vote affecting rates only, not custody); on-chain schedule publishing
                  </p>
              </div>
              
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="text-gray-900 font-bold mb-2 flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Transparent Accounting
                  </h4>
                  <p className="text-gray-700 text-xs">
                    On-chain epoch reports: inputs (fees, treasury, price), outputs (burns, POL Δ, issuance)
                  </p>
            </div>
          </div>

              {/* Treasury Operations Priority */}
              <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-300 rounded-lg p-4">
                <h4 className="text-red-600 font-bold mb-2 text-sm">🎯 Treasury Operations Priority</h4>
                <div className="text-red-700 text-xs space-y-1">
                  <div className="font-semibold mb-1">Execution Order (prevents overdraw):</div>
                  <div className="pl-3 space-y-1">
                    <div>1. Fund security & operations budget</div>
                    <div>2. Refill POL buffer to target</div>
                    <div>3. Execute revenue burns</div>
                    <div>4. Execute buybacks (if runway surplus)</div>
              </div>
                  <div className="mt-2 pt-2 border-t border-red-300 font-semibold">
                    📌 Treasury-Only Burns (FDV reduction, not float)
                  </div>
                  <div className="pl-3">
                    Scheduled burns draw from Foundation/Treasury pool. Float burns occur only when fees are in SAGE or via buyback execution.
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Burn Flow Diagram - Light Version */}
           <h3 className="text-xl font-semibold mb-4 text-blue-600">Burn Mechanism Flow</h3>
           <MermaidDiagram
             chart={`graph LR
    subgraph RS["Revenue Sources"]
        NF[Network Fees]
        JS[Job Settlements]
        SF[Slashing Fees]
        PF[Protocol Fees]
    end
    
    subgraph BC["Burn Calculation"]
        BR[Base Rate]
        SA[Security Adj]
        FB[Final Amount]
    end
    
    subgraph BE["Burn Execution"]
        BB[Buyback SAGE]
        BT[Burn Tokens]
        US[Update Supply]
    end
    
    subgraph EE["Economic Effects"]
        DS[↓ Supply]
        IP[↑ Price Pressure]
        IS[↑ Scarcity]
        EI[Enhanced Incentives]
    end
    
    RS --> BC
    BC --> BE
    BE --> EE
    
    BR --> SA --> FB
    BB --> BT --> US
    DS --> IP --> IS --> EI
    
    style BT fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#991b1b
    style DS fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#991b1b
    style IS fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0c4a6e
    style EI fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
    style NF fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px,color:#1e40af
    style JS fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#581c87
    style SF fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
    style PF fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#047857
    style BR fill:#f0f9ff,stroke:#0ea5e9,stroke-width:2px,color:#0284c7
    style SA fill:#e0e7ff,stroke:#4338ca,stroke-width:2px,color:#312e81
    style FB fill:#fce7f3,stroke:#be185d,stroke-width:2px,color:#9f1239
    style BB fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#d97706
    style US fill:#f5f3ff,stroke:#a855f7,stroke-width:2px,color:#7e22ce
    style IP fill:#fed7aa,stroke:#ea580c,stroke-width:2px,color:#c2410c
`}
           />

           <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 mt-8">
             <h3 className="text-xl font-semibold mb-6 text-blue-600">Long-term Economic Effects</h3>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
               <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center shadow-sm">
                 <div className="text-red-500 text-2xl mb-1">🔥</div>
                 <h5 className="font-semibold text-red-600 text-sm mb-1">Deflationary Pressure</h5>
                 <p className="text-gray-600 text-xs">
                   Creates scarcity & value accrual
                 </p>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center shadow-sm">
                 <div className="text-green-500 text-2xl mb-1">🛡️</div>
                 <h5 className="font-semibold text-green-600 text-sm mb-1">Security Funding</h5>
                 <p className="text-gray-600 text-xs">
                   Ensures adequate security
                 </p>
               </div>
               <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center shadow-sm">
                 <div className="text-purple-500 text-2xl mb-1">⚖️</div>
                 <h5 className="font-semibold text-purple-600 text-sm mb-1">Market Stability</h5>
                 <p className="text-gray-600 text-xs">
                   Auto price stabilization
                 </p>
               </div>
               <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center shadow-sm">
                 <div className="text-orange-500 text-2xl mb-1">📈</div>
                 <h5 className="font-semibold text-orange-600 text-sm mb-1">Ecosystem Growth</h5>
                 <p className="text-gray-600 text-xs">
                   Aligns value with utility
                 </p>
               </div>
             </div>
           </div>
        </section>

        {/* Section: Mathematical Foundations */}
        <section id="mathematical-foundations" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Mathematical Foundations</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            BitSage Network's "Proof of Compute" model combines multiple cryptographic techniques to verify execution 
            integrity without the overhead of full ZK-execution. We leverage hash-based commitments, cryptographic 
            receipts, and selective verification to provide practical security guarantees.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Proof of Compute Primitives</h3>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-purple-600">Cryptographic Receipt System</h4>
            <p className="text-gray-700 text-sm mb-4">
              BitSage generates cryptographic receipts for job execution, proving resource commitment and result integrity. 
              For ZK proof generation workloads, we leverage native STARK verification where the proof validates itself:
            </p>

            {/* Variable Definitions */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-700">
              <div className="grid md:grid-cols-2 gap-2">
                <div>• <span className="text-blue-600 font-mono">AIR</span>: Algebraic constraints over execution trace</div>
                <div>• <span className="text-blue-600 font-mono">T</span>: Execution trace (N rows)</div>
                <div>• <span className="text-blue-600 font-mono">x</span>: Public input</div>
                <div>• <span className="text-blue-600 font-mono">w</span>: Private witness</div>
                <div>• <span className="text-blue-600 font-mono">λ</span>: Security parameter (e.g., 128 bits)</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="mb-2 text-blue-600 font-medium">Proof Generation (with Masking):</div>
              <MathFormula formula={`\\pi = \\textsf{STARK.Prove}(\\text{AIR}, \\text{trace } T, x; \\lambda)`} />
               <div className="text-gray-600 text-xs mt-2">
                Prover complexity: Õ(N log N) field operations + hashing
               </div>
             </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="mb-2 text-blue-600 font-medium">Verification (Trace-Independent):</div>
              <MathFormula formula={`\\textsf{STARK.Verify}(\\pi, x, \\text{AIR}; \\lambda) \\in \\{\\text{true}, \\text{false}\\}`} />
               <div className="text-gray-600 text-xs mt-2">
                T<sub>verify</sub> = O(λ log N) independent of |w|; Proof size |π| = O(λ log N)
               </div>
             </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-blue-600 mb-2">Statistical Completeness</h5>
                <p className="text-gray-600 text-xs">
                  If the statement is true and the prover follows protocol, verifier accepts except with probability ≤ 2<sup>-λ</sup> (near-perfect)
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-red-600 mb-2">Knowledge Soundness</h5>
                <p className="text-gray-600 text-xs">
                  If verifier accepts with non-negligible prob., extractor recovers valid witness in poly(N, λ) time—soundness error ≤ 2<sup>-λ</sup> (ROM/Fiat-Shamir)
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-green-600 mb-2">Zero-Knowledge (Masked)</h5>
                <p className="text-gray-600 text-xs">
                  With trace masking & randomness beacons, transcript reveals no information about w beyond validity (statistical/computational ZK)
                </p>
              </div>
            </div>

            {/* Technical Footnote */}
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3 text-xs text-gray-600">
              <span className="font-semibold text-purple-600">Note:</span> STARK core uses collision-resistant hashes + FRI; no trusted setup. 
              Elliptic curves appear only in peripheral cryptography (e.g., signatures). Security knobs: λ (bits), blowup b, constraint degree d.
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-cosmic-cyan">Economic Game Theory</h3>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-purple-600">Nash Equilibrium Analysis</h4>
            <p className="text-gray-700 text-sm mb-4">
              SAGE's economic model achieves Nash equilibrium through expected utility maximization with effort-quality tradeoffs and stake-backed incentives:
            </p>

            {/* Variable Definitions */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-700">
              <div className="grid md:grid-cols-2 gap-2">
                <div>• <span className="text-blue-600 font-mono">q<sub>j</sub></span>: Probability worker j chosen</div>
                <div>• <span className="text-blue-600 font-mono">e</span>: Effort level (choice variable)</div>
                <div>• <span className="text-blue-600 font-mono">p(e)</span>: Pr(correct | effort e)</div>
                <div>• <span className="text-blue-600 font-mono">c(e)</span>: Cost of effort (c' &gt; 0, c'' &gt; 0)</div>
                <div>• <span className="text-blue-600 font-mono">P</span>: Payment for job</div>
                <div>• <span className="text-blue-600 font-mono">K</span>: Staked collateral</div>
                <div>• <span className="text-blue-600 font-mono">r</span>: Opportunity cost rate</div>
                <div>• <span className="text-blue-600 font-mono">L</span>: Slash amount if wrong</div>
                <div>• <span className="text-blue-600 font-mono">b</span>: Reputation bonus per success</div>
                <div>• <span className="text-blue-600 font-mono">v</span>: Value of correct result to client</div>
                <div>• <span className="text-blue-600 font-mono">D</span>: Damage from incorrect result</div>
                <div>• <span className="text-blue-600 font-mono">δ</span>: Reputation decay rate</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="mb-2 text-blue-600 font-medium">Worker Expected Utility:</div>
                  <MathFormula formula={`\\mathbb{E}[U_w] = q_j\\Big(P - c(e) - rK + b\\,p(e)\\Big) - q_j\\big(1-p(e)\\big)L`} />
               <div className="text-gray-600 text-xs mt-2">
                    Worker chosen with prob q<sub>j</sub>, earns P - costs + reputation bonus, risks slash L
               </div>
             </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="mb-2 text-blue-600 font-medium">Client Expected Utility:</div>
                  <MathFormula formula={`\\mathbb{E}[U_c] = v\\,p(e) - P - \\big(1-p(e)\\big)D`} />
                  <div className="text-gray-600 text-xs mt-2">
                    Value from correct output minus payment and expected damage from errors
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="mb-2 text-green-600 font-medium">Incentive-Compatible Effort (FOC):</div>
                  <MathFormula formula={`c'(e^\\star) = \\big(b+L\\big)p'(e^\\star)`} />
               <div className="text-gray-600 text-xs mt-2">
                    Worker chooses e to trade off marginal cost vs incentive from success
               </div>
             </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="mb-2 text-green-600 font-medium">Market Price Equilibrium:</div>
                  <MathFormula formula={`P^\\star = c(e^\\star) + rK + \\mu`} />
                  <div className="text-gray-600 text-xs mt-2">
                    Bertrand competition drives price to break-even plus risk premium μ
                  </div>
                </div>
              </div>
            </div>

            {/* Equilibrium Conditions */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-600 mb-2">Equilibrium Conditions</h5>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-700">
                <div className="space-y-1">
                  <div>• <span className="font-semibold">IC (worker):</span> c'(e<sup>⋆</sup>) = (b+L)p'(e<sup>⋆</sup>) ⇒ target quality</div>
                  <div>• <span className="font-semibold">IR (worker):</span> 𝔼[U<sub>w</sub>] ≥ 0 at P<sup>⋆</sup></div>
                </div>
                <div className="space-y-1">
                  <div>• <span className="font-semibold">IR (client):</span> v·p(e<sup>⋆</sup>) ≥ P<sup>⋆</sup> + (1-p(e<sup>⋆</sup>))D</div>
                  <div>• <span className="font-semibold">Market clearing:</span> Job → lowest P meeting IC/IR + constraints</div>
                </div>
              </div>
            </div>

            {/* Reputation Dynamics */}
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3 text-xs text-gray-600">
              <div className="font-semibold text-purple-600 mb-1">Reputation Dynamics:</div>
              <div>rep<sub>t+1</sub> = (1-δ)rep<sub>t</sub> + 𝟙<sub>success</sub> feeds matching score; verification randomly samples outputs: wrong → slash L, right → rep +b</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-cosmic-cyan">Consensus and Security</h3>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-purple-600">Byzantine Fault Tolerance</h4>
            <p className="text-gray-700 text-sm mb-4">
              SAGE achieves consensus with authenticated messaging under partial synchrony, tolerating up to f Byzantine nodes out of n total:
            </p>

            {/* Model Assumptions */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-700">
              <div className="font-semibold text-blue-600 mb-2">Model Assumptions:</div>
              <div className="grid md:grid-cols-2 gap-2">
                <div>• Authenticated channels (signatures)</div>
                <div>• Byzantine fraction f &lt; n/3</div>
                <div>• Partial synchrony (safety always; liveness after GST)</div>
                <div>• Rotating leaders + quorum-based commits</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="mb-2 text-blue-600 font-medium">Safety (Quorum Intersection):</div>
                  <MathFormula formula={`n \\geq 3f + 1, \\quad q = 2f + 1`} />
                  <div className="text-gray-600 text-xs mt-2 mb-2">
                    Byzantine fraction &lt; 1/3; quorum size q = 2f+1
                  </div>
                  <MathFormula formula={`|Q_1 \\cap Q_2| \\geq (2f+1) + (2f+1) - (3f+1) = f+1`} />
               <div className="text-gray-600 text-xs mt-2">
                    Any two quorums intersect by ≥ f+1 nodes (at least one honest) → no conflicting commits
                  </div>
               </div>
             </div>

              <div>
             <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="mb-2 text-green-600 font-medium">Liveness (Partial Synchrony):</div>
                  <MathFormula formula={`n \\geq 3f + 1 \\text{ after GST}`} />
               <div className="text-gray-600 text-xs mt-2">
                    With rotating leaders and n ≥ 3f+1, once network is timely (after Global Stabilization Time), honest leader obtains 2f+1 votes → blocks finalize
                  </div>
                  <div className="text-gray-600 text-xs mt-2 pt-2 border-t border-gray-300">
                    Latency: HotStuff/Tendermint commit in 2-3 rounds (≈ two network RTTs after GST)
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Properties */}
            <div className="mt-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
              <h5 className="font-semibold text-purple-600 mb-2 text-sm">Advanced Properties</h5>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-700">
                <div className="space-y-1">
                  <div>• <span className="font-semibold">Stake-weighted:</span> Replace counts with stake; adversarial &lt; 1/3 total; quorum &gt; 2/3</div>
                  <div>• <span className="font-semibold">Equivocation control:</span> Signatures/VRFs + slashing for double-vote proofs</div>
                </div>
                <div className="space-y-1">
                  <div>• <span className="font-semibold">Finality:</span> Economic finality via slashing of f+1 stake for reversion</div>
                  <div>• <span className="font-semibold">Accountability:</span> Cryptographic evidence enables post-facto slashing</div>
                </div>
               </div>
             </div>
          </div>
        </section>

        {/* Section: Physical Principles - Light Version */}
        <section id="physical-principles" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Physical Principles</h2>
          </div>

          <p className="text-gray-900 leading-relaxed mb-8">
            BitSage Network's design principles are inspired by fundamental laws of physics and thermodynamics, 
            creating a system that naturally tends toward efficiency, stability, and optimal resource utilization.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">🔥</div>
                <h3 className="text-lg font-semibold text-yellow-600">Thermodynamic Efficiency</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Minimizes energy per compute job like Carnot engines
              </p>
              <div className="bg-white border border-yellow-200 rounded-lg p-3">
                <MathFormula formula={`\\eta_{\\max} \\leq 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}}`} />
                <div className="text-gray-600 text-xs mt-1">Energy-per-compute optimization</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-purple-500 text-xl">💾</div>
                <h3 className="text-lg font-semibold text-purple-600">Information Conservation</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Minimizes bit erasures via caching & deduplication
              </p>
              <div className="bg-white border border-purple-200 rounded-lg p-3">
                <MathFormula formula={`E_{\\text{erase}} \\geq k_B T \\ln 2`} />
                <div className="text-gray-600 text-xs mt-1">Landauer's principle (T ≈ 300K)</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-green-500 text-xl">🌐</div>
                <h3 className="text-lg font-semibold text-green-600">Small-World Topology</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Logarithmic path length with regional constraints
              </p>
              <div className="bg-white border border-green-200 rounded-lg p-3">
                <MathFormula formula={`L \\approx \\frac{\\log N}{\\log k}`} />
                <div className="text-gray-600 text-xs mt-1">Low latency as network grows</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-red-500 text-xl">🛡️</div>
                <h3 className="text-lg font-semibold text-red-600">Fault Tolerance</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Exponential reliability via redundancy & erasure codes
              </p>
              <div className="bg-white border border-red-200 rounded-lg p-3">
                <MathFormula formula={`p_{\\text{fail}} \\sim e^{-\\Theta(n-m)}`} />
                <div className="text-gray-600 text-xs mt-1">Exponential reliability improvement</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Emergent Properties</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Like phase transitions in physics, SAGE exhibits emergent behaviors from simple local interactions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-500 text-2xl mb-1">🎯</div>
                <h4 className="font-semibold text-blue-600 text-sm mb-1">Self-Organization</h4>
                <p className="text-gray-600 text-xs">
                  Nodes auto-cluster near demand
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-500 text-2xl mb-1">📏</div>
                <h4 className="font-semibold text-blue-600 text-sm mb-1">Scale Invariance</h4>
                <p className="text-gray-600 text-xs">
                  Performance stable as N grows
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center shadow-sm">
                <div className="text-blue-500 text-2xl mb-1">⚡</div>
                <h4 className="font-semibold text-blue-600 text-sm mb-1">Queue Stability</h4>
                <p className="text-gray-600 text-xs">
                  Auto-throttle prevents saturation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Roadmap - Light Version */}
        <section id="roadmap" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Roadmap 2026</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Q1
                </div>
                <h3 className="text-lg font-semibold text-blue-600">Bootstrap</h3>
              </div>
              <p className="text-gray-600 text-xs mb-3">VM infrastructure + initial batch jobs</p>
              <ul className="text-gray-700 text-xs space-y-1">
                <li>• GPU-enabled VM marketplace</li>
                <li>• Container orchestration</li>
                <li>• Blender rendering testnet</li>
                <li>• 50+ GPU provider nodes</li>
                  </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Q2
                </div>
                <h3 className="text-lg font-semibold text-green-600">Mainnet</h3>
              </div>
              <p className="text-gray-600 text-xs mb-3">Production VM marketplace + batch jobs</p>
              <ul className="text-gray-700 text-xs space-y-1">
                <li>• Full VM marketplace launch</li>
                <li>• SAGE token & governance</li>
                <li>• Batch job verification system</li>
                <li>• First enterprise VM customers</li>
                  </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  Q3
                </div>
                <h3 className="text-lg font-semibold text-purple-600">Expand</h3>
              </div>
              <p className="text-gray-600 text-xs mb-3">Geographic expansion & new workloads</p>
              <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Multi-region deployment</li>
                <li>• Small model training</li>
                <li>• TEE-based verification</li>
                <li>• Developer SDK & APIs</li>
                  </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                Q4
              </div>
                <h3 className="text-lg font-semibold text-yellow-600">Scale</h3>
              </div>
              <p className="text-gray-600 text-xs mb-3">Advanced features & ecosystem growth</p>
              <ul className="text-gray-700 text-xs space-y-1">
                <li>• Clustered node support</li>
                <li>• Advanced verification tiers</li>
                <li>• Cross-chain integrations</li>
                <li>• 1000+ active nodes</li>
                </ul>
            </div>
          </div>
        </section>

        {/* Section: References - Light Version */}
        <section id="references" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold">References</h2>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-blue-500 text-lg">🔐</div>
                  <h3 className="text-sm font-semibold text-blue-600">Cryptographic Foundations</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li>• Ben-Sasson, E. et al. (2018). STARKs</li>
                  <li>• Goldwasser, S. & Micali, S. (1989). Probabilistic Encryption</li>
                  <li>• Groth, J. (2016). Pairing-based Arguments</li>
                  <li>• Bünz, B. et al. (2020). Transparent SNARKs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-green-500 text-lg">💰</div>
                  <h3 className="text-sm font-semibold text-green-600">Economic Theory</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li>• Roughgarden, T. (2020). Fee Mechanism Design</li>
                  <li>• Catalini, C. & Gans, J. (2020). Stablecoin Economics</li>
                  <li>• Buterin, V. (2017). Triangle of Harm</li>
                  <li>• Narayanan, A. et al. (2016). Cryptocurrency Tech</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-purple-500 text-lg">🌐</div>
                  <h3 className="text-sm font-semibold text-purple-600">Distributed Systems</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li>• Castro, M. & Liskov, B. (1999). Byzantine Fault Tolerance</li>
                  <li>• Lamport, L. (1998). Paxos Algorithm</li>
                  <li>• Ongaro, D. & Ousterhout, J. (2014). Raft Consensus</li>
                  <li>• Guerraoui, R. & Schiper, A. (2001). Generic Consensus</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-orange-500 text-lg">🤖</div>
                  <h3 className="text-sm font-semibold text-orange-600">AI & Machine Learning</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-xs">
                  <li>• Goodfellow, I. et al. (2016). Deep Learning</li>
                  <li>• Vaswani, A. et al. (2017). Attention Mechanism</li>
                  <li>• McMahan, B. et al. (2017). Federated Learning</li>
                  <li>• Li, T. et al. (2020). FL Challenges & Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 mt-16">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2026 SAGE Network Foundation. All rights reserved.</p>
            <p>Building the future of verifiable AI compute.</p>
          </div>
        </footer>
      </main>
    </div>
    <Footer />
    </>
  );
} 