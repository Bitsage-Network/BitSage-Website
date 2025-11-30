// Job & Render Types

export type JobType = 'render' | 'train' | 'inference' | 'batch';
export type JobStatus = 'pending' | 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
export type GpuTier = 'RTX-4090' | 'A100' | 'H100' | 'V100';

export interface Job {
  id: string;
  type: JobType;
  name: string;
  status: JobStatus;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  progress: number; // 0-100
  gpuTier: GpuTier;
  gpuCount: number;
  estimatedCost: number;
  actualCost?: number;
  files: JobFile[];
  config: JobConfig;
  logs: JobLog[];
  results?: JobResult[];
}

export interface JobFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
  url?: string;
}

export interface JobConfig {
  // Render-specific
  engine?: 'blender' | 'maya' | 'houdini' | 'unreal';
  frames?: string; // e.g. "1-100" or "1,5,10-20"
  resolution?: [number, number];
  samples?: number;
  
  // AI Training-specific
  model?: string;
  dataset?: string;
  epochs?: number;
  batchSize?: number;
  learningRate?: number;
  
  // Inference-specific
  prompt?: string;
  steps?: number;
  guidance?: number;
  
  // Common
  timeout?: number;
  budget?: number;
  priority?: 'low' | 'normal' | 'high';
}

export interface JobLog {
  timestamp: Date;
  level: 'info' | 'warning' | 'error';
  message: string;
}

export interface JobResult {
  id: string;
  type: 'image' | 'video' | 'model' | 'data';
  name: string;
  url: string;
  size: number;
  thumbnail?: string;
}

export interface JobStats {
  total: number;
  running: number;
  completed: number;
  failed: number;
  totalCost: number;
  totalGpuHours: number;
}

