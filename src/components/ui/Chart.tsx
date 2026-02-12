'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface DataPoint {
  label: string;
  value: number;
}

interface SimpleBarChartProps {
  data: DataPoint[];
  height?: number;
  barColor?: string;
  className?: string;
}

export function SimpleBarChart({
  data,
  height = 120,
  barColor = 'from-purple-500 to-cyan-500',
  className
}: SimpleBarChartProps) {
  const maxValue = useMemo(() => Math.max(...data.map(d => d.value), 1), [data]);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-end justify-between gap-1" style={{ height }}>
        {data.map((point, i) => {
          const barHeight = (point.value / maxValue) * 100;
          return (
            <div key={i} className="flex-1 flex flex-col items-center group">
              <div className="relative w-full flex justify-center">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-700 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {point.value.toLocaleString()} SAGE
                </div>
                {/* Bar */}
                <div
                  className={`w-full max-w-8 bg-gradient-to-t ${barColor} rounded-t-sm transition-all duration-300 hover:opacity-80`}
                  style={{ height: `${barHeight}%`, minHeight: point.value > 0 ? 4 : 0 }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Labels */}
      <div className="flex justify-between gap-1 mt-2">
        {data.map((point, i) => (
          <div key={i} className="flex-1 text-center">
            <span className="text-[10px] text-gray-500">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SimpleLineChartProps {
  data: DataPoint[];
  height?: number;
  lineColor?: string;
  fillColor?: string;
  className?: string;
}

export function SimpleLineChart({
  data,
  height = 120,
  lineColor = '#8b5cf6',
  fillColor = 'rgba(139, 92, 246, 0.1)',
  className,
}: SimpleLineChartProps) {
  const { points, areaPath, maxValue } = useMemo(() => {
    const max = Math.max(...data.map(d => d.value), 1);
    const width = 100;
    const stepX = width / (data.length - 1 || 1);

    const pts = data.map((d, i) => ({
      x: i * stepX,
      y: 100 - (d.value / max) * 100,
      value: d.value,
      label: d.label,
    }));

    // Create SVG path for line
    const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    // Create area path (closed shape for fill)
    const area = `${linePath} L ${pts[pts.length - 1]?.x || 0} 100 L 0 100 Z`;

    return { points: pts, linePath, areaPath: area, maxValue: max };
  }, [data]);

  if (data.length === 0) {
    return (
      <div className={cn('w-full flex items-center justify-center', className)} style={{ height }}>
        <p className="text-sm text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
      >
        {/* Grid lines */}
        <line x1="0" y1="25" x2="100" y2="25" stroke="#374151" strokeWidth="0.3" strokeDasharray="2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#374151" strokeWidth="0.3" strokeDasharray="2" />
        <line x1="0" y1="75" x2="100" y2="75" stroke="#374151" strokeWidth="0.3" strokeDasharray="2" />

        {/* Area fill */}
        <path d={areaPath} fill={fillColor} />

        {/* Line */}
        <path
          d={points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
          fill="none"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2"
            fill={lineColor}
            className="hover:r-3 transition-all"
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-2">
        {data.map((point, i) => (
          <div key={i} className="text-center" style={{ width: `${100 / data.length}%` }}>
            <span className="text-[10px] text-gray-500">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sparkline - minimal line chart for inline use
interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function Sparkline({
  data,
  width = 60,
  height = 20,
  color = '#10b981',
  className,
}: SparklineProps) {
  const path = useMemo(() => {
    if (data.length === 0) return '';

    const max = Math.max(...data, 1);
    const min = Math.min(...data, 0);
    const range = max - min || 1;
    const stepX = 100 / (data.length - 1 || 1);

    return data
      .map((v, i) => {
        const x = i * stepX;
        const y = 100 - ((v - min) / range) * 100;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  }, [data]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      style={{ width, height }}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SimpleBarChart;
