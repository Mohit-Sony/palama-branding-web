"use client";

import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function MarketplaceSection() {
  return (
    <section className="py-24 md:py-40 overflow-hidden bg-white">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 space-y-10 order-2 lg:order-1">
            <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy leading-[1.1] tracking-tight">
              Get discovered on the world's most popular marketplace
            </h2>
            <p className="text-lg md:text-xl text-palama-muted leading-relaxed font-medium">
              Boost your visibility and attract new clients. Join the platform where millions of beauty and wellness enthusiasts book their appointments every month.
            </p>
            <ul className="space-y-6">
              {[
                "Reach millions of active users worldwide",
                "Fill empty slots with smart marketing tools",
                "Collect and showcase real client reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-palama-navy font-bold text-[17px]">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-8 pt-4">
              <button className="bg-white text-palama-navy border-2 border-palama-navy px-10 py-5 rounded-full text-[17px] font-bold hover:bg-palama-navy hover:text-white transition-all active:scale-95 shadow-md">
                Learn about Marketplace
              </button>
              <Link href="#" className="flex items-center gap-2 text-palama-navy font-bold text-[15px] hover:gap-4 transition-all">
                See all features <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 perspective-1000">
            <div className="relative group">
              <div className="relative rounded-[56px] overflow-hidden shadow-[0_48px_96px_-32px_rgba(0,0,0,0.15)] transform rotate-2 group-hover:rotate-0 transition-transform duration-1000 ease-out border-[12px] border-white">
                <Image
                  src="/assets/marketplace-salon.png"
                  alt="Modern Salon Marketplace"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-8 -left-12 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-50 max-w-[280px] animate-float">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold text-palama-navy mb-2">"Best salon in town!"</p>
                <div className="text-sm text-palama-muted font-medium">Sarah booked via Palama</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
