'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'GPUs available globally' },
  { value: '<50ms', label: 'Average job latency' },
  { value: '99.9%', label: 'Uptime SLA guaranteed' },
  { value: '0', label: 'Data breaches. Ever.' },
];

export function TrustBar() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
