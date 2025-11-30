'use client';

/**
 * Job Submission Form Component
 * Beautiful UI for submitting jobs to BitSage network
 */

import { useState } from 'react';
import { useJobSubmit } from '@/lib/hooks/useCoordinator';
import { JobType, GpuModel, TeeType, JobSubmissionRequest } from '@/lib/api/coordinator';

// GPU Tier definitions with pricing
const GPU_TIERS = [
  {
    model: 'RTX_4090' as GpuModel,
    name: 'RTX 4090',
    memory: '24GB',
    price: 0.50,
    icon: '🎮',
    description: 'Best for: Gaming, 3D Rendering, AI Training',
    teeSupport: false,
  },
  {
    model: 'A100' as GpuModel,
    name: 'NVIDIA A100',
    memory: '40GB/80GB',
    price: 2.00,
    icon: '⚡',
    description: 'Best for: Large AI Models, HPC, Data Analytics',
    teeSupport: true,
  },
  {
    model: 'H100' as GpuModel,
    name: 'NVIDIA H100',
    memory: '80GB',
    price: 3.50,
    icon: '🚀',
    description: 'Best for: LLMs, Confidential AI, Massive Compute',
    teeSupport: true,
  },
  {
    model: 'B200' as GpuModel,
    name: 'NVIDIA B200',
    memory: '192GB',
    price: 5.00,
    icon: '🔮',
    description: 'Best for: Next-gen AI, Ultra-large Models',
    teeSupport: true,
  },
];

// Job Type definitions
const JOB_TYPES = [
  {
    type: 'AIInference' as JobType,
    name: 'AI Inference',
    icon: '🤖',
    description: 'Run pre-trained AI models (Stable Diffusion, LLMs)',
    fields: ['model_type', 'input_data_url', 'text'],
  },
  {
    type: 'DataPipeline' as JobType,
    name: 'Data Pipeline',
    icon: '📊',
    description: 'Execute SQL queries on confidential data',
    fields: ['sql_query', 'input_data_url'],
  },
  {
    type: 'Render3D' as JobType,
    name: '3D Rendering',
    icon: '🎨',
    description: 'Render Blender, Maya, or Cinema 4D projects',
    fields: ['input_data_url', 'container_image'],
  },
  {
    type: 'VideoProcessing' as JobType,
    name: 'Video Processing',
    icon: '🎬',
    description: 'Encode, transcode, or apply effects to videos',
    fields: ['video_url', 'container_image'],
  },
  {
    type: 'ComputerVision' as JobType,
    name: 'Computer Vision',
    icon: '👁️',
    description: 'Object detection, segmentation, classification',
    fields: ['model_type', 'image_url'],
  },
  {
    type: 'NLP' as JobType,
    name: 'NLP',
    icon: '💬',
    description: 'Text generation, translation, summarization',
    fields: ['model_type', 'text'],
  },
];

export function JobSubmissionForm() {
  const { submitJob, loading, error } = useJobSubmit();

  // Form state
  const [jobType, setJobType] = useState<JobType | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<GpuModel>('RTX_4090');
  const [gpuCount, setGpuCount] = useState(1);
  const [teeType, setTeeType] = useState<TeeType>('None');
  const [budget, setBudget] = useState<number>(10);
  
  // Job-specific fields
  const [modelType, setModelType] = useState('');
  const [inputDataUrl, setInputDataUrl] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [text, setText] = useState('');
  const [containerImage, setContainerImage] = useState('');

  const [submittedJobId, setSubmittedJobId] = useState<string | null>(null);

  const selectedJobType = JOB_TYPES.find(jt => jt.type === jobType);
  const selectedGpuTier = GPU_TIERS.find(gt => gt.model === selectedGpu);

  const estimatedCost = selectedGpuTier ? selectedGpuTier.price * gpuCount : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!jobType) {
      alert('Please select a job type');
      return;
    }

    const request: JobSubmissionRequest = {
      job_type: jobType,
      preferred_gpu: selectedGpu,
      gpu_count: gpuCount,
      tee_type: teeType,
      max_reward: budget.toString(),
      deadline_seconds: 3600, // 1 hour
    };

    // Add job-specific fields
    if (modelType) request.model_type = modelType;
    if (inputDataUrl) request.input_data_url = inputDataUrl;
    if (sqlQuery) request.sql_query = sqlQuery;
    if (imageUrl) request.image_url = imageUrl;
    if (videoUrl) request.video_url = videoUrl;
    if (text) request.text = text;
    if (containerImage) request.container_image = containerImage;

    const jobId = await submitJob(request);
    if (jobId) {
      setSubmittedJobId(jobId);
    }
  };

  // Success state
  if (submittedJobId) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border-2 border-green-500/30">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">Job Submitted Successfully!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your job has been queued and will be processed soon.
          </p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-500 mb-1">Job ID:</p>
            <code className="text-lg font-mono text-blue-600 dark:text-blue-400">
              {submittedJobId}
            </code>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                window.location.href = `/dashboard/jobs/${submittedJobId}`;
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Job Status
            </button>
            <button
              onClick={() => setSubmittedJobId(null)}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Submit Another Job
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8">
      {/* Step 1: Job Type Selection */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">1. Select Job Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {JOB_TYPES.map((jt) => (
            <button
              key={jt.type}
              type="button"
              onClick={() => setJobType(jt.type)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                jobType === jt.type
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              <div className="text-3xl mb-2">{jt.icon}</div>
              <h3 className="font-semibold mb-1">{jt.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{jt.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: GPU Selection */}
      {jobType && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">2. Select GPU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {GPU_TIERS.map((gpu) => (
              <button
                key={gpu.model}
                type="button"
                onClick={() => setSelectedGpu(gpu.model)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedGpu === gpu.model
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-2xl mb-1">{gpu.icon}</div>
                    <h3 className="font-semibold">{gpu.name}</h3>
                    <p className="text-sm text-gray-500">{gpu.memory}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ${gpu.price}
                    </p>
                    <p className="text-xs text-gray-500">/hour</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{gpu.description}</p>
                {gpu.teeSupport && (
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                    🔒 TEE Support
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* GPU Count */}
          <div className="flex items-center gap-4">
            <label className="font-semibold">GPU Count:</label>
            <input
              type="number"
              min="1"
              max="8"
              value={gpuCount}
              onChange={(e) => setGpuCount(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500">
              ({gpuCount}x {selectedGpuTier?.name})
            </span>
          </div>

          {/* TEE Option */}
          {selectedGpuTier?.teeSupport && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={teeType === 'Full'}
                  onChange={(e) => setTeeType(e.target.checked ? 'Full' : 'None')}
                  className="w-5 h-5"
                />
                <div>
                  <span className="font-semibold">Enable TEE (Trusted Execution Environment)</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run your job in a hardware-isolated secure enclave with cryptographic attestation
                  </p>
                </div>
              </label>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Job Configuration */}
      {selectedJobType && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">3. Configure Job</h2>
          <div className="space-y-4">
            {selectedJobType.fields.includes('model_type') && (
              <div>
                <label className="block font-semibold mb-2">Model Type</label>
                <select
                  value={modelType}
                  onChange={(e) => setModelType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  required
                >
                  <option value="">Select a model...</option>
                  <option value="stable-diffusion-xl">Stable Diffusion XL</option>
                  <option value="llama-3-70b">Llama 3 70B</option>
                  <option value="gpt-4">GPT-4 (Fine-tuned)</option>
                  <option value="whisper-large">Whisper Large</option>
                  <option value="yolo-v8">YOLO v8</option>
                </select>
              </div>
            )}

            {selectedJobType.fields.includes('sql_query') && (
              <div>
                <label className="block font-semibold mb-2">SQL Query</label>
                <textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  placeholder="SELECT * FROM sensitive_data WHERE..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 font-mono text-sm h-32"
                  required
                />
              </div>
            )}

            {selectedJobType.fields.includes('input_data_url') && (
              <div>
                <label className="block font-semibold mb-2">Input Data URL</label>
                <input
                  type="url"
                  value={inputDataUrl}
                  onChange={(e) => setInputDataUrl(e.target.value)}
                  placeholder="https://your-data-source.com/data.parquet"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                />
              </div>
            )}

            {selectedJobType.fields.includes('image_url') && (
              <div>
                <label className="block font-semibold mb-2">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  required
                />
              </div>
            )}

            {selectedJobType.fields.includes('video_url') && (
              <div>
                <label className="block font-semibold mb-2">Video URL</label>
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://example.com/video.mp4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                  required
                />
              </div>
            )}

            {selectedJobType.fields.includes('text') && (
              <div>
                <label className="block font-semibold mb-2">Input Text / Prompt</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your prompt or text input..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 h-32"
                  required
                />
              </div>
            )}

            {selectedJobType.fields.includes('container_image') && (
              <div>
                <label className="block font-semibold mb-2">Container Image (Optional)</label>
                <input
                  type="text"
                  value={containerImage}
                  onChange={(e) => setContainerImage(e.target.value)}
                  placeholder="docker.io/bitsage/blender:latest"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                />
              </div>
            )}

            {/* Budget */}
            <div>
              <label className="block font-semibold mb-2">
                Max Budget: ${budget.toFixed(2)}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={budget}
                onChange={(e) => setBudget(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-500 mt-1">
                Est. Runtime: {(budget / estimatedCost).toFixed(1)} hours
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {jobType && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white">
              <p className="text-sm opacity-90">Estimated Cost</p>
              <p className="text-3xl font-bold">${estimatedCost.toFixed(2)}/hr</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Submitting...' : '🚀 Submit Job'}
            </button>
          </div>
          {error && (
            <p className="text-red-200 text-sm">❌ {error}</p>
          )}
        </div>
      )}
    </form>
  );
}

