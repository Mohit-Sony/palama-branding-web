"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, CreditCard, Mail, BarChart, CheckCircle2, Play, Star, ArrowRight, MessageSquare, ShieldCheck, Headphones, Zap, Users, Layout, Smartphone, ChevronLeft, ChevronDown } from 'lucide-react';
import { BusinessTypeData } from '@/data/businessTypes';
import BusinessTypes1 from './home1/BusinessTypes1';

interface Props {
  data: BusinessTypeData;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F9FAFB] rounded-[2rem] border border-transparent shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-10 cursor-pointer list-none font-bold text-2xl tracking-tight text-palama-navy hover:text-brand-pink transition-colors text-left"
      >
        {question}
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-gray-100 ${isOpen ? 'bg-brand-pink text-white border-brand-pink' : 'bg-white text-palama-navy'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-10 pb-10 text-palama-muted font-medium text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MarqueeRow = ({ children, direction = "left", duration = 30 }: { children: React.ReactNode, direction?: "left" | "right", duration?: number }) => (
  <div className="relative flex overflow-hidden group">
    <motion.div
      animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="flex gap-8 whitespace-nowrap px-4"
    >
      {children}
      {children}
      {children}
    </motion.div>
  </div>
);

export default function BusinessTypeLanding({ data }: Props) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    if (activeTestimonial < data.testimonials.length - 1) {
      setActiveTestimonial(activeTestimonial + 1);
    } else {
      setActiveTestimonial(0);
    }
  };

  const prevTestimonial = () => {
    if (activeTestimonial > 0) {
      setActiveTestimonial(activeTestimonial - 1);
    } else {
      setActiveTestimonial(data.testimonials.length - 1);
    }
  };

  return (
    <div className="bg-white text-palama-navy overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/10 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-palama-muted">Empowering {data.name}s</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[48px] sm:text-[72px] lg:text-[88px] font-extrabold tracking-tighter leading-[0.95] max-w-[1100px] mx-auto mb-10"
            >
              Book <span className="text-brand-pink italic">{data.name.toLowerCase()}</span> and beauty services almost anywhere.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-palama-muted mb-12 font-medium max-w-2xl"
            >
              The world's most powerful booking engine, refined for professionals like you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
            >
              <Link
                href="#"
                className="bg-palama-navy text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-2xl hover:scale-105"
              >
                Get started for free
              </Link>
              <button className="text-palama-navy font-bold flex items-center gap-2 border-b-2 border-palama-navy pb-0.5 hover:gap-4 transition-all">
                Watch how it works <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[1100px] mx-auto rounded-[3rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] bg-white border-8 border-white group"
            >
              <img
                src={data.hero.image}
                alt={data.name}
                className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <button className="w-24 h-24 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border border-white/40">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Best for businesses (Modern Grid) */}
      <section className="py-24 sm:py-32 bg-[#F9FAFB]">
        <div className="max-w-(--spacing-container) mx-auto px-6 mb-24">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-4">Built for Professionals</p>
            <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1.05] max-w-4xl">
              Best for <span className="text-brand-pink italic">businesses</span> that offer services like these
            </h2>
          </div>
        </div>

        <MarqueeRow direction="left" duration={40}>
          {data.professionals.map((prof, i) => (
            <div key={i} className="flex flex-col items-center gap-8 min-w-[240px] group">
              <div className="size-56 rounded-full overflow-hidden border-4 border-white shadow-xl ring-8 ring-pink-50/50 group-hover:ring-pink-100 transition-all duration-500">
                <img src={prof.image} alt={prof.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-palama-navy mb-1">{prof.name}</h3>
                <p className="text-[10px] font-extrabold text-palama-muted uppercase tracking-[0.25em]">{prof.role}</p>
              </div>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* Section 3: Trusted by - Modern Bento Style */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-(--spacing-container) mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1.05] max-w-3xl">
              Trusted by 100,000+ top <br className="hidden md:block" /> {data.name.toLowerCase()} owners
            </h2>
            <p className="text-xl text-palama-muted font-medium max-w-sm md:text-right leading-relaxed">
              Powering the world's most successful {data.name.toLowerCase()} brands with unrivaled technology.
            </p>
          </div>
        </div>

        <MarqueeRow direction="right" duration={60}>
          {data.trustCards.map((card, i) => (
            <div
              key={i}
              className="min-w-[400px] bg-[#F9FAFB] rounded-[2.5rem] overflow-hidden border border-transparent hover:border-white hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-700 group mx-4"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-lg">Verified Partner</div>
              </div>
              <div className="p-10">
                <h3 className="font-bold text-2xl mb-2 tracking-tight text-palama-navy">{card.title}</h3>
                <div className="flex items-center gap-2 text-palama-muted font-bold text-sm uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  {card.location}
                </div>
              </div>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* Section 4 & 5: Connect & All-in-one (Editorial Split) */}
      <section className="py-24 sm:py-32 bg-[#F9FAFB]">
        <div className="max-w-(--spacing-container) mx-auto px-6 space-y-40">
          {/* Connect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-brand-pink/5 blur-[120px] rounded-full" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white bg-white">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" alt="Booking" className="w-full" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Customer Engagement</p>
              <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1.05] mb-10">Connect with <br /><span className="text-brand-pink italic">your customers</span></h2>
              <div className="space-y-10 mb-12">
                {[
                  { icon: Calendar, title: "Smart booking", desc: "Automate your calendar with 24/7 online booking across all platforms. Reduce phone time by 75%." },
                  { icon: Zap, title: "Automated marketing", desc: "Keep clients coming back with smart rebooking and loyalty tools designed for conversion." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:bg-palama-navy group-hover:text-white transition-all duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-2 tracking-tight text-palama-navy">{item.title}</h3>
                      <p className="text-palama-muted leading-relaxed text-lg font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#" className="inline-flex items-center gap-3 font-bold text-palama-navy text-lg border-b-2 border-palama-navy pb-1 hover:gap-6 transition-all">
                See all features <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* All-in-one */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">The Platform</p>
              <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1.05] mb-10">All-in-one <br className="hidden md:block" /> <span className="text-brand-blue italic">software</span> for you</h2>
              <p className="text-palama-muted text-xl mb-12 leading-relaxed max-w-xl font-medium">
                The platform built specifically for the beauty and wellness industry. Manage staff, inventory, and sales in one unified, high-performance interface.
              </p>
              <div className="grid grid-cols-2 gap-y-6">
                {['Inventory Control', 'Staff Scheduling', 'POS Integration', 'Sales Analytics', 'Client CRM', 'Tax Reporting'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 font-bold text-palama-navy text-sm uppercase tracking-wide">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-end">
              <div className="relative z-20 w-[280px] md:w-[320px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] rounded-[3.5rem] border-[12px] border-white bg-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" alt="App" className="w-full" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-[240px] md:w-[280px] hidden md:block shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-[3.5rem] border-[12px] border-white bg-white overflow-hidden opacity-50">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" alt="App 2" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Software Solution (Modern High-Contrast) */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[650px] rounded-[3.5rem] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80" alt="Software solution" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-palama-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-center gap-6 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-extrabold text-2xl tracking-tight leading-tight">Secure Infrastructure</p>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mt-1">Cloud-based & Fully Encrypted</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Built for Scale</p>
              <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1.05] mb-10">The ultimate <span className="text-brand-blue italic">engine</span> for {data.name.toLowerCase()}s</h2>
              <p className="text-palama-muted text-xl mb-12 leading-relaxed font-medium">
                Ditch the old ways of manual tracking. Our software solution is designed to act as the central nervous system of your business, delivering peak performance at every touchpoint.
              </p>
              <div className="space-y-4 mb-16">
                {[
                  { title: 'Advanced booking engine', icon: Smartphone },
                  { title: 'Customizable service menus', icon: Layout },
                  { title: 'Integrated payment processing', icon: CreditCard },
                  { title: 'Client loyalty programs', icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-[24px] bg-[#F9FAFB] border border-transparent group hover:bg-white hover:shadow-xl hover:border-gray-50 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-extrabold text-lg text-palama-navy tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
              <button className="bg-palama-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
                Explore the software <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Everything you need (Bento Grid) - DARK VERSION */}
      <section className="py-24 sm:py-40 bg-palama-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-brand-pink/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-(--spacing-container) mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-6">The Toolkit</p>
            <h2 className="text-4xl sm:text-[72px] font-extrabold tracking-tighter mb-8 text-white leading-[1.05]">Everything you need to <br className="hidden md:block" />run your business</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">Bespoke digital tools crafted for the world's most demanding professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Booking Engine", desc: "A powerful, intuitive booking interface for you and your clients." },
              { icon: CreditCard, title: "POS & Payments", desc: "Secure, lightning-fast payment processing for every transaction." },
              { icon: Mail, title: "Marketing Suite", desc: "Automated campaigns that keep your chair full all year round." },
              { icon: BarChart, title: "Business Insights", desc: "Deep analytics to help you make informed decisions." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="relative p-12 rounded-[3rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 group overflow-hidden"
              >
                <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-palama-navy transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-brand-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg font-medium">{feature.desc}</p>
                <div className="mt-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm font-bold text-brand-pink flex items-center gap-2">Explore feature <ArrowRight className="w-4 h-4" /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials (Horizontal Spread Carousel) */}
      <section className="py-24 sm:py-40 overflow-hidden bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Success Stories</p>
            <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter text-palama-navy leading-[1] mb-10 max-w-4xl">What our <span className="text-brand-pink italic">partners</span> say</h2>
          </div>

          <div className="relative">
            {/* Navigation Buttons - Outside Cards */}
            <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20">
              <button
                onClick={prevTestimonial}
                className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-palama-navy hover:text-white transition-all group"
                className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-palama-navy hover:text-white transition-all cursor-pointer group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-20">
              <button
                onClick={nextTestimonial}
                className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-palama-navy hover:text-white transition-all cursor-pointer group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonials Track */}
            <div className="relative overflow-hidden -mx-4 px-4 sm:-mx-12 sm:px-12">
              <motion.div
                animate={{ x: `calc(-${activeTestimonial * 100}% - ${activeTestimonial * 2}rem)` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex gap-8"
              >
                {data.testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`min-w-full md:min-w-[48%] bg-[#F9FAFB] p-10 sm:p-14 rounded-[4rem] border border-gray-50 shadow-sm transition-all duration-700 ${activeTestimonial === i ? 'scale-100 shadow-2xl bg-white ring-1 ring-gray-100' : 'scale-95 grayscale-[0.5]'}`}
                  >
                    <div className="flex gap-1.5 mb-8">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <blockquote className="text-lg sm:text-xl font-bold text-palama-navy leading-[1.4] tracking-tight mb-10">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-5">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <p className="font-extrabold text-base text-palama-navy tracking-tight leading-none">{t.author}</p>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-pink mt-1.5">Verified Partner</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Progress */}
            <div className="flex justify-center gap-2 mt-16">
              {data.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${activeTestimonial === i ? 'w-12 bg-palama-navy' : 'w-3 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Trust Section (Editorial split) */}
      <section className="py-24 sm:py-32 relative bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.12)] border border-gray-50 p-12 sm:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Reliability</p>
                <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter mb-12 leading-[1.05] text-palama-navy">{data.name} software <br />you can <span className="text-brand-blue italic">trust</span></h2>
                <div className="space-y-12">
                  {[
                    { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade encryption protecting your business data 24/7." },
                    { icon: Zap, title: "Lightning Fast Engine", desc: "The industry's most responsive booking system, optimized for speed." },
                    { icon: Star, title: "Global Leader", desc: "Recognized internationally as the gold standard for wellness software." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-palama-navy group-hover:text-white transition-all duration-500">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 tracking-tight text-palama-navy">{item.title}</h3>
                        <p className="text-palama-muted text-lg font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white rotate-3 hover:rotate-0 transition-all duration-1000">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" alt="Trust" className="w-full" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-palama-navy text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                  <p className="text-5xl font-extrabold mb-1 tracking-tighter">99.9%</p>
                  <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Support Section (Modern Editorial) */}
      <section className="py-24 sm:py-32">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="bg-brand-blue rounded-[4rem] p-12 sm:p-24 flex flex-col lg:flex-row items-center gap-24 overflow-hidden relative shadow-[0_50px_120px_-20px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 flex-1">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-8">Human-to-Human</p>
              <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter mb-8 text-white leading-[1.05]">We've got <br />your back</h2>
              <p className="text-white/80 text-xl mb-12 max-w-xl font-medium leading-relaxed">
                Our elite support squad is active 24/7. From white-glove onboarding to scaling your multi-location enterprise.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-white text-brand-blue px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                  <MessageSquare className="w-5 h-5" /> Live Chat
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-lg border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-all">
                  <Headphones className="w-5 h-5" /> Book a Call
                </button>
              </div>
            </div>
            <div className="relative z-10 flex-1 flex justify-center">
              <div className="relative group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Support" className="w-[400px] h-[550px] rounded-[3.5rem] object-cover shadow-2xl -rotate-6 transition-transform duration-1000 group-hover:rotate-0" />
                <div className="absolute top-12 -left-12 bg-white p-6 rounded-3xl shadow-2xl animate-bounce">
                  <p className="text-palama-navy font-extrabold text-lg tracking-tight">2min avg response</p>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-2 h-2 rounded-full bg-green-500" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: A platform suitable for all */}
      <div className="pt-24 border-t border-gray-100 bg-white">
        <BusinessTypes1 />
      </div>

      {/* Section 13: Final CTA (Editorial Impact) */}
      <section className="relative py-32 sm:py-64 bg-palama-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-pink/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-(--spacing-container) mx-auto px-6 text-center text-white">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-pink mb-12">Limited Time Beta</p>
          <h2 className="text-[64px] sm:text-[100px] lg:text-[120px] font-extrabold tracking-tight mb-16 leading-[0.85] max-w-5xl mx-auto">
            Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink-light">brand</span>. <br className="hidden md:block" />
            Join Palama.
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the global movement of professionals reclaiming their time and maximizing their sales with the world's most elegant booking engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link
              href="#"
              className="bg-white text-palama-navy px-16 py-8 rounded-full text-2xl font-extrabold hover:scale-105 transition-transform shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              Get started for free
            </Link>
            <button className="text-white font-extrabold text-2xl flex items-center gap-4 hover:gap-8 transition-all border-b-4 border-white/20 pb-2">
              Book a demo <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ (Modern Minimalist) - MOVED ABOVE FOOTER */}
      <section className="py-24 sm:py-40 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-[64px] font-extrabold tracking-tighter mb-8 text-palama-navy leading-[1.05]">Frequently asked <br className="hidden md:block" /> <span className="text-brand-pink italic">questions</span></h2>
            <p className="text-xl text-palama-muted font-medium">Everything you need to know about growing with Palama.</p>
          </div>
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
