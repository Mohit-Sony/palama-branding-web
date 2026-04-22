"use client";

import React from "react";
import { Globe, Smartphone, LayoutDashboard, TabletSmartphone } from "lucide-react";
import { motion } from "framer-motion";

// ─── Tiny inline UI mockups (pure CSS/JSX, no images) ────────────────────────

function ClientPortalMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50/80 border-b border-gray-100 shrink-0 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 h-3 bg-white rounded-full border border-gray-200 flex items-center px-2">
          <span className="text-[7px] text-gray-400 font-medium tracking-wide">your-empire.com</span>
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center justify-between mb-1">
          <div className="w-16 h-2.5 bg-palama-navy/10 rounded-full" />
          <div className="w-14 h-5 rounded-full bg-palama-navy text-[7px] text-white flex items-center justify-center font-semibold">Book Now</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 flex-1">
          {["bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50"].map((bg, i) => (
            <div key={i} className={`${bg} rounded-xl p-2 flex flex-col gap-1 border border-slate-100`}>
              <div className="w-6 h-6 rounded-lg bg-white shadow-sm border border-slate-100" />
              <div className="w-3/4 h-1.5 bg-slate-200 rounded-full mt-1" />
              <div className="w-1/2 h-1 bg-slate-200/60 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientAppMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm">
      <div className="h-4 bg-palama-navy flex items-center justify-between px-3 shrink-0">
        <span className="text-[6px] text-white/80 font-bold">9:41</span>
        <div className="w-2.5 h-1.5 bg-white/40 rounded-sm" />
      </div>
      <div className="px-3 py-2.5 bg-palama-navy shrink-0">
        <div className="w-14 h-1.5 bg-white/40 rounded-full mb-1" />
        <div className="w-20 h-2.5 bg-white rounded-full" />
      </div>
      <div className="flex-1 p-2.5 flex flex-col gap-1.5 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
            <div className="w-7 h-7 rounded-xl bg-white shadow-sm shrink-0 border border-slate-100" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="w-3/4 h-1.5 bg-slate-300 rounded-full" />
              <div className="w-1/2 h-1 bg-slate-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-8 bg-white border-t border-gray-100 flex items-center justify-around px-3 shrink-0">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-palama-navy" : "bg-slate-100"}`} />
        ))}
      </div>
    </div>
  );
}

function AdminPortalMockup() {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-[#F1F5F9] shadow-sm relative">
      {/* Subtle top purple glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/80 to-indigo-500/0 blur-[2px]" />
      
      {/* Top Nav (simplified) */}
      <div className="h-6 shrink-0 flex justify-end items-center px-3 gap-2 bg-[#F1F5F9] border-b border-transparent">
         <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
         <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
         <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-[5px] text-white font-bold ml-1">M</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 sm:w-20 bg-white flex flex-col py-3 px-2 gap-1.5 shrink-0 border-r border-slate-200">
          <div className="w-12 h-4 bg-slate-200 rounded px-1 mb-2 self-center" />
          
          {/* Active Dashboard Link */}
          <div className="w-full h-6 bg-indigo-600 rounded-lg flex items-center px-1.5 gap-1.5 shadow-sm">
             <div className="w-2.5 h-2.5 bg-white/80 rounded-[2px]" />
             <div className="w-7 h-1.5 bg-white rounded-full" />
          </div>
          
          {/* Inactive Links */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-full h-6 rounded-lg flex items-center px-1.5 gap-1.5">
               <div className="w-2.5 h-2.5 bg-slate-300 rounded-[2px]" />
               <div className="w-7 h-1.5 bg-slate-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-3 overflow-hidden gap-3">
          {/* Header */}
          <div>
             <div className="w-24 h-2.5 bg-slate-800 rounded-full mb-1.5" />
             <div className="w-32 h-1.5 bg-slate-400 rounded-full" />
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-2 shrink-0">
             <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="w-16 h-1 bg-slate-400 rounded-full mb-2" />
                   <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-[1px]" />
                   </div>
                </div>
                <div className="w-8 h-3 bg-slate-800 rounded-full" />
             </div>
             <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="w-16 h-1 bg-slate-400 rounded-full mb-2" />
                   <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full" />
                   </div>
                </div>
                <div className="w-8 h-3 bg-slate-800 rounded-full" />
             </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl flex-1 border border-slate-100 p-2 shadow-sm flex flex-col gap-1.5 overflow-hidden">
             <div className="w-16 h-1.5 bg-slate-800 rounded-full mb-1" />
             {[1, 2].map(i => (
               <div key={i} className="bg-[#F8FAFC] rounded-lg p-1.5 flex justify-between items-center">
                  <div>
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full mb-1" />
                    <div className="w-10 h-1 bg-slate-400 rounded-full" />
                  </div>
                  <div className="w-8 h-1 bg-slate-300 rounded-full" />
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminAppMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-sm relative">
      <div className="h-4 bg-indigo-600 flex items-center justify-between px-3 shrink-0">
        <span className="text-[6px] text-white/90 font-bold">9:41</span>
        <div className="w-2.5 h-1.5 bg-white/50 rounded-sm" />
      </div>
      <div className="px-3 py-2 bg-indigo-600 shrink-0 flex items-center justify-between">
        <div>
          <div className="w-10 h-1.5 bg-white/50 rounded-full mb-1" />
          <div className="w-18 h-2.5 bg-white rounded-full" />
        </div>
        <div className="w-7 h-7 rounded-full bg-indigo-500 border border-white/20 flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">M</span>
        </div>
      </div>
      <div className="px-2.5 py-2 shrink-0 bg-[#F1F5F9]">
        <div className="flex gap-1.5">
          {[
            { dot: "bg-blue-500", v: "128 Apts" },
            { dot: "bg-green-500", v: "89 Cust" },
            { dot: "bg-purple-500", v: "₹45k" }
          ].map((item, i) => (
            <div key={i} className="flex-1 bg-white rounded-xl p-1.5 text-center border border-slate-100 shadow-sm flex flex-col items-center">
              <div className={`w-1.5 h-1.5 rounded-full ${item.dot} mb-1`} />
              <div className="text-[7px] font-bold text-slate-800">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 px-2.5 py-1.5 flex flex-col gap-1.5 overflow-hidden bg-[#F1F5F9]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="flex-1">
               <div className="w-14 h-1.5 bg-slate-700 rounded-full mb-1" />
               <div className="w-10 h-1 bg-slate-400 rounded-full" />
            </div>
            <div className="w-6 h-1 bg-slate-300 rounded-full" />
          </div>
        ))}
      </div>
      <div className="h-8 bg-white border-t border-slate-200 flex items-center justify-around px-3 shrink-0">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-indigo-600" : "bg-slate-200"}`} />
        ))}
      </div>
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

type ProductCardProps = {
  label: string;
  type: "Web" | "Mobile";
  Icon: React.ElementType;
  tagline: string;
  bg: string;
  textColor: string;
  children: React.ReactNode;
  side: "client" | "admin";
  delay?: number;
};

function ProductCard({ label, type, Icon, tagline, bg, textColor, children, delay = 0 }: ProductCardProps) {
  const isPhone = type === "Mobile";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden ${bg} border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-500 p-4 sm:p-5 md:p-7 flex ${isPhone ? "flex-row items-center gap-3 sm:gap-4 md:gap-6" : "flex-col"} hover:-translate-y-1 bg-white`}
      style={{ height: isPhone ? 'clamp(130px, 18vw, 160px)' : 'clamp(200px, 26vw, 260px)' }}
    >
      <div className={`${isPhone ? "flex-1 min-w-0" : "mb-auto"}`}>
        <div className={`flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3`}>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-lg sm:rounded-xl bg-slate-100 flex items-center justify-center shadow-sm shrink-0 border border-slate-200/50`}>
            <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${textColor}`} strokeWidth={2} />
          </div>
          <span className={`text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest ${textColor} opacity-70`}>{type}</span>
        </div>
        <h4 className={`text-base sm:text-lg md:text-xl font-bold ${textColor} tracking-tight leading-tight mb-0.5 sm:mb-1`}>{label}</h4>
        <p className={`text-[11px] sm:text-[12px] md:text-[13px] font-medium leading-snug ${textColor} opacity-60 max-w-[160px] sm:max-w-[180px]`}>{tagline}</p>
      </div>

      <div
        className={`
          transition-all duration-700 ease-out overflow-hidden shrink-0
          ${isPhone
            ? "w-[80px] h-[105px] sm:w-[90px] sm:h-[115px] md:w-[100px] md:h-[130px] rounded-[1rem] sm:rounded-[1.25rem] shadow-[0_10px_30px_rgba(0,0,0,0.12)] group-hover:scale-105"
            : "absolute -bottom-6 left-4 right-4 sm:left-5 sm:right-5 md:left-6 md:right-6 h-[100px] sm:h-[115px] md:h-[130px] rounded-t-xl sm:rounded-t-2xl shadow-[0_-8px_24px_rgba(0,0,0,0.06)] group-hover:-translate-y-4"
          }
        `}
      >
        {children}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PlatformIntro1() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Overture ── */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-palama-navy mb-4"
          >
            The Palama Ecosystem
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-palama-navy tracking-tight leading-[1.05] max-w-3xl"
            >
              Not a tool.<br />
              <span className="text-slate-400 font-medium">A complete world.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-sm md:text-right"
            >
              Four custom-built products. Your brand on every screen your clients and team will ever touch.
            </motion.p>
          </div>
        </div>

        {/* ── Two-World Layout ── */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6">
          {/* ─── CLIENT WORLD ─── */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 whitespace-nowrap">
                For Your Clients
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            <ProductCard
              label="Client Portal"
              type="Web"
              Icon={Globe}
              tagline="Book. Explore. Return."
              bg="bg-white"
              textColor="text-palama-navy"
              side="client"
              delay={0.1}
            >
              <ClientPortalMockup />
            </ProductCard>

            <ProductCard
              label="Client App"
              type="Mobile"
              Icon={Smartphone}
              tagline="Your brand in their pocket."
              bg="bg-white"
              textColor="text-palama-navy"
              side="client"
              delay={0.2}
            >
              <ClientAppMockup />
            </ProductCard>
          </div>

          {/* ─── CENTER SPINE ─── */}
          <div className="hidden lg:flex flex-col items-center justify-center w-24 shrink-0 relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 pointer-events-none">
              <svg width="2" height="100%" className="h-full">
                <line x1="1" y1="0" x2="1" y2="100%" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="relative z-10 w-16 h-16 rounded-[1.2rem] bg-palama-navy shadow-xl flex items-center justify-center border-4 border-slate-50"
            >
              <span className="text-white font-bold text-xl tracking-tighter">P</span>
            </motion.div>
          </div>

          <div className="flex lg:hidden items-center gap-4 py-4">
            <div className="h-px flex-1 bg-slate-200" />
            <div className="w-12 h-12 rounded-[1rem] bg-palama-navy flex items-center justify-center shadow-lg border-2 border-slate-50">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* ─── ADMIN / BUSINESS WORLD ─── */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 whitespace-nowrap">
                For Your Business
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            <ProductCard
              label="Admin Portal"
              type="Web"
              Icon={LayoutDashboard}
              tagline="Your command centre."
              bg="bg-white"
              textColor="text-palama-navy"
              side="admin"
              delay={0.3}
            >
              <AdminPortalMockup />
            </ProductCard>

            <ProductCard
              label="Admin App"
              type="Mobile"
              Icon={TabletSmartphone}
              tagline="Run the show, on the go."
              bg="bg-white"
              textColor="text-palama-navy"
              side="admin"
              delay={0.4}
            >
              <AdminAppMockup />
            </ProductCard>
          </div>
        </div>

      </div>
    </section>
  );
}
