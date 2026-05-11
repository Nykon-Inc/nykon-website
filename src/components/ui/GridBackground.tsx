'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <div className="absolute inset-0 technical-grid opacity-[0.15]" />
      
      {/* Radial Mask for depth */}
      <div className="absolute inset-0 bg-radial-mask" style={{ 
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, #0F172A 80%)' 
      }} />

      {/* Subtle Moving Nodes/Lines */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <svg width="100%" height="100%" className="opacity-20">
          <pattern id="dot-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#22D3EE" fillOpacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </motion.div>

      {/* Technical Dividers (Horizontal/Vertical) */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
      <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
      <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-white/[0.03]" />
      
      <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-white/[0.03]" />
      <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-white/[0.03]" />
      <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-white/[0.03]" />
    </div>
  );
};

export default GridBackground;
