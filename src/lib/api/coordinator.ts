/**
 * BitSage Coordinator API Client
 * Connects Next.js frontend to Rust coordinator backend
 */

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_COORDINATOR_URL || 'http://localhost:8080';
const API_TIMEOUT = 30000; // 30 seconds

// Job Types matching Rust backend
export type JobType = 
  | 'AIInference' 
  | 'DataPipeline' 
  | 'ComputerVision' 
  | 'NLP' 
  | 'Render3D' 
  | 'VideoProcessing' 
  | 'ConfidentialVM'
  | 'AudioProcessing'
  | 'TimeSeriesAnalysis'
  | 'MultimodalAI'
  | 'ReinforcementLearning';

export type JobStatus = 
  | 'Queued' 
  | 'Processing' 
  | 'Completed' 
  | 'Failed' 
  | 'Cancelled';

export type TeeType = 'None' | 'CpuOnly' | 'Full';

// GPU Types
export type GpuModel = 
  | 'RTX_4090' 
  | 'RTX_3090' 
  | 'A100' 
  | 'H100' 
  | 'B200'
  | 'V100' 
  | 'L40'
  | 'T4';

// Job Submission Request
export interface JobSubmissionRequest {
  job_type: JobType;
  model_type?: string;
  input_data_url?: string;
  sql_query?: string;
  image_url?: string;
  video_url?: string;
  audio_url?: string;
  text?: string;
  container_image?: string;
  max_reward?: string;
  deadline_seconds?: number;
  tee_type?: TeeType;
  preferred_gpu?: GpuModel;
  gpu_count?: number;
  metadata?: Record<string, any>;
}

// Job Response
export interface Job {
  id: string;
  status: JobStatus;
  job_type: JobType;
  created_at: number;
  started_at?: number;
  completed_at?: number;
  worker_id?: string;
  result?: string;
  error?: string;
  tee_type: TeeType;
  gpu_model?: GpuModel;
}

// Job Stats
export interface JobStats {
  total_jobs: number;
  active_jobs: number;
  completed_jobs: number;
  failed_jobs: number;
  cancelled_jobs: number;
  average_completion_time_secs: number;
  jobs_per_minute: number;
  success_rate: number;
}

// Worker Info
export interface WorkerInfo {
  id: string;
  status: 'Active' | 'Inactive' | 'Overloaded';
  gpus: GpuInfo[];
  tee_cpu: boolean;
  current_jobs: number;
  max_jobs: number;
  last_heartbeat: number;
}

export interface GpuInfo {
  model: GpuModel;
  memory_gb: number;
  tee_support: boolean;
}

// Coordinator Health
export interface CoordinatorHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  uptime_secs: number;
  active_workers: number;
  total_jobs: number;
}

/**
 * API Client for BitSage Coordinator
 */
class CoordinatorAPI {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  /**
   * Make authenticated API request
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API Error (${response.status}): ${error}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  // ==================== Health & Stats ====================

  /**
   * Get coordinator health status
   */
  async getHealth(): Promise<CoordinatorHealth> {
    return this.request<CoordinatorHealth>('/api/health');
  }

  /**
   * Get job statistics
   */
  async getStats(): Promise<JobStats> {
    return this.request<JobStats>('/api/jobs/stats');
  }

  // ==================== Job Management ====================

  /**
   * Submit a new job
   */
  async submitJob(request: JobSubmissionRequest): Promise<{ job_id: string }> {
    return this.request<{ job_id: string }>('/api/jobs/submit', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  /**
   * Get job status
   */
  async getJobStatus(jobId: string): Promise<Job> {
    return this.request<Job>(`/api/jobs/${jobId}/status`);
  }

  /**
   * Get job result
   */
  async getJobResult(jobId: string): Promise<{ result: string }> {
    return this.request<{ result: string }>(`/api/jobs/${jobId}/result`);
  }

  /**
   * List all jobs with optional filters
   */
  async listJobs(params?: {
    status?: JobStatus;
    limit?: number;
    offset?: number;
  }): Promise<{ jobs: Job[] }> {
    const query = new URLSearchParams();
    if (params?.status) query.append('status', params.status);
    if (params?.limit) query.append('limit', params.limit.toString());
    if (params?.offset) query.append('offset', params.offset.toString());

    const queryString = query.toString();
    return this.request<{ jobs: Job[] }>(
      `/api/jobs${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * Cancel a job
   */
  async cancelJob(jobId: string): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/api/jobs/${jobId}/cancel`, {
      method: 'POST',
    });
  }

  // ==================== Worker Management ====================

  /**
   * List active workers
   */
  async listWorkers(): Promise<{ workers: WorkerInfo[] }> {
    return this.request<{ workers: WorkerInfo[] }>('/api/workers');
  }

  /**
   * Get worker details
   */
  async getWorker(workerId: string): Promise<WorkerInfo> {
    return this.request<WorkerInfo>(`/api/workers/${workerId}`);
  }

  // ==================== Real-time Streaming ====================

  /**
   * Stream job status updates via Server-Sent Events
   */
  streamJobStatus(jobId: string, onUpdate: (job: Job) => void, onError?: (error: Error) => void): () => void {
    const eventSource = new EventSource(`${this.baseURL}/api/jobs/${jobId}/stream`);

    eventSource.onmessage = (event) => {
      try {
        const job = JSON.parse(event.data) as Job;
        onUpdate(job);
      } catch (error) {
        console.error('Failed to parse job update:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      if (onError) {
        onError(new Error('Stream connection error'));
      }
      eventSource.close();
    };

    // Return cleanup function
    return () => eventSource.close();
  }
}

// Export singleton instance
export const coordinatorAPI = new CoordinatorAPI();

// Export class for custom instances
export default CoordinatorAPI;

