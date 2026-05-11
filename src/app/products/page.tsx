'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import TechnicalButton from '@/components/ui/TechnicalButton';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const products = [
    {
      name: 'WATCHTOWER',
      category: 'Primary System',
      description: 'A workforce management and operational intelligence platform designed for high-stakes distributed operations.',
      features: [
        'Workforce Visibility',
        'Productivity Insights',
        'Operational Analytics',
        'Activity Monitoring',
        'Multi-Platform Support'
      ],
      primary: true
    }
  ];

  return (
    <div className="pb-32">
      <section className="pt-20 pb-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            eyebrow="The Ecosystem"
            title="Operational Systems"
            description="High-performance infrastructure software built for modern enterprise complexity."
          />
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {products.map((product, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-cyan-accent text-xs font-black uppercase tracking-expanded">{product.category}</span>
                  <div className="w-12 h-[1px] bg-cyan-accent" />
                </div>
                <h2 className="text-5xl font-black text-offwhite uppercase tracking-expanded mb-8">{product.name}</h2>
                <p className="text-offwhite/40 text-lg font-satoshi mb-10 leading-relaxed max-w-xl">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-accent" />
                      <span className="text-[10px] text-offwhite/60 font-mono uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>
                <TechnicalButton variant={product.primary ? 'primary' : 'outline'}>
                  System Documentation
                </TechnicalButton>
              </div>
              
              <div className={`aspect-video bg-graphite/40 border border-white/10 relative overflow-hidden group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <div className="absolute inset-0 technical-grid opacity-[0.05]" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border border-cyan-accent/20 rotate-45 group-hover:scale-110 group-hover:border-cyan-accent/50 transition-all duration-700" />
                    <div className="absolute w-32 h-32 border border-cyan-accent/10 rotate-12 group-hover:rotate-45 transition-all duration-1000" />
                 </div>
                 {/* Metadata */}
                 <div className="absolute bottom-4 left-4 font-mono text-[8px] text-offwhite/20 uppercase tracking-[0.3em]">
                    NYKON SYSTEMS // {product.name}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-graphite/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h3 className="text-2xl font-black text-offwhite uppercase tracking-expanded mb-8">Custom Enterprise Integration</h3>
           <p className="text-offwhite/40 font-satoshi max-w-2xl mx-auto mb-12">
             Need a custom system architected for your specific operational requirements? Our engineering team builds bespoke infrastructure for elite organizations.
           </p>
           <TechnicalButton variant="outline">Consult With Engineering</TechnicalButton>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
