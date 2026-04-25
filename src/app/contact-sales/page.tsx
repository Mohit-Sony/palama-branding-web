"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Globe, ArrowRight, CheckCircle2, Headphones, Users } from 'lucide-react';

export default function ContactSalesPage() {
  return (
    <div className="bg-white text-palama-navy min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 bg-[#F9FAFB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue">Global Sales Team</span>
              </div>
              <h1 className="text-5xl md:text-[88px] font-extrabold tracking-tighter leading-[0.9] mb-10">
                Let's scale <br />
                <span className="text-brand-blue italic">together.</span>
              </h1>
              <p className="text-xl md:text-2xl text-palama-muted font-medium mb-12 leading-relaxed max-w-xl">
                Our specialists are ready to help you transition to the world's most powerful booking engine.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Headphones, title: "White-glove onboarding", desc: "We'll handle the migration of all your client and staff data." },
                  { icon: Globe, title: "Global infrastructure", desc: "Built to support multi-location franchises and enterprises." },
                  { icon: Users, title: "Priority support", desc: "Dedicated account managers for businesses with 10+ team members." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 tracking-tight">{item.title}</h3>
                      <p className="text-palama-muted font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-12"
            >
              <h2 className="text-3xl font-extrabold tracking-tight mb-8">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-palama-muted ml-1">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-blue outline-none font-medium" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-palama-muted ml-1">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-blue outline-none font-medium" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-palama-muted ml-1">Work Email</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-blue outline-none font-medium" placeholder="jane@yourbrand.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-palama-muted ml-1">Business Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-blue outline-none font-medium" placeholder="Your Salon Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-palama-muted ml-1">Tell us about your business</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-brand-blue outline-none font-medium resize-none" placeholder="How many locations and team members do you have?" />
                </div>
                <button className="w-full bg-brand-blue text-white py-6 rounded-2xl font-extrabold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3">
                  Submit Request <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <p className="text-center text-[10px] font-extrabold tracking-[0.4em] uppercase text-palama-muted mb-12">Trusted by global leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            {/* Logos would go here */}
            <span className="text-3xl font-extrabold tracking-tighter">VERSACE</span>
            <span className="text-3xl font-extrabold tracking-tighter">DIOR</span>
            <span className="text-3xl font-extrabold tracking-tighter">L'OREAL</span>
            <span className="text-3xl font-extrabold tracking-tighter">DYSON</span>
          </div>
        </div>
      </section>
    </div>
  );
}
