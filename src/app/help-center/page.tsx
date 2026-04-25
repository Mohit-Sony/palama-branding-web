"use client";

import React from 'react';
import Link from 'next/link';
import { Search, BookOpen, MessageSquare, Zap, Shield, User, CreditCard, ArrowRight } from 'lucide-react';

export default function HelpCenterPage() {
  const categories = [
    { title: "Getting Started", icon: Zap, count: 12, desc: "Everything you need to set up your account and take your first booking." },
    { title: "Calendar & Bookings", icon: BookOpen, count: 24, desc: "Master the scheduling engine, service settings, and client appointments." },
    { title: "Payments & POS", icon: CreditCard, count: 18, desc: "How to process transactions, manage deposits, and connect your hardware." },
    { title: "Team Management", icon: User, count: 15, desc: "Setting up staff profiles, permissions, and tracking performance." },
    { title: "Security & GDPR", icon: Shield, count: 8, desc: "Learn how we protect your data and stay compliant with global regulations." },
    { title: "Technical Support", icon: MessageSquare, count: 10, desc: "Troubleshooting common issues and connecting with our specialist team." },
  ];

  return (
    <div className="bg-white text-palama-navy min-h-screen">
      {/* Search Hero */}
      <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 bg-palama-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-pink/20" />
        <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter mb-10 leading-tight">
              How can we <span className="text-brand-pink italic">help</span> you?
            </h1>
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-brand-pink transition-colors" />
              <input 
                type="text" 
                placeholder="Search for articles, guides, and more..."
                className="w-full bg-white text-palama-navy px-16 py-6 rounded-full text-lg font-medium focus:outline-hidden focus:ring-4 focus:ring-brand-pink/20 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 sm:py-32">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                href="#"
                className="group p-10 rounded-[3rem] border border-gray-100 hover:border-white bg-white hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-palama-navy group-hover:text-white transition-colors flex items-center justify-center mb-8">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{cat.title}</h3>
                <p className="text-palama-muted font-medium mb-6 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-400">{cat.count} articles</span>
                  <div className="text-palama-navy opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all font-bold text-sm flex items-center gap-2">
                    Browse <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 sm:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Can't find what you're looking for?</h2>
              <p className="text-xl text-palama-muted font-medium leading-relaxed">
                Our support team is available 24/7 to help you with any questions or technical issues you might have.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
              <button className="bg-palama-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Chat with us
              </button>
              <button className="bg-white text-palama-navy border border-gray-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                Send an email
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
