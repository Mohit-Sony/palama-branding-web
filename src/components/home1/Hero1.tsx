"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero1() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Premium minimal background texture/gradient */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/30 blur-[120px] -z-10 mix-blend-multiply" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/30 blur-[120px] -z-10 mix-blend-multiply" />

      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8 text-center relative z-10">


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-palama-navy leading-[1.05] mb-6 max-w-5xl mx-auto tracking-tight"
        >
          Build Your Brand, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-palama-navy via-slate-700 to-palama-navy">Not a Marketplace.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-palama-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Get a powerful, custom-branded booking system that works exclusively for you. Own your data, own your clients, and manage your operations seamlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20"
        >
          <button className="w-full sm:w-auto bg-palama-navy text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-all active:scale-[0.98] shadow-[0_8px_30px_rgb(16,25,33,0.12)]">
            Launch Your Ecosystem
          </button>
          <button className="w-full sm:w-auto bg-white text-palama-navy border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
            <Play className="w-4 h-4 fill-current" />
            Watch the vision
          </button>
        </motion.div>

        {/* Dashboard Visual Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1100px] mx-auto px-2 sm:px-0"
        >
          <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden bg-white shadow-[0_20px_80px_-10px_rgba(0,0,0,0.1)] border border-slate-100 aspect-[16/10] flex items-center justify-center">
             <Image
                src="/hero-section-admin-panel-desktop.png"
                alt="Palama Platform Interface"
                fill
                className="object-cover object-top"
                priority
              />
          </div>
          
          {/* Subtle reflection/shadow element */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-slate-200/50 blur-[40px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
