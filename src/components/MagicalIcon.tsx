'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MagicalIconProps {
  name: string;
  alt: string;
  size?: number;
  className?: string;
  fallbackEmoji?: string;
}

/**
 * MagicalIcon - Displays custom Flux-generated icons with fallback to emojis
 * 
 * Usage:
 * <MagicalIcon name="gpu-marketplace" alt="GPU Marketplace" fallbackEmoji="💎" />
 */
export function MagicalIcon({ 
  name, 
  alt, 
  size = 24, 
  className = '',
  fallbackEmoji 
}: MagicalIconProps) {
  const [imageError, setImageError] = useState(false);
  
  // If image failed to load or doesn't exist, show emoji fallback
  if (imageError && fallbackEmoji) {
    return (
      <span 
        className={className}
        style={{ fontSize: size }}
        role="img"
        aria-label={alt}
      >
        {fallbackEmoji}
      </span>
    );
  }

  return (
    <Image
      src={`/icons/megamenu/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      onError={() => setImageError(true)}
      priority={false}
    />
  );
}

export default MagicalIcon;

