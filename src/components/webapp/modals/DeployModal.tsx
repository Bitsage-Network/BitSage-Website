// Deploy Modal Component

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  X,
  Library,
  Upload,
  Box,
  Github,
  ArrowRight,
} from 'lucide-react';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DeployOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  href: string;
  color: string;
  badge?: string;
}

const deployOptions: DeployOption[] = [
  {
    id: 'upload',
    title: 'Upload Files',
    description: 'Upload scenes, models, datasets, or scripts to your Artifacts library',
    icon: Upload,
    href: '/dashboard/upload',
    color: 'cyan',
  },
  {
    id: 'template',
    title: 'Browse Templates',
    description: 'Start from pre-configured templates for common workflows',
    icon: Library,
    href: '/dashboard/templates',
    color: 'purple',
  },
  {
    id: 'artifacts',
    title: 'Use Existing Artifact',
    description: 'Create a task from files already in your library',
    icon: Box,
    href: '/dashboard/artifacts',
    color: 'blue',
  },
  {
    id: 'container',
    title: 'Custom Container',
    description: 'Deploy your own Docker image with custom configurations',
    icon: Github,
    href: '/dashboard/container',
    color: 'green',
  },
];

export function DeployModal({ isOpen, onClose }: DeployModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-[#1a1f2e] border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-500/10 w-full max-w-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Deploy New Job</h2>
                    <p className="text-gray-400 text-sm mt-1">Choose how you want to deploy</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deployOptions.map((option) => (
                    <DeployOptionCard
                      key={option.id}
                      option={option}
                      onClose={onClose}
                    />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-800/20 border-t border-gray-700/30">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Need help? Check our documentation</span>
                  <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    View Docs →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Deploy Option Card
function DeployOptionCard({
  option,
  onClose,
}: {
  option: typeof deployOptions[0];
  onClose: () => void;
}) {
  const Icon = option.icon;

  return (
    <Link href={option.href} onClick={onClose}>
      <motion.div
        whileHover={{ 
          y: -4, 
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
          borderColor: 'rgba(6, 182, 212, 0.5)'
        }}
        whileTap={{ scale: 0.98 }}
        className="relative bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 cursor-pointer group transition-all h-full"
      >
        {/* Badge */}
        {option.badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-bold rounded-md">
              {option.badge}
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="mb-4">
          <div className="inline-flex p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
          {option.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {option.description}
        </p>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />
        </div>
      </motion.div>
    </Link>
  );
}

