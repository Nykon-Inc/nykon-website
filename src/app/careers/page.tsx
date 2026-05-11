'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import TechnicalButton from '@/components/ui/TechnicalButton';
import { motion } from 'framer-motion';

const CareersPage = () => {
  const openings = [
    { title: 'Systems Architect', type: 'Full-Time', location: 'Remote / NYC', dept: 'Engineering' },
    { title: 'Infrastructure Engineer', type: 'Full-Time', location: 'Remote / London', dept: 'Engineering' },
    { title: 'Operations Lead', type: 'Full-Time', location: 'Remote', dept: 'Operations' },
    { title: 'Product Strategist', type: 'Full-Time', location: 'NYC', dept: 'Product' }
  ];

  return (
    <div className="pb-32">
      <section className="pt-20 pb-32 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            eyebrow="Talent Infrastructure"
            title="Join the System"
            description="We are looking for disciplined engineers and thinkers who thrive on building mission-critical operational systems."
          />
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-cyan-accent opacity-[0.02] pointer-events-none" />
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h3 className="text-3xl font-black text-offwhite uppercase tracking-expanded mb-8">Engineering Culture</h3>
              <p className="text-offwhite/40 font-satoshi text-lg leading-relaxed mb-8">
                NYKON is not a typical startup. We operate with a high-performance, systems-oriented culture that prioritizes precision over speed, and clarity over chaos.
              </p>
              <ul className="space-y-6">
                {[
                  'Disciplined Engineering Focus',
                  'High Ownership Culture',
                  'Operational Impact',
                  'Systems-Oriented Thinking',
                  'Real-World Product Exposure'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-cyan-accent" />
                    <span className="text-offwhite/60 font-black uppercase text-xs tracking-technical">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-graphite/40 border border-white/10 p-12 relative">
               <div className="text-[10px] text-cyan-accent font-mono mb-8">Operational Values</div>
               <h4 className="text-2xl font-black text-offwhite uppercase tracking-technical mb-6">Growth via Rigor</h4>
               <p className="text-offwhite/40 font-satoshi leading-relaxed">
                 We provide the environment for top-tier talent to build systems that actually matter. No fluff, no busywork—only technical excellence.
               </p>
               <div className="absolute bottom-8 right-8 w-16 h-[1px] bg-white/10" />
            </div>
          </div>

          {/* Openings */}
          <div>
            <div className="flex items-center justify-between mb-16">
              <h3 className="text-3xl font-black text-offwhite uppercase tracking-expanded">Current Openings</h3>
              <div className="text-offwhite/20 font-mono text-xs uppercase tracking-widest">Available Positions ({openings.length})</div>
            </div>
            
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-white/5 transition-all"
                >
                  <div className="mb-4 md:mb-0">
                    <div className="text-[10px] text-cyan-accent font-mono mb-2 uppercase tracking-widest">{job.dept}</div>
                    <h4 className="text-xl font-black text-offwhite uppercase tracking-technical group-hover:text-cyan-accent transition-colors">{job.title}</h4>
                  </div>
                  
                  <div className="flex items-center gap-8">
                     <div className="text-right hidden md:block">
                        <div className="text-[10px] text-offwhite/20 font-mono uppercase">Location</div>
                        <div className="text-xs text-offwhite/60 font-bold uppercase tracking-technical">{job.location}</div>
                     </div>
                     <TechnicalButton variant="outline" className="text-[10px] px-4 py-2">View Position</TechnicalButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-obsidian border-t border-white/5 text-center">
         <h4 className="text-offwhite font-black uppercase tracking-expanded mb-6">Don't see a fit?</h4>
         <p className="text-offwhite/40 font-satoshi mb-12">We are always scouting for elite talent. Send us your operational dossier.</p>
         <TechnicalButton variant="secondary">Speculative Inquiry</TechnicalButton>
      </section>
    </div>
  );
};

export default CareersPage;
