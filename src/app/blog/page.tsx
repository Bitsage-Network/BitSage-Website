'use client';

import { PublicPageLayout } from '@/components/PublicPageLayout';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';

// Set page title and description using useEffect since this is a client component
function usePageMetadata() {
  useEffect(() => {
    document.title = 'Blog - BitSage Network';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Latest news, insights, and technical deep dives from BitSage Network. Stay updated on verifiable computing, distributed systems, and industry developments.');
    }
  }, []);
}

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'beyond-trust-hybrid-verification',
    title: 'Beyond Trust: How BitSage Verifies Decentralized Compute with Hybrid Proofs',
    excerpt: 'Learn how BitSage Network uses a hybrid verification model combining ZK proofs, deterministic recomputation, TEE attestation, and sampling to provide verifiable compute across different job types.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Engineering Team',
    publishedAt: '2024-12-15',
    readTime: '7 min read',
    category: 'Technical',
    tags: ['verification', 'zero-knowledge', 'proof-of-compute', 'hybrid-proofs'],
    featured: true,
    image: '/blog/hybrid-verification.jpg'
  },
  {
    id: 'stwo-gpu-acceleration',
    title: 'Stwo GPU Acceleration: 98x Faster Proofs',
    excerpt: 'How we achieved 98x faster ZK proof generation by leveraging GPU acceleration with the Stwo prover. A deep dive into our optimization journey.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Engineering Team',
    publishedAt: '2024-12-12',
    readTime: '10 min read',
    category: 'Technical',
    tags: ['stwo', 'gpu', 'performance', 'zero-knowledge'],
    featured: false,
    image: '/blog/stwo-gpu.jpg'
  },
  {
    id: 'introducing-bitsage-network',
    title: 'Introducing BitSage Network: The Future of Verifiable Computing',
    excerpt: 'Today, we\'re excited to introduce BitSage Network, a platform designed to bring cryptographic verification to distributed GPU computing when it launches in 2026.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Team',
    publishedAt: '2024-12-10',
    readTime: '5 min read',
    category: 'Company News',
    tags: ['announcement', 'verifiable-computing', 'vision'],
    featured: false,
    image: '/blog/introducing-bitsage.jpg'
  },
  {
    id: 'understanding-pricing-model',
    title: 'Understanding Our Pricing Model: Pay Only for What You Use',
    excerpt: 'A transparent breakdown of BitSage pricing, from GPU-hour rates to volume discounts. Learn how we keep costs 30-60% lower than traditional cloud providers.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Team',
    publishedAt: '2024-12-08',
    readTime: '4 min read',
    category: 'Company News',
    tags: ['pricing', 'economics', 'transparency'],
    featured: false,
    image: '/blog/pricing-model.jpg'
  },
  {
    id: 'zero-knowledge-proofs-explained',
    title: 'Zero-Knowledge Proofs in Distributed Computing: A Technical Deep Dive',
    excerpt: 'Explore how ZK-STARKs and SNARKs can enable trustless verification of computational results in distributed networks, and the challenges of implementing them at scale.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Research Team',
    publishedAt: '2024-12-05',
    readTime: '8 min read',
    category: 'Technical',
    tags: ['zero-knowledge', 'cryptography', 'distributed-systems'],
    featured: false,
    image: '/blog/zk-proofs.jpg'
  },
  {
    id: 'provider-spotlight-first-100',
    title: 'Provider Spotlight: Our First 100 Nodes',
    excerpt: 'Meet the early providers powering the BitSage network. From individual enthusiasts to data centers, see who\'s building the future of verifiable compute.',
    content: 'Full content available in dedicated article page...',
    author: 'BitSage Community Team',
    publishedAt: '2024-12-01',
    readTime: '6 min read',
    category: 'Community',
    tags: ['providers', 'community', 'network'],
    featured: false,
    image: '/blog/provider-spotlight.jpg'
  }
];

const categories = [
  'All Posts',
  'Company News',
  'Technical',
  'Community'
];

export default function BlogPage() {
  usePageMetadata();
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsNewsletterSubmitting(true);
    
    try {
      const { formService } = await import('@/lib/formSubmission');
      
      const result = await formService.submitNewsletter({
        email: newsletterEmail,
        source: 'blog-newsletter',
      });
      
      if (result.success) {
        setIsNewsletterSubmitted(true);
        setNewsletterEmail('');
      } else {
        alert(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <PublicPageLayout className="bg-slate-950">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              BitSage Blog
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Latest insights on verifiable computing, distributed systems, and the future of decentralized infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === 'All Posts'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-medium">
                <Tag className="w-4 h-4" />
                Featured
              </span>
            </div>

            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <Tag className="w-10 h-10 text-emerald-400" />
                    </div>
                    <span className="text-slate-400 text-sm">{featuredPost.category}</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300">{featuredPost.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">By {featuredPost.author}</span>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all">
                <div className="h-48 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-slate-500" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-emerald-100 mb-8">
            Get the latest insights on verifiable computing and BitSage Network developments delivered to your inbox.
          </p>

          {!isNewsletterSubmitted ? (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none"
                required
                disabled={isNewsletterSubmitting}
              />
              <button
                type="submit"
                disabled={isNewsletterSubmitting}
                className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <p className="text-white font-medium">Thanks for subscribing! Check your email for confirmation.</p>
            </div>
          )}
        </div>
      </section>
    </PublicPageLayout>
  );
}
