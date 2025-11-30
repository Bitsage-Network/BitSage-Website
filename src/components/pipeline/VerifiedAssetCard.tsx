import React from 'react';
import { ShieldCheck, Hash, Cpu, Layers } from 'lucide-react';

interface VerifiedAssetProps {
  imageUrl: string;
  title: string;
  model: string;
  nodeId: string;
  hash: string;
  teeType: string;
}

const VerifiedAssetCard: React.FC<VerifiedAssetProps> = ({ 
  imageUrl, title, model, nodeId, hash, teeType 
}) => {
  return (
    <div className="group relative w-80 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glassmorphism Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        
        {/* Verification Badge */}
        <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur text-black font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
          <ShieldCheck size={14} />
          VERIFIED
        </div>
      </div>

      {/* Info Card (Flips up on hover) */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{model}</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-indigo-400" />
              <span>Node Operator</span>
            </div>
            <span className="text-slate-300 font-mono">{nodeId}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Hash size={14} className="text-orange-400" />
              <span>Proof Hash</span>
            </div>
            <span className="text-slate-300 font-mono" title={hash}>
              {hash.substring(0, 6)}...{hash.substring(hash.length - 4)}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-2">
              <Layers size={14} className="text-purple-400" />
              <span>Secure Enclave</span>
            </div>
            <span className="bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded border border-purple-800/50">
              {teeType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedAssetCard;

