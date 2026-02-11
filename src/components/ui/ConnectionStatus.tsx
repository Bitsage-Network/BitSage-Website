'use client';

export function ConnectionStatus({ status = 'connected', className = '', showLabel = true }: { status?: 'connected' | 'disconnected' | 'connecting'; className?: string; showLabel?: boolean }) {
  const colors = {
    connected: 'bg-emerald-500',
    disconnected: 'bg-red-500',
    connecting: 'bg-amber-500 animate-pulse',
  };

  const labels = {
    connected: 'Connected',
    disconnected: 'Disconnected',
    connecting: 'Connecting...',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      {showLabel && <span className="text-xs text-slate-400">{labels[status]}</span>}
    </div>
  );
}
