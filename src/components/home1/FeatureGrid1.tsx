"use client";

import { motion } from "framer-motion";
import { ChevronRight, CreditCard, BarChart3 } from "lucide-react";

export default function FeatureGrid1() {
  return (
    <section className="py-24 md:py-40 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute top-[20%] left-[5%] w-[30%] h-[30%] rounded-full bg-palama-navy/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-slate-200/50 blur-[120px] -z-10" />

      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[56px] lg:text-[72px] font-bold text-palama-navy mb-6 tracking-tight leading-[1.05]"
          >
            Everything you need to <br className="hidden sm:block" />
            <span className="text-slate-400">run your empire.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Enterprise-grade power, disguised as your brand. Manage appointments, process payments, and grow your clientele from one seamless command center.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          
          {/* Feature 1: Appointment Scheduling (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-[32px] overflow-hidden group md:col-span-2 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-palama-navy mb-4 tracking-tight">Smart Scheduling</h3>
              <p className="text-base text-slate-500 font-medium mb-8">Flawless booking flows that feel like a high-end concierge service. Fully branded to you.</p>
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shadow-sm group-hover:bg-palama-navy group-hover:text-white transition-colors duration-500 border border-slate-200">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            {/* Minimalist Widget Glimpse */}
            <div className="absolute right-[-5%] top-[15%] w-[55%] h-[120%] bg-white rounded-t-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 border border-slate-100 transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <span className="font-bold text-base text-palama-navy">October 2026</span>
                <div className="flex gap-2"><div className="w-5 h-5 bg-slate-100 rounded-md"></div><div className="w-5 h-5 bg-slate-100 rounded-md"></div></div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(21)].map((_, i) => (
                  <div key={i} className="aspect-square bg-slate-50 rounded-lg flex items-center justify-center text-[11px] text-slate-300 font-bold overflow-hidden relative border border-slate-100">
                    {i === 10 && <div className="absolute inset-0 bg-palama-navy text-white flex items-center justify-center">12</div>}
                    {i === 15 && <div className="absolute inset-1.5 bg-slate-200 rounded-md"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Point of Sale (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-palama-navy rounded-[32px] overflow-hidden group lg:row-span-2 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(16,25,33,0.3)] border border-palama-navy"
          >
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Invisible Payments</h3>
              <p className="text-base text-slate-400 font-medium">A checkout experience so seamless, your clients won't even notice it.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute bottom-[-5%] left-[10%] right-[10%] h-[75%] bg-white rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-x border-slate-200 transition-transform duration-700 ease-out group-hover:-translate-y-6">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-8"></div>
              <div className="px-6 space-y-4">
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center"><CreditCard className="w-4 h-4 text-slate-600" /></div>
                     <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
                   </div>
                   <div className="w-5 h-5 rounded-full border-4 border-palama-navy"></div>
                </div>
                <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
                   <div className="flex justify-between items-end">
                     <span className="text-sm font-bold text-slate-400">Total</span>
                     <span className="text-3xl font-bold text-palama-navy">$350</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Client CRM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white rounded-[32px] overflow-hidden group p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10 pr-[30%]">
              <h3 className="text-2xl font-bold text-palama-navy mb-3 tracking-tight">Client CRM</h3>
              <p className="text-base text-slate-500 font-medium">Know your clients better than they know themselves.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute -bottom-8 right-6 w-[220px] h-48 bg-slate-50 rounded-t-3xl shadow-lg border border-slate-200 p-4 transition-transform duration-700 ease-out group-hover:translate-y-2 group-hover:scale-105">
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((v, i) => (
                   <div key={v} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-slate-100 transition-transform duration-500" style={{ transform: `translateX(${i * 12}px)` }}>
                      <div className={`w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0 bg-slate-200`}></div>
                      <div className="w-20 h-2.5 bg-slate-200 rounded-full"></div>
                   </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature 4: Product Inventory */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-[32px] overflow-hidden group p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10 w-2/3">
              <h3 className="text-2xl font-bold text-palama-navy mb-3 tracking-tight">Inventory</h3>
              <p className="text-base text-slate-500 font-medium">Never run out of what sells.</p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] w-56 h-48 bg-slate-50 rounded-2xl shadow-lg overflow-hidden transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-110 border border-slate-200 flex flex-col">
               <div className="p-5 flex-1 flex flex-col justify-center gap-4">
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                     <span className="text-xs font-bold text-palama-navy">Serum v2</span>
                     <span className="text-[10px] font-bold text-white bg-slate-800 px-2.5 py-1 rounded-full">3 left</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                     <span className="text-xs font-bold text-slate-400">Cleanser</span>
                     <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">45 left</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Feature 5: Financial Reporting (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-[32px] overflow-hidden group md:col-span-2 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60 flex flex-col justify-center"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
                <BarChart3 className="w-7 h-7 text-palama-navy" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-palama-navy mb-4 tracking-tight">Executive Analytics</h3>
              <p className="text-base text-slate-500 font-medium">Real-time insights that help you scale. Track revenue, utilization, and retention at a glance.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[35%] h-[60%] flex items-end gap-3 sm:gap-4 transition-all duration-700 ease-out">
               {[40, 70, 45, 90, 60].map((h, i) => (
                 <div key={i} className={`flex-1 rounded-t-xl transition-all duration-700 relative group-hover:-translate-y-2 ${i === 3 ? 'bg-palama-navy' : 'bg-slate-100'}`} style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
