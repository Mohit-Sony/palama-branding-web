"use client";

import { Sparkle, Scissors, Leaf } from "lucide-react";

const testimonials = [
  {
    company: "Serenity Spa",
    logoColor: "text-palama-navy",
    LogoIcon: Leaf,
    quote: "Palama is by far my favorite automation tool among all the options available. It's incredibly powerful yet remains surprisingly underrated. The efficiency and intelligence it brings to our spa are unmatched.",
    author: "Sarah Johnson",
    role: "Owner, Serenity Spa",
    image: "https://i.pravatar.cc/150?u=sarah&img=44",
    isFeatured: false
  },
  {
    company: "Urban Cuts",
    logoColor: "text-[#1B365D]",
    LogoIcon: Scissors,
    quote: "I recently started using Palama to help our stylists automate their schedules, and the results have been impressive. It streamlines processes, boosts efficiency, and saves a ton of time.",
    author: "David Miller",
    role: "Lead Stylist, Urban Cuts",
    image: "https://i.pravatar.cc/150?u=david&img=11",
    isFeatured: true
  },
  {
    company: "Beauty Bar",
    logoColor: "text-palama-navy",
    LogoIcon: Sparkle,
    quote: "I absolutely love building with Palama—it has enabled me to create incredibly powerful, production-ready workflows that drive efficiency for both my team and our clients. It's a game-changer!",
    author: "Elena Rodriguez",
    role: "Manager, Beauty Bar",
    image: "https://i.pravatar.cc/150?u=elena&img=5",
    isFeatured: false
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold rounded-full border border-gray-200 bg-white text-palama-navy shadow-sm">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy mb-5 leading-[1.1] tracking-tight">
            What our partners are saying
          </h2>
          <p className="text-lg md:text-xl text-palama-muted font-medium">
            Trusted by high-performing salons and spas worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-[2rem] p-8 md:p-10 justify-between min-h-[420px] transition-all duration-300 ${
                t.isFeatured
                  ? 'bg-gradient-to-b from-[#EBF3FC] via-[#F4F6FB] to-[#FAF2F2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60'
                  : 'bg-[#FAFAFA] border border-gray-100/80 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-8">
                  <t.LogoIcon className={`w-6 h-6 stroke-[2.5] ${t.logoColor}`} />
                  <span className={`text-xl font-bold tracking-tight ${t.logoColor}`}>
                    {t.company}
                  </span>
                </div>

                <p className="text-palama-navy/90 font-medium text-[16px] md:text-[17px] leading-[1.7] mb-12">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm shrink-0">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-palama-navy text-[15px] leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-palama-muted text-[14px] font-medium mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
