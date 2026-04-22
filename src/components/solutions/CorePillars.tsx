"use client";

import { motion } from "framer-motion";

// ─── Inline CSS UI Mockup for Scheduling ─────────────────────────────────────
function CalendarMockup() {
  const appts = [
    { col: 0, top: 1, span: 3, label: "Haircut", sub: "10–11 AM", bg: "bg-indigo-100 border-indigo-500" },
    { col: 1, top: 2, span: 2, label: "Color", sub: "11–12 PM", bg: "bg-emerald-100 border-emerald-500" },
    { col: 2, top: 0, span: 4, label: "Bridal", sub: "9–1 PM", bg: "bg-amber-100 border-amber-500" },
  ];
  const times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"];
  const staff = ["Emma", "Jake", "Lily"];
  return (
    <div className="w-full h-full flex flex-col bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 text-[10px]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 bg-white shrink-0">
        <div className="flex gap-1.5">
          <span className="px-2.5 py-1 bg-slate-100 rounded-full font-bold text-slate-700">Today</span>
          <span className="px-2.5 py-1 bg-indigo-600 text-white rounded-full font-bold">+ Book</span>
        </div>
        <span className="font-bold text-slate-500">Week view</span>
      </div>
      {/* Staff headers */}
      <div className="flex px-2 py-2 gap-1 border-b border-slate-200 bg-white shrink-0">
        <div className="w-8 shrink-0" />
        {staff.map((s) => (
          <div key={s} className="flex-1 text-center font-bold text-slate-600 text-[9px] uppercase tracking-wider">{s}</div>
        ))}
      </div>
      {/* Grid */}
      <div className="flex-1 flex relative">
        {/* Time column */}
        <div className="w-8 flex flex-col pt-1 shrink-0 border-r border-slate-100">
          {times.map((t) => (
            <div key={t} className="h-8 text-[8px] text-slate-400 font-medium pr-1 text-right leading-none pt-1">{t}</div>
          ))}
        </div>
        {/* Columns */}
        <div className="flex-1 flex relative bg-white">
          {staff.map((_, ci) => (
            <div key={ci} className="flex-1 border-l border-slate-100 relative">
              {/* Hour lines */}
              {times.map((_, ti) => (
                <div key={ti} className="h-8 border-b border-slate-50" />
              ))}
            </div>
          ))}
          {/* Appointments */}
          {appts.map((a, i) => (
            <div
              key={i}
              className={`absolute rounded-lg border-l-2 px-1.5 py-1 shadow-sm ${a.bg}`}
              style={{
                left: `calc(${(a.col / 3) * 100}%)`,
                width: `calc(${(1 / 3) * 100}% - 2px)`,
                top: `${a.top * 32}px`,
                height: `${a.span * 32 - 2}px`,
              }}
            >
              <div className="font-bold text-[9px] text-slate-800 truncate">{a.label}</div>
              <div className="text-[8px] text-slate-500">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Client Profile Mockup ─────────────────────────────────────────────────────
function ClientProfileMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-full bg-slate-200 shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-slate-800">Sarah Jenkins</div>
          <div className="text-[9px] text-slate-400 font-medium">27 visits · VIP Client</div>
        </div>
        <div className="ml-auto px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[9px] font-bold text-emerald-700">Active</div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Last Visit", val: "Apr 18" },
            { label: "Total Spend", val: "₹4,200" },
            { label: "Next Appt", val: "May 2" },
            { label: "Preferred", val: "Emma" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
              <div className="text-[9px] text-slate-400 font-medium">{item.label}</div>
              <div className="text-[11px] font-bold text-slate-700 mt-0.5">{item.val}</div>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <div className="text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Notes</div>
          <div className="text-[9px] text-slate-600 leading-relaxed">Allergic to ammonia-based color. Prefers balayage. Refers 2–3 clients/month.</div>
        </div>
      </div>
    </div>
  );
}

// ─── Payment Mockup ────────────────────────────────────────────────────────────
function PaymentMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F1F5F9] rounded-2xl overflow-hidden border border-slate-200">
      <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
        <div className="text-[11px] font-bold text-slate-700">Checkout</div>
        <div className="px-2 py-0.5 bg-slate-100 rounded-full text-[9px] font-bold text-slate-500">Sarah J.</div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2.5">
        {[
          { name: "Women's Haircut", price: "₹200" },
          { name: "Balayage", price: "₹350" },
          { name: "Conditioning Mask", price: "₹80" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-white rounded-xl px-3 py-2.5 border border-slate-100 shadow-sm">
            <span className="text-[10px] font-medium text-slate-700">{item.name}</span>
            <span className="text-[10px] font-bold text-slate-800">{item.price}</span>
          </div>
        ))}
        <div className="mt-auto pt-3 border-t border-dashed border-slate-300 flex justify-between items-end">
          <span className="text-[11px] font-bold text-slate-500">Total</span>
          <span className="text-2xl font-bold text-slate-800">₹630</span>
        </div>
        <div className="w-full bg-indigo-600 rounded-xl py-2.5 text-center text-[11px] font-bold text-white shadow-md">
          Charge Card on File
        </div>
      </div>
    </div>
  );
}

// ─── Analytics Mockup ─────────────────────────────────────────────────────────
function AnalyticsMockup() {
  const bars = [60, 80, 45, 90, 70, 100, 85];
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="text-[11px] font-bold text-slate-700">Revenue</div>
        <div className="text-[10px] font-bold text-emerald-600">↑ 32%</div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className="flex-1 flex items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-palama-navy/10 relative overflow-hidden"
              style={{ height: "100%" }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 bg-palama-navy rounded-t-md transition-all"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="flex-1 text-center text-[8px] font-bold text-slate-400">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Bookings", val: "128" },
            { label: "Revenue", val: "₹45k" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
              <div className="text-[9px] text-slate-400 font-medium">{s.label}</div>
              <div className="text-sm font-bold text-palama-navy">{s.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── The Grid ──────────────────────────────────────────────────────────────────
const features = [
  {
    id: "scheduling",
    title: "Smart Scheduling",
    description: "Flawless booking flows that feel like a high-end concierge service. Fully branded to you.",
    mockup: CalendarMockup,
    dark: false,
    wide: true,  // col-span-2
  },
  {
    id: "payments",
    title: "Invisible Payments",
    description: "A checkout so seamless, your clients won't even notice it happened.",
    mockup: PaymentMockup,
    dark: true,
    wide: false,
    tall: true, // row-span-2
  },
  {
    id: "crm",
    title: "Client CRM",
    description: "Know your clients better than they know themselves.",
    mockup: ClientProfileMockup,
    dark: false,
    wide: false,
  },
  {
    id: "analytics",
    title: "Executive Analytics",
    description: "Real-time insights that help you scale.",
    mockup: AnalyticsMockup,
    dark: false,
    wide: false,
  },
];

export default function CorePillars() {
  return (
    <section className="py-24 md:py-40 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[30%] h-[30%] rounded-full bg-palama-navy/5 blur-[120px] -z-10" />

      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-20 md:mb-24">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-4">
            The full suite
          </p>
          <h2 className="text-4xl md:text-[56px] lg:text-[72px] font-bold text-palama-navy mb-6 tracking-tight leading-[1.05]">
            Everything you need to<br />
            <span className="text-slate-400">run your empire.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
            Enterprise-grade power, disguised as your brand. Manage appointments, process payments, and grow your clientele from one seamless command center.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

          {/* Feature 1 — Wide: Smart Scheduling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-[32px] overflow-hidden group md:col-span-2 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-palama-navy mb-3 tracking-tight">Smart Scheduling</h3>
              <p className="text-base text-slate-500 font-medium">Flawless booking flows that feel like a high-end concierge service. Fully branded to you.</p>
            </div>
            {/* Calendar mockup */}
            <div className="absolute right-[-5%] top-[12%] w-[58%] h-[110%] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:-translate-x-1">
              <CalendarMockup />
            </div>
          </motion.div>

          {/* Feature 2 — Tall: Payments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-palama-navy rounded-[32px] overflow-hidden group md:row-span-2 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(16,25,33,0.3)] border border-palama-navy"
          >
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Invisible Payments</h3>
              <p className="text-base text-slate-400 font-medium">A checkout so seamless, your clients won't even notice it happened.</p>
            </div>
            <div className="absolute bottom-[-5%] left-[10%] right-[10%] h-[72%] rounded-t-[2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-6 overflow-hidden">
              <PaymentMockup />
            </div>
          </motion.div>

          {/* Feature 3 — Client CRM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white rounded-[32px] overflow-hidden group p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-palama-navy mb-2 tracking-tight">Client CRM</h3>
              <p className="text-base text-slate-500 font-medium">Know your clients better than they know themselves.</p>
            </div>
            <div className="absolute -bottom-6 right-0 w-[82%] h-[65%] transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2 pr-4">
              <ClientProfileMockup />
            </div>
          </motion.div>

          {/* Feature 4 — Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-[32px] overflow-hidden group p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-palama-navy mb-2 tracking-tight">Executive Analytics</h3>
              <p className="text-base text-slate-500 font-medium">Real-time insights that help you scale.</p>
            </div>
            <div className="absolute -bottom-4 right-0 w-[82%] h-[60%] transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2 pr-4">
              <AnalyticsMockup />
            </div>
          </motion.div>

        </div>

        {/* Extra Pillars — simple horizontal list */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Team & Payroll", desc: "Custom permissions, commissions, shift scheduling." },
            { title: "Marketing Engine", desc: "Automated SMS/email campaigns, loyalty & re-booking." },
            { title: "Inventory", desc: "Auto-sync stock levels. Never run out of what sells." },
            { title: "Online Booking", desc: "24/7 self-booking via your branded website & app." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-[24px] p-6 border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <h4 className="text-base font-bold text-palama-navy mb-2">{item.title}</h4>
              <p className="text-sm text-palama-muted font-medium leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
