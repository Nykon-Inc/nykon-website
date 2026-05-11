'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Metrics: React.FC = () => {
  const stats = [
    { label: 'Active Systems', value: '450+', sub: 'Global Deployments' },
    { label: 'Teams Supported', value: '12k+', sub: 'Enterprise Users' },
    { label: 'Data Points', value: '1.2B+', sub: 'Processed Monthly' },
    { label: 'Platform Uptime', value: '99.99%', sub: 'SLA Guaranteed' },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-4xl lg:text-5xl font-black text-cyan-accent uppercase tracking-expanded mb-3"
            >
              {stat.value}
            </motion.div>
            <div className="text-xs font-black text-offwhite uppercase tracking-technical mb-1">
              {stat.label}
            </div>
            <div className="text-[10px] text-offwhite/20 uppercase tracking-widest">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 pointer-events-none opacity-[0.02]">
        <span className="text-[200px] font-black uppercase tracking-[0.2em] whitespace-nowrap text-offwhite">
          INFRASTRUCTURE
        </span>
      </div>
    </section>
  );
};

export default Metrics;
