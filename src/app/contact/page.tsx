'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import TechnicalButton from '@/components/ui/TechnicalButton';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pb-32">
      <section className="pt-20 pb-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Comms"
            title="Business Inquiries"
            description="Contact the NYKON team for business, or partnership inquiries."
          />
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form */}
          <div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] text-offwhite/40 font-mono uppercase tracking-[0.2em]">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-graphite/40 border border-white/10 p-4 text-offwhite font-satoshi focus:outline-none focus:border-cyan-accent/50 transition-colors"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-offwhite/40 font-mono uppercase tracking-[0.2em]">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-graphite/40 border border-white/10 p-4 text-offwhite font-satoshi focus:outline-none focus:border-cyan-accent/50 transition-colors"
                    placeholder="EMAIL@DOMAIN.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-offwhite/40 font-mono uppercase tracking-[0.2em]">Inquiry Type</label>
                <select className="w-full bg-graphite/40 border border-white/10 p-4 text-offwhite font-satoshi focus:outline-none focus:border-cyan-accent/50 transition-colors appearance-none">
                  <option>BUSINESS SYSTEMS</option>
                  <option>PARTNERSHIP PROGRAM</option>
                  <option>CAREERS DOSSIER</option>
                  <option>OTHER INQUIRY</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-offwhite/40 font-mono uppercase tracking-[0.2em]">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-graphite/40 border border-white/10 p-4 text-offwhite font-satoshi focus:outline-none focus:border-cyan-accent/50 transition-colors resize-none"
                  placeholder="MESSAGE..."
                />
              </div>

              <TechnicalButton type="submit" variant="primary" className="w-full lg:w-auto">
                Send Message
              </TechnicalButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h4 className="text-cyan-accent font-black text-xs uppercase tracking-expanded mb-6">Direct Channels</h4>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-offwhite/20 font-mono uppercase tracking-widest">General Inquiries</span>
                  <span className="text-xl text-offwhite font-black tracking-technical uppercase">ops@nykon.io</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-offwhite/20 font-mono uppercase tracking-widest">Technical Support</span>
                  <span className="text-xl text-offwhite font-black tracking-technical uppercase">engineering@nykon.io</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-cyan-accent font-black text-xs uppercase tracking-expanded mb-6">Global Hubs</h4>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                  <div className="text-offwhite font-black text-sm uppercase tracking-technical">Jos</div>
                  <p className="text-offwhite/40 text-xs font-satoshi leading-relaxed">
                    15 Liberty Blvd, Rayfield<br />
                    Jos 930262, Plateau State<br />
                    Nigeria
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-offwhite font-black text-sm uppercase tracking-technical">London</div>
                  <p className="text-offwhite/40 text-xs font-satoshi leading-relaxed">
                    88 Resolution Way<br />
                    Deptford<br />
                    London SE8 4NT
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-cyan-accent font-black text-xs uppercase tracking-expanded mb-6">Social Nodes</h4>
              <div className="flex gap-8">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a key={social} href="#" className="text-offwhite/40 hover:text-cyan-accent transition-colors text-xs font-black uppercase tracking-expanded">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
