import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Copy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs - BitSage Network',
  description: 'Learn how BitSage Network uses a hybrid verification model combining ZK proofs, deterministic recomputation, TEE attestation, and sampling to provide verifiable compute across different job types.',
  openGraph: {
    title: 'Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs',
    description: 'Learn how BitSage Network uses a hybrid verification model combining ZK proofs, deterministic recomputation, TEE attestation, and sampling to provide verifiable compute across different job types.',
    images: [
      {
            url: '/blog/hybrid-verification.jpg',
        width: 1024,
        height: 576,
        alt: 'BitSage Network Hybrid Verification Model',
      },
    ],
    type: 'article',
    siteName: 'BitSage Network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs',
    description: 'Learn how BitSage Network uses a hybrid verification model combining ZK proofs, deterministic recomputation, TEE attestation, and sampling.',
    images: ['/blog/hybrid-verification.jpg'],
  },
};

export default function BeyondTrustHybridVerificationPage() {
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
              Technical
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>BitSage Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            {/* Featured Image */}
            <img 
              src="/blog/hybrid-verification.jpg" 
              alt="BitSage Network Hybrid Verification Model" 
              className="h-64 md:h-96 w-full object-cover"
            />
            
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-xl text-slate-600 mb-8">
                  In decentralized compute, trust is the bottleneck. Users can't just <em>assume</em> their GPU jobs ran correctly — not when payouts and critical applications depend on correctness. But verifying compute is hard. Full zero-knowledge proofs of complex workloads like AI training or rendering are still years away.
                </p>

                <p>
                  That's why BitSage uses a hybrid approach: blending cryptographic proofs, deterministic recomputation, hardware attestation, and sampling to provide verifiable compute <strong>now</strong>, across a range of job types.
                </p>

                <p>Let's break it down.</p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🧩 What Are We Trying to Prove?
                </h2>

                <p>At BitSage, we don't aim to prove <em>every instruction</em>. Instead, we prove:</p>

                <ol>
                  <li><strong>That the job was actually executed as submitted</strong></li>
                  <li><strong>That the claimed resources (GPU-hours, memory, I/O) were consumed</strong></li>
                  <li><strong>That the result matches the declared input/output</strong></li>
                  <li><strong>That the execution came from a known node in a verified environment</strong></li>
                </ol>

                <p>This is <strong>Proof of Compute</strong>, not full ZK computation.</p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🛠 Hybrid Verification Model
                </h2>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. ZK Proofs Where They Make Sense</h3>

                <p>Jobs like STARK or SNARK generation already produce verifiable proofs — we just route and record them. For these, the proof <em>is</em> the verification.</p>

                <p className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
                  → <strong>Zero overhead, perfect trust</strong>
                </p>

                <hr className="my-6" />

                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Deterministic Spot Recompute</h3>

                <p>For jobs like rendering, video encoding, or procedural content generation, output is deterministic. We recompute <strong>k%</strong> of the result (e.g. 5% of frames or tiles) and verify it matches the original hash.</p>

                <p className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  → <strong>2–5% overhead, high trust</strong>
                </p>

                <hr className="my-6" />

                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. TEE Attestation + Hash Commitments</h3>

                <p>For AI inference or scientific simulation, we verify:</p>

                <ul>
                  <li>TEE environment signature (H100 CPR or AMD SEV-SNP)</li>
                  <li>Resource usage logs (time, VRAM, CPU)</li>
                  <li>Input/output hashes</li>
                  <li>Optional: model checksum and pinned version</li>
                </ul>

                <p className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4">
                  → <strong>&lt;1% overhead, tamper-evident logs</strong>
                </p>

                <hr className="my-6" />

                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Random Spot-Check Sampling</h3>

                <p>For jobs where full re-run isn't feasible (e.g., LLM inference), we use:</p>

                <ul>
                  <li>Random prefix/token replay (verify partial outputs)</li>
                  <li>Committed weights/seeds + challenge period</li>
                  <li>Optional: slashing for false claims</li>
                </ul>

                <p className="bg-orange-50 border-l-4 border-orange-400 p-4 my-4">
                  → <strong>3–7% overhead, tunable based on risk</strong>
                </p>

                <hr className="my-6" />

                <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Merkle/KZG Commitment Logs</h3>

                <p>All job inputs, model weights, outputs, and intermediate states (if needed) are committed to Merkle or KZG trees. These let us verify consistency without storing full job data on-chain.</p>

                <p className="bg-slate-50 border-l-4 border-slate-400 p-4 my-4">
                  → <strong>Auditability without storage bloat</strong>
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🎯 Per-Job Verification Strategies
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 my-6">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Job Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Verification Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">ZK Proof Gen</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Native proof</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">3D Rendering</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">k% tile re-render + output hash</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Video Transcode</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Segment replay + watermark</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">AI Inference</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">TEE + spot-check + hash commitments</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Scientific Sim</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Seed replay + invariants/residual checks</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">AI Training (small)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Checkpoint hash + TEE logs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">AI Training (large)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Not supported without colocated clusters (for now)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🔄 Finality: When Is a Job "Done"?
                </h2>

                <p>Once a job is completed:</p>

                <ul>
                  <li>Output hash + proof data is submitted to Starknet</li>
                  <li>The client has a <strong>dispute window</strong> (based on verification tier)</li>
                  <li>If no challenges, the node is paid and proof is final</li>
                </ul>

                <p>Jobs with higher value or sensitivity can opt into stricter verification tiers (e.g., full replay or multi-node redundancy).</p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🛡 Why This Matters
                </h2>

                <p>In traditional cloud compute, trust is implicit. In BitSage, it's cryptographically enforced.</p>

                <p>This unlocks:</p>

                <ul>
                  <li><strong>Decentralized payouts based on provable work</strong></li>
                  <li><strong>Auditable compute for legal, scientific, or financial applications</strong></li>
                  <li><strong>Anti-censorship execution from any region</strong></li>
                  <li><strong>Composable, permissionless compute layers for smart contracts</strong></li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🧭 Where We're Headed
                </h2>

                <p>As ZK-proving systems (e.g., zkML, SP1, RISC Zero) mature, we'll expand proof coverage. But today, hybrid verification gets us 80% of the way there — across rendering, inference, ZK workloads, and scientific jobs — without waiting for perfect zero-knowledge.</p>

                <p className="text-xl font-semibold text-slate-900 mt-6">
                  BitSage makes verifiable compute real. Not someday. <strong>Now.</strong>
                </p>
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#verification</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#zero-knowledge</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#proof-of-compute</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#hybrid-proofs</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#tee-attestation</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">#distributed-computing</span>
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="/blog/zk-proofs.jpg" 
                alt="Zero-Knowledge Proofs in Distributed Computing" 
                className="h-48 w-full object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Technical</span>
                  <span>8 min read</span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                  Zero-Knowledge Proofs in Distributed Computing: A Technical Deep Dive
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  Explore how ZK-STARKs and SNARKs can enable trustless verification of computational results in distributed networks, and the challenges of implementing them at scale.
                </p>
                
                <Link 
                  href="/blog/zero-knowledge-proofs-explained"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="/blog/introducing-bitsage.jpg" 
                alt="Introducing BitSage Network" 
                className="h-48 w-full object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Company News</span>
                  <span>5 min read</span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                  Introducing BitSage Network: The Future of Verifiable Computing
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  Today, we're excited to introduce BitSage Network, a platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.
                </p>
                
                <Link 
                  href="/blog/introducing-bitsage-network"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
