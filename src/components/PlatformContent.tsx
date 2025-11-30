'use client';

import { motion } from 'framer-motion';
import { 
  Cloud, 
  Network, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Code, 
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Cpu,
  GitBranch,
  Layers,
  Timer,
  Award,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const architectureLayers = [
  {
    id: 'sage-cloud',
    name: 'Sage Cloud',
    subtitle: 'Application Layer',
    icon: Cloud,
    color: 'emerald',
    description: 'Enterprise web interface and API gateway for seamless job submission and management',
    features: [
      'RESTful API with OpenAPI specification',
      'Web dashboard with real-time monitoring',
      'Multi-tenant architecture with role-based access',
      'Enterprise SSO integration (SAML, OAuth)',
      'Comprehensive audit logging and compliance'
    ],
    capabilities: [
      'Job Orchestration',
      'Resource Management',
      'User Authentication',
      'Billing & Metering',
      'API Gateway'
    ],
    demoImage: '/images/platform/sage-cloud-dashboard.svg',
    demoAlt: 'Sage Cloud Dashboard Interface'
  },
  {
    id: 'sage-mesh',
    name: 'Sage Mesh',
    subtitle: 'Network Layer',
    icon: Network,
    color: 'blue',
    description: 'Global peer-to-peer network fabric enabling intelligent routing and load balancing',
    features: [
      'Distributed hash table (DHT) for node discovery',
      'Intelligent routing with latency optimization',
      'Dynamic load balancing across regions',
      'Fault-tolerant mesh topology',
      'End-to-end encryption for all communications'
    ],
    capabilities: [
      'Node Discovery',
      'Load Balancing',
      'Fault Tolerance',
      'Geographic Routing',
      'Network Security'
    ],
    demoImage: '/images/platform/sage-mesh-architecture.png',
    demoAlt: 'Sage Mesh Network Architecture'
  },
  {
    id: 'sage-forge',
    name: 'Sage Forge',
    subtitle: 'Execution Layer',
    icon: Server,
    color: 'purple',
    description: 'Containerized execution environment with precise resource metering and isolation',
    features: [
      'Docker-based container orchestration',
      'GPU resource allocation and monitoring',
      'Secure sandbox environments',
      'Real-time performance metrics',
      'Automatic scaling and resource optimization'
    ],
    capabilities: [
      'Container Management',
      'Resource Isolation',
      'Performance Monitoring',
      'Auto-scaling',
      'Security Sandboxing'
    ],
    demoImage: '/images/platform/sage-forge-desktop.svg',
    demoAlt: 'Sage Forge Desktop Application'
  },
  {
    id: 'sage-proof',
    name: 'Sage Proof',
    subtitle: 'Verification Layer',
    icon: Shield,
    color: 'amber',
    description: 'Zero-knowledge proof system ensuring computational integrity and verifiable results',
    features: [
      'zk-STARK proof generation and verification',
      'Computational integrity guarantees',
      'Tamper-proof execution records',
      'Cryptographic result validation',
      'Blockchain-anchored proof storage'
    ],
    capabilities: [
      'Proof Generation',
      'Result Verification',
      'Integrity Checking',
      'Audit Trails',
      'Cryptographic Security'
    ],
    demoImage: '/images/platform/sage-proof-math.svg',
    demoAlt: 'Sage Proof Mathematical Verification'
  }
];

const enterpriseSolutions = [
  {
    id: 'ai-compute',
    title: 'AI Training & Inference',
    icon: Zap,
    description: 'Scalable machine learning workloads with verifiable execution',
    image: '/images/categories/ai-generated-landscape.jpg',
    features: [
      'Distributed training across multiple GPUs',
      'Model serving with auto-scaling',
      'Hyperparameter optimization',
      'Experiment tracking and versioning',
      'Custom model deployment pipelines'
    ],
    benefits: [
      'Up to 70% cost reduction vs cloud providers',
      'Verifiable training with cryptographic proofs',
      'Global GPU access for optimal performance',
      'Enterprise-grade security and compliance'
    ],
    useCases: ['Large Language Models', 'Computer Vision', 'Recommendation Systems', 'Autonomous Vehicles']
  },
  {
    id: 'rendering',
    title: 'Rendering Pipeline',
    icon: Settings,
    description: '3D rendering and VFX processing with enterprise reliability',
    image: '/images/categories/architectural-interior.jpg',
    features: [
      'Blender, Maya, and 3ds Max support',
      'Distributed rendering across nodes',
      'Real-time progress monitoring',
      'Automatic quality assurance',
      'Asset management and versioning'
    ],
    benefits: [
      'Massive parallel processing capabilities',
      'Guaranteed output quality verification',
      'Flexible pricing with pay-per-frame',
      'Integration with existing workflows'
    ],
    useCases: ['Architectural Visualization', 'Film & TV Production', 'Game Development', 'Product Design']
  },
  {
    id: 'batch',
    title: 'Batch Processing',
    icon: Database,
    description: 'High-throughput parallel job execution with intelligent scheduling',
    image: '/images/categories/game-environment-scifi.jpg',
    features: [
      'Intelligent job scheduling and queuing',
      'Fault-tolerant execution with retries',
      'Resource optimization algorithms',
      'Dependency management',
      'Comprehensive monitoring and alerting'
    ],
    benefits: [
      'Elastic scaling from 1 to 1000+ nodes',
      'Automatic fault recovery',
      'Cost optimization through smart scheduling',
      'Real-time job status and logging'
    ],
    useCases: ['Data Processing', 'Scientific Computing', 'Financial Modeling', 'Simulation Workloads']
  },
  {
    id: 'integrations',
    title: 'Custom Integrations',
    icon: Code,
    description: 'Enterprise API access with custom deployment options',
    image: '/images/categories/ai-portrait-artistic.jpg',
    features: [
      'RESTful API with comprehensive documentation',
      'SDK support for multiple languages',
      'Webhook notifications and callbacks',
      'Custom deployment configurations',
      'Enterprise SLA and support'
    ],
    benefits: [
      'Seamless integration with existing systems',
      'Dedicated support and consulting',
      'Custom pricing and terms',
      'Priority access to new features'
    ],
    useCases: ['Enterprise Workflows', 'CI/CD Pipelines', 'Custom Applications', 'Third-party Integrations']
  }
];

export function PlatformContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">PLATFORM ARCHITECTURE</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Verifiable Compute
              <br />
              <span className="text-emerald-400">Infrastructure</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enterprise-grade distributed computing platform with cryptographic proof verification. 
              Four integrated layers delivering unprecedented transparency and trust.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#sage-cloud" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                <Layers className="w-5 h-5" />
                Explore Architecture
              </a>
              <a href="/docs" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                View Documentation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Four-Layer Architecture
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Each layer is purpose-built for enterprise reliability, security, and verifiable execution
            </motion.p>
          </div>

          <div className="space-y-32">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.id}
                id={layer.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      layer.color === 'emerald' ? 'bg-emerald-100' :
                      layer.color === 'blue' ? 'bg-blue-100' :
                      layer.color === 'purple' ? 'bg-purple-100' :
                      layer.color === 'amber' ? 'bg-amber-100' : 'bg-gray-100'
                    }`}>
                      <layer.icon className={`w-8 h-8 ${
                        layer.color === 'emerald' ? 'text-emerald-600' :
                        layer.color === 'blue' ? 'text-blue-600' :
                        layer.color === 'purple' ? 'text-purple-600' :
                        layer.color === 'amber' ? 'text-amber-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">{layer.name}</h3>
                      <p className={`text-lg font-medium ${
                        layer.color === 'emerald' ? 'text-emerald-600' :
                        layer.color === 'blue' ? 'text-blue-600' :
                        layer.color === 'purple' ? 'text-purple-600' :
                        layer.color === 'amber' ? 'text-amber-600' : 'text-gray-600'
                      }`}>{layer.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {layer.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {layer.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            layer.color === 'emerald' ? 'text-emerald-600' :
                            layer.color === 'blue' ? 'text-blue-600' :
                            layer.color === 'purple' ? 'text-purple-600' :
                            layer.color === 'amber' ? 'text-amber-600' : 'text-gray-600'
                          }`} />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Capabilities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Core Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.capabilities.map((capability, capIndex) => (
                        <span
                          key={capIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            layer.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            layer.color === 'blue' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                            layer.color === 'purple' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                            layer.color === 'amber' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Image Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={layer.demoImage}
                        alt={layer.demoAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      {/* Layer Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              layer.color === 'emerald' ? 'bg-emerald-100' :
                              layer.color === 'blue' ? 'bg-blue-100' :
                              layer.color === 'purple' ? 'bg-purple-100' :
                              layer.color === 'amber' ? 'bg-amber-100' : 'bg-gray-100'
                            }`}>
                              <layer.icon className={`w-4 h-4 ${
                                layer.color === 'emerald' ? 'text-emerald-600' :
                                layer.color === 'blue' ? 'text-blue-600' :
                                layer.color === 'purple' ? 'text-purple-600' :
                                layer.color === 'amber' ? 'text-amber-600' : 'text-gray-600'
                              }`} />
                            </div>
                            <span className="text-sm font-semibold text-slate-800">{layer.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{layer.subtitle}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {layer.demoAlt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Enterprise Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Production-ready compute solutions designed for enterprise workloads and mission-critical applications
            </motion.p>
          </div>

          <div className="space-y-24">
            {enterpriseSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                className="bg-slate-50 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[600px]">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full lg:h-96 lg:max-w-lg lg:mx-auto">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover object-center rounded-lg lg:rounded-xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg lg:rounded-xl" />
                      
                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                              <solution.icon className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-sm font-semibold text-slate-800">{solution.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-12 lg:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Technical Features</h4>
                      <div className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Enterprise Benefits</h4>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Use Cases */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Common Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Experience Verifiable Compute?
          </motion.h2>
          <motion.p
            className="text-xl text-emerald-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join enterprise customers using BitSage for mission-critical workloads with cryptographic proof verification.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="/waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
              <Zap className="w-5 h-5" />
              Join Waitlist
            </a>
            <a href="/company#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-emerald-400 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
