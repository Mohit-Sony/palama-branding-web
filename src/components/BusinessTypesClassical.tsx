"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const businesses = [
  { name: 'Hair Salon', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80' },
  { name: 'Nail Salon', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80' },
  { name: 'Barbers', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Waxing Salon', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
  { name: 'Medspa', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Eyebrow Bar', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80' },
  { name: 'Massage Salon', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Spa', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80' },
  { name: 'Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
  { name: 'Personal Trainer', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Therapy Center', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
  { name: 'Tattooing & Piercing', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80' },
];

export default function BusinessTypesClassical() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-bold text-palama-navy leading-[1.1] tracking-tight mb-4">
              A platform suitable for all
            </h2>
            <p className="text-lg md:text-xl text-palama-muted font-medium">
              Whether you run a solo studio or a multi-location enterprise, Palama provides the tailored tools you need to succeed.
            </p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-palama-navy font-bold hover:text-opacity-80 transition-colors pb-2">
            View all solutions <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Grid layout for all viewports, compact on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {businesses.map((business, i) => (
            <Link 
              key={i} 
              href="#"
              className="group relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[16px] md:rounded-[24px] shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img 
                src={business.image} 
                alt={business.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-6 lg:p-8">
                <h3 className="text-[15px] sm:text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-2 transform transition-transform duration-500 group-hover:md:-translate-y-1">
                  {business.name}
                </h3>
                <div className="hidden md:flex items-center text-white/90 font-medium text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore solution
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="#" className="flex md:hidden items-center justify-center w-full py-4 mt-8 text-palama-navy font-bold bg-gray-50 rounded-full border border-gray-200 active:scale-95 transition-transform">
          View all solutions <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}
