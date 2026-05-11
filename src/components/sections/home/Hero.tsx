'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TechnicalButton from '../../ui/TechnicalButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Content */}
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-cyan-accent" />
            <span className="text-cyan-accent text-xs font-black uppercase tracking-expanded">
              Operational Infrastructure
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-offwhite uppercase tracking-expanded leading-[1.1] mb-8"
          >
            Build With <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-white">Clarity.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-offwhite/40 text-xl font-satoshi max-w-xl mb-12 leading-relaxed"
          >
            Nykon builds intelligent operational systems that help modern organizations scale with visibility, precision, and control.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <TechnicalButton variant="primary" href="/products">
              Explore Products
            </TechnicalButton>
            <TechnicalButton variant="outline" href="/contact">
              Book a Demo
            </TechnicalButton>
          </motion.div>
        </div>

        {/* Visual - Command Center Aesthetic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative aspect-square hidden lg:block"
        >
          {/* Central Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-cyan-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-80 h-80 border border-cyan-accent/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute w-48 h-48 bg-cyan-accent/5 rounded-full blur-3xl" />
          </div>

          {/* Technical Data Blocks */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 p-6 bg-graphite/40 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-12 h-1 bg-cyan-accent mb-4" />
            <div className="text-[10px] text-cyan-accent font-mono uppercase tracking-widest">System Active</div>
            <div className="text-2xl font-black text-offwhite mt-1">99.98%</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-0 p-6 bg-graphite/40 border border-white/10 backdrop-blur-sm"
          >
            <div className="text-[10px] text-offwhite/40 font-mono uppercase tracking-widest mb-2">Operational Nodes</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-3 h-8 bg-cyan-accent/20 border border-cyan-accent/40" />
              ))}
            </div>
          </motion.div>

          {/* Lines Connecting */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 500">
            <line x1="250" y1="250" x2="400" y2="100" stroke="#22D3EE" strokeWidth="1" />
            <line x1="250" y1="250" x2="100" y2="400" stroke="#22D3EE" strokeWidth="1" />
            <circle cx="400" cy="100" r="3" fill="#22D3EE" />
            <circle cx="100" cy="400" r="3" fill="#22D3EE" />
          </svg>
        </motion.div>
      </div>

      {/* Decorative Blueprint Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-10 w-40 h-1 bg-cyan-accent/20 rotate-45" />
      <div className="absolute top-1/2 -right-10 w-60 h-1 bg-cyan-accent/10 -rotate-12" />
    </section>
  );
};

export default Hero;
