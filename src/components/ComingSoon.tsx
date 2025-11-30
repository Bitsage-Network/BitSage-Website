'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, Bell, ArrowRight, CheckCircle, Shield, Building2, Mail, Phone } from 'lucide-react';

interface ComingSoonProps {
  title?: string;
  description?: string;
  features?: string[];
  estimatedLaunch?: string;
  notifyEmail?: boolean;
  className?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned for updates!",
  features = [],
  estimatedLaunch,
  notifyEmail = true,
  className = ""
}: ComingSoonProps) {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        // Import form service dynamically to avoid SSR issues
        const { formService } = await import('@/lib/formSubmission');
        
        const result = await formService.submitNewsletter({
          email,
          source: `coming-soon-${title.toLowerCase().replace(/\s+/g, '-')}`,
        });
        
        if (result.success) {
          setIsSubscribed(true);
          setEmail('');
        } else {
          alert(result.message || 'Failed to subscribe. Please try again.');
        }
      } catch (error) {
        console.error('Newsletter subscription error:', error);
        alert('Failed to subscribe. Please try again.');
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Image 
              src="/SVG/BitSage.svg" 
              alt="BitSage Logo" 
              width={32} 
              height={32}
              className="w-8 h-8 filter brightness-0 invert"
            />
          </div>
          <div className="text-sm font-semibold text-slate-600 tracking-wide">BITSAGE NETWORK</div>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 md:p-12 text-white text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">

          {/* Enterprise Value Proposition */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Enterprise-Grade Infrastructure
            </div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              This feature is currently under development with our enterprise security and compliance team. We're ensuring it meets the highest standards for production workloads.
            </p>
          </div>

          {/* Features Preview */}
          {features.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Features In Development
              </h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estimated Launch */}
          {estimatedLaunch && (
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-3 rounded-xl text-base font-semibold border border-slate-200">
                <Clock className="w-5 h-5 text-emerald-600" />
                Expected Availability: {estimatedLaunch}
              </div>
            </div>
          )}

          {/* Email Notification */}
          {notifyEmail && (
            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Enterprise Early Access</h3>
              <p className="text-slate-600 text-center mb-6">Be first to know when this feature launches. Our enterprise team will reach out with exclusive access.</p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNotifyMe} className="max-w-lg mx-auto">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="business@company.com"
                        className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-base transition-colors"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors flex items-center gap-2 justify-center shadow-lg hover:shadow-xl"
                    >
                      <Bell className="w-5 h-5" />
                      Request Enterprise Access
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 max-w-lg mx-auto">
                  <div className="flex items-start gap-3 text-emerald-800">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Request Received</p>
                      <p className="text-sm text-emerald-700">Our enterprise team will contact you within 2-3 business days with exclusive early access details.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Enterprise Contact Options */}
          <div className="border-t border-slate-200 pt-8 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="/waitlist" className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Building2 className="w-6 h-6 text-slate-600 group-hover:text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 group-hover:text-emerald-700">Join Waitlist</div>
                <div className="text-sm text-slate-600">Early access program</div>
              </div>
            </a>
            <a href="/company#contact" className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Phone className="w-6 h-6 text-slate-600 group-hover:text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 group-hover:text-emerald-700">Contact Sales</div>
                <div className="text-sm text-slate-600">Enterprise inquiries</div>
              </div>
            </a>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-semibold"
            >
              Go Back
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold flex items-center gap-2 justify-center"
            >
              Explore Platform
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-4">Need immediate access? Connect with our team</p>
          <div className="flex justify-center gap-8">
            <a href="https://twitter.com/bitsagenetwork" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm font-medium">Twitter</a>
            <a href="https://discord.gg/QAXDpa7F5K" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm font-medium">Discord</a>
            <a href="https://github.com/bitsage-network" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors text-sm font-medium">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
