"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "120K+", label: "Businesses" },
  { value: "450K+", label: "Professionals" },
  { value: "98%", label: "Retention Rate" },
];

export default function HeroSolutions() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-white">
      {/* Subtle top-left radial glow — same as Hero1 */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/30 blur-[120px] -z-10 mix-blend-multiply" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/30 blur-[120px] -z-10 mix-blend-multiply" />

      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        {/* ─── Overture Label ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6"
        >
          Palama Solutions
        </motion.p>

        {/* ─── Headline ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-palama-navy leading-[1.03] tracking-tight max-w-3xl"
          >
            Run your business.<br />
            <span className="text-slate-400 font-medium">Own your future.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm lg:text-right"
          >
            <p className="text-base md:text-lg text-palama-muted font-medium leading-relaxed mb-8">
              A complete command center for Spas, Salons, Med Spas, and Pet Grooming—built to grow your brand, not a marketplace.
            </p>
            <div className="flex lg:justify-end items-center gap-4">
              <button className="bg-palama-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-[0_8px_30px_rgb(16,25,33,0.12)] flex items-center gap-2 group">
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="bg-white text-palama-navy border border-slate-200 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-50 transition-all active:scale-[0.98]">
                Book a demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-100 pt-8 mb-16 md:mb-20"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-palama-navy">{s.value}</span>
              <span className="text-sm text-palama-muted font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── Hero Dashboard Image ─── */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1100px] mx-auto"
        >
          <div className="relative w-full rounded-t-[28px] md:rounded-t-[40px] overflow-hidden bg-white shadow-[0_30px_80px_-10px_rgba(0,0,0,0.12)] border border-slate-100 aspect-[16/9]">
            <Image
              src="/hero-section-admin-panel-desktop.png"
              alt="Palama Admin Dashboard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Bottom fade to seamlessly merge into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
