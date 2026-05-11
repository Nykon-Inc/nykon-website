'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';

const WhatWeBuild: React.FC = () => {
  const capabilities = [
    {
      id: '01',
      title: 'Workforce Systems',
      description: 'Infrastructure designed for modern distributed teams to maintain alignment and output.'
    },
    {
      id: '02',
      title: 'Operational Intelligence',
      description: 'Data-driven visibility that transforms raw activity into actionable business insights.'
    },
    {
      id: '03',
      title: 'Business Infrastructure',
      description: 'The underlying software systems that power scalable enterprise operations.'
    },
    {
      id: '04',
      title: 'Scalable SaaS Platforms',
      description: 'Custom-engineered software solutions built for reliability and massive data throughput.'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Capabilities"
          title="Engineered for Performance"
          description="We build the mission-critical infrastructure that allows high-growth organizations to operate with precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {capabilities.map((item) => (
            <div 
              key={item.id} 
              className="bg-obsidian p-10 group hover:bg-graphite/40 transition-colors duration-500 relative"
            >
              <div className="text-cyan-accent font-black text-xs mb-8 tracking-expanded">
                {item.id}
              </div>
              <h3 className="text-xl font-black text-offwhite uppercase tracking-technical mb-4 group-hover:text-cyan-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-offwhite/40 text-sm font-satoshi leading-relaxed">
                {item.description}
              </p>
              
              {/* Corner Detail */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-cyan-accent" />
                <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-cyan-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
