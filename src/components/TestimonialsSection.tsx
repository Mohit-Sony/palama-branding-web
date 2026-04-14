"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Palama has completely transformed how we run our spa. The booking experience is seamless for our clients.",
    author: "Sarah Johnson",
    role: "Owner, Serenity Spa",
    rating: 5
  },
  {
    quote: "The marketplace discovery feature brought us 30% more clients in the first three months. Highly recommend!",
    author: "David Miller",
    role: "Lead Stylist, Urban Cuts",
    rating: 5
  },
  {
    quote: "Simplified our finances and inventory management. It's the only tool we need for our business.",
    author: "Elena Rodriguez",
    role: "Manager, Beauty Bar",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy leading-[1.1] tracking-tight">
              Loved by businesses worldwide
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-palama-navy" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-6 h-6 text-palama-navy" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col space-y-10 group">
              <div className="flex gap-1.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl md:text-[28px] text-palama-navy font-bold leading-tight tracking-tight group-hover:text-palama-navy/80 transition-colors">
                "{t.quote}"
              </p>
              <div className="pt-4">
                <p className="font-extrabold text-palama-navy text-lg">{t.author}</p>
                <p className="text-palama-muted font-bold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
