"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Switching to Palama was the best decision for our Med Spa. We finally have a booking experience as premium as our treatments. Revenue is up 30% since we dropped the marketplace.",
    author: "Dr. Sarah Jenkins",
    role: "Founder, Lumina Aesthetics",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&q=80",
    company: "Lumina Aesthetics",
    stat: "+30%",
    statLabel: "revenue growth",
  },
  {
    quote: "The direct payments have completely transformed our cash flow. Clients book us directly, and we keep 100% of the value we've built — no platform stealing our regulars.",
    author: "Marcus Thorne",
    role: "Owner, The Modern Barber",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
    company: "The Modern Barber",
    stat: "₹0",
    statLabel: "marketplace fees",
  },
  {
    quote: "We used to juggle 4 apps to run our grooming business. Now everything is in one place and no-shows are down 60% thanks to the integrated deposits feature.",
    author: "Elena Rodriguez",
    role: "Director, Paws & Co.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
    company: "Paws & Co.",
    stat: "−60%",
    statLabel: "no-shows",
  },
];

export default function TestimonialSlider() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-[52px] font-bold text-palama-navy leading-[1.05] tracking-tight">
              What our partners<br />
              <span className="text-slate-400 font-medium">are saying.</span>
            </h2>
          </div>
          {/* Navigation */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx ? "w-8 h-3 bg-palama-navy" : "w-3 h-3 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Quote Card — spans 2 cols */}
            <div className="md:col-span-2 bg-slate-50 rounded-[2rem] p-10 md:p-14 border border-slate-100 flex flex-col justify-between min-h-[320px]">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-palama-navy leading-[1.5] mb-10">
                "{testimonials[idx].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 relative">
                  <Image
                    src={testimonials[idx].image}
                    alt={testimonials[idx].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-palama-navy">{testimonials[idx].author}</p>
                  <p className="text-sm text-palama-muted font-medium">{testimonials[idx].role}</p>
                </div>
              </div>
            </div>

            {/* Stat Card */}
            <div className="bg-palama-navy rounded-[2rem] p-10 md:p-12 border border-palama-navy flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative z-10">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">
                  {testimonials[idx].company}
                </p>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">
                  {testimonials[idx].stat}
                </p>
                <p className="text-slate-400 font-medium mt-3">{testimonials[idx].statLabel}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
