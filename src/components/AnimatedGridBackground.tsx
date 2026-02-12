'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 32;
    const glowSpeed = 0.6;
    
    // Traveling light pulses along grid lines
    const pulses: Array<{
      x: number;
      y: number;
      direction: 'horizontal' | 'vertical';
      progress: number;
      intensity: number;
      startTime: number;
    }> = [];

    // Create initial pulses
    const createPulse = () => {
      const isHorizontal = Math.random() > 0.5;
      
      if (isHorizontal) {
        // Horizontal pulse
        const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        pulses.push({
          x: 0,
          y: y,
          direction: 'horizontal',
          progress: 0,
          intensity: 0.6 + Math.random() * 0.4,
          startTime: Date.now()
        });
      } else {
        // Vertical pulse
        const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        pulses.push({
          x: x,
          y: 0,
          direction: 'vertical',
          progress: 0,
          intensity: 0.6 + Math.random() * 0.4,
          startTime: Date.now()
        });
      }
    };

    // Create initial pulses immediately
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createPulse(), i * 500);
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid (white lines for dark backgrounds)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw traveling pulses
      pulses.forEach((pulse, index) => {
        const currentTime = Date.now();
        const elapsed = currentTime - pulse.startTime;
        
        if (pulse.direction === 'horizontal') {
          pulse.progress = (elapsed * glowSpeed) / 1000;
          const currentX = pulse.progress * canvas.width;
          
          if (currentX > canvas.width) {
            // Remove completed pulse
            pulses.splice(index, 1);
            return;
          }
          
          // Draw glowing line segment
          const glowLength = 80;
          const startX = Math.max(0, currentX - glowLength);
          const endX = Math.min(canvas.width, currentX);
          
          // Create gradient along the line
          const gradient = ctx.createLinearGradient(startX, pulse.y, endX, pulse.y);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.7, `rgba(16, 185, 129, ${pulse.intensity * 0.8})`); // emerald
          gradient.addColorStop(1, `rgba(16, 185, 129, ${pulse.intensity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 4;
          ctx.shadowColor = 'rgba(16, 185, 129, 1.0)';
          ctx.shadowBlur = 25;

          ctx.beginPath();
          ctx.moveTo(startX, pulse.y);
          ctx.lineTo(endX, pulse.y);
          ctx.stroke();

          // Reset shadow
          ctx.shadowBlur = 0;
          
        } else {
          // Vertical pulse
          pulse.progress = (elapsed * glowSpeed) / 1000;
          const currentY = pulse.progress * canvas.height;
          
          if (currentY > canvas.height) {
            // Remove completed pulse
            pulses.splice(index, 1);
            return;
          }
          
          // Draw glowing line segment
          const glowLength = 80;
          const startY = Math.max(0, currentY - glowLength);
          const endY = Math.min(canvas.height, currentY);
          
          // Create gradient along the line
          const gradient = ctx.createLinearGradient(pulse.x, startY, pulse.x, endY);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.7, `rgba(16, 185, 129, ${pulse.intensity * 0.8})`); // emerald
          gradient.addColorStop(1, `rgba(16, 185, 129, ${pulse.intensity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 4;
          ctx.shadowColor = 'rgba(16, 185, 129, 1.0)';
          ctx.shadowBlur = 25;

          ctx.beginPath();
          ctx.moveTo(pulse.x, startY);
          ctx.lineTo(pulse.x, endY);
          ctx.stroke();

          // Reset shadow
          ctx.shadowBlur = 0;
        }
      });

      // More frequent pulse creation
      if (Math.random() < 0.02 && pulses.length < 5) {
        createPulse();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
