'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface LiveEarningsDisplayProps {
  value: number;
  label?: string;
  ratePerHour?: number;
  isLive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LiveEarningsDisplay({
  value,
  label,
  ratePerHour = 0,
  isLive = false,
  size = 'md',
  className,
}: LiveEarningsDisplayProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValueRef = useRef(value);
  const animationFrameRef = useRef<number | null>(null);

  // Animate value changes smoothly
  useEffect(() => {
    const startValue = previousValueRef.current;
    const endValue = value;
    const duration = 500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        previousValueRef.current = endValue;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value]);

  // Format the value with proper decimal places
  const formattedValue = useMemo(() => {
    return displayValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [displayValue]);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={cn('inline-flex flex-col', className)}>
      {label && (
        <span className="text-xs sm:text-sm text-gray-400 mb-1">{label}</span>
      )}
      <div className="flex items-baseline gap-2">
        <span className={cn('font-bold text-white tabular-nums', sizeClasses[size])}>
          {formattedValue}
        </span>
        <span className="text-sm text-gray-400">SAGE</span>
        {isLive && (
          <span className="flex items-center gap-1 text-xs text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            LIVE
          </span>
        )}
      </div>
      {isLive && ratePerHour > 0 && (
        <span className="text-xs text-gray-500 mt-0.5">
          +{ratePerHour} SAGE/hr
        </span>
      )}
    </div>
  );
}

// Compact inline version for stats cards
interface LiveValueProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function LiveValue({ value, suffix = '', className }: LiveValueProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValueRef = useRef(value);

  useEffect(() => {
    const startValue = previousValueRef.current;
    const endValue = value;
    const duration = 300;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousValueRef.current = endValue;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className={cn('tabular-nums', className)}>
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}
      {suffix && ` ${suffix}`}
    </span>
  );
}

// Real-time earnings ticker that increments based on rate
interface EarningsTickerProps {
  initialValue: number;
  ratePerHour: number;
  isActive?: boolean;
  className?: string;
}

export function EarningsTicker({
  initialValue,
  ratePerHour,
  isActive = true,
  className,
}: EarningsTickerProps) {
  const [value, setValue] = useState(initialValue);
  const startTimeRef = useRef(Date.now());
  const initialValueRef = useRef(initialValue);

  useEffect(() => {
    initialValueRef.current = initialValue;
    startTimeRef.current = Date.now();
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (!isActive || ratePerHour <= 0) return;

    const ratePerMs = ratePerHour / 3600000; // Convert to per millisecond

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newValue = initialValueRef.current + elapsed * ratePerMs;
      setValue(newValue);
    };

    // Update every 100ms for smooth animation
    const interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  }, [ratePerHour, isActive]);

  return (
    <span className={cn('tabular-nums font-mono', className)}>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      })}
    </span>
  );
}

export default LiveEarningsDisplay;
