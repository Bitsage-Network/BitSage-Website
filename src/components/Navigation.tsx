'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, FileText, Code, Server, Shield, Users, Building2, Zap, Database, Network, Settings, BookOpen, Phone, Globe, Lock, Wallet, ExternalLink, Sparkles, Cpu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    label: 'Products',
    megaMenu: true,
    sections: [
      {
        title: 'Enterprise Platform',
        description: 'Production-ready GPU compute',
        items: [
          { label: 'Marketplace', href: 'https://marketplace.bitsage.network', description: 'Enterprise GPU marketplace', icon: Globe, external: true, badge: 'Enterprise' },
          { label: 'AI Inference', href: '/ai-inference', description: 'Run models at scale', icon: Zap },
          { label: 'Batch Compute', href: '/batch-compute', description: 'Rendering & processing', icon: Database },
        ],
      },
      {
        title: 'Validator Network',
        description: 'Earn by providing compute',
        items: [
          { label: 'Validator Portal', href: 'https://validators.bitsage.network', description: 'Full DEGEN mode', icon: Server, external: true, badge: 'Crypto' },
          { label: 'Become a Provider', href: '/providers', description: 'Earn 80% of fees', icon: Wallet },
        ],
      },
      {
        title: 'Obelysk Protocol',
        description: 'Privacy-first DeFi on Stark',
        items: [
          { label: 'Dark Pool Trading', href: '/obelysk', description: 'Private order matching', icon: Lock, badge: 'New' },
          { label: 'Privacy Wallets', href: '/obelysk#wallets', description: 'Encrypted transactions', icon: Shield },
          { label: 'Private Staking', href: '/obelysk#staking', description: 'Anonymous yield', icon: Sparkles },
        ],
      },
      {
        title: 'STWO-ML Prover',
        description: 'GPU-accelerated verifiable AI',
        items: [
          { label: 'STWO-ML Overview', href: '/stwo-ml', description: 'Verifiable AI inference', icon: Cpu, badge: 'New' },
          { label: 'GPU Proving', href: '/stwo-ml#architecture', description: 'H200 parallelized proofs', icon: Zap },
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
        description: 'GPU compute for your needs',
        items: [
          { label: 'AI & ML Teams', href: '/ai-inference', description: 'Training & inference at scale', icon: Zap },
          { label: 'Creative Studios', href: '/creative-studios', description: 'Rendering & post-production', icon: Settings },
          { label: 'Research Labs', href: '/research-labs', description: 'Scientific computing', icon: BookOpen },
        ],
      },
      {
        title: 'Agentic Workflows',
        description: 'AI automation at scale',
        items: [
          { label: 'MoltBook Integration', href: 'https://www.moltbook.com/', description: 'Run agentic AI workflows', icon: Sparkles, external: true, badge: 'Hot' },
          { label: 'Workflow Builder', href: '/docs/workflows', description: 'Design AI pipelines', icon: Code },
        ],
      },
      {
        title: 'Developers',
        description: 'Build with BitSage',
        items: [
          { label: 'Quick Start', href: '/docs/getting-started', description: 'Get running in minutes', icon: Code },
          { label: 'API Reference', href: '/docs/api-reference', description: 'Full documentation', icon: FileText },
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
      { label: 'Whitepaper', href: '/manifesto', icon: FileText },
      { label: 'Blog', href: '/blog', icon: FileText },
    ],
    megaMenu: false,
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-1.5 xs:px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
          {/* Logo - Professional - Ultra responsive sizing */}
          <Link href="/" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 hover:opacity-90 transition-opacity min-w-0">
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
              <Image
                src="/SVG/BitSage.svg"
                alt="BitSage Logo"
                width={40}
                height={40}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm xs:text-base sm:text-lg font-semibold text-white leading-tight truncate">
                BitSage
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 leading-tight">
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
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors font-medium rounded-md hover:bg-slate-800/50"
                >
                  {item.label}
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu or Mega Menu */}
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <>
                      {item.megaMenu ? (
                        // Professional Mega Menu - Centered on viewport
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
                          <div className={`${(item.sections?.length ?? 3) >= 4 ? 'w-[1100px]' : 'w-[900px]'} max-w-[90vw] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xl`}
                        >
                          <div className={`grid ${(item.sections?.length ?? 3) >= 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-0`}>
                            {item.sections?.map((section, sectionIndex) => (
                              <div 
                                key={section.title} 
                                className="p-6 border-r border-slate-100 last:border-r-0"
                              >
                                {/* Section Header */}
                                <div className="pb-4 border-b border-slate-100 mb-4">
                                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                                    {section.title}
                                  </h3>
                                  <p className="text-xs text-slate-600">{section.description}</p>
                                </div>
                                
                                {/* Section Items */}
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
                                        <div className="mt-0.5 text-slate-600 group-hover:text-slate-900 transition-colors">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
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
                                          <div className="text-xs text-slate-600 leading-relaxed">
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
                        // Professional Simple Dropdown
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
                                <subItem.icon className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
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
          
          {/* Right section - User Journey CTAs */}
          <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 flex-shrink-0">
            {/* Get Compute Button - Hidden on small screens */}
            <Link href="/waitlist" className="hidden sm:block">
              <button className="flex items-center gap-2 px-3 xs:px-4 py-2 text-xs xs:text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                Join Waitlist
              </button>
            </Link>
            
            {/* Become Provider Button - Ultra compact on tiny screens */}
            <Link href="/providers" className="hidden xs:block">
              <button className="flex items-center gap-1 xs:gap-2 px-1.5 xs:px-2 sm:px-4 py-1.5 xs:py-2 text-[11px] xs:text-xs sm:text-sm font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors whitespace-nowrap">
                <Server className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Become a Provider</span>
                <span className="sm:hidden">Join</span>
              </button>
            </Link>
            
            {/* Mobile menu button - More compact */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-md hover:bg-slate-700 transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-slate-300" /> : <Menu className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-slate-300" />}
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
            className="lg:hidden border-t border-slate-700 bg-slate-900 max-h-[calc(100vh-4rem)] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#64748b #0f172a'
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  {/* Mobile Menu Item Button */}
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        mobileOpenDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Mobile Dropdown Content */}
                  <AnimatePresence>
                    {mobileOpenDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-h-[60vh] overflow-y-auto overflow-x-hidden"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#64748b #1e293b'
                        }}
                      >
                        {item.megaMenu ? (
                          // Mobile Mega Menu - Stacked sections
                          <div className="pl-4 space-y-4 py-2">
                            {item.sections?.map((section) => (
                              <div key={section.title} className="space-y-2">
                                <div className="px-3 py-2">
                                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
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
                                      className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors active:bg-slate-700"
                                    >
                                      <div className="mt-0.5 text-slate-500">
                                        <subItem.icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                          <span className="text-sm font-medium text-slate-300">
                                            {subItem.label}
                                          </span>
                                          {subItem.external && (
                                            <ExternalLink className="w-3 h-3 text-slate-500" />
                                          )}
                                          {subItem.badge && (
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                              subItem.badge === 'Hot' ? 'bg-orange-500/20 text-orange-400' :
                                              subItem.badge === 'New' ? 'bg-violet-500/20 text-violet-400' :
                                              subItem.badge === 'Crypto' ? 'bg-amber-500/20 text-amber-400' :
                                              'bg-blue-500/20 text-blue-400'
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
                          // Mobile Simple Dropdown
                          <div className="pl-4 space-y-1 py-2">
                            {item.dropdown?.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setMobileOpenDropdown(null);
                                }}
                                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors active:bg-slate-700"
                              >
                                <subItem.icon className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-300 font-medium">{subItem.label}</span>
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
              <div className="pt-4 border-t border-slate-700 space-y-2">
                <Link href="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                    Join Waitlist
                  </button>
                </Link>
                <Link href="/providers" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                    <Server className="w-4 h-4" />
                    Become a Provider
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
