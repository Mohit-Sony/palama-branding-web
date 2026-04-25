"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Rocket, Clock } from 'lucide-react';

export default function ForCustomersComingSoon() {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col items-center pt-32 md:pt-48 pb-20 relative overflow-hidden px-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center mx-auto mb-12"
        >
          <Rocket className="w-10 h-10 text-brand-pink animate-bounce" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-[88px] font-extrabold tracking-tighter leading-[0.9] text-palama-navy mb-8">
            Experience for <br />
            <span className="text-brand-pink italic">customers</span>
          </h1>
          <p className="text-xl md:text-2xl text-palama-muted font-medium mb-12 leading-relaxed">
            You can book appointments directly on each respective brand's website. <br className="hidden md:block" />
            A centralized brand catalogue is coming soon to make discovery even easier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="px-8 py-4 bg-palama-navy/5 rounded-full border border-palama-navy/10 flex items-center gap-3">
            <Clock className="w-5 h-5 text-palama-navy" />
            <span className="font-bold text-palama-navy">Coming Soon • Q3 2026</span>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-palama-navy hover:text-brand-pink transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Feature Teasers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left"
        >
          {[
            { title: "One-Click Booking", icon: Sparkles },
            { title: "Smart Discovery", icon: Sparkles },
            { title: "Easy Rescheduling", icon: Sparkles }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-brand-pink" />
              </div>
              <h3 className="font-bold text-lg text-palama-navy mb-2">{item.title}</h3>
              <p className="text-sm text-palama-muted leading-relaxed font-medium">Reimagined for the modern consumer.</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
