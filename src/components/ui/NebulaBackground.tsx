'use client';

import { useEffect, useRef } from 'react';

interface NebulaBackgroundProps {
  cloudCount?: number;
  colors?: string[];
  className?: string;
}

export function NebulaBackground({
  cloudCount = 8,
  colors = ['rgba(100, 150, 255, 0.4)', 'rgba(150, 100, 255, 0.4)', 'rgba(200, 100, 255, 0.3)'],
  className = ''
}: NebulaBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = container;
      const x = (clientX / offsetWidth) * 100;
      const y = (clientY / offsetHeight) * 100;

      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden ${className}`}
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 100, 255, 0.15) 0%, transparent 50%)',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {Array.from({ length: cloudCount }).map((_, i) => {
        const size = Math.random() * 400 + 300;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const midX = (initialX + Math.random() * 30 - 15) % 100;
        const midY = (initialY + Math.random() * 30 - 15) % 100;
        const rotationDuration = Math.random() * 40 + 40;
        const driftDuration = Math.random() * 60 + 60;
        const blur = Math.random() * 40 + 40;
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        return (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              transform: 'translate(-50%, -50%)',
              animation: `cloudDrift ${driftDuration}s infinite linear, cloudRotate ${rotationDuration}s infinite linear, cloudFade 20s infinite ease-in-out`,
              animationDelay: `0s, 0s, ${Math.random() * 5}s`,
              '--initial-x': `${initialX}%`,
              '--initial-y': `${initialY}%`,
              '--mid-x': `${midX}%`,
              '--mid-y': `${midY}%`,
            } as React.CSSProperties}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]} 30%, ${colors[(colorIndex + 2) % colors.length]} 60%, transparent 100%)`,
                filter: `blur(${blur}px)`,
              }}
            />
          </div>
        );
      })}

      <style jsx>{`
        @keyframes cloudDrift {
          0%, 100% {
            left: var(--initial-x);
            top: var(--initial-y);
          }
          50% {
            left: var(--mid-x);
            top: var(--mid-y);
          }
        }

        @keyframes cloudRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes cloudFade {
          0%, 100% {
            opacity: 0;
          }
          25%, 75% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

// Preset configurations for different themes
export const NebulaPresets = {
  cosmic: {
    colors: ['rgba(100, 150, 255, 0.4)', 'rgba(150, 100, 255, 0.4)', 'rgba(200, 100, 255, 0.3)'],
    cloudCount: 8
  },
  fire: {
    colors: ['rgba(255, 100, 50, 0.4)', 'rgba(255, 150, 50, 0.4)', 'rgba(255, 200, 100, 0.3)'],
    cloudCount: 10
  },
  ice: {
    colors: ['rgba(0, 200, 255, 0.4)', 'rgba(0, 150, 255, 0.4)', 'rgba(100, 200, 255, 0.3)'],
    cloudCount: 6
  },
  green: {
    colors: ['rgba(0, 255, 136, 0.4)', 'rgba(0, 200, 100, 0.4)', 'rgba(100, 255, 150, 0.3)'],
    cloudCount: 8
  }
};
