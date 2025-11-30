'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, User, X, ChevronDown, FileText, Code, Server, Shield, Users, Building2, Zap, Database, Network, Settings, BookOpen, Phone, Globe } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    label: 'Platform',
    megaMenu: true,
    sections: [
      {
        title: 'Core Architecture',
        description: 'Verifiable compute infrastructure',
        items: [
          { label: 'Sage Cloud', href: '/platform#sage-cloud', description: 'Web & API entry point for jobs', icon: Globe },
          { label: 'Sage Mesh', href: '/platform#sage-mesh', description: 'Global P2P network fabric', icon: Network },
          { label: 'Sage Forge', href: '/platform#sage-forge', description: 'Node execution environment', icon: Server },
          { label: 'Sage Proof', href: '/platform#sage-proof', description: 'ZK verification system', icon: Shield },
        ],
      },
      {
        title: 'Enterprise Solutions',
        description: 'Production-ready compute',
        items: [
          { label: 'AI Training & Inference', href: '/platform#ai-compute', description: 'Scalable ML workloads', icon: Zap },
          { label: 'Rendering Pipeline', href: '/platform#rendering', description: '3D & VFX processing', icon: Settings },
          { label: 'Batch Processing', href: '/platform#batch', description: 'Parallel job execution', icon: Database },
          { label: 'Custom Integrations', href: '/platform#integrations', description: 'Enterprise API access', icon: Code },
        ],
      },
      {
        title: 'Resources',
        description: 'Documentation & support',
        items: [
          { label: 'Technical Docs', href: '/docs', description: 'API reference & guides', icon: BookOpen },
          { label: 'Architecture Guide', href: '/manifesto', description: 'System design overview', icon: FileText },
          { label: 'Blog & News', href: '/blog', description: 'Latest insights & updates', icon: FileText },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    megaMenu: true,
    sections: [
      {
        title: 'For Enterprises',
        description: 'Scalable compute infrastructure',
        items: [
          { label: 'AI & ML Teams', href: '/solutions#enterprise-ai', description: 'Training & inference at scale', icon: Zap },
          { label: 'Media & Entertainment', href: '/solutions#media', description: 'Rendering & post-production', icon: Settings },
          { label: 'Research Institutions', href: '/solutions#research', description: 'Scientific computing', icon: BookOpen },
          { label: 'Custom Deployments', href: '/solutions#custom', description: 'Tailored solutions', icon: Building2 },
        ],
      },
      {
        title: 'For Providers',
        description: 'Monetize compute resources',
        items: [
          { label: 'Data Centers', href: '/solutions#datacenters', description: 'Enterprise-grade hosting', icon: Building2 },
          { label: 'GPU Providers', href: '/solutions#gpu-providers', description: 'Hardware monetization', icon: Server },
          { label: 'Node Operators', href: '/solutions#operators', description: 'Network participation', icon: Network },
        ],
      },
      {
        title: 'Developer Tools',
        description: 'Build on BitSage',
        items: [
          { label: 'API & SDKs', href: '/docs#api', description: 'Integration tools', icon: Code },
          { label: 'CLI Tools', href: '/docs#cli', description: 'Command line interface', icon: Settings },
        ],
      },
    ],
  },
  {
    label: 'Network',
    dropdown: [
      { label: 'Network Status', href: '/network#status', icon: Network },
      { label: 'Node Dashboard', href: '/network#nodes', icon: Server },
      { label: 'Performance Metrics', href: '/network#metrics', icon: Zap },
      { label: 'Governance', href: '/network#governance', icon: Users },
    ],
    megaMenu: false,
  },
  {
    label: 'Company',
    dropdown: [
      { label: 'About BitSage', href: '/company#about', icon: Building2 },
      { label: 'Contact Sales', href: '/company#contact', icon: Phone },
      { label: 'Partnerships', href: '/company#partners', icon: Users },
      { label: 'Careers', href: '/company#careers', icon: Building2 },
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
                          <div className="w-[900px] max-w-[90vw] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xl"
                        >
                          <div className="grid grid-cols-3 gap-0">
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
                                  {section.items.map((subItem) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block p-3 rounded-md hover:bg-slate-50 transition-colors group"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="mt-0.5 text-slate-600 group-hover:text-slate-900 transition-colors">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-0.5">
                                            {subItem.label}
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
                            {item.dropdown?.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-slate-50 transition-colors group"
                              >
                                <subItem.icon className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
                                <span className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">{subItem.label}</span>
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
                                  {section.items.map((subItem) => (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
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
                                        <div className="text-sm font-medium text-slate-300 mb-0.5">
                                          {subItem.label}
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
