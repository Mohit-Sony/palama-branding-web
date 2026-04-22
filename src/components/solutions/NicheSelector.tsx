"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const niches = [
  {
    id: "salon",
    label: "Hair Salon",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&h=600&fit=crop&q=80",
    stat: { value: "3.2×", label: "more bookings" },
    points: ["Smart scheduling & gap-fill", "Stylist commission tracking", "24/7 branded self-booking"],
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=600&fit=crop&q=80",
    stat: { value: "40%", label: "less no-shows" },
    points: ["Automated intake forms", "Treatment notes & history", "Upfront deposit protection"],
  },
  {
    id: "medspa",
    label: "Med Spa",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=600&fit=crop&q=80",
    stat: { value: "100%", label: "data ownership" },
    points: ["Digital consent & waivers", "Before/after photo albums", "Precision client segmentation"],
  },
  {
    id: "pet",
    label: "Pet Grooming",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900&h=600&fit=crop&q=80",
    stat: { value: "2×", label: "repeat clients" },
    points: ["Per-pet profile & breed notes", "Recurring appointment series", "Instant deposit at booking"],
  },
];

export default function NicheSelector() {
  const [active, setActive] = useState(niches[0]);

  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-4">
              Built for your industry
            </p>
            <h2 className="text-4xl md:text-[56px] lg:text-[64px] font-bold text-palama-navy leading-[1.05] tracking-tight">
              One platform.<br />
              <span className="text-slate-400 font-medium">Every specialty.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-palama-muted font-medium max-w-xs leading-relaxed md:text-right">
            Palama adapts to the precise workflows of your industry, not the other way around.
          </p>
        </div>

        {/* Tab Row */}
        <div className="flex flex-wrap gap-3 mb-10">
          {niches.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active.id === n.id
                  ? "bg-palama-navy text-white shadow-md"
                  : "bg-white text-palama-muted border border-slate-200 hover:border-slate-300 hover:text-palama-navy"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 gap-0 rounded-[2rem] overflow-hidden border border-slate-200/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
          >
            {/* Left: Text block */}
            <div className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-between border-r border-slate-100">
              <div>
                <div className="mb-10">
                  <p className="text-5xl md:text-6xl font-bold text-palama-navy tracking-tight">
                    {active.stat.value}
                  </p>
                  <p className="text-base text-palama-muted font-medium mt-1">{active.stat.label}</p>
                </div>
                <ul className="space-y-4">
                  {active.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-palama-navy/80">
                      <span className="mt-1 w-4 h-4 rounded-full border-2 border-palama-navy/20 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-palama-navy" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-12 self-start text-sm font-semibold text-palama-navy border-b border-palama-navy/20 pb-0.5 hover:border-palama-navy transition-colors">
                See {active.label} features →
              </button>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto min-h-[280px]">
              <Image
                src={active.image}
                alt={active.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
