'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Code, Server, Shield, Zap, Database, Network, Settings, BookOpen, Globe, Lock, Wallet, ExternalLink, Cpu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    label: 'Products',
    megaMenu: true,
    sections: [
      {
        title: 'Compute',
        description: 'Verified GPU infrastructure',
        items: [
          { label: 'Marketplace', href: 'https://marketplace.bitsage.network', description: 'On-demand GPU compute', icon: Globe, external: true, badge: 'Enterprise' },
          { label: 'AI Inference', href: '/ai-inference', description: 'Deploy models at scale', icon: Zap },
          { label: 'Batch Compute', href: '/batch-compute', description: 'Rendering and processing', icon: Database },
        ],
      },
      {
        title: 'Network',
        description: 'Power the supply side',
        items: [
          { label: 'Validator Portal', href: 'https://validators.bitsage.network', description: 'Manage your GPU nodes', icon: Server, external: true },
          { label: 'Become a Provider', href: '/providers', description: 'Earn fees by providing GPUs', icon: Wallet },
        ],
      },
      {
        title: 'Privacy',
        description: 'On-chain privacy layer',
        items: [
          { label: 'Obelysk Protocol', href: '/obelysk', description: 'Private order matching', icon: Lock, badge: 'New' },
          { label: 'Privacy Wallets', href: '/obelysk#wallets', description: 'Encrypted transactions', icon: Shield },
          { label: 'Private Staking', href: '/obelysk#staking', description: 'Shielded yield', icon: Lock },
        ],
      },
      {
        title: 'Verification',
        description: 'Cryptographic proofs for AI',
        items: [
          { label: 'STWO-ML Prover', href: '/stwo-ml', description: 'ZK proofs for ML inference', icon: Cpu, badge: 'New' },
          { label: 'GPU Proving', href: '/stwo-ml#architecture', description: 'H200-accelerated proofs', icon: Zap },
          { label: 'On-Chain Verify', href: '/stwo-ml#contracts', description: 'Starknet verification', icon: Shield },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    megaMenu: true,
    sections: [
      {
        title: 'By Industry',
        description: 'Purpose-built for your team',
        items: [
          { label: 'AI & ML Teams', href: '/ai-inference', description: 'Training and inference at scale', icon: Zap },
          { label: 'Creative Studios', href: '/creative-studios', description: 'Rendering and post-production', icon: Settings },
          { label: 'Research Labs', href: '/research-labs', description: 'Scientific computing', icon: BookOpen },
        ],
      },
      {
        title: 'Developers',
        description: 'Start building today',
        items: [
          { label: 'Quick Start', href: '/docs/getting-started', description: 'First job in 5 minutes', icon: Code },
          { label: 'API Reference', href: '/docs/api-reference', description: 'Full SDK documentation', icon: FileText },
          { label: 'Batch Processing', href: '/batch-compute', description: 'Large-scale GPU jobs', icon: Database },
        ],
      },
    ],
  },
  {
    label: 'Network',
    dropdown: [
      { label: 'Network Status', href: '/network', icon: Network },
      { label: 'Validator Dashboard', href: 'https://validators.bitsage.network', icon: Server, external: true },
      { label: 'Performance Benchmarks', href: '/docs/benchmark-tco-brief', icon: Zap },
    ],
    megaMenu: false,
  },
  {
    label: 'Docs',
    dropdown: [
      { label: 'Documentation', href: '/docs', icon: BookOpen },
      { label: 'Pricing', href: '/pricing', icon: Zap },
      { label: 'Whitepaper', href: '/manifesto', icon: FileText },
      { label: 'Blog', href: '/blog', icon: FileText },
    ],
    megaMenu: false,
  },
];

export function Navigation({ dark = false }: { dark?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
      dark
        ? 'bg-slate-950/90 border-slate-800'
        : 'bg-white/95 border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-1.5 xs:px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 hover:opacity-90 transition-opacity min-w-0">
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
              <Image
                src={dark ? "/SVG/BitSage.svg" : "/SVG/BitSage-dark.svg"}
                alt="BitSage Logo"
                width={40}
                height={40}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-sm xs:text-base sm:text-lg font-semibold leading-tight truncate ${dark ? 'text-white' : 'text-slate-900'}`}>
                BitSage
              </span>
              <span className={`text-[9px] xs:text-[10px] sm:text-xs leading-tight ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Network
              </span>
            </div>
          </Link>

          {/* Main navigation links */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors font-medium rounded-md ${
                    dark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3 h-3 ${dark ? 'text-slate-500' : 'text-slate-400'} transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu or Mega Menu */}
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <>
                      {item.megaMenu ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="fixed left-0 right-0 flex justify-center z-50"
                          style={{ top: '4.5rem' }}
                          onMouseEnter={() => setOpenDropdown(item.label)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className={`${(item.sections?.length ?? 3) >= 4 ? 'w-[1100px]' : 'w-[900px]'} max-w-[90vw] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xl`}>
                          <div className={`grid ${(item.sections?.length ?? 3) >= 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-0`}>
                            {item.sections?.map((section) => (
                              <div
                                key={section.title}
                                className="p-6 border-r border-slate-100 last:border-r-0"
                              >
                                <div className="pb-4 border-b border-slate-100 mb-4">
                                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                                    {section.title}
                                  </h3>
                                  <p className="text-xs text-slate-500">{section.description}</p>
                                </div>

                                <div className="space-y-1">
                                  {section.items.map((subItem: { label: string; href: string; description: string; icon: React.ComponentType<{ className?: string }>; external?: boolean; badge?: string }) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      target={subItem.external ? '_blank' : undefined}
                                      rel={subItem.external ? 'noopener noreferrer' : undefined}
                                      className="block p-3 rounded-md hover:bg-slate-50 transition-colors group"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="mt-0.5 text-slate-400 group-hover:text-slate-600 transition-colors">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-sm font-medium text-slate-900 group-hover:text-[--accent] transition-colors">
                                              {subItem.label}
                                            </span>
                                            {subItem.external && (
                                              <ExternalLink className="w-3 h-3 text-slate-400" />
                                            )}
                                            {subItem.badge && (
                                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                                subItem.badge === 'Hot' ? 'bg-orange-100 text-orange-600' :
                                                subItem.badge === 'New' ? 'bg-violet-100 text-violet-600' :
                                                subItem.badge === 'Crypto' ? 'bg-amber-100 text-amber-700' :
                                                'bg-blue-100 text-blue-600'
                                              }`}>
                                                {subItem.badge}
                                              </span>
                                            )}
                                          </div>
                                          <div className="text-xs text-slate-500 leading-relaxed">
                                            {subItem.description}
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg"
                        >
                          <div className="p-2">
                            {item.dropdown?.map((subItem: { label: string; href: string; icon: React.ComponentType<{ className?: string }>; external?: boolean }) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                target={subItem.external ? '_blank' : undefined}
                                rel={subItem.external ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-slate-50 transition-colors group"
                              >
                                <subItem.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                                <span className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">{subItem.label}</span>
                                {subItem.external && (
                                  <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
                                )}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 flex-shrink-0">
            <Link href="/waitlist" className="hidden sm:block">
              <button className={`px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}>
                Sign in
              </button>
            </Link>

            <Link href="/waitlist" className="hidden xs:block">
              <button className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                dark
                  ? 'bg-white text-slate-900 hover:bg-slate-100'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                Get started
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg transition-colors flex-shrink-0 ${
                dark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
              }`}
            >
              {isMenuOpen
                ? <X className={`w-4 h-4 sm:w-5 sm:h-5 ${dark ? 'text-slate-300' : 'text-slate-600'}`} />
                : <Menu className={`w-4 h-4 sm:w-5 sm:h-5 ${dark ? 'text-slate-300' : 'text-slate-600'}`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        mobileOpenDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileOpenDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-h-[60vh] overflow-y-auto overflow-x-hidden"
                      >
                        {item.megaMenu ? (
                          <div className="pl-4 space-y-4 py-2">
                            {item.sections?.map((section) => (
                              <div key={section.title} className="space-y-2">
                                <div className="px-3 py-2">
                                  <h4 className="text-xs font-semibold text-[--accent] uppercase tracking-wider mb-1">
                                    {section.title}
                                  </h4>
                                  <p className="text-xs text-slate-500">{section.description}</p>
                                </div>
                                <div className="space-y-1">
                                  {section.items.map((subItem: { label: string; href: string; description: string; icon: React.ComponentType<{ className?: string }>; external?: boolean; badge?: string }) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      target={subItem.external ? '_blank' : undefined}
                                      rel={subItem.external ? 'noopener noreferrer' : undefined}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setMobileOpenDropdown(null);
                                      }}
                                      className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
                                    >
                                      <div className="mt-0.5 text-slate-400">
                                        <subItem.icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                          <span className="text-sm font-medium text-slate-700">
                                            {subItem.label}
                                          </span>
                                          {subItem.external && (
                                            <ExternalLink className="w-3 h-3 text-slate-400" />
                                          )}
                                          {subItem.badge && (
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                              subItem.badge === 'Hot' ? 'bg-orange-100 text-orange-600' :
                                              subItem.badge === 'New' ? 'bg-violet-100 text-violet-600' :
                                              subItem.badge === 'Crypto' ? 'bg-amber-100 text-amber-700' :
                                              'bg-blue-100 text-blue-600'
                                            }`}>
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <div className="text-xs text-slate-500 leading-relaxed">
                                          {subItem.description}
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="pl-4 space-y-1 py-2">
                            {item.dropdown?.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setMobileOpenDropdown(null);
                                }}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
                              >
                                <subItem.icon className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-700 font-medium">{subItem.label}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile actions */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <Link href="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                    Get started
                  </button>
                </Link>
                <Link href="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
