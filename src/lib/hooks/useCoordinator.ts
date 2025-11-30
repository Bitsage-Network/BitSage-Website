/**
 * React hooks for BitSage Coordinator API
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  coordinatorAPI, 
  Job, 
  JobStats, 
  JobSubmissionRequest, 
  WorkerInfo,
  CoordinatorHealth 
} from '../api/coordinator';

/**
 * Hook for submitting jobs
 */
export function useJobSubmit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitJob = useCallback(async (request: JobSubmissionRequest): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await coordinatorAPI.submitJob(request);
      return response.job_id;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit job';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { submitJob, loading, error };
}

/**
 * Hook for fetching job status
 */
export function useJob(jobId: string | null, pollingInterval?: number) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJob = useCallback(async () => {
    if (!jobId) return;

    setLoading(true);
    setError(null);

    try {
      const jobData = await coordinatorAPI.getJobStatus(jobId);
      setJob(jobData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch job';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [jobId]);

  // Initial fetch
  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  // Polling
  useEffect(() => {
    if (!pollingInterval || !jobId) return;

    const interval = setInterval(fetchJob, pollingInterval);
    return () => clearInterval(interval);
  }, [fetchJob, pollingInterval, jobId]);

  return { job, loading, error, refetch: fetchJob };
}

/**
 * Hook for streaming job status updates
 */
export function useJobStream(jobId: string | null) {
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!jobId) return;

    setIsConnected(true);
    setError(null);

    const cleanup = coordinatorAPI.streamJobStatus(
      jobId,
      (updatedJob) => {
        setJob(updatedJob);
      },
      (err) => {
        setError(err.message);
        setIsConnected(false);
      }
    );

    return () => {
      cleanup();
      setIsConnected(false);
    };
  }, [jobId]);

  return { job, error, isConnected };
}

/**
 * Hook for listing jobs
 */
export function useJobs(autoRefresh = false, refreshInterval = 5000) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await coordinatorAPI.listJobs({ limit: 100 });
      setJobs(response.jobs);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch jobs';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchJobs, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchJobs]);

  return { jobs, loading, error, refetch: fetchJobs };
}

/**
 * Hook for job statistics
 */
export function useJobStats(autoRefresh = true, refreshInterval = 10000) {
  const [stats, setStats] = useState<JobStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const statsData = await coordinatorAPI.getStats();
      setStats(statsData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch stats';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchStats, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
}

/**
 * Hook for worker list
 */
export function useWorkers(autoRefresh = true, refreshInterval = 15000) {
  const [workers, setWorkers] = useState<WorkerInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await coordinatorAPI.listWorkers();
      setWorkers(response.workers);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch workers';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkers();
  }, [fetchWorkers]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchWorkers, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchWorkers]);

  return { workers, loading, error, refetch: fetchWorkers };
}

/**
 * Hook for coordinator health
 */
export function useCoordinatorHealth(autoRefresh = true, refreshInterval = 30000) {
  const [health, setHealth] = useState<CoordinatorHealth | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const healthData = await coordinatorAPI.getHealth();
      setHealth(healthData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch health';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchHealth, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchHealth]);

  return { health, loading, error, refetch: fetchHealth };
}

/**
 * Hook for canceling jobs
 */
export function useJobCancel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cancelJob = useCallback(async (jobId: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const response = await coordinatorAPI.cancelJob(jobId);
      return response.success;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to cancel job';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { cancelJob, loading, error };
}

