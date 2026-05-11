import React from 'react';
import SectionHeader from '../../ui/SectionHeader';

const WhyNykon: React.FC = () => {
  const reasons = [
    {
      title: 'Precision-Driven Engineering',
      description: 'We don’t believe in guesswork. Every system we build is architected with mathematical precision and technical rigor.'
    },
    {
      title: 'Operational Intelligence',
      description: 'Visibility is the key to control. Our platforms provide the data-driven clarity needed to make high-stakes decisions.'
    },
    {
      title: 'Scalable System Architecture',
      description: 'Our infrastructure is built to handle growth. From day one, we design for massive scale and technical longevity.'
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="The Nykon Advantage"
          title="Why Leading Organizations Trust Our Systems"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-graphite/20 border border-white/5 hover:border-cyan-accent/20 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center mb-8 bg-cyan-accent/10 border border-cyan-accent/20">
                <div className="w-4 h-4 bg-cyan-accent" />
              </div>
              <h3 className="text-xl font-black text-offwhite uppercase tracking-technical mb-6">
                {reason.title}
              </h3>
              <p className="text-offwhite/40 text-sm font-satoshi leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNykon;
