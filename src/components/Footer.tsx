'use client';

import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/SVG/BitSage.svg"
                  alt="BitSage"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-white">BitSage</span>
              </div>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                Verifiable GPU compute for enterprise AI. Run workloads on global GPUs with cryptographic proof of execution.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <a href="mailto:hello@bitsage.network" className="hover:text-white transition-colors">
                    hello@bitsage.network
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Global Network</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/bitsagenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-black rounded-lg transition-all hover:scale-105 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/QAXDpa7F5K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-[#5865F2] rounded-lg transition-all hover:scale-105 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/Bitsage-Network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Platform</h3>
              <ul className="space-y-3">
                <li><Link href="/waitlist" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">Join Waitlist <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/providers" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">Become a Provider <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="/platform" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Platform Overview</Link></li>
                <li><Link href="/network" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Network Status</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Solutions</h3>
              <ul className="space-y-3">
                <li><Link href="/solutions" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">All Solutions</Link></li>
                <li><Link href="/solutions#ai-training" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">AI Training</Link></li>
                <li><Link href="/solutions#rendering" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">3D Rendering</Link></li>
                <li><Link href="/solutions#vfx" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">VFX & Animation</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/company" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">About</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Blog & News</Link></li>
                <li><Link href="/company#partnerships" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Partnerships</Link></li>
                <li><Link href="/docs" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Documentation</Link></li>
                <li><Link href="/company#contact" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 BitSage Network. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <span>Built with</span>
                <span className="text-emerald-400">♥</span>
                <span>by</span>
                <a 
                  href="https://www.ciroai.us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  Ciro Labs
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/coming-soon" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/coming-soon" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/coming-soon" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Security
              </Link>
              <Link 
                href="/coming-soon"
                className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                Status
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

