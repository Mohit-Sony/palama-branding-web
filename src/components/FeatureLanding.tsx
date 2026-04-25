"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import BusinessTypes from './BusinessTypes';

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
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 sm:py-32 ${section.isDark ? 'bg-palama-navy text-white rounded-[4rem] mx-4 sm:mx-8 my-10 relative overflow-hidden' : 'bg-white'}`}
        >
          {section.isDark && (
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          )}
          <div className="max-w-[1240px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-gray-100/20">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{section.title}</h2>
                <p className={`${section.isDark ? 'text-gray-400' : 'text-gray-500'} text-xl font-medium`}>{section.subtitle}</p>
              </div>
              <button className={`${section.isDark ? 'bg-white text-palama-navy' : 'bg-palama-navy text-white'} px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shrink-0`}>
                See more <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {section.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <h3 className="text-xl font-extrabold tracking-tight group-hover:text-purple-600 transition-colors">{item.title}</h3>
                    <p className={`${section.isDark ? 'text-gray-400' : 'text-gray-500'} font-medium leading-relaxed`}>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}


      {/* Premade Platform Section */}
      <div className="pt-24 border-t border-gray-100">
        <BusinessTypes />
      </div>

      {/* Final CTA */}
      <section className="relative py-32 sm:py-56 mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-pink" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center text-white">
          <h2 className="text-5xl sm:text-[80px] font-black tracking-tighter mb-12 leading-[1] max-w-4xl mx-auto">What are you waiting for?</h2>
          <p className="text-xl sm:text-2xl text-white/80 mb-16 max-w-2xl mx-auto font-medium">
            Join the global movement of professionals reclaiming their time and maximizing their sales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="#"
              className="bg-white text-brand-blue px-16 py-7 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
