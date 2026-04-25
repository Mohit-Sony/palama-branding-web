"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, CreditCard, Mail, BarChart, CheckCircle2, Play, Star, ArrowRight, MessageSquare, ShieldCheck, Headphones, Zap, Users, Layout, Smartphone } from 'lucide-react';
import { BusinessTypeData } from '@/data/businessTypes';
import BusinessTypes1 from './home1/BusinessTypes1';

interface Props {
  data: BusinessTypeData;
}

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
  return (
    <div className="bg-white text-palama-navy overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] max-w-[1000px] mx-auto mb-8"
          >
            Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-pink font-extrabold">{data.name.toLowerCase()}</span> and beauty services almost anywhere and grow
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-500 mb-10 font-medium"
          >
            With the world's #1 booking platform
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link 
              href="#" 
              className="bg-brand-blue text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl hover:-translate-y-1"
            >
              Get started
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-[1000px] mx-auto rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-gray-50 group cursor-pointer"
          >
            <img 
              src={data.hero.image} 
              alt={data.name} 
              className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <button className="w-24 h-24 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border border-white/40">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Best for businesses that offer (Big Heading + Name/Role) */}
      <section className="py-24 sm:py-32 bg-gray-50/50">
        <div className="max-w-[1240px] mx-auto px-6 mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-center max-w-4xl mx-auto leading-[1.1]">
            Best for <span className="text-brand-pink">businesses</span> that offer services like these
          </h2>
        </div>
        
        <MarqueeRow direction="left" duration={40}>
          {data.professionals.map((prof, i) => (
            <div key={i} className="flex flex-col items-center gap-6 min-w-[200px] group">
              <div className="size-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-8 ring-pink-50 group-hover:ring-pink-100 transition-all duration-500">
                <img src={prof.image} alt={prof.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-palama-navy mb-1">{prof.name}</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{prof.role}</p>
              </div>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* Section 3: Trusted by - Carousel (No Scrollbar) */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 mb-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Trusted by 100,000+ top {data.name.toLowerCase()} owners</h2>
          <p className="text-gray-500 text-lg">Powering the world's most successful {data.name.toLowerCase()} brands.</p>
        </div>

        <MarqueeRow direction="right" duration={60}>
          {data.trustCards.map((card, i) => (
            <div 
              key={i}
              className="min-w-[340px] bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group mx-4"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">Verified Brand</div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  {card.location}
                </div>
              </div>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* Section 4 & 5: Connect & All-in-one */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-[1240px] mx-auto px-6 space-y-24">
          {/* Connect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-purple-200/20 blur-[120px] rounded-full" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80" alt="Booking" className="w-full" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">Connect with <br/><span className="text-brand-pink">your customers</span></h2>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Calendar, title: "Smart booking", desc: "Automate your calendar with 24/7 online booking across all platforms." },
                  { icon: Zap, title: "Automated marketing", desc: "Keep clients coming back with smart rebooking and loyalty tools." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <item.icon className="w-6 h-6 text-brand-pink" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#" className="inline-flex items-center gap-3 font-bold text-palama-navy text-lg hover:gap-5 transition-all">
                See all features <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* All-in-one */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">All-in-one <span className="text-brand-blue">software</span> for your business</h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg">
                    The platform built specifically for the beauty and wellness industry. Manage staff, inventory, and sales in one unified interface.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {['Inventory Control', 'Staff Scheduling', 'POS Integration', 'Sales Analytics', 'Client CRM', 'Tax Reporting'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] flex items-center justify-end">
                <div className="relative z-20 w-[240px] md:w-[280px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] rounded-[3rem] border-[10px] border-brand-blue bg-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" alt="App" className="w-full" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-[200px] md:w-[240px] hidden md:block shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] border-[10px] border-brand-blue bg-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" alt="App 2" className="w-full" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Software Solution (Two-column) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-xl">
               <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80" alt="Software solution" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-palama-navy/60 to-transparent" />
               <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Secure Infrastructure</p>
                      <p className="text-white/60 text-xs">Cloud-based & Encrypted</p>
                    </div>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">The ultimate <span className="text-brand-blue">software engine</span> for {data.name.toLowerCase()}s</h2>
               <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                 Ditch the old ways of manual tracking. Our software solution is designed to act as the central nervous system of your business.
               </p>
               <div className="space-y-4 mb-10">
                 {[
                   { title: 'Advanced booking engine', icon: Smartphone },
                   { title: 'Customizable service menus', icon: Layout },
                   { title: 'Integrated payment processing', icon: CreditCard },
                   { title: 'Client loyalty programs', icon: Users }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-lg hover:border-white transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-indigo-50">
                        <item.icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="font-bold text-base text-gray-800">{item.title}</span>
                    </div>
                 ))}
               </div>
               <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
                 Explore the software <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Everything you need (Modern Bespoke Cards) */}
      <section className="py-24 sm:py-40 bg-palama-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 text-white">Everything you need to <br/>run your business</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">Bespoke digital tools crafted for the world's most demanding professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Booking Engine", desc: "A powerful, intuitive booking interface for you and your clients.", color: "from-purple-500 to-indigo-500" },
              { icon: CreditCard, title: "POS & Payments", desc: "Secure, lightning-fast payment processing for every transaction.", color: "from-blue-500 to-cyan-500" },
              { icon: Mail, title: "Marketing Suite", desc: "Automated campaigns that keep your chair full all year round.", color: "from-pink-500 to-rose-500" },
              { icon: BarChart, title: "Business Insights", desc: "Deep analytics to help you make informed decisions.", color: "from-amber-500 to-orange-500" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="relative p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 blur-2xl -mr-10 -mt-10 group-hover:opacity-30 transition-opacity`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl`}>
                   <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold text-white flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="py-16 sm:py-24 overflow-hidden bg-gray-50/50">
        <div className="max-w-[1240px] mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">What our partners say</h2>
          <p className="text-gray-500 text-lg font-medium">Real stories from businesses growing with Palama.</p>
        </div>
        
        <MarqueeRow direction="left" duration={80}>
          {data.testimonials.map((t, i) => (
            <div key={i} className="min-w-[380px] md:min-w-[480px] bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-500 mx-3">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed font-semibold">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-5">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border-4 border-purple-50 shadow-sm" />
                <div>
                  <p className="font-extrabold text-palama-navy text-lg leading-tight">{t.author}</p>
                  <p className="text-brand-pink text-[10px] font-bold uppercase tracking-wider">Verified Partner</p>
                </div>
              </div>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* Section 9: Trust Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-8 sm:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">{data.name} software <br/>you can <span className="text-brand-blue italic">trust</span></h2>
                <div className="space-y-8">
                   {[
                     { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade encryption protecting your data 24/7." },
                     { icon: Zap, title: "Lightning Fast Engine", desc: "The industry's most responsive booking system." },
                     { icon: Star, title: "Global Leader", desc: "Recognized as the gold standard for wellness software." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors duration-500">
                          <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-base font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" alt="Trust" className="w-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                  <p className="text-4xl font-black mb-1">99.9%</p>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Support Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-brand-blue rounded-[3rem] p-8 sm:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">We've got <br/>your back</h2>
              <p className="text-white/80 text-lg mb-10 max-w-lg font-medium leading-relaxed">
                Our elite support squad is active 24/7. From onboarding to scaling your multi-location brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                  <MessageSquare className="w-4 h-4" /> Chat
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-base border border-white/20 flex items-center gap-2 hover:bg-white/20 transition-all">
                  <Headphones className="w-4 h-4" /> Call
                </button>
              </div>
            </div>
            <div className="relative z-10 flex-1 flex justify-center">
               <div className="relative">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Support" className="w-[300px] h-[400px] rounded-[2.5rem] object-cover shadow-2xl -rotate-6" />
                 <div className="absolute top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                    <p className="text-palama-navy font-black text-sm">2min response</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-16 text-center">Frequently asked <span className="text-brand-pink">questions</span></h2>
          <div className="space-y-4">
            {data.faq.map((item, i) => (
              <details key={i} className="group bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-xl group-hover:text-brand-pink transition-colors">
                  {item.question}
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center transition-transform group-open:rotate-180 border border-gray-100">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-500 font-medium text-lg leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: A platform suitable for all (Marquee - No duplicated heading) */}
      <div className="pt-24 border-t border-gray-100">
        <BusinessTypes1 />
      </div>

      {/* Section 13: Final CTA */}
      <section className="relative py-32 sm:py-56">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-pink" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center text-white">
          <h2 className="text-5xl sm:text-[80px] font-black tracking-tighter mb-12 leading-[1] max-w-4xl mx-auto">Ready to grow your <br/>{data.name.toLowerCase()}?</h2>
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
            <Link 
              href="#" 
              className="text-white border-2 border-white/40 px-16 py-7 rounded-full text-2xl font-black hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
