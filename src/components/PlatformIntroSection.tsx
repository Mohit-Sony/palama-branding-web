import Link from "next/link";
import React from "react";
import { Globe, Smartphone, LayoutDashboard, TabletSmartphone } from "lucide-react";

// ─── Tiny inline UI mockups (pure CSS/JSX, no images) ────────────────────────

function ClientPortalMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-300" />
        <span className="w-2 h-2 rounded-full bg-yellow-300" />
        <span className="w-2 h-2 rounded-full bg-green-300" />
        <div className="ml-2 flex-1 h-3 bg-white rounded-full border border-gray-200 flex items-center px-2">
          <span className="text-[7px] text-gray-300 font-medium">yoursalon.com</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center justify-between mb-1">
          <div className="w-16 h-2.5 bg-palama-navy/20 rounded-full" />
          <div className="w-14 h-5 rounded-full bg-palama-navy/80" />
        </div>
        <div className="grid grid-cols-2 gap-1.5 flex-1">
          {[
            "bg-[#F0F7FF]", "bg-[#FFF0F5]",
            "bg-[#F0FFF8]", "bg-[#FFFBF0]"
          ].map((bg, i) => (
            <div key={i} className={`${bg} rounded-xl p-2 flex flex-col gap-1`}>
              <div className="w-6 h-6 rounded-lg bg-white shadow-sm" />
              <div className="w-3/4 h-1.5 bg-black/10 rounded-full" />
              <div className="w-1/2 h-1 bg-black/05 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientAppMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-gray-100">
      <div className="h-4 bg-palama-navy flex items-center justify-between px-3 shrink-0">
        <span className="text-[6px] text-white/60 font-bold">9:41</span>
        <div className="w-2.5 h-1.5 bg-white/30 rounded-sm" />
      </div>
      <div className="px-3 py-2.5 bg-palama-navy shrink-0">
        <div className="w-14 h-1.5 bg-white/30 rounded-full mb-1" />
        <div className="w-20 h-2.5 bg-white/80 rounded-full" />
      </div>
      <div className="flex-1 p-2.5 flex flex-col gap-1.5 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50">
            <div className="w-7 h-7 rounded-xl bg-gray-200 shrink-0" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="w-3/4 h-1.5 bg-gray-300 rounded-full" />
              <div className="w-1/2 h-1 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-8 bg-white border-t border-gray-100 flex items-center justify-around px-3 shrink-0">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-palama-navy" : "bg-gray-100"}`} />
        ))}
      </div>
    </div>
  );
}

function AdminPortalMockup() {
  return (
    <div className="w-full h-full flex rounded-2xl overflow-hidden border border-gray-100 bg-white">
      <div className="w-9 bg-palama-navy flex flex-col items-center py-2.5 gap-2.5 shrink-0">
        <div className="w-5 h-5 rounded-lg bg-white/20" />
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-white/40" : "bg-white/10"}`} />
        ))}
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 shrink-0">
          <div className="w-14 h-2 bg-gray-200 rounded-full" />
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded-full bg-gray-100" />
            <div className="w-5 h-5 rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2.5 shrink-0">
          {["$2.4k", "18", "4.9★"].map((v, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-1.5 text-center">
              <div className="text-[8px] font-extrabold text-palama-navy">{v}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 px-2.5 flex flex-col gap-1.5 overflow-hidden">
          {["bg-blue-50 border-blue-100", "bg-purple-50 border-purple-100", "bg-pink-50 border-pink-100"].map((cls, i) => (
            <div key={i} className={`flex items-center gap-2 p-2 rounded-xl border ${cls}`}>
              <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1">
                <div className="w-10 h-1.5 bg-gray-300 rounded-full mb-1" />
                <div className="w-7 h-1 bg-gray-200 rounded-full" />
              </div>
              <div className="text-[7px] font-bold text-gray-400">{["9:00", "10:30", "13:00"][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminAppMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-gray-100">
      <div className="h-4 bg-[#101921] flex items-center justify-between px-3 shrink-0">
        <span className="text-[6px] text-white/60 font-bold">9:41</span>
        <div className="w-2.5 h-1.5 bg-white/30 rounded-sm" />
      </div>
      <div className="px-3 py-2 bg-[#101921] shrink-0 flex items-center justify-between">
        <div>
          <div className="w-10 h-1.5 bg-white/30 rounded-full mb-1" />
          <div className="w-18 h-2.5 bg-white/80 rounded-full" />
        </div>
        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20" />
      </div>
      <div className="px-2.5 py-2 shrink-0">
        <div className="flex gap-1.5">
          {["12 Apts", "3 Staff", "$860"].map((v, i) => (
            <div key={i} className="flex-1 bg-[#F9FAFB] rounded-xl p-1.5 text-center border border-gray-100">
              <div className="text-[7px] font-extrabold text-palama-navy">{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 px-2.5 flex flex-col gap-1.5 overflow-hidden">
        {[
          { dot: "bg-green-400", msg: "New booking" },
          { dot: "bg-blue-400", msg: "Reminder sent" },
          { dot: "bg-amber-400", msg: "Client checked in" },
        ].map((n, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl border border-gray-100">
            <div className={`w-1.5 h-1.5 rounded-full ${n.dot} shrink-0`} />
            <div className="text-[7px] text-gray-500 font-medium">{n.msg}</div>
          </div>
        ))}
      </div>
      <div className="h-8 bg-white border-t border-gray-100 flex items-center justify-around px-3 shrink-0">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-palama-navy" : "bg-gray-100"}`} />
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
};

function ProductCard({ label, type, Icon, tagline, bg, textColor, children, side }: ProductCardProps) {
  const isPhone = type === "Mobile";
  return (
    <div
      className={`group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden ${bg} border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 p-4 sm:p-5 md:p-7 flex ${isPhone ? "flex-row items-center gap-3 sm:gap-4 md:gap-6" : "flex-col"} hover:-translate-y-1`}
      style={{ height: isPhone ? 'clamp(130px, 18vw, 160px)' : 'clamp(200px, 26vw, 260px)' }}
    >
      {/* Text */}
      <div className={`${isPhone ? "flex-1 min-w-0" : "mb-auto"}`}>
        <div className={`flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3`}>
          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-lg sm:rounded-xl bg-white/70 flex items-center justify-center shadow-sm shrink-0">
            <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${textColor}`} strokeWidth={2} />
          </div>
          <span className={`text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest ${textColor} opacity-70`}>{type}</span>
        </div>
        <h4 className={`text-base sm:text-lg md:text-xl font-extrabold ${textColor} tracking-tight leading-tight mb-0.5 sm:mb-1`}>{label}</h4>
        <p className={`text-[11px] sm:text-[12px] md:text-[13px] font-medium leading-snug ${textColor} opacity-60 max-w-[160px] sm:max-w-[180px]`}>{tagline}</p>
      </div>

      {/* Mockup */}
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
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PlatformIntroSection() {
  return (
    <section className="py-14 sm:py-20 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6">

        {/* ── Overture: editorial top text ── */}
        <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-28">
          <p className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-palama-muted mb-3 sm:mb-5">
            The Palama Ecosystem
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8">
            <h2 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[72px] font-extrabold text-palama-navy tracking-tight leading-[1.05] max-w-3xl">
              Not a tool.<br />
              <span className="text-palama-muted/40">A complete world.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-palama-muted font-medium leading-relaxed max-w-sm md:text-right">
              Four custom-built products. Your brand on every screen your clients and team will ever touch.
            </p>
          </div>
        </div>

        {/* ── Two-World Layout ── */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-4">

          {/* ─── CLIENT WORLD ─── */}
          <div className="flex-1 flex flex-col gap-4">
            {/* World label */}
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-palama-muted/50 whitespace-nowrap">
                For Your Clients
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>

            {/* Client Portal — wide, tall */}
            <ProductCard
              label="Client Portal"
              type="Web"
              Icon={Globe}
              tagline="Book. Explore. Return."
              bg="bg-gradient-to-br from-[#F0F7FF] to-[#E0EFFF]"
              textColor="text-[#1E4A8A]"
              side="client"
            >
              <ClientPortalMockup />
            </ProductCard>

            {/* Client App — wide, shorter */}
            <ProductCard
              label="Client App"
              type="Mobile"
              Icon={Smartphone}
              tagline="Your brand in their pocket."
              bg="bg-gradient-to-br from-[#F5F0FF] to-[#EAE0FF]"
              textColor="text-[#4C1D95]"
              side="client"
            >
              <ClientAppMockup />
            </ProductCard>
          </div>

          {/* ─── CENTER SPINE ─── */}
          <div className="hidden lg:flex flex-col items-center justify-center w-24 shrink-0 relative">
            {/* Vertical dashed line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 pointer-events-none">
              <svg width="2" height="100%" className="h-full">
                <line x1="1" y1="0" x2="1" y2="100%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6 6" />
              </svg>
            </div>
            {/* Central Palama Badge */}
            <div className="relative z-10 w-16 h-16 rounded-[1.4rem] bg-palama-navy shadow-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500 cursor-default">
              <span className="text-white font-extrabold text-2xl tracking-tighter -rotate-12 hover:rotate-0 transition-transform duration-500">P</span>
            </div>
          </div>

          {/* Mobile spine separator */}
          <div className="flex lg:hidden items-center gap-4 py-2">
            <div className="h-px flex-1 bg-gray-200" />
            <div className="w-12 h-12 rounded-[1rem] bg-palama-navy flex items-center justify-center shadow-xl">
              <span className="text-white font-extrabold text-xl">P</span>
            </div>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* ─── ADMIN / BUSINESS WORLD ─── */}
          <div className="flex-1 flex flex-col gap-4">
            {/* World label */}
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-palama-muted/50 whitespace-nowrap">
                For Your Business
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>

            {/* Admin Portal */}
            <ProductCard
              label="Admin Portal"
              type="Web"
              Icon={LayoutDashboard}
              tagline="Your command centre."
              bg="bg-gradient-to-br from-[#F0FDF8] to-[#D1FAE5]"
              textColor="text-[#065F46]"
              side="admin"
            >
              <AdminPortalMockup />
            </ProductCard>

            {/* Admin App */}
            <ProductCard
              label="Admin App"
              type="Mobile"
              Icon={TabletSmartphone}
              tagline="Run the show, on the go."
              bg="bg-[#F8F9FA] border-gray-100"
              textColor="text-palama-navy"
              side="admin"
            >
              <AdminAppMockup />
            </ProductCard>

          </div>
        </div>

        {/* ── Footer statement ── */}
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-28 flex flex-col md:flex-row items-center gap-5 sm:gap-6 justify-between">
          {/* Large faded stat */}
          <div className="flex items-baseline gap-2">
            <span className="text-[60px] sm:text-[80px] md:text-[100px] font-extrabold text-gray-50 leading-none tracking-tighter select-none">4</span>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-palama-navy tracking-tight leading-tight">
                products.
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-palama-muted/40 tracking-tight leading-tight">
                one identity.
              </div>
            </div>
          </div>

          {/* Right detail */}
          <div className="max-w-md text-center md:text-right">
            <p className="text-palama-muted font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Every product runs on the same infrastructure, shares your brand language, and syncs in real time — so your clients and your team always experience one cohesive platform.
            </p>
            <Link href="/features">
              <button className="inline-flex items-center gap-2 text-palama-navy font-bold text-[13px] sm:text-[14px] md:text-[15px] border-b-2 border-palama-navy pb-0.5 hover:gap-4 transition-all duration-200">
                Explore the platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
