'use client';

function SkeletonPulse({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-slate-700/50 rounded ${className}`} />;
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-4 ${className}`}>
      <SkeletonPulse className="h-4 w-1/3" />
      <SkeletonPulse className="h-8 w-1/2" />
      <SkeletonPulse className="h-3 w-full" />
      <SkeletonPulse className="h-3 w-2/3" />
    </div>
  );
}

export function SkeletonEarnings() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-2">
            <SkeletonPulse className="h-3 w-1/2" />
            <SkeletonPulse className="h-6 w-2/3" />
          </div>
        ))}
      </div>
      <SkeletonPulse className="h-48 w-full rounded-xl" />
    </div>
  );
}

export function SkeletonGpuList() {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-4">
          <SkeletonPulse className="h-10 w-10 rounded-lg" />
          <div className="flex-1 space-y-2">
            <SkeletonPulse className="h-4 w-1/3" />
            <SkeletonPulse className="h-3 w-1/2" />
          </div>
          <SkeletonPulse className="h-8 w-20 rounded-md" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonRentals() {
  return (
    <div className="space-y-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
          <div className="space-y-2">
            <SkeletonPulse className="h-4 w-32" />
            <SkeletonPulse className="h-3 w-48" />
          </div>
          <SkeletonPulse className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  );
}
