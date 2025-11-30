import { Metadata } from 'next';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Introducing BitSage Network: The Future of Verifiable Computing - BitSage Blog',
  description: 'Today, we\'re excited to introduce BitSage Network, a platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.',
  openGraph: {
    title: 'Introducing BitSage Network: The Future of Verifiable Computing',
    description: 'Today, we\'re excited to introduce BitSage Network, a platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.',
    images: [
      {
        url: '/blog/introducing-bitsage.jpg',
        width: 1024,
        height: 576,
        alt: 'BitSage Network - The Future of Verifiable Computing',
      },
    ],
    type: 'article',
    siteName: 'BitSage Network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing BitSage Network: The Future of Verifiable Computing',
    description: 'A platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.',
    images: ['/blog/introducing-bitsage.jpg'],
  },
};

export default function IntroducingBitSageNetworkPage() {
  return (
    <PublicPageLayout className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
              Company News
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Introducing BitSage Network: The Future of Verifiable Computing
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>BitSage Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/blog/introducing-bitsage.jpg" 
            alt="Introducing BitSage Network" 
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Today marks an important milestone in our journey to revolutionize distributed computing. We're excited to introduce BitSage Network, a platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision: Verifiable Compute for Everyone</h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                The current landscape of GPU computing is dominated by centralized providers who control access, pricing, and availability. While these services have enabled incredible innovations, they also create bottlenecks and single points of failure that limit what's possible.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                BitSage Network is being designed to change this paradigm by creating a decentralized marketplace where anyone can contribute GPU resources and anyone can access them, all while maintaining cryptographic guarantees about the integrity of computations.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge of Trust in Distributed Computing</h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                When you run a computation on a remote server, you're essentially trusting that the provider will execute your code correctly and return accurate results. In a decentralized network where anyone can be a provider, this trust becomes even more critical.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Traditional approaches to this problem rely on reputation systems, economic incentives, or redundant computation. While these methods have their place, they don't provide the mathematical certainty that many applications require.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach: Hybrid Verification</h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                BitSage Network will use a hybrid verification approach that combines multiple techniques to ensure computational integrity:
              </p>

              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Zero-Knowledge Proofs:</strong> For computations that naturally produce verifiable proofs, such as ZK-STARK generation</li>
                <li><strong>Deterministic Re-computation:</strong> For tasks like rendering where outputs are deterministic and can be spot-checked</li>
                <li><strong>TEE Attestation:</strong> Using Trusted Execution Environments to provide hardware-backed guarantees</li>
                <li><strong>Sampling and Challenges:</strong> For complex workloads where full verification isn't practical</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Looking Ahead to 2026</h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                We're currently in the research and development phase, working on solving the fundamental challenges of verifiable distributed computing. Our target launch is Q1 2026, when we plan to release our testnet for early adopters and developers.
              </p>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Between now and then, we'll be sharing our research, building partnerships with GPU providers and enterprises, and developing the core infrastructure that will power the network.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Join Our Journey</h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                We believe that the future of computing is decentralized, verifiable, and accessible to everyone. If you share this vision, we invite you to join our community and help shape the future of distributed computing.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Get Involved</h3>
                <p className="text-blue-800 mb-4">
                  Interested in being part of the BitSage Network journey? Join our waitlist to be among the first to know when we launch.
                </p>
                <Link 
                  href="/waitlist"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Join Waitlist
                </Link>
              </div>

              <p className="text-slate-700 leading-relaxed">
                This is just the beginning. Over the coming months, we'll be sharing more technical details about our approach, our progress, and the challenges we're working to solve. Stay tuned for more updates from the BitSage team.
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Share this article</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Introducing BitSage Network: The Future of Verifiable Computing')}&url=${encodeURIComponent('https://bitsage.network/blog/introducing-bitsage-network')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://bitsage.network/blog/introducing-bitsage-network')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/beyond-trust-hybrid-verification" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/blog/hybrid-verification.jpg" alt="Hybrid Verification" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2 block">Technical</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Beyond Trust: How BitSage Verifies Decentralized Compute</h3>
                <p className="text-slate-600 text-sm">Learn about our hybrid verification model combining ZK proofs, deterministic recomputation, and more.</p>
              </div>
            </Link>
            <Link href="/blog/zero-knowledge-proofs-explained" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/blog/zk-proofs.jpg" alt="Zero-Knowledge Proofs" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2 block">Technical</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Zero-Knowledge Proofs in Distributed Computing</h3>
                <p className="text-slate-600 text-sm">A technical deep dive into how ZK-STARKs enable trustless verification of computational results.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
