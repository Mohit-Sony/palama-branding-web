"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Using high-quality placeholder images curated to match the requested industries
const row1 = [
  { name: 'Hair Salon', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80' },
  { name: 'Nail Salon', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80' },
  { name: 'Barbers', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Waxing Salon', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
  { name: 'Medspa', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Eyebrow Bar', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80' },
];

const row2 = [
  { name: 'Massage Salon', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Spa', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80' },
  { name: 'Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
  { name: 'Personal Trainer', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Therapy Center', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
  { name: 'Tattooing & Piercing', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80' },
];

const RowItem = ({ item }: { item: { name: string, image: string } }) => (
  <div className="px-2 md:px-3 lg:px-4">
    <Link href="#" className="relative block h-[180px] w-[280px] md:h-[220px] md:w-[320px] lg:h-[240px] lg:w-[350px] shrink-0 overflow-hidden rounded-[20px] group shadow-sm hover:shadow-xl transition-all duration-300">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 md:p-5">
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-white font-semibold text-lg md:text-xl tracking-tight">
            {item.name}
          </span>
          <div className="bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default function BusinessTypes() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto mb-16 px-6 text-center">
        <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy leading-[1.1] tracking-tight">
          A platform suitable for all
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-8 pb-10">
        
        {/* Gradients for fading edges */}
        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-[100px] md:w-[200px] bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[100px] md:w-[200px] bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* First Row (Right to Left) */}
        <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'marquee-left 60s linear infinite' }}>
          {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>

        {/* Second Row (Left to Right) */}
        <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'marquee-right 60s linear infinite' }}>
          {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}
