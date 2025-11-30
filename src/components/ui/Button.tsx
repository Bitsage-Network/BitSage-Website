'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "relative font-semibold rounded-lg transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-sage-600 to-sage-cyan-600 text-white hover:shadow-lg hover:shadow-sage-500/50",
    secondary: "glass-strong text-sage-300 hover:bg-sage-800/50 border border-sage-600",
    ghost: "text-sage-300 hover:bg-sage-900/50",
    gold: "bg-gradient-to-r from-sage-gold-500 to-sage-gold-400 text-sage-950 hover:shadow-lg hover:shadow-sage-gold-500/50",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-sage-cyan-400 to-sage-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </button>
    </motion.div>
  );
}

