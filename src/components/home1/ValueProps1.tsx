"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function ValueProps1() {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-[56px] lg:text-[72px] font-bold text-palama-navy tracking-tight leading-[1.05]">
              Concierge onboarding.<br className="hidden md:block" />
              <span className="text-slate-400">Complete brand control.</span>
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-4 rounded-full border border-slate-200 text-base font-bold flex items-center gap-3 hover:bg-slate-50 transition-colors w-fit text-palama-navy"
          >
            Speak to a specialist <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Value Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Box 1: White Glove Onboarding */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 h-[480px] relative overflow-hidden group transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-palama-navy mb-4 max-w-[340px] relative z-10 leading-tight tracking-tight">
              White-glove migration in under 7 days.
            </h3>
            
            <div className="absolute -bottom-4 right-8 left-8 bg-white rounded-t-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 transition-transform duration-700 ease-out group-hover:-translate-y-6 border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-palama-navy font-bold text-sm bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">Migration Status</span>
                <span className="text-emerald-500 font-bold text-sm">100% Complete</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-8">
                <div className="w-[100%] h-full bg-palama-navy rounded-full relative overflow-hidden">
                   <div className="absolute top-0 left-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                  <CheckCircle className="text-emerald-500 w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-palama-navy text-xl tracking-tight mb-1">Your ecosystem is live</p>
                  <p className="text-sm text-slate-500 font-medium">Data imported. Team trained.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Total Brand Control */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-palama-navy rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 h-[480px] relative overflow-hidden group shadow-sm"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-[380px] relative z-10 leading-tight tracking-tight">
              Your identity, everywhere. Uncompromised.
            </h3>
            
            <div className="absolute top-[45%] md:top-1/2 left-8 right-8 bg-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-700 ease-out group-hover:scale-105 border border-white/20">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-palama-navy shadow-xl">Logo</div>
                  <span className="font-bold text-white text-base">Brand Settings</span>
                </div>
              </div>
              
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-white/80">Primary App Color</span>
                   <div className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-white ring-2 ring-offset-2 ring-offset-palama-navy ring-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></span>
                      <span className="w-6 h-6 rounded-full bg-slate-500 opacity-50"></span>
                      <span className="w-6 h-6 rounded-full bg-slate-800 opacity-50"></span>
                   </div>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-white/80">Custom Domain</span>
                   <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white font-medium text-sm">
                      booking.yourbrand.com
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
