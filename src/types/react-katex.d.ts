declare module 'react-katex' {
  import React from 'react';

  export interface MathComponentProps {
    math: string;
    renderError?: (error: Error) => React.ReactNode;
    errorColor?: string;
    className?: string;
  }

  export const InlineMath: React.ComponentType<MathComponentProps>;
  export const BlockMath: React.ComponentType<MathComponentProps>;
}
