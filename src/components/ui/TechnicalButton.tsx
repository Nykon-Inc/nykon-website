'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TechnicalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  href?: string;
}

const TechnicalButton: React.FC<TechnicalButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  href
}) => {
  const baseStyles = "relative px-6 py-3 font-satoshi font-bold uppercase tracking-technical transition-all duration-300 flex items-center justify-center group overflow-hidden";
  
  const variants = {
    primary: "bg-cyan-accent text-obsidian hover:bg-cyan-accent/90",
    secondary: "bg-graphite text-offwhite hover:bg-graphite/80",
    outline: "bg-transparent text-cyan-accent border border-cyan-accent/30 hover:border-cyan-accent/60"
  };

  const content = (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} w-full h-full`}
    >
      {/* Decorative Corner Accents */}
      <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50 group-hover:opacity-100" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return <Link href={href} className={className}>{content}</Link>;
  }

  return content;
};

export default TechnicalButton;
