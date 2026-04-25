"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import BusinessTypes1 from './home1/BusinessTypes1';

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSection {
  id: string;
  title: string;
  subtitle: string;
  isDark?: boolean;
  items?: FeatureItem[];
}

interface Props {
  sections: FeatureSection[];
  children?: React.ReactNode;
}

export default function FeatureLanding({ sections, children }: Props) {
  return (
    <div className="bg-white text-palama-navy font-sans overflow-hidden">

      {children}

      {/* Feature Sections */}
      <div className="space-y-0">
        {sections.map((section, index) => {
          const bgColors = [
            'bg-white',
            'bg-[#F8F9FF]', // Ultra-subtle Blue
            'bg-[#FFF9FB]', // Ultra-subtle Pink
            'bg-white',
            'bg-[#F9FAFB]', // Ultra-subtle Gray
          ];
          const accentColors = [
            'text-brand-blue',
            'text-brand-pink',
            'text-brand-blue-light',
            'text-brand-pink-light',
            'text-palama-navy',
          ];

          const currentBg = section.isDark ? 'bg-palama-navy' : bgColors[index % bgColors.length];
          const currentAccent = accentColors[index % accentColors.length];

          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative py-24 sm:py-32 ${currentBg} ${section.isDark ? 'text-white overflow-hidden' : 'text-palama-navy'}`}
            >
              {section.isDark && (
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              )}

              <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
                {/* Editorial Heading Structure */}
                <div className="mb-12 sm:mb-16">
                  <p className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${section.isDark ? 'text-brand-pink-light/60' : 'text-brand-pink'}`}>
                    {section.isDark ? 'Enterprise Module' : 'System Feature'}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight max-w-3xl ${section.isDark ? 'text-white' : 'text-palama-navy'}`}>
                      {section.title}
                    </h2>
                    <p className={`text-base md:text-lg font-medium leading-relaxed max-w-sm md:text-right ${section.isDark ? 'text-white/60' : 'text-palama-muted'}`}>
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {section.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {section.items.map((item, i) => (
                      <div key={i} className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between min-h-[300px] ${section.isDark ? 'bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/20' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl'}`}>
                        <div>
                          <div className={`w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-8 transition-all duration-500 ${section.isDark ? 'bg-white/10 group-hover:bg-white group-hover:text-palama-navy' : 'bg-gray-50 group-hover:bg-palama-navy group-hover:text-white'}`}>
                            <CheckCircle2 className={`w-7 h-7 ${!section.isDark && currentAccent + ' group-hover:text-white'}`} />
                          </div>
                          <h3 className={`text-xl font-bold tracking-tight mb-4 ${section.isDark ? 'text-white' : 'text-palama-navy'}`}>{item.title}</h3>
                          <p className={`text-base font-medium leading-relaxed ${section.isDark ? 'text-white/50' : 'text-palama-muted'}`}>
                            {item.description}
                          </p>
                        </div>

                        <div className={`mt-6 flex items-center gap-3 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 ${section.isDark ? 'text-brand-pink-light' : currentAccent}`}>
                          Learn more <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Premade Platform Section */}
      <div className="pt-24 border-t border-gray-100 bg-white">
        <BusinessTypes1 />
      </div>

      {/* Section 13: Final CTA (Editorial Impact) */}
      <section className="relative py-32 sm:py-64 bg-palama-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-pink/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-(--spacing-container) mx-auto px-6 text-center text-white">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-pink mb-12">Limited Time Beta</p>
          <h2 className="text-[64px] sm:text-[100px] lg:text-[120px] font-extrabold tracking-tighter mb-16 leading-[0.85] max-w-5xl mx-auto">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink-light">transform</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the global movement of professionals reclaiming their time and maximizing their sales with the world's most elegant booking engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link
              href="/pricing"
              className="bg-white text-palama-navy px-16 py-8 rounded-full text-2xl font-extrabold hover:scale-105 transition-transform shadow-[0_30px_60px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              Get started for free
            </Link>
            <Link href="/contact-sales" className="cursor-pointer">
              <button className="text-white font-extrabold text-2xl flex items-center gap-4 hover:gap-8 transition-all border-b-4 border-white/20 pb-2 cursor-pointer">
                Book a demo <ArrowRight className="w-8 h-8" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
