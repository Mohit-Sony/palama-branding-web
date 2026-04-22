"use client";

import { motion } from "framer-motion";

export default function FinalCTA1() {
  return (
    <section className="py-24 md:py-48 bg-palama-navy text-center relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] max-w-[800px] bg-gradient-to-tr from-slate-600/30 via-slate-500/20 to-slate-400/10 rounded-[100%] blur-[120px] -z-10" />

      <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-[64px] lg:text-[80px] font-bold text-white mb-8 max-w-5xl mx-auto leading-[1.05] tracking-tight">
            Ready to own your brand?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-3xl mx-auto font-medium">
            Launch your custom-branded ecosystem today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-palama-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-slate-100 transition-all active:scale-[0.98] shadow-2xl">
              Launch Your Ecosystem
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all active:scale-[0.98]">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
