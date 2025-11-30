// Template Marketplace Types

export type TemplateCategory = 
  | 'render' 
  | 'ai-training' 
  | 'inference' 
  | 'game-dev' 
  | 'vfx' 
  | 'batch-processing';

export type TemplateEngine = 
  | 'blender' 
  | 'maya' 
  | 'houdini' 
  | 'unreal' 
  | 'pytorch' 
  | 'tensorflow' 
  | 'stable-diffusion';

export interface Template {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  engine?: TemplateEngine;
  version: string;
  icon: string;
  thumbnail: string;
  featured: boolean;
  verified: boolean;
  
  // Pricing & Performance
  estimatedCost: {
    min: number;
    max: number;
    currency: 'USD';
  };
  estimatedTime: string; // e.g., "2-5 minutes"
  requiredGpu: string[]; // e.g., ["RTX-4090", "A100"]
  
  // Usage stats
  downloads: number;
  rating: number; // 0-5
  reviews: number;
  
  // Configuration
  parameters: TemplateParameter[];
  requiredFiles: TemplateFile[];
  
  // Metadata
  author: string;
  authorAddress?: string; // Wallet address if applicable
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  
  // Documentation
  readme?: string;
  examples?: TemplateExample[];
}

export interface TemplateParameter {
  id: string;
  name: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'slider' | 'file';
  description: string;
  required: boolean;
  default?: any;
  options?: { label: string; value: any }[]; // For select type
  min?: number; // For number/slider
  max?: number;
  step?: number;
  validation?: {
    pattern?: string;
    message?: string;
  };
}

export interface TemplateFile {
  id: string;
  name: string;
  description: string;
  required: boolean;
  acceptedTypes: string[]; // MIME types, e.g., [".blend", ".fbx"]
  maxSize?: number; // In MB
  example?: string; // URL to example file
}

export interface TemplateExample {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  parameters: Record<string, any>;
  resultUrl?: string;
}

export interface TemplateFilter {
  categories?: TemplateCategory[];
  engines?: TemplateEngine[];
  minRating?: number;
  maxCost?: number;
  verified?: boolean;
  search?: string;
  sortBy?: 'popular' | 'newest' | 'rating' | 'cost';
}

