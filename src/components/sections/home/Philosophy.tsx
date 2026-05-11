import React from 'react';
import SectionHeader from '../../ui/SectionHeader';
import TechnicalButton from '../../ui/TechnicalButton';

const Philosophy: React.FC = () => {
  const principles = [
    { title: 'Clarity over Chaos', desc: 'We build systems that distill complex noise into clear, actionable visibility.' },
    { title: 'Systems over Guesswork', desc: 'Predictable output is the result of rigorous, well-engineered infrastructure.' },
    { title: 'Data-Informed Ops', desc: 'Every operational move should be backed by technical intelligence.' },
    { title: 'Disciplined Execution', desc: 'Precision is not an accident; it is the product of disciplined system design.' }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionHeader 
              eyebrow="Our Philosophy"
              title="Disciplined Operational Excellence"
              description="Nykon is guided by a set of core engineering principles that define how we build and how we operate."
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {principles.map((p, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-offwhite font-black text-sm uppercase tracking-technical border-b border-cyan-accent/20 pb-4">
                  {p.title}
                </h4>
                <p className="text-offwhite/40 text-sm font-satoshi leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-32 p-12 lg:p-20 bg-graphite border border-white/10 relative overflow-hidden group">
          {/* Blueprint Detail */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-black text-offwhite uppercase tracking-expanded mb-6">
                Building the infrastructure behind modern operations.
              </h3>
              <p className="text-offwhite/40 font-satoshi">
                Ready to transform your organizational visibility? Join the elite organizations scaling with Nykon systems.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <TechnicalButton variant="primary">Contact Us</TechnicalButton>
            </div>
          </div>
          
          {/* Technical Detail */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-accent/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
