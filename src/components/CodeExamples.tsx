'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Terminal, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import RequestDemoModal from './RequestDemoModal';

const examples = [
  {
    id: 'render',
    title: 'Render API',
    description: 'Submit a 3D rendering job to the network',
    language: 'python',
    code: `from bitsage import Bitsage

# Initialize client
client = Bitsage(api_key="your_api_key")

# Estimate cost/time first
estimate = client.render.estimate(
    project_file="scene.blend",
    frames=[1, 100],
    gpu_tier="H100"
)
print(f"Est. cost: \${estimate.cost}, time: {estimate.duration}")

# Submit render job
job = client.render.submit(
    project_file="scene.blend",
    engine="blender",
    frames=[1, 100],
    resolution=(1920, 1080),
    gpu_tier="H100",
    budget=25.0,
    max_duration="2h",
    output_dir="./renders"
)

# Monitor progress
for update in job.stream_progress():
    print(f"Frame {update.frame}: {update.status}")

# Download results
job.download_results("./renders")`,
  },
  {
    id: 'inference',
    title: 'Inference API',
    description: 'Run AI inference for image generation and LLMs',
    language: 'python',
    code: `from bitsage import Bitsage

client = Bitsage(api_key="your_api_key")

# Image generation (SDXL)
result = client.infer.run(
    model="sdxl",
    prompt="arcane mage concept art, 8k, cinematic",
    steps=30,
    gpu_tier="4090",
    output_dir="./outputs"
)

print(f"Image saved: \${result.url}")

# LLM inference
model = client.infer.deploy(
    model="llama-3-70b",
    gpu_count=2,
    max_batch_size=32
)

response = model.complete(
    prompt="Explain quantum computing",
    max_tokens=500,
    temperature=0.7
)

print(response.text)`,
  },
  {
    id: 'batch',
    title: 'Batch Processing',
    description: 'Process thousands of tasks in parallel with array jobs',
    language: 'python',
    code: `from bitsage import Bitsage

client = Bitsage(api_key="your_api_key")

# Submit array job for batch processing
job = client.batch.submit(
    script="./scripts/process.py",
    array_range=(0, 999),
    concurrency=50,
    gpu_tier="A100",
    env={"DATA_PATH": "s3://bucket/dataset"}
)

# Monitor progress
status = job.status()
print(f"Completed: \${status.completed}/\${status.total}")

# Or use decorator pattern
@client.batch.function(gpu="A100", concurrency=50)
def process_image(image_url):
    # Your image processing logic
    model = load_model("stable-diffusion-xl")
    result = model.upscale(image_url, scale=4)
    return result

# Process batch
results = process_image.map(image_urls)
for result in results:
    print(f"Processed: \${result.url}")`,
  },
  {
    id: 'cli',
    title: 'CLI Quick Start',
    description: 'No YAML, no Dockerfiles—just one CLI to submit, monitor, and download results',
    language: 'bash',
    code: `# 1) Install
npm i -g @bitsage/cli

# 2) Authenticate
export BITSAGE_API_KEY=your_api_key
# or: bitsage login

# 3) Submit a render job (Blender)
bitsage render submit scene.blend \\
  --engine blender \\
  --frames 1-100 \\
  --resolution 1920x1080 \\
  --gpu H100 \\
  --out ./renders \\
  --budget 25USD \\
  --max-duration 2h

# Estimate cost/time before running
bitsage render estimate scene.blend --frames 1-100 --gpu H100

# 4) Monitor
bitsage jobs list
bitsage jobs logs <JOB_ID>
bitsage jobs describe <JOB_ID>

# 5) Download artifacts
bitsage jobs download <JOB_ID> --out ./renders

# Cancel if needed
bitsage jobs cancel <JOB_ID>`,
  },
];

// Beautiful syntax highlighting function
const highlightCode = (code: string, language: string) => {
  if (language === 'python') {
    let highlighted = code;
    
    // First, protect strings and comments from other replacements
    const protectedItems: string[] = [];
    
    // Protect strings (including f-strings)
    highlighted = highlighted.replace(/(f?["'])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      const coloredString = match.startsWith('f') 
        ? `<span class="text-green-400">f</span><span class="text-green-300">${match.slice(1)}</span>`
        : `<span class="text-green-300">${match}</span>`;
      protectedItems.push(coloredString);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });
    
    // Protect comments
    highlighted = highlighted.replace(/(#.*$)/gm, (match) => {
      protectedItems.push(`<span class="text-slate-400 italic">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });
    
    // Keywords
    highlighted = highlighted.replace(/\b(from|import|def|class|if|else|elif|for|while|try|except|finally|with|as|return|yield|break|continue|pass|lambda|global|nonlocal|assert|del|raise|in|is|not|and|or)\b/g, 
      '<span class="text-purple-400 font-medium">$1</span>');
    
    // Built-in constants
    highlighted = highlighted.replace(/\b(True|False|None)\b/g, 
      '<span class="text-orange-400 font-medium">$1</span>');
    
    // Numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, 
      '<span class="text-yellow-400">$1</span>');
    
    // Function/method calls (more specific to avoid conflicts)
    highlighted = highlighted.replace(/(\w+)(?=\s*\()/g, 
      '<span class="text-blue-400">$1</span>');
    
    // Object attributes
    highlighted = highlighted.replace(/\.(\w+)/g, 
      '.<span class="text-cyan-400">$1</span>');
    
    // Restore protected items
    protectedItems.forEach((item, index) => {
      highlighted = highlighted.replace(`__PROTECTED_${index}__`, item);
    });
    
    return highlighted;
    
  } else if (language === 'bash') {
    let highlighted = code;
    
    // First, protect strings and comments from other replacements
    const protectedItems: string[] = [];
    
    // Protect comments
    highlighted = highlighted.replace(/(#.*$)/gm, (match) => {
      protectedItems.push(`<span class="text-slate-400 italic">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });
    
    // Protect strings
    highlighted = highlighted.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      protectedItems.push(`<span class="text-green-300">${match}</span>`);
      return `__PROTECTED_${protectedItems.length - 1}__`;
    });
    
    // Environment variables
    highlighted = highlighted.replace(/(\$\w+)/g, '<span class="text-yellow-400">$1</span>');
    
    // File paths and extensions (before flags to avoid conflicts)
    highlighted = highlighted.replace(/(\S*\.\w+)/g, '<span class="text-cyan-300">$1</span>');
    
    // Flags and options (more specific pattern)
    highlighted = highlighted.replace(/(^|\s)(--?\w+(?:[-=]\w+)?)/g, '$1<span class="text-blue-400">$2</span>');
    
    // Commands at start of line (after other replacements to avoid conflicts)
    highlighted = highlighted.replace(/^(\w+)(?=\s|$)/gm, '<span class="text-purple-400 font-medium">$1</span>');
    
    // Restore protected items
    protectedItems.forEach((item, index) => {
      highlighted = highlighted.replace(`__PROTECTED_${index}__`, item);
    });
    
    return highlighted;
  }
  
  return code;
};

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState(examples[0].id);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeExample = examples.find(ex => ex.id === activeTab)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        {/* Fine dot pattern texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Very subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-emerald-50/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Code2 className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">DEVELOPERS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start GPU jobs in minutes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Simple CLI & Python SDK for GPU rendering, AI inference, and batch compute. No YAML, no config files—just code.
          </p>
        </motion.div>

        {/* Code example container - Vertical Layout */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left side - Vertical Tabs */}
            <div className="lg:col-span-2 space-y-4">
              {examples.map((example, index) => (
                <motion.button
                  key={example.id}
                  onClick={() => setActiveTab(example.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    activeTab === example.id
                      ? 'bg-emerald-50 border-emerald-200 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-emerald-200 hover:shadow-sm'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === example.id
                        ? 'bg-emerald-100'
                        : 'bg-slate-100 group-hover:bg-emerald-50'
                    }`}>
                      {example.id === 'render' && <Code2 className={`w-6 h-6 ${activeTab === example.id ? 'text-emerald-600' : 'text-slate-600 group-hover:text-emerald-600'}`} />}
                      {example.id === 'inference' && <Terminal className={`w-6 h-6 ${activeTab === example.id ? 'text-emerald-600' : 'text-slate-600 group-hover:text-emerald-600'}`} />}
                      {example.id === 'batch' && <Copy className={`w-6 h-6 ${activeTab === example.id ? 'text-emerald-600' : 'text-slate-600 group-hover:text-emerald-600'}`} />}
                      {example.id === 'cli' && <Terminal className={`w-6 h-6 ${activeTab === example.id ? 'text-emerald-600' : 'text-slate-600 group-hover:text-emerald-600'}`} />}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 transition-colors ${
                        activeTab === example.id
                          ? 'text-emerald-700'
                          : 'text-slate-900 group-hover:text-emerald-700'
                      }`}>
                        {example.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        activeTab === example.id
                          ? 'text-emerald-600'
                          : 'text-slate-600 group-hover:text-emerald-600'
                      }`}>
                        {example.description}
                      </p>
                      <div className={`mt-3 text-xs font-medium transition-colors ${
                        activeTab === example.id
                          ? 'text-emerald-500'
                          : 'text-slate-400 group-hover:text-emerald-500'
                      }`}>
                        {example.language === 'python' ? 'Python SDK' : 'Command Line'}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right side - Code Display */}
            <div className="lg:col-span-3 flex items-center">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-sm font-medium text-slate-600">
                        {activeExample.language === 'python' ? 'main.py' : 'terminal'}
                      </div>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all text-sm border border-slate-200 shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code with Syntax Highlighting */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                    <div className="relative p-6 overflow-x-auto max-h-[500px] overflow-y-auto">
                      <pre className="text-sm leading-relaxed">
                        <code 
                          className="font-mono text-slate-200" 
                          style={{ fontFamily: 'JetBrains Mono, SF Mono, Monaco, Consolas, monospace' }}
                          dangerouslySetInnerHTML={{ 
                            __html: highlightCode(activeExample.code, activeExample.language) 
                          }}
                        />
                      </pre>
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <Terminal className="w-4 h-4" />
            Get Started
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            Early Access
          </button>
        </motion.div>

      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

