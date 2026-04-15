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
  <div className="px-1.5 sm:px-2 md:px-3">
    <Link
      href="#"
      className="relative block shrink-0 overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[20px] group shadow-sm hover:shadow-xl transition-all duration-300"
      style={{ height: 'var(--card-h)', width: 'var(--card-w)' }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:p-4 md:p-5">
        <div className="flex flex-row items-center justify-between gap-1">
          <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-tight leading-tight">
            {item.name}
          </span>
          <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 shrink-0">
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default function BusinessTypes() {
  return (
    <section className="py-14 sm:py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6 text-center">
        <h2 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-palama-navy leading-[1.1] tracking-tight">
          A platform suitable for all
        </h2>
      </div>

      {/* CSS custom properties for card sizes at each breakpoint */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --card-h: 140px;
          --card-w: 185px;
        }
        @media (min-width: 480px) {
          :root {
            --card-h: 160px;
            --card-w: 220px;
          }
        }
        @media (min-width: 768px) {
          :root {
            --card-h: 200px;
            --card-w: 290px;
          }
        }
        @media (min-width: 1024px) {
          :root {
            --card-h: 220px;
            --card-w: 330px;
          }
        }
        @media (min-width: 1280px) {
          :root {
            --card-h: 240px;
            --card-w: 350px;
          }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .pause-on-hover:hover {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="relative w-full flex flex-col gap-4 sm:gap-5 md:gap-8 pb-6 md:pb-10">

        {/* Gradients for fading edges */}
        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-[60px] sm:w-[100px] md:w-[200px] bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[60px] sm:w-[100px] md:w-[200px] bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* First Row (Right to Left) */}
        <div className="flex w-max pause-on-hover" style={{ animation: 'marquee-left 60s linear infinite' }}>
          {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>

        {/* Second Row (Left to Right) */}
        <div className="flex w-max pause-on-hover" style={{ animation: 'marquee-right 60s linear infinite' }}>
          {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
