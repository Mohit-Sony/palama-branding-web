"use client";

import { motion } from "framer-motion";

const points = [
  {
    num: "01",
    title: "You own your data",
    body: "Your client list is your most valuable asset. Unlike platforms that hold your data hostage, Palama lets you export, segment, and utilize every byte — no permissions required.",
  },
  {
    num: "02",
    title: "Zero marketplace hijacking",
    body: "We never show competitors next to your listing. When a client lands on your booking page, they see only you. No 'you might also like' cannibalization.",
  },
  {
    num: "03",
    title: "Payment comes directly to you",
    body: "Revenue flows straight to your bank account the moment a transaction clears. No platform holding periods, no middleman float — your cash, your timeline.",
  },
];

export default function ValuePropHighlights() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ─── Left: Copy ─── */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-4"
            >
              The Palama Difference
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-[52px] lg:text-[60px] font-bold text-palama-navy leading-[1.05] tracking-tight mb-6"
            >
              Your brand.<br />
              <span className="text-slate-400 font-medium">Not a marketplace.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-palama-muted font-medium leading-relaxed mb-16"
            >
              Stop paying rent on your own clients. We build the infrastructure; you own the relationship and the revenue.
            </motion.p>

            <div className="space-y-10">
              {points.map((pt, i) => (
                <motion.div
                  key={pt.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex gap-7 group"
                >
                  <div className="shrink-0 pt-0.5">
                    <span className="text-[11px] font-bold tracking-widest text-slate-300 group-hover:text-palama-muted transition-colors">
                      {pt.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-palama-navy mb-2">{pt.title}</h3>
                    <p className="text-base text-palama-muted font-medium leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Right: Dark Card ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-palama-navy rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
              {/* Subtle grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-12">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">Before Palama</p>
                  {[
                    "Marketplace takes 15–30% commission",
                    "Competitors shown next to your listing",
                    "Payouts held for 3–7 days",
                    "You don't own your client data",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs font-bold leading-none">×</span>
                      </span>
                      <span className="text-sm font-medium text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">With Palama</p>
                  {[
                    "100% of revenue goes to you",
                    "Your page shows only your brand",
                    "Instant direct bank payouts",
                    "Full data ownership, always",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-emerald-400 text-xs font-bold leading-none">✓</span>
                      </span>
                      <span className="text-sm font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
