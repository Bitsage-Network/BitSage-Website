'use client';

import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathFormulaProps {
  formula: string;
  inline?: boolean;
  className?: string;
}

const MathFormula: React.FC<MathFormulaProps> = ({ 
  formula, 
  inline = false, 
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`${className} ${inline ? 'inline' : 'block'}`}>
        <div className="animate-pulse bg-gray-700 h-4 w-20 rounded"></div>
      </div>
    );
  }

  try {
    if (inline) {
      return (
        <span className={className}>
          <InlineMath math={formula} />
        </span>
      );
    } else {
      return (
        <div className={`text-center ${className}`}>
          <BlockMath math={formula} />
        </div>
      );
    }
  } catch (error) {
    // Fallback for invalid LaTeX
    return (
      <span className={`font-mono text-cosmic-cyan ${className}`}>
        {formula}
      </span>
    );
  }
};

export default MathFormula; 