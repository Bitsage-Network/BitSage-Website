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

// ==================== Rental & Billing Types ====================

export type GpuBackend = 'Cuda' | 'Metal' | 'Vulkan' | 'OpenCL';

export type GpuAvailability =
  | 'Available'
  | { PartiallyAvailable: { mig_instances_free: number; mig_instances_total: number } }
  | { InUse: { available_in_minutes?: number } }
  | 'Reserved'
  | 'Offline';

export interface MarketplaceGpu {
  id: string;
  validator_wallet: string;
  gpu_model: string;
  vram_gb: number;
  backend: GpuBackend;
  mig_capable: boolean;
  availability: GpuAvailability;
  rate_sage_per_hour: number;
  uptime_percent: number;
  total_rentals: number;
  rating: number;
  region?: string;
  supported_templates: string[];
}

export interface RentalTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  docker_image: string;
  min_vram_gb: number;
  base_rate_sage_per_hour: number;
  ssh_enabled: boolean;
  jupyter_enabled: boolean;
  extra_ports: number[];
  env_vars: [string, string][];
}

export interface RentalSession {
  id: string;
  tenant_wallet: string;
  validator_wallet: string;
  template_id: string;
  container_id?: string;
  gpu_id?: string;
  status: string;
  started_at: string;
  expires_at: string;
  rate_sage_per_hour: number;
  total_spent: number;
  ssh_access?: {
    host: string;
    port: number;
    username: string;
    method: string;
    key_fingerprint: string;
    tailscale_name?: string;
  };
  jupyter_access?: {
    url: string;
    token: string;
    expires_at: string;
  };
  api_endpoint?: string;
  error?: string;
}

export interface EscrowBalance {
  wallet: string;
  total_deposited: number;
  total_spent: number;
  available: number;
  reserved: number;
}

export interface ValidatorEarnings {
  wallet: string;
  total_earned: number;
  total_withdrawn: number;
  available: number;
  active_rentals: number;
}

export interface BillingRecord {
  id: string;
  rental_id: string;
  tenant_wallet: string;
  validator_wallet: string;
  amount: number;
  period_start: string;
  period_end: string;
  tx_hash?: string;
  created_at: string;
}

export interface MarketplaceStats {
  total_gpus: number;
  available_gpus: number;
  total_vram_gb: number;
  min_rate_sage_per_hour: number;
  max_rate_sage_per_hour: number;
  templates_count: number;
}

export interface EarningsHistoryPoint {
  date: string;
  amount: number;
  rental_count: number;
}

export interface BillingTransaction {
  id: string;
  type: 'earning' | 'withdrawal' | 'deposit';
  amount: number;
  rental_id?: string;
  tx_hash?: string;
  status: 'pending' | 'confirmed' | 'failed';
  created_at: string;
  description?: string;
}

export interface StartRentalRequest {
  tenant_wallet: string;
  template_id: string;
  gpu_id: string;
  duration_hours: number;
  ssh_public_key?: string;
}

export interface StartRentalResponse {
  rental: RentalSession;
  required_escrow: number;
  escrow_contract: string;
}

export interface RegisterGpuRequest {
  id: string;
  validator_wallet: string;
  gpu_model: string;
  vram_gb: number;
  backend: GpuBackend;
  mig_capable: boolean;
  rate_sage_per_hour: number;
  region?: string;
  supported_templates: string[];
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

  /**
   * Stream validator earnings updates via Server-Sent Events
   * Receives real-time updates when:
   * - Jobs complete and earn rewards
   * - Rental billing occurs
   * - Withdrawals are processed
   */
  streamEarnings(
    wallet: string,
    onUpdate: (event: {
      type: 'earning' | 'withdrawal' | 'job_completed' | 'rental_billing';
      amount: number;
      rental_id?: string;
      job_id?: string;
      timestamp: string;
    }) => void,
    onError?: (error: Error) => void
  ): () => void {
    const eventSource = new EventSource(
      `${this.baseURL}/api/v1/billing/earnings/stream?wallet=${wallet}`
    );

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onUpdate(data);
      } catch (error) {
        console.error('Failed to parse earnings event:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('Earnings stream error:', error);
      if (onError) {
        onError(new Error('Earnings stream connection error'));
      }
      eventSource.close();
    };

    return () => eventSource.close();
  }

  // ==================== GPU Marketplace ====================

  /**
   * List available GPUs on the marketplace
   */
  async listMarketplaceGpus(params?: {
    available_only?: boolean;
    min_vram_gb?: number;
    max_rate?: number;
    template_id?: string;
    validator_wallet?: string; // Filter by validator wallet for server-side filtering
  }): Promise<MarketplaceGpu[]> {
    const query = new URLSearchParams();
    if (params?.available_only !== undefined) query.append('available_only', String(params.available_only));
    if (params?.min_vram_gb) query.append('min_vram_gb', params.min_vram_gb.toString());
    if (params?.max_rate) query.append('max_rate', params.max_rate.toString());
    if (params?.template_id) query.append('template_id', params.template_id);
    if (params?.validator_wallet) query.append('validator_wallet', params.validator_wallet);

    const queryString = query.toString();
    return this.request<MarketplaceGpu[]>(
      `/api/v1/rentals/gpus/available${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * Get marketplace statistics
   */
  async getMarketplaceStats(): Promise<MarketplaceStats> {
    return this.request<MarketplaceStats>('/api/v1/rentals/stats');
  }

  /**
   * Register a GPU on the marketplace (for validators)
   */
  async registerGpu(gpu: RegisterGpuRequest): Promise<MarketplaceGpu> {
    return this.request<MarketplaceGpu>('/api/v1/rentals/gpus/register', {
      method: 'POST',
      body: JSON.stringify(gpu),
    });
  }

  /**
   * Update GPU availability
   */
  async updateGpuAvailability(gpuId: string, availability: GpuAvailability): Promise<void> {
    return this.request<void>(`/api/v1/rentals/gpus/${gpuId}/availability`, {
      method: 'POST',
      body: JSON.stringify(availability),
    });
  }

  /**
   * List rental templates
   */
  async listTemplates(): Promise<RentalTemplate[]> {
    return this.request<RentalTemplate[]>('/api/v1/rentals/templates');
  }

  /**
   * Get template by ID
   */
  async getTemplate(templateId: string): Promise<RentalTemplate> {
    return this.request<RentalTemplate>(`/api/v1/rentals/templates/${templateId}`);
  }

  // ==================== Rental Sessions ====================

  /**
   * Start a new rental
   */
  async startRental(request: StartRentalRequest): Promise<StartRentalResponse> {
    return this.request<StartRentalResponse>('/api/v1/rentals', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  /**
   * Get rental by ID
   */
  async getRental(rentalId: string): Promise<RentalSession> {
    return this.request<RentalSession>(`/api/v1/rentals/${rentalId}`);
  }

  /**
   * Get rentals for a user (as tenant)
   */
  async getUserRentals(wallet: string): Promise<RentalSession[]> {
    return this.request<RentalSession[]>(`/api/v1/rentals/user?wallet=${wallet}`);
  }

  /**
   * Extend a rental
   */
  async extendRental(rentalId: string, additionalHours: number): Promise<RentalSession> {
    return this.request<RentalSession>(`/api/v1/rentals/${rentalId}/extend`, {
      method: 'POST',
      body: JSON.stringify({ additional_hours: additionalHours }),
    });
  }

  /**
   * Stop a rental
   */
  async stopRental(rentalId: string): Promise<RentalSession> {
    return this.request<RentalSession>(`/api/v1/rentals/${rentalId}/stop`, {
      method: 'POST',
    });
  }

  /**
   * Get SSH credentials for a rental
   */
  async getRentalSshCredentials(rentalId: string): Promise<{
    method: string;
    host: string;
    port: number;
    username: string;
    key_fingerprint: string;
    tailscale_name?: string;
    connection_string: string;
  }> {
    return this.request(`/api/v1/rentals/${rentalId}/ssh`);
  }

  /**
   * Get Jupyter access for a rental
   */
  async getRentalJupyterAccess(rentalId: string): Promise<{
    url: string;
    token: string;
    expires_at: string;
  }> {
    return this.request(`/api/v1/rentals/${rentalId}/jupyter`);
  }

  // ==================== Billing & Escrow ====================

  /**
   * Get escrow balance for a wallet
   */
  async getEscrowBalance(wallet: string): Promise<EscrowBalance> {
    return this.request<EscrowBalance>(`/api/v1/billing/escrow?wallet=${wallet}`);
  }

  /**
   * Deposit SAGE to escrow (returns transaction info)
   */
  async depositEscrow(wallet: string, amount: number, txHash?: string): Promise<EscrowBalance> {
    return this.request<EscrowBalance>('/api/v1/billing/escrow/deposit', {
      method: 'POST',
      body: JSON.stringify({ wallet, amount, tx_hash: txHash }),
    });
  }

  /**
   * Get billing history for a rental
   */
  async getRentalBilling(rentalId: string): Promise<BillingRecord[]> {
    return this.request<BillingRecord[]>(`/api/v1/rentals/${rentalId}/billing`);
  }

  // ==================== Validator Earnings ====================

  /**
   * Get validator earnings
   */
  async getValidatorEarnings(wallet: string): Promise<ValidatorEarnings> {
    return this.request<ValidatorEarnings>(`/api/v1/billing/earnings?wallet=${wallet}`);
  }

  /**
   * Withdraw validator earnings
   */
  async withdrawEarnings(wallet: string, amount: number): Promise<{ tx_hash: string; amount: number }> {
    return this.request<{ tx_hash: string; amount: number }>('/api/v1/billing/earnings/withdraw', {
      method: 'POST',
      body: JSON.stringify({ wallet, amount }),
    });
  }

  /**
   * Sync earnings from on-chain
   */
  async syncValidatorEarnings(wallet: string): Promise<ValidatorEarnings> {
    return this.request<ValidatorEarnings>(`/api/v1/escrow/sync/earnings?wallet=${wallet}`);
  }

  // ==================== Escrow Contract Status ====================

  /**
   * Get escrow contract status
   */
  async getEscrowStatus(): Promise<{
    on_chain_enabled: boolean;
    contract_address: string;
    has_coordinator_account: boolean;
  }> {
    return this.request('/api/v1/escrow/status');
  }

  /**
   * Get contract statistics
   */
  async getContractStats(): Promise<{
    total_deposited: number;
    total_earnings: number;
    total_rentals: number;
    is_paused: boolean;
  }> {
    return this.request('/api/v1/billing/contract/stats');
  }

  // ==================== Earnings History ====================

  /**
   * Get earnings history for charts
   */
  async getEarningsHistory(
    wallet: string,
    period: '7d' | '30d' | '90d' = '7d'
  ): Promise<EarningsHistoryPoint[]> {
    return this.request<EarningsHistoryPoint[]>(
      `/api/v1/billing/earnings/history?wallet=${wallet}&period=${period}`
    );
  }

  /**
   * Get billing transactions for a wallet
   */
  async getBillingTransactions(
    wallet: string,
    limit: number = 50
  ): Promise<BillingTransaction[]> {
    return this.request<BillingTransaction[]>(
      `/api/v1/billing/transactions?wallet=${wallet}&limit=${limit}`
    );
  }

  // ==================== Dashboard API ====================

  /**
   * Get validator status (on-chain data)
   */
  async getValidatorStatus(walletAddress: string): Promise<ValidatorStatusResponse> {
    return this.request<ValidatorStatusResponse>('/api/validator/status', {
      headers: { 'X-Wallet-Address': walletAddress },
    });
  }

  /**
   * Get validator GPU metrics
   */
  async getValidatorGpuMetrics(walletAddress: string): Promise<GpuMetricsResponse> {
    return this.request<GpuMetricsResponse>('/api/validator/gpus', {
      headers: { 'X-Wallet-Address': walletAddress },
    });
  }

  /**
   * Get validator rewards info
   */
  async getValidatorRewards(walletAddress: string): Promise<RewardsInfoResponse> {
    return this.request<RewardsInfoResponse>('/api/validator/rewards', {
      headers: { 'X-Wallet-Address': walletAddress },
    });
  }

  /**
   * Get network-wide statistics
   */
  async getNetworkStats(): Promise<NetworkStatsResponse> {
    return this.request<NetworkStatsResponse>('/api/network/stats');
  }

  /**
   * Get network workers list
   */
  async getNetworkWorkers(): Promise<NetworkWorkersResponse> {
    return this.request<NetworkWorkersResponse>('/api/network/workers');
  }

  /**
   * Get job analytics
   */
  async getJobAnalytics(): Promise<JobAnalyticsResponse> {
    return this.request<JobAnalyticsResponse>('/api/jobs/analytics');
  }

  /**
   * Get recent jobs for a wallet
   */
  async getRecentJobs(params?: { limit?: number; status?: string }): Promise<RecentJobsResponse> {
    const query = new URLSearchParams();
    if (params?.limit) query.append('limit', params.limit.toString());
    if (params?.status) query.append('status', params.status);
    const queryString = query.toString();
    return this.request<RecentJobsResponse>(
      `/api/jobs/recent${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * Get contract addresses for explorer links
   */
  async getContractAddresses(): Promise<ContractsResponse> {
    return this.request<ContractsResponse>('/api/contracts');
  }

  /**
   * Send worker heartbeat (for dashboard tracking)
   */
  async sendWorkerHeartbeat(data: WorkerHeartbeatRequest): Promise<{ status: string }> {
    return this.request<{ status: string }>('/api/worker/heartbeat', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get worker uptime stats
   */
  async getWorkerUptime(address: string, periodHours?: number): Promise<WorkerUptimeResponse> {
    const query = new URLSearchParams({ address });
    if (periodHours) query.append('period_hours', periodHours.toString());
    return this.request<WorkerUptimeResponse>(`/api/worker/uptime?${query.toString()}`);
  }

  // ==================== WebSocket Dashboard ====================

  /**
   * Connect to WebSocket for real-time dashboard updates
   * Events: job_update, worker_update, network_stats, staking, trading, governance
   */
  connectDashboardWebSocket(
    onEvent: (event: DashboardWsEvent) => void,
    onError?: (error: Error) => void,
    onClose?: () => void
  ): () => void {
    const wsUrl = this.baseURL.replace(/^http/, 'ws') + '/ws';
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('Dashboard WebSocket connected');
    };

    ws.onmessage = (message) => {
      try {
        const event = JSON.parse(message.data) as DashboardWsEvent;
        onEvent(event);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      if (onError) onError(new Error('WebSocket connection error'));
    };

    ws.onclose = () => {
      console.log('Dashboard WebSocket disconnected');
      if (onClose) onClose();
    };

    // Return cleanup function
    return () => {
      ws.close();
    };
  }
}

// ==================== Dashboard Types ====================

export interface ValidatorStatusResponse {
  is_active: boolean;
  is_registered: boolean;
  staked_amount: string;
  staked_amount_formatted: string;
  stake_tier: string;
  reputation_score: number;
  total_earnings: string;
  total_earnings_formatted: string;
  pending_rewards: string;
  pending_rewards_formatted: string;
  jobs_completed: number;
  jobs_in_progress: number;
  jobs_failed: number;
  uptime_percent: number;
  last_heartbeat?: number;
}

export interface GpuMetricsResponse {
  gpus: GpuMetricInfo[];
  total_vram_mb: number;
  used_vram_mb: number;
  avg_utilization: number;
  avg_temperature: number;
}

export interface GpuMetricInfo {
  index: number;
  model: string;
  name: string;
  tier: string;
  vram_total_gb: number;
  vram_used_gb: number;
  compute_utilization: number;
  temperature_celsius: number;
  power_watts: number;
  status: string;
  has_tee: boolean;
  tee_type?: string;
  current_job_id?: string;
}

export interface RewardsInfoResponse {
  total_earned: string;
  total_earned_formatted: string;
  pending_rewards: string;
  pending_rewards_formatted: string;
  claimable_rewards: string;
  claimable_rewards_formatted: string;
  last_claim_timestamp?: number;
  next_reward_estimate: string;
  apy_estimate: number;
}

export interface NetworkStatsResponse {
  network: string;
  total_workers: number;
  active_workers: number;
  total_jobs_processed: number;
  jobs_last_24h: number;
  avg_job_completion_time_secs: number;
  total_compute_hours: number;
  network_utilization: number;
  total_staked: string;
  total_staked_formatted: string;
  current_block: number;
}

export interface NetworkWorkersResponse {
  workers: WorkerSummary[];
  total_count: number;
}

export interface WorkerSummary {
  worker_id: string;
  address: string;
  status: string;
  gpu_count: number;
  gpu_type: string;
  reputation: number;
  jobs_completed: number;
  stake_tier: string;
}

export interface JobAnalyticsResponse {
  total_jobs: number;
  jobs_completed: number;
  jobs_failed: number;
  jobs_in_progress: number;
  avg_completion_time_secs: number;
  success_rate: number;
  jobs_by_type: JobTypeCount[];
  jobs_last_24h: number;
  jobs_last_7d: number;
}

export interface JobTypeCount {
  job_type: string;
  count: number;
  percentage: number;
}

export interface RecentJobsResponse {
  jobs: RecentJob[];
  total_count: number;
}

export interface RecentJob {
  job_id: string;
  job_type: string;
  status: string;
  submitted_at: number;
  completed_at?: number;
  duration_secs?: number;
  reward?: string;
  client_address: string;
}

export interface ContractsResponse {
  network: string;
  sage_token: string;
  prover_staking: string;
  reputation_manager: string;
  job_manager: string;
  faucet?: string;
  explorer_base_url: string;
}

export interface WorkerHeartbeatRequest {
  worker_address: string;
  worker_id?: string;
  gpu_count?: number;
  gpu_utilization?: number;
  memory_utilization?: number;
  jobs_in_progress?: number;
  latency_ms?: number;
  version?: string;
}

export interface WorkerUptimeResponse {
  worker_address: string;
  period_hours: number;
  uptime_percent: number;
  total_heartbeats: number;
  expected_heartbeats: number;
  last_heartbeat?: number;
  status: string;
}

// ==================== WebSocket Event Types ====================

export type DashboardWsEvent =
  | { type: 'JobUpdate'; data: JobUpdateWsEvent }
  | { type: 'WorkerUpdate'; data: WorkerUpdateWsEvent }
  | { type: 'NetworkStats'; data: NetworkStatsWsEvent }
  | { type: 'StakingEvent'; data: StakingWsEvent }
  | { type: 'ProofVerified'; data: ProofVerifiedWsEvent };

export interface JobUpdateWsEvent {
  job_id: string;
  status: string;
  progress?: number;
  worker_id?: string;
  result_hash?: string;
  error?: string;
  timestamp: number;
}

export interface WorkerUpdateWsEvent {
  worker_id: string;
  status: string;
  gpu_utilization?: number;
  memory_used_mb?: number;
  jobs_active: number;
  timestamp: number;
}

export interface NetworkStatsWsEvent {
  total_workers: number;
  active_workers: number;
  total_jobs: number;
  jobs_in_progress: number;
  jobs_completed_24h: number;
  network_tps: number;
  timestamp: number;
}

export interface StakingWsEvent {
  worker_address: string;
  event_type: string;
  amount: string;
  gpu_tier?: string;
  tx_hash: string;
  block_number: number;
  timestamp: number;
}

export interface ProofVerifiedWsEvent {
  job_id: string;
  proof_hash: string;
  verifier: string;
  is_valid: boolean;
  gas_used?: string;
  timestamp: number;
}

// Export singleton instance
export const coordinatorAPI = new CoordinatorAPI();

// Export class for custom instances
export default CoordinatorAPI;

