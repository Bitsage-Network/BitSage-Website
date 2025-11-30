// Top Navigation Bar Component

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  Search,
  Wallet,
  Bell,
  ChevronDown,
  Clock,
  Layers,
  FileText,
  Container,
  Upload,
  ShoppingCart,
} from 'lucide-react';

interface TopBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function TopBar({ sidebarOpen, onToggleSidebar }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Mock data - will be replaced with real data
  const user: { name?: string } | null = null; // null = not logged in
  const walletBalance = 0;
  const notificationCount = 0;

  const showSearchResults = searchFocused && searchQuery.length > 0;

  return (
    <header className="sticky top-0 z-50 h-16 bg-[#1a1f2e] border-b border-gray-700/30 backdrop-blur-xl shadow-xl shadow-black/10">
      <div className="h-full px-6 flex items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <motion.button
            onClick={onToggleSidebar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <motion.div
              animate={{ rotate: sidebarOpen ? 0 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-sage-300" />
              ) : (
                <Menu className="w-5 h-5 text-sage-300" />
              )}
            </motion.div>
          </motion.button>

          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <Image
              src="/SVG/BitSage.svg"
              alt="BitSage"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-lg font-bold text-white hidden md:block">
              BitSage
            </span>
          </Link>
        </div>

        {/* Center - Global Search (Enhanced) */}
        <div className="flex-1 max-w-2xl mx-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              placeholder="Search jobs, scenes, containers..."
              className="w-full pl-10 pr-24 py-2.5 bg-sage-900/50 border border-sage-700/50 rounded-lg 
                       focus:bg-sage-900/70 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none
                       text-sm text-white placeholder:text-sage-400 transition-all shadow-sm"
            />
            {/* Keyboard Shortcut Hint */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 text-xs text-sage-400">
              <kbd className="px-1.5 py-0.5 bg-sage-800/60 border border-sage-600/40 rounded text-[10px] font-semibold">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-sage-800/60 border border-sage-600/40 rounded text-[10px] font-semibold">K</kbd>
            </div>
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {showSearchResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full mt-2 left-0 right-0 bg-[#0a0e1a] border border-sage-800/40 rounded-lg shadow-2xl overflow-hidden"
              >
                <SearchResults query={searchQuery} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Wallet Balance */}
          <Link href="/dashboard/settings">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Wallet className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-white hidden sm:block">
                {walletBalance} SAGE
              </span>
            </motion.button>
          </Link>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-sage-300" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          {/* Profile Menu or Start Trial */}
          {user ? (
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                {(user as { name?: string }).name?.[0] || 'U'}
              </div>
              <span className="text-sm font-medium text-white hidden md:block">
                {(user as { name?: string }).name || 'User'}
              </span>
              <ChevronDown className="w-4 h-4 text-sage-400 hidden md:block" />
            </button>
          ) : (
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                         text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20"
              >
                Sign In
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

// Search Results Component
function SearchResults({ query }: { query: string }) {
  // Mock search results - will be replaced with real search
  const results = {
    recent: [
      { icon: Clock, text: 'My Blender render job #123', href: '/dashboard/jobs/123' },
      { icon: Clock, text: 'Stable Diffusion XL template', href: '/dashboard/templates/sdxl' },
    ],
    jobs: [
      { icon: Layers, text: 'Render Job #456 - In Progress', href: '/dashboard/jobs/456' },
      { icon: Layers, text: 'Training Job #789 - Completed', href: '/dashboard/jobs/789' },
    ],
    actions: [
      { icon: Upload, text: 'Deploy new job', href: '/dashboard/jobs/new' },
      { icon: ShoppingCart, text: 'Browse GPU marketplace', href: '/dashboard/marketplace' },
    ],
  };

  return (
    <div className="py-2 max-h-96 overflow-y-auto">
      {/* Recent */}
      <SearchCategory title="Recent">
        {results.recent.map((item, i) => (
          <SearchResultItem key={i} {...item} />
        ))}
      </SearchCategory>

      {/* Jobs */}
      <SearchCategory title="Jobs">
        {results.jobs.map((item, i) => (
          <SearchResultItem key={i} {...item} />
        ))}
      </SearchCategory>

      {/* Quick Actions */}
      <SearchCategory title="Quick Actions">
        {results.actions.map((item, i) => (
          <SearchResultItem key={i} {...item} />
        ))}
      </SearchCategory>

      {/* No Results */}
      {query.length > 2 && (
        <div className="px-4 py-8 text-center text-sage-400 text-sm">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}

function SearchCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div className="px-4 py-2 text-xs font-semibold text-sage-500 uppercase tracking-wider">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

function SearchResultItem({ 
  icon: Icon, 
  text, 
  href 
}: { 
  icon: React.ElementType; 
  text: string; 
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="px-4 py-2.5 hover:bg-sage-800/30 cursor-pointer transition-colors flex items-center gap-3 group">
        <Icon className="w-4 h-4 text-sage-500 group-hover:text-cyan-400 transition-colors" />
        <span className="text-sm text-sage-300 group-hover:text-white transition-colors">
          {text}
        </span>
      </div>
    </Link>
  );
}

