"use client";

import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function GDPRPage() {
  return (
    <div className="bg-white text-palama-navy min-h-screen">
      <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 bg-palama-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-pink/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">GDPR Compliance</h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed">
            How we protect the privacy of our EU users and ensure total compliance with global data protection standards.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {[
              { title: "Right to Access", icon: Eye, desc: "Users can request a copy of all personal data we hold about them at any time." },
              { title: "Right to be Forgotten", icon: Lock, desc: "We provide easy mechanisms for users to request the permanent deletion of their data." },
              { title: "Data Portability", icon: FileText, desc: "Export your business and client data in standard formats for use elsewhere." },
              { title: "Privacy by Design", icon: ShieldCheck, desc: "Security and privacy are built into our platform from the very first line of code." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-palama-navy group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-palama-muted font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-8">Our Commitment to GDPR</h2>
            <p className="mb-8">
              The General Data Protection Regulation (GDPR) is the most significant change in data privacy regulation in 20 years. At Palama, we have embraced these changes as an opportunity to demonstrate our commitment to security and user trust.
            </p>
            <p className="mb-8">
              We act as both a **Data Controller** (for our own business data) and a **Data Processor** (for the data you store about your clients). In both roles, we adhere to strict security protocols, including:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-12">
              <li className="font-medium text-palama-navy/80">Regular security audits and penetration testing.</li>
              <li className="font-medium text-palama-navy/80">Data encryption at rest and in transit (AES-256).</li>
              <li className="font-medium text-palama-navy/80">Strict internal access controls and employee training.</li>
              <li className="font-medium text-palama-navy/80">Clear data processing agreements with all sub-processors.</li>
            </ul>

            <div className="p-12 bg-brand-bg-subtle rounded-[3.5rem] border border-brand-blue/10">
              <h3 className="text-2xl font-extrabold mb-6">Need a Data Processing Agreement (DPA)?</h3>
              <p className="text-lg font-medium text-palama-navy/70 mb-10 leading-relaxed">
                We provide a pre-signed DPA for all our business customers to ensure you remain compliant while using our software. Download it directly from your dashboard or request a copy from our team.
              </p>
              <button className="bg-palama-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                Request DPA
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
