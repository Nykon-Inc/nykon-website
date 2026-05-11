'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const values = [
    { title: 'Mission', content: 'To build intelligent software systems that simplify operations, improve decision-making, and enable organizations to scale with clarity and confidence.' },
    { title: 'Vision', content: 'To become a trusted provider of operational infrastructure for modern businesses.' }
  ];

  const timeline = [
    { year: '2025', event: 'NYKON Systems Foundation & Initial Operations' },
    { year: '2026', event: 'Infrastructure Development & Internal Testing' },
    { year: 'Upcoming', event: 'Official Launch of WATCHTOWER' },
    { year: 'Future', event: 'Next-Generation Operational Intelligence' }
  ];

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="pt-20 pb-32 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-cyan-accent text-xs font-black uppercase tracking-expanded">The Company</span>
            <div className="w-12 h-[1px] bg-cyan-accent" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-offwhite uppercase tracking-expanded leading-tight mb-12">
            Engineering <br /> <span className="text-cyan-accent">Visibility.</span>
          </h1>
          <p className="text-offwhite/40 text-xl font-satoshi max-w-2xl leading-relaxed">
            NYKON is a high-performance systems company focused on building the underlying infrastructure that powers modern, data-driven organizations.
          </p>
        </div>

        {/* Technical Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full technical-grid opacity-[0.05] pointer-events-none" />
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          {values.map((v, i) => (
            <div key={i} className="p-12 bg-graphite/20 border border-white/5 relative">
              <div className="text-cyan-accent font-black text-xs uppercase tracking-expanded mb-8">{v.title}</div>
              <p className="text-2xl font-black text-offwhite uppercase tracking-technical leading-tight mb-6">
                {v.content}
              </p>
              <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-accent/40" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-obsidian border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Evolution" title="System Roadmap" align="center" />

          <div className="relative mt-20">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between w-full ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-[45%] text-right">
                    {i % 2 === 0 && (
                      <div>
                        <span className="text-cyan-accent font-black text-2xl tracking-expanded">{item.year}</span>
                        <h4 className="text-offwhite font-bold uppercase tracking-technical mt-2">{item.event}</h4>
                      </div>
                    )}
                  </div>

                  <div className="w-4 h-4 bg-obsidian border-2 border-cyan-accent z-10" />

                  <div className="w-[45%] text-left">
                    {i % 2 !== 0 && (
                      <div>
                        <span className="text-cyan-accent font-black text-2xl tracking-expanded">{item.year}</span>
                        <h4 className="text-offwhite font-bold uppercase tracking-technical mt-2">{item.event}</h4>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Foundation" title="Operating Principles" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
            {['Integrity', 'Precision', 'Scalability', 'Discipline'].map((p) => (
              <div key={p} className="p-8 border border-white/5 group hover:border-cyan-accent/30 transition-colors">
                <div className="text-[10px] text-offwhite/20 font-mono mb-4">PRINCIPLE</div>
                <h5 className="text-offwhite font-black uppercase tracking-expanded">{p}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="The Architects" title="Leadership" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] bg-graphite/40 border border-white/10 relative overflow-hidden mb-6">
                {/* Image Placeholder - User to provide actual file */}
                <div className="absolute inset-0 bg-obsidian opacity-40 group-hover:opacity-20 transition-opacity z-10" />
                <Image
                  src="/team/ahman.jpg"
                  alt="Ahman Emmanuel"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                {/* Technical Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20">
                  <div className="absolute top-4 right-4 w-[1px] h-4 bg-cyan-accent" />
                  <div className="absolute top-4 right-4 w-4 h-[1px] bg-cyan-accent" />
                </div>
              </div>
              <h4 className="text-xl font-black text-offwhite uppercase tracking-technical mb-1">Ahman Emmanuel</h4>
              <p className="text-cyan-accent text-xs font-black uppercase tracking-expanded">Chief Executive Officer</p>
            </motion.div>

            {/* CTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-graphite/40 border border-white/10 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-obsidian opacity-40 group-hover:opacity-20 transition-opacity z-10" />
                <Image
                  src="/team/richmond.jpg"
                  alt="Richmond Elaigwu"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20">
                  <div className="absolute top-4 right-4 w-[1px] h-4 bg-cyan-accent" />
                  <div className="absolute top-4 right-4 w-4 h-[1px] bg-cyan-accent" />
                </div>
              </div>
              <h4 className="text-xl font-black text-offwhite uppercase tracking-technical mb-1">Richmond Elaigwu</h4>
              <p className="text-cyan-accent text-xs font-black uppercase tracking-expanded">Chief Technical Officer</p>
            </motion.div>

            {/* Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-graphite/40 border border-white/10 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-obsidian opacity-40 group-hover:opacity-20 transition-opacity z-10" />
                <Image
                  src="/team/maryqueen.jpeg"
                  alt="MaryQueen Sunday"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20">
                  <div className="absolute top-4 right-4 w-[1px] h-4 bg-cyan-accent" />
                  <div className="absolute top-4 right-4 w-4 h-[1px] bg-cyan-accent" />
                </div>
              </div>
              <h4 className="text-xl font-black text-offwhite uppercase tracking-technical mb-1">MaryQueen Sunday</h4>
              <p className="text-cyan-accent text-xs font-black uppercase tracking-expanded">Chief of Operations</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
