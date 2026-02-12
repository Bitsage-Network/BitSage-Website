// Dashboard Sidebar Component

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Home,
  Sparkles,
  Layers,
  Upload,
  Settings,
  Cpu,
  HelpCircle,
  ExternalLink,
  Video,
  Brain,
  Zap,
  Database,
  Library,
  GitBranch,
  ShoppingCart,
  Server,
  Wallet,
  Activity,
} from 'lucide-react';
import { DeployModal } from '@/components/webapp/modals/DeployModal';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  children?: NavItem[];
}

// Main Navigation
const mainNavItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
];

// Platform - Assets & Work
const platformItems: NavItem[] = [
  {
    label: 'Artifacts',
    href: '/dashboard/artifacts',
    icon: Layers,
  },
  {
    label: 'Tasks',
    href: '/dashboard/tasks',
    icon: Database,
  },
  {
    label: 'GPU Marketplace',
    href: '/dashboard/marketplace',
    icon: ShoppingCart,
    badge: 'Beta',
  },
  {
    label: 'Templates',
    href: '/dashboard/templates',
    icon: Library,
  },
];

// Quick Start - Task Types
const quickStartItems: NavItem[] = [
  {
    label: 'Rendering',
    href: '/dashboard/upload',
    icon: Video,
  },
  {
    label: 'AI Inference',
    href: '/dashboard/inference',
    icon: Brain,
  },
  {
    label: 'Model Training',
    href: '/dashboard/training',
    icon: Zap,
  },
  {
    label: 'Batch Compute',
    href: '/dashboard/batch',
    icon: Cpu,
  },
];

// Advanced
const advancedItems: NavItem[] = [
  {
    label: 'Custom Container',
    href: '/dashboard/container',
    icon: GitBranch,
  },
  {
    label: 'Workflows',
    href: '/dashboard/workflows',
    icon: GitBranch,
    badge: 'API',
  },
];

// Validator - For GPU providers
const validatorItems: NavItem[] = [
  {
    label: 'Validator Dashboard',
    href: '/dashboard/validator',
    icon: Server,
  },
  {
    label: 'My GPUs',
    href: '/dashboard/validator/gpus',
    icon: Cpu,
  },
  {
    label: 'Earnings',
    href: '/dashboard/validator/earnings',
    icon: Wallet,
  },
  {
    label: 'Rental Activity',
    href: '/dashboard/validator/rentals',
    icon: Activity,
  },
];

// Account
const accountItems: NavItem[] = [
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

// Resources & Community
const resourceItems: NavItem[] = [
  {
    label: 'Documentation',
    href: '/docs',
    icon: HelpCircle,
  },
  {
    label: 'API Reference',
    href: '/docs/api',
    icon: ExternalLink,
  },
];

// Bottom utility links
const bottomItems: NavItem[] = [
  {
    label: 'Documentation',
    href: '/docs',
    icon: HelpCircle,
  },
];

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const [activeQuickStartItem, setActiveQuickStartItem] = useState<string | null>(null);
  const isActive = (href: string, label?: string) => {
    // For Quick Start items that share the same href, use the stored active item
    if (label && pathname === '/dashboard/upload') {
      return activeQuickStartItem === label;
    }
    return pathname === href;
  };
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  return (
    <>
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 260 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="h-full bg-[#1a1f2e] border-r border-gray-700/30 flex flex-col overflow-hidden"
      >
        {/* Primary CTA */}
        <div className="p-4 border-b border-gray-700/20">
          <motion.button
            onClick={() => setIsDeployModalOpen(true)}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.35), 0 0 0 1px rgba(239, 68, 68, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full px-4 py-3.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-red-500/25 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <Upload className="w-4.5 h-4.5 relative z-10" />
            <span className="relative z-10">Deploy</span>
          </motion.button>
        </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-3">
        <nav className="px-3 space-y-6">
          {/* Dashboard */}
          <div>
            {mainNavItems.map((item) => (
              <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
            ))}
          </div>

          {/* Platform Section */}
          <div>
            <div className="px-3 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Platform
              </span>
            </div>
            <div className="space-y-1">
              {platformItems.map((item) => (
                <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
              ))}
            </div>
          </div>

          {/* Quick Start - Path A (Template-Driven) */}
          <div>
            <div className="px-3 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Quick Start
              </span>
            </div>
            <div className="space-y-1">
              {quickStartItems.map((item) => (
                <NavLink 
                  key={item.label} 
                  item={item} 
                  isActive={isActive(item.href, item.label)}
                  onClick={() => setActiveQuickStartItem(item.label)}
                />
              ))}
            </div>
          </div>

          {/* Advanced - Path B (Container/Pro) */}
          <div>
            <div className="px-3 mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Advanced
              </span>
            </div>
            <div className="space-y-1">
              {advancedItems.map((item) => (
                <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
              ))}
            </div>
          </div>

          {/* Validator - GPU Providers */}
          <div>
            <div className="px-3 mb-3 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Validator
              </span>
            </div>
            <div className="space-y-1">
              {validatorItems.map((item) => (
                <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="px-3 mb-3 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Resources
              </span>
            </div>
            <div className="space-y-1">
              {resourceItems.map((item) => (
                <NavLink key={item.href} item={item} isActive={isActive(item.href)} showExternal={item.icon === ExternalLink} />
              ))}
            </div>
          </div>

          {/* Account */}
          <div className="space-y-1">
            {accountItems.map((item) => (
              <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom Section - Ask Sage & Social Links */}
      <div className="border-t border-gray-700/20">
        {/* Ask Sage Button */}
        <div className="px-4 py-4">
          {/* Ask Sage Button - Cyan/Blue Theme with Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-cyan-200 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2.5 group"
          >
            <div className="relative w-[22px] h-[22px]">
              <Image
                src="/SVG/BitSage.svg"
                alt="Sage"
                width={22}
                height={22}
                className="w-[22px] h-[22px] group-hover:scale-110 transition-transform brightness-0 invert opacity-80"
                style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(51%) saturate(489%) hue-rotate(143deg) brightness(95%) contrast(91%)' }}
              />
            </div>
            Ask Sage
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="px-4 py-3 border-t border-gray-700/20">
          <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">
            Community
          </div>
          <div className="flex items-center justify-around">
            {/* Discord */}
            <Link href="https://discord.gg/QAXDpa7F5K" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </motion.div>
            </Link>

            {/* Twitter/X */}
            <Link href="https://x.com/bitsagenetwork" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.div>
            </Link>

            {/* Telegram */}
            <Link href="https://t.me/bitsagenetwork" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </motion.div>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/Bitsage-Network" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-4 py-3 border-t border-gray-700/20">
          <p className="text-xs text-gray-500 text-center">
            © <Link href="https://bitsagelabs.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors font-medium">BitSage Labs Inc.</Link> - 2025
          </p>
        </div>
      </div>
      </motion.aside>

      {/* Deploy Modal */}
      <DeployModal 
        isOpen={isDeployModalOpen} 
        onClose={() => setIsDeployModalOpen(false)} 
      />
    </>
  );
}

// Nav Link Component - Beautiful Enhanced Style
function NavLink({ 
  item, 
  isActive,
  showExternal = false,
  onClick
}: {
  item: NavItem;
  isActive: boolean;
  showExternal?: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link href={item.href} onClick={onClick}>
      <motion.div
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group cursor-pointer
          ${isActive
            ? 'bg-cyan-500/10 text-white border border-cyan-500/30'
            : 'text-gray-400 hover:bg-gray-800/30 hover:text-cyan-400 border border-transparent'
          }
        `}
      >
        {/* Active indicator line */}
        {isActive && (
          <motion.div 
            layoutId="activeNav"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full"
          />
        )}
        
        <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${
          isActive
            ? 'text-cyan-400'
            : 'text-gray-500 group-hover:text-cyan-400'
        }`} />
        
        <span className={`text-[13px] flex-1 truncate font-medium transition-colors ${
          isActive ? 'font-semibold' : ''
        }`}>
          {item.label}
        </span>
        
                {item.badge && (
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${
                    item.badge === 'Beta'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {item.badge}
                  </span>
                )}

        {showExternal && (
          <ExternalLink className="w-3 h-3 text-sage-600 group-hover:text-cyan-400 transition-colors" />
        )}
      </motion.div>
    </Link>
  );
}

