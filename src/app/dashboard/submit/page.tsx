/**
 * Job Submission Page
 */

import { JobSubmissionForm } from '@/components/webapp/JobSubmissionForm';

export const metadata = {
  title: 'Submit Job | BitSage Network',
  description: 'Submit compute jobs to the BitSage distributed network',
};

export default function SubmitJobPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Submit Compute Job
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Deploy AI inference, data pipelines, and rendering jobs to the BitSage network
          </p>
        </div>

        <JobSubmissionForm />
      </div>
    </div>
  );
}

