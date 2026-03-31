'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import RequestDemoModal from './RequestDemoModal';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden bg-mesh-blue">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-white order-2 lg:order-1"
          >
            <Image
              src="/images/hero/cta-section.jpg"
              alt="Code to GPU compute pipeline"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right: CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-semibold text-[--accent] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ship faster. Stay private.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              From first API call to production workloads in minutes. Enterprise GPU compute with cryptographic privacy guarantees baked in -- not bolted on.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'No credit card required to start',
                'SOC2 compliant from day one',
                'Dedicated support for enterprise teams',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Request a demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-600 font-semibold rounded-lg transition-all text-sm"
              >
                Read the docs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
