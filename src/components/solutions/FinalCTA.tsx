"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">

        {/* Large Editorial CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-palama-navy rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">

            {/* Headline */}
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-5">
                Get started today
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight">
                Ready to take control<br />
                of your business?
              </h2>
            </div>

            {/* Right side */}
            <div className="shrink-0 flex flex-col gap-6 lg:items-end">
              <p className="text-base text-slate-400 font-medium max-w-xs lg:text-right leading-relaxed">
                Join thousands of professionals. Free data migration. No lock-in contracts. Setup in minutes.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-3">
                <button className="bg-white text-palama-navy px-8 py-4 rounded-full text-sm font-bold hover:bg-slate-100 transition-all active:scale-[0.98] flex items-center gap-2 group">
                  Start free trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/5 transition-all active:scale-[0.98]">
                  Book a demo
                </button>
              </div>
            </div>
          </div>

          {/* Bottom checklist */}
          <div className="relative z-10 mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-3">
            {["14-day free trial", "Free data migration", "Cancel anytime", "No hidden fees"].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-400">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 text-[9px] font-bold">✓</span>
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
