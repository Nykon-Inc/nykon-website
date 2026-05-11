'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TechnicalButton from '../../ui/TechnicalButton';

const WatchtowerSpotlight: React.FC = () => {
  return (
    <section className="py-32 bg-graphite/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full technical-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-obsidian border border-white/10 p-8 relative">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                  Watchtower Live Feed
              </div>

              {/* Fake Data Visualization */}
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-end gap-4">
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between text-[10px] text-offwhite/40 uppercase tracking-technical">
                        <span>Efficiency</span>
                        <span>{85 + i * 4}%</span>
                      </div>
                      <div className="h-2 bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${70 + i * 8}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="absolute inset-0 bg-cyan-accent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-accent/5 to-transparent h-1/4 w-full animate-[scan_4s_linear_infinite] pointer-events-none" />
            </div>

            {/* Floatings Tags */}
            <div className="absolute -top-6 -right-6 p-4 bg-cyan-accent text-obsidian font-black text-xs uppercase tracking-expanded">
              Operational Intelligence
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cyan-accent text-xs font-black uppercase tracking-expanded">Flagship Product</span>
              <div className="w-12 h-[1px] bg-cyan-accent" />
            </div>

            <h2 className="text-5xl font-black text-offwhite uppercase tracking-expanded mb-8 leading-tight">
              WATCHTOWER
            </h2>

            <p className="text-offwhite/60 text-lg font-satoshi mb-10 leading-relaxed">
              Watchtower is a workforce visibility and operational intelligence platform designed for modern distributed teams. It provides deep technical insights that help leaders maintain accountability and precision at scale.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                'Productivity Insights',
                'Workforce Visibility',
                'Operational Reporting',
                'Team Accountability',
                'Remote Workforce Coordination'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 bg-cyan-accent" />
                  <span className="text-offwhite/40 text-sm font-satoshi uppercase tracking-technical group-hover:text-offwhite transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <TechnicalButton variant="primary">
              View Watchtower
            </TechnicalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchtowerSpotlight;
