import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-obsidian border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative Technical Grid Overlay for Footer */}
      <div className="absolute inset-0 technical-grid opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-6 h-6 bg-cyan-accent flex items-center justify-center">
                <span className="text-obsidian font-black text-sm leading-none">N</span>
              </div>
              <span className="text-offwhite font-black text-xl tracking-expanded group-hover:text-cyan-accent transition-colors">
                NYKON
              </span>
            </Link>
            <p className="text-offwhite/40 text-sm leading-relaxed max-w-xs font-satoshi">
              NYKON builds intelligent operational systems that help modern organizations scale with visibility, precision, and control.
            </p>
          </div>

          {/* Links Groups */}
          <div>
            <h4 className="text-cyan-accent text-xs font-black uppercase tracking-expanded mb-6">Systems</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-offwhite/60 hover:text-cyan-accent text-sm transition-colors">Watchtower</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cyan-accent text-xs font-black uppercase tracking-expanded mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-offwhite/60 hover:text-cyan-accent text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-offwhite/60 hover:text-cyan-accent text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] text-offwhite/20 uppercase tracking-technical">
            ALL RIGHTS RESERVED. DESIGNED FOR PRECISION.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] text-offwhite/40 hover:text-cyan-accent transition-colors uppercase tracking-technical">Privacy Policy</Link>
            <Link href="#" className="text-[10px] text-offwhite/40 hover:text-cyan-accent transition-colors uppercase tracking-technical">Terms of Service</Link>
            <Link href="#" className="text-[10px] text-offwhite/40 hover:text-cyan-accent transition-colors uppercase tracking-technical">Security Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
