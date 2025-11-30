import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Copy } from 'lucide-react';
import { notFound } from 'next/navigation';

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'beyond-trust-hybrid-verification',
    title: 'Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs',
    excerpt: 'Learn how BitSage Network uses a hybrid verification model combining ZK proofs, deterministic recomputation, TEE attestation, and sampling to provide verifiable compute across different job types.',
    content: `
      <p>In decentralized compute, trust is the bottleneck. Users can't just <em>assume</em> their GPU jobs ran correctly — not when payouts and critical applications depend on correctness. But verifying compute is hard. Full zero-knowledge proofs of complex workloads like AI training or rendering are still years away.</p>

      <p>That's why BitSage uses a hybrid approach: blending cryptographic proofs, deterministic recomputation, hardware attestation, and sampling to provide verifiable compute <strong>now</strong>, across a range of job types.</p>

      <p>Let's break it down.</p>

      <h2>🧩 What Are We Trying to Prove?</h2>
      <p>At BitSage, we don't aim to prove <em>every instruction</em>. Instead, we prove:</p>
      <ol>
        <li><strong>That the job was actually executed as submitted</strong></li>
        <li><strong>That the claimed resources (GPU-hours, memory, I/O) were consumed</strong></li>
        <li><strong>That the result matches the declared input/output</strong></li>
        <li><strong>That the execution came from a known node in a verified environment</strong></li>
      </ol>
      <p>This is <strong>Proof of Compute</strong>, not full ZK computation.</p>

      <h2>🛠 Hybrid Verification Model</h2>
      <h3>1. ZK Proofs Where They Make Sense</h3>
      <p>Jobs like STARK or SNARK generation already produce verifiable proofs — we just route and record them. For these, the proof <em>is</em> the verification.</p>
      <p><strong>→ Zero overhead, perfect trust</strong></p>

      <h3>2. Deterministic Spot Recompute</h3>
      <p>For jobs like rendering, video encoding, or procedural content generation, output is deterministic. We recompute <strong>k%</strong> of the result (e.g. 5% of frames or tiles) and verify it matches the original hash.</p>
      <p><strong>→ 2–5% overhead, high trust</strong></p>

      <h3>3. TEE Attestation + Hash Commitments</h3>
      <p>For AI inference or scientific simulation, we verify:</p>
      <ul>
        <li>TEE environment signature (H100 CPR or AMD SEV-SNP)</li>
        <li>Resource usage logs (time, VRAM, CPU)</li>
        <li>Input/output hashes</li>
        <li>Optional: model checksum and pinned version</li>
      </ul>
      <p><strong>→ &lt;1% overhead, tamper-evident logs</strong></p>

      <h3>4. Random Spot-Check Sampling</h3>
      <p>For jobs where full re-run isn't feasible (e.g., LLM inference), we use:</p>
      <ul>
        <li>Random prefix/token replay (verify partial outputs)</li>
        <li>Committed weights/seeds + challenge period</li>
        <li>Optional: slashing for false claims</li>
      </ul>
      <p><strong>→ 3–7% overhead, tunable based on risk</strong></p>

      <h3>5. Merkle/KZG Commitment Logs</h3>
      <p>All job inputs, model weights, outputs, and intermediate states (if needed) are committed to Merkle or KZG trees. These let us verify consistency without storing full job data on-chain.</p>
      <p><strong>→ Auditability without storage bloat</strong></p>

      <h2>🔄 Finality: When Is a Job "Done"?</h2>
      <p>Once a job is completed:</p>
      <ul>
        <li>Output hash + proof data is submitted to Starknet</li>
        <li>The client has a <strong>dispute window</strong> (based on verification tier)</li>
        <li>If no challenges, the node is paid and proof is final</li>
      </ul>
      <p>Jobs with higher value or sensitivity can opt into stricter verification tiers (e.g., full replay or multi-node redundancy).</p>

      <h2>🛡 Why This Matters</h2>
      <p>In traditional cloud compute, trust is implicit. In BitSage, it's cryptographically enforced.</p>
      <p>This unlocks:</p>
      <ul>
        <li><strong>Decentralized payouts based on provable work</strong></li>
        <li><strong>Auditable compute for legal, scientific, or financial applications</strong></li>
        <li><strong>Anti-censorship execution from any region</strong></li>
        <li><strong>Composable, permissionless compute layers for smart contracts</strong></li>
      </ul>

      <h2>🧭 Where We're Headed</h2>
      <p>As ZK-proving systems (e.g., zkML, SP1, RISC Zero) mature, we'll expand proof coverage. But today, hybrid verification gets us 80% of the way there — across rendering, inference, ZK workloads, and scientific jobs — without waiting for perfect zero-knowledge.</p>
      <p>BitSage makes verifiable compute real. Not someday. <strong>Now.</strong></p>
    `,
    author: 'BitSage Engineering Team',
    publishedAt: '2024-01-20',
    readTime: '7 min read',
    category: 'Technical',
    tags: ['verification', 'zero-knowledge', 'proof-of-compute', 'hybrid-proofs'],
    featured: true,
  },
  {
    id: 'introducing-bitsage-network',
    title: 'Introducing BitSage Network: The Future of Verifiable Computing',
    excerpt: 'Today, we\'re excited to announce BitSage Network, a revolutionary platform that brings cryptographic verification to distributed GPU computing.',
    content: `
      <p>Today marks a pivotal moment in the evolution of distributed computing. We're thrilled to introduce BitSage Network, a revolutionary platform that combines the power of distributed GPU computing with the trust and transparency of cryptographic verification.</p>

      <h2>The Problem We're Solving</h2>
      <p>The current cloud computing landscape is dominated by a few major players, creating bottlenecks, high costs, and limited access to GPU resources. Meanwhile, countless GPUs around the world sit idle, representing untapped computational potential worth billions of dollars.</p>

      <p>But the real challenge isn't just about access—it's about trust. How can you be certain that your computational jobs are executed correctly? How do you verify that results haven't been tampered with? Traditional cloud providers ask you to simply trust their infrastructure, but in an era of increasing security concerns and regulatory requirements, trust isn't enough.</p>

      <h2>Our Solution: Verifiable Distributed Computing</h2>
      <p>BitSage Network addresses these challenges through three core innovations:</p>

      <h3>1. Cryptographic Verification</h3>
      <p>Every computation on our network generates a zero-knowledge proof (ZK-STARK) that cryptographically guarantees the correctness of results. This means you can mathematically verify that your job was executed properly, without having to trust any individual node or provider.</p>

      <h3>2. Global GPU Marketplace</h3>
      <p>We're building a decentralized marketplace that connects compute demand with supply from around the world. From individual gaming rigs to enterprise data centers, any GPU can join our network and earn rewards for providing computational power.</p>

      <h3>3. Enterprise-Grade Infrastructure</h3>
      <p>While maintaining decentralization, we've built enterprise-grade features including SLA guarantees, dedicated support, compliance reporting, and seamless integration with existing workflows.</p>

      <h2>Real-World Applications</h2>
      <p>BitSage Network isn't just theoretical—we're already seeing demand across multiple industries:</p>

      <ul>
        <li><strong>AI & Machine Learning:</strong> Training and inference for large language models, computer vision, and deep learning research</li>
        <li><strong>Media & Entertainment:</strong> 3D rendering, video processing, and visual effects for film and gaming</li>
        <li><strong>Scientific Research:</strong> Molecular dynamics simulations, climate modeling, and computational biology</li>
        <li><strong>Financial Services:</strong> Risk modeling, algorithmic trading, and fraud detection</li>
      </ul>

      <h2>The Technology Behind BitSage</h2>
      <p>Our platform is built on cutting-edge technologies:</p>

      <ul>
        <li><strong>StarkNet Integration:</strong> We leverage StarkNet's STARK-based infrastructure for efficient proof verification and settlement</li>
        <li><strong>Distributed Job Orchestration:</strong> Our proprietary job manager intelligently routes workloads based on requirements, location, and node capabilities</li>
        <li><strong>Reputation System:</strong> A blockchain-based reputation system ensures quality and reliability across the network</li>
        <li><strong>Economic Incentives:</strong> Our SAGE token aligns incentives between users, providers, and the network itself</li>
      </ul>

      <h2>What's Next</h2>
      <p>We're currently in testnet phase, working with select enterprise partners and GPU providers to refine our platform. Our roadmap for 2024 includes:</p>

      <ul>
        <li><strong>Q1 2024:</strong> Public testnet launch with community participation</li>
        <li><strong>Q2 2024:</strong> Mainnet launch with initial enterprise customers</li>
        <li><strong>Q3 2024:</strong> Advanced features including multi-party computation and federated learning</li>
        <li><strong>Q4 2024:</strong> Global expansion and partnership integrations</li>
      </ul>

      <h2>Join the Revolution</h2>
      <p>Whether you're an enterprise looking for cost-effective, verifiable compute power, or a GPU owner wanting to monetize your hardware, BitSage Network offers unprecedented opportunities.</p>

      <p>We're building more than just a platform—we're creating the foundation for a new era of computing where trust is built into the infrastructure itself, where computational resources are democratically accessible, and where innovation isn't limited by the constraints of centralized systems.</p>

      <p>The future of computing is verifiable, distributed, and open. Welcome to BitSage Network.</p>
    `,
    author: 'BitSage Team',
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    category: 'Company News',
    tags: ['announcement', 'verifiable-computing', 'launch'],
    featured: true,
  },
  {
    id: 'zero-knowledge-proofs-explained',
    title: 'Zero-Knowledge Proofs in Distributed Computing: A Technical Deep Dive',
    excerpt: 'Explore how ZK-STARKs enable trustless verification of computational results in our distributed network.',
    content: `
      <p>Zero-knowledge proofs represent one of the most significant breakthroughs in cryptography, enabling parties to prove the validity of a statement without revealing any information beyond the statement's truth. In the context of distributed computing, ZK-proofs solve a fundamental challenge: how can you trust computational results from untrusted nodes?</p>

      <h2>The Trust Problem in Distributed Computing</h2>
      <p>Traditional distributed computing systems rely on various trust mechanisms:</p>
      <ul>
        <li><strong>Reputation systems:</strong> Trust based on historical behavior</li>
        <li><strong>Redundant computation:</strong> Multiple nodes compute the same task</li>
        <li><strong>Trusted execution environments:</strong> Hardware-based security</li>
      </ul>

      <p>While these approaches provide some security, they all have limitations. Reputation can be gamed, redundant computation is expensive, and TEEs have known vulnerabilities.</p>

      <h2>Enter Zero-Knowledge STARKs</h2>
      <p>ZK-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge) offer a revolutionary solution. They allow a prover to demonstrate that they correctly executed a computation without revealing the computation's details or intermediate states.</p>

      <h3>Key Properties of STARKs:</h3>
      <ul>
        <li><strong>Scalability:</strong> Proof size and verification time are logarithmic in computation size</li>
        <li><strong>Transparency:</strong> No trusted setup required</li>
        <li><strong>Post-quantum security:</strong> Resistant to quantum computer attacks</li>
        <li><strong>Universality:</strong> Can prove any computational statement</li>
      </ul>

      <h2>Implementation in BitSage Network</h2>
      <p>Our implementation of ZK-proofs in distributed computing involves several key components:</p>

      <h3>1. Computation Tracing</h3>
      <p>Every computation on a BitSage node generates an execution trace—a complete record of all computational steps. This trace includes:</p>
      <ul>
        <li>Memory access patterns</li>
        <li>CPU instruction execution</li>
        <li>Input/output operations</li>
        <li>State transitions</li>
      </ul>

      <h3>2. Proof Generation</h3>
      <p>The execution trace is then used to generate a STARK proof that demonstrates:</p>
      <ul>
        <li>The computation was executed correctly</li>
        <li>The specified program was run</li>
        <li>The inputs and outputs are consistent</li>
        <li>No unauthorized modifications occurred</li>
      </ul>

      <h3>3. On-Chain Verification</h3>
      <p>The generated proof is submitted to our StarkNet-based verification contract, which:</p>
      <ul>
        <li>Validates the proof cryptographically</li>
        <li>Records the verification on-chain</li>
        <li>Triggers payment to the compute provider</li>
        <li>Updates reputation scores</li>
      </ul>

      <h2>Performance Considerations</h2>
      <p>While ZK-proofs provide unparalleled security, they do introduce computational overhead:</p>

      <h3>Proof Generation Time</h3>
      <p>Generating a STARK proof typically takes 10-100x longer than the original computation. However, this overhead is acceptable for many use cases because:</p>
      <ul>
        <li>Proof generation can be parallelized</li>
        <li>Many computations run for hours or days</li>
        <li>The security guarantee justifies the cost</li>
      </ul>

      <h3>Optimization Strategies</h3>
      <p>We employ several optimization techniques:</p>
      <ul>
        <li><strong>Selective verification:</strong> Only critical computations require full proofs</li>
        <li><strong>Recursive proofs:</strong> Combine multiple computation proofs into one</li>
        <li><strong>Hardware acceleration:</strong> GPU-based proof generation</li>
        <li><strong>Proof caching:</strong> Reuse proofs for similar computations</li>
      </ul>

      <h2>Real-World Applications</h2>
      <p>ZK-verified computing opens up new possibilities:</p>

      <h3>Financial Services</h3>
      <p>Banks can outsource risk calculations while maintaining complete privacy and verifiability of results.</p>

      <h3>Scientific Research</h3>
      <p>Researchers can collaborate on sensitive datasets while proving the integrity of their analyses.</p>

      <h3>AI Training</h3>
      <p>Machine learning models can be trained on distributed infrastructure with cryptographic guarantees about the training process.</p>

      <h2>The Future of Verifiable Computing</h2>
      <p>As ZK-proof technology continues to advance, we expect to see:</p>
      <ul>
        <li>Faster proof generation through hardware acceleration</li>
        <li>More efficient proof systems with smaller overhead</li>
        <li>Integration with existing cloud platforms</li>
        <li>Standardization of verifiable computing protocols</li>
      </ul>

      <p>BitSage Network is at the forefront of this revolution, building the infrastructure that will make verifiable computing accessible to everyone. By combining the power of distributed systems with the trust of cryptographic proofs, we're creating a new paradigm for secure, scalable computation.</p>
    `,
    author: 'Dr. Sarah Chen',
    publishedAt: '2024-01-10',
    readTime: '8 min read',
    category: 'Technical',
    tags: ['zero-knowledge', 'cryptography', 'technical'],
    featured: false,
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - BitSage Network',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - BitSage Network`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            {/* Featured Image Placeholder */}
            <div className="h-64 md:h-96 bg-slate-200 flex items-center justify-center">
              <span className="text-slate-500">Article Image</span>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Share this article</h3>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
                      <Copy className="w-4 h-4" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.id} className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-500">Blog Image</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <span className="px-2 py-1 bg-slate-200 rounded text-xs">{relatedPost.category}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
