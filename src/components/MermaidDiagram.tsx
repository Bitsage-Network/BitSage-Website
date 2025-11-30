'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [diagram, setDiagram] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const renderDiagram = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // Dynamic import to avoid SSR issues
        const mermaid = (await import('mermaid')).default;
        
        // Initialize mermaid only once
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#00d4ff',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#00d4ff',
            lineColor: '#6b7280',
            secondaryColor: '#1f2937',
            tertiaryColor: '#374151',
            background: '#111827',
            mainBkg: '#1f2937',
            secondBkg: '#374151',
            tertiaryBkg: '#4b5563',
            darkMode: true,
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis',
          },
          securityLevel: 'loose',
        });

        // Generate unique ID for the diagram
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Validate the chart syntax first
        const isValid = await mermaid.parse(chart);
        
        if (!isValid) {
          throw new Error('Invalid Mermaid syntax');
        }

        // Render the diagram to SVG string
        const { svg } = await mermaid.render(id, chart);
        
        // Only update state if component is still mounted
        if (mounted) {
          setDiagram(svg);
          setIsLoading(false);
        }
        
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
          setDiagram('');
          setIsLoading(false);
        }
      }
    };

    renderDiagram();

    // Cleanup function
    return () => {
      mounted = false;
    };
  }, [chart]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-48 text-gray-400 ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cosmic-cyan"></div>
        <span className="ml-2">Loading diagram...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-gray-900 rounded-lg p-4 ${className}`}>
        <div className="text-red-400 text-sm mb-2">Diagram Error: {error}</div>
        <pre className="text-cosmic-cyan text-xs overflow-x-auto bg-black/50 p-3 rounded">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`mermaid-container overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: diagram }}
      style={{ minHeight: '200px' }}
    />
  );
};

export default MermaidDiagram; 