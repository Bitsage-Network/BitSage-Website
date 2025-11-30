import React, { useState } from 'react';
import { ArrowRight, Database, Server, Shield, CheckCircle } from 'lucide-react';

interface PipelineStep {
  id: string;
  type: 'source' | 'transform' | 'destination';
  name: string;
  details: string;
  verified: boolean;
  teeType?: 'TDX' | 'SGX';
}

const PipelineBuilder: React.FC = () => {
  const [steps, setSteps] = useState<PipelineStep[]>([
    { 
      id: '1', 
      type: 'source', 
      name: 'S3: Sensitive Data', 
      details: 's3://healthcare-records/raw/',
      verified: true 
    },
    { 
      id: '2', 
      type: 'transform', 
      name: 'PII Redaction', 
      details: 'SQL: SELECT * EXCLUDE (ssn, name)...',
      verified: false,
      teeType: 'TDX'
    },
    { 
      id: '3', 
      type: 'destination', 
      name: 'Snowflake Clean Room', 
      details: 'db.schema.clean_table',
      verified: false 
    }
  ]);

  const verifyStep = (id: string) => {
    setSteps(steps.map(s => s.id === id ? { ...s, verified: true } : s));
  };

  return (
    <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Shield className="text-emerald-400" />
        Confidential Data Pipeline
      </h2>
      
      <div className="flex items-center justify-between gap-4 mb-8 relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10" />
        
        {steps.map((step, index) => (
          <div key={step.id} className="relative group">
            <div 
              className={`
                w-16 h-16 rounded-full flex items-center justify-center border-2 
                ${step.verified ? 'bg-emerald-900/20 border-emerald-500 text-emerald-500' : 'bg-slate-800 border-slate-600 text-slate-400'}
                transition-all duration-300 cursor-pointer hover:scale-110
              `}
              onClick={() => verifyStep(step.id)}
            >
              {step.type === 'source' && <Database size={24} />}
              {step.type === 'transform' && <Server size={24} />}
              {step.type === 'destination' && <ArrowRight size={24} />}
            </div>
            
            {step.verified && (
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-black rounded-full p-1">
                <CheckCircle size={12} />
              </div>
            )}

            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 text-center">
              <p className="text-white font-medium text-sm">{step.name}</p>
              <p className="text-slate-500 text-xs mt-1 truncate">{step.details}</p>
              {step.teeType && (
                <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-900 text-indigo-300 text-[10px] rounded border border-indigo-700">
                  Running in {step.teeType} Enclave
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-4 bg-slate-950 rounded border border-slate-800 font-mono text-xs text-slate-400">
        <p className="text-emerald-500 mb-2">Pipeline Status: Active</p>
        <p>&gt; Source Connection Verified (TLSNotary Proof: 0x7f...3a)</p>
        <p>&gt; Transform Node Provisioned (Attestation: Intel TDX)</p>
        <p>&gt; Destination Handshake Complete</p>
      </div>
    </div>
  );
};

export default PipelineBuilder;

