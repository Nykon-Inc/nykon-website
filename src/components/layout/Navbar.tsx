'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TechnicalButton from '../ui/TechnicalButton';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-accent flex items-center justify-center">
            <span className="text-obsidian font-black text-xl leading-none">N</span>
          </div>
          <span className="text-offwhite font-black text-2xl tracking-expanded group-hover:text-cyan-accent transition-colors">
            NYKON
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group py-2"
              >
                <span className={`text-sm font-bold uppercase tracking-technical transition-colors ${
                  isActive ? 'text-cyan-accent' : 'text-offwhite/60 group-hover:text-offwhite'
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-accent"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <TechnicalButton variant="outline" className="text-xs py-2 px-4">
            Command Center
          </TechnicalButton>
        </div>
        
        {/* Mobile Toggle (Placeholder) */}
        <div className="md:hidden text-cyan-accent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12H21M3 6H21M3 18H21" />
          </svg>
        </div>
      </div>
      
      {/* Precision Detail Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-accent/20 to-transparent" />
    </nav>
  );
};

export default Navbar;
