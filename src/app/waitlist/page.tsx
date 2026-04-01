'use client';

import React, { useState, useEffect } from 'react';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import { CheckCircle, ArrowRight, Cpu, Users, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function WaitlistPage() {
  const [userType, setUserType] = useState<'user' | 'provider'>('user');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Join Waitlist - BitSage Network';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      const { formService } = await import('@/lib/formSubmission');
      const result = await formService.submitWaitlist({
        email,
        company,
        userType,
      });
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || 'Failed to submit. Please try again.');
      }
    } catch {
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PublicPageLayout>
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the list</h1>
            <p className="text-slate-500 mb-8">
              We&apos;ll reach out within a few days to discuss your {userType === 'user' ? 'compute needs' : 'GPU setup'} and get you early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="group px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-sm flex items-center justify-center gap-2">
                Back to home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/docs" className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg hover:border-slate-300 hover:text-slate-900 transition-all font-semibold text-sm">
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </PublicPageLayout>
    );
  }

  return (
    <PublicPageLayout>
      <div className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Early Access</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Get started with BitSage
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                {userType === 'user'
                  ? 'Join the waitlist for verified GPU compute. ZK-proven results, encrypted execution, enterprise SLAs.'
                  : 'Provide GPU compute to the network and earn 80% of fees. Join as an early provider.'
                }
              </p>

              <div className="space-y-4">
                {(userType === 'user' ? [
                  { icon: Shield, text: 'ZK-verified results on every job' },
                  { icon: Zap, text: 'Sub-minute job starts, 99.9% SLA' },
                  { icon: Globe, text: 'Global GPU network, fiat payments' },
                ] : [
                  { icon: Zap, text: '80% revenue share -- highest in the industry' },
                  { icon: Shield, text: 'Cryptographically verified fair payments' },
                  { icon: Globe, text: 'Access enterprise demand worldwide' },
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-slate-500" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              {/* Toggle */}
              <div className="flex items-center p-1 bg-slate-100 rounded-lg mb-8">
                <button
                  type="button"
                  onClick={() => setUserType('user')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                    userType === 'user' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  I need compute
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('provider')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                    userType === 'provider' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  I have GPUs
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Work email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[--accent]/20 focus:border-[--accent] outline-none text-slate-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company <span className="text-slate-400">(optional)</span></label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[--accent]/20 focus:border-[--accent] outline-none text-slate-900 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-sm flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join waitlist
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-slate-400 text-center">
                No spam. We&apos;ll only contact you about BitSage access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  );
}
