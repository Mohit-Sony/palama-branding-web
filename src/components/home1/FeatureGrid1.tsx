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
            className="relative bg-white rounded-[32px] overflow-hidden group md:col-span-2 min-h-[480px] sm:min-h-[400px] md:min-h-0 p-8 md:p-10 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-palama-navy mb-4 tracking-tight">Smart Scheduling</h3>
              <p className="text-base text-slate-500 font-medium mb-8">Flawless booking flows that feel like a high-end concierge service. Fully branded to you.</p>
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shadow-sm group-hover:bg-palama-navy group-hover:text-white transition-colors duration-500 border border-slate-200">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            {/* Minimalist Widget Glimpse -> High Fidelity Calendar */}
            <div className="absolute right-[-10%] top-[10%] w-[65%] h-[120%] bg-[#F8FAFC] rounded-t-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200 transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2 flex flex-col">
              {/* Calendar Top Bar */}
              <div className="bg-[#F8FAFC] p-3 border-b border-slate-200 flex justify-between items-center shrink-0">
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold border border-slate-200 text-slate-800">Today</div>
                  <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold border border-slate-200 text-slate-800 flex gap-1 items-center">
                    <span className="text-slate-400">Team</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold text-white">+ Add</div>
              </div>

              {/* Staff Headers */}
              <div className="flex bg-[#F8FAFC] border-b border-slate-200 shrink-0 px-2 py-2">
                <div className="w-10 shrink-0"></div> {/* Time column spacer */}
                {[
                  { name: 'David L', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64' },
                  { name: 'Sarah J', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64' },
                  { name: 'Michael C', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64' }
                ].map((staff, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 border-l border-slate-100 last:border-r px-1">
                    <img src={staff.img} alt={staff.name} className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover bg-slate-200" />
                    <div className="text-[9px] font-bold text-slate-800 truncate w-full text-center">{staff.name}</div>
                  </div>
                ))}
              </div>

              {/* Grid Lines */}
              <div className="flex-1 flex relative bg-white">
                <div className="w-10 border-r border-slate-100 flex flex-col pt-2 bg-[#F8FAFC]">
                  {['9 AM', '10 AM', '11 AM', '12 PM'].map(time => (
                    <div key={time} className="h-10 text-[8px] text-slate-400 font-medium text-center">{time}</div>
                  ))}
                </div>
                {/* Columns */}
                <div className="flex-1 flex bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:33.33%_40px]">
                  {/* Mock Appointment 1 */}
                  <div className="absolute top-10 left-[40px] w-[calc(33.33%-40px/3)] h-[60px] p-1">
                    <div className="w-full h-full bg-indigo-100 border-l-2 border-indigo-600 rounded-sm shadow-sm p-1.5 flex flex-col gap-0.5">
                      <div className="text-[8px] font-bold text-indigo-900 truncate">Women's Haircut</div>
                      <div className="text-[7px] text-indigo-700 truncate">10:00 - 11:30 AM</div>
                    </div>
                  </div>
                  {/* Mock Appointment 2 */}
                  <div className="absolute top-20 left-[calc(40px+(33.33%-40px/3))] w-[calc(33.33%-40px/3)] h-[40px] p-1">
                    <div className="w-full h-full bg-emerald-100 border-l-2 border-emerald-600 rounded-sm shadow-sm p-1.5 flex flex-col gap-0.5">
                      <div className="text-[8px] font-bold text-emerald-900 truncate">Color Touch Up</div>
                      <div className="text-[7px] text-emerald-700 truncate">11:00 - 12:00 PM</div>
                    </div>
                  </div>
                  {/* Mock Appointment 3 */}
                  <div className="absolute top-0 left-[calc(40px+2*(33.33%-40px/3))] w-[calc(33.33%-40px/3)] h-[80px] p-1">
                    <div className="w-full h-full bg-amber-100 border-l-2 border-amber-600 rounded-sm shadow-sm p-1.5 flex flex-col gap-0.5">
                      <div className="text-[8px] font-bold text-amber-900 truncate">Bridal Makeup</div>
                      <div className="text-[7px] text-amber-700 truncate">9:00 - 11:00 AM</div>
                    </div>
                  </div>
                </div>
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
            <div className="absolute bottom-[-5%] left-[10%] right-[10%] h-[75%] bg-[#F1F5F9] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-x border-slate-300 transition-transform duration-700 ease-out group-hover:-translate-y-6">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-4 mb-6"></div>
              <div className="px-6 space-y-3">
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center"><CreditCard className="w-4 h-4 text-indigo-600" /></div>
                    <div className="h-2.5 w-20 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-4 border-indigo-600"></div>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"></div>
                    <div className="h-2.5 w-24 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-300">
                  <div className="flex justify-between items-end px-2">
                    <span className="text-sm font-bold text-slate-500">Total</span>
                    <span className="text-3xl font-bold text-slate-800">₹450</span>
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
            {/* Widget Glimpse -> High Fidelity Data Table */}
            <div className="absolute -bottom-8 right-0 w-[85%] h-56 bg-[#F8FAFC] rounded-tl-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-l border-slate-200 p-5 transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2 flex flex-col gap-3">
              {/* Search Bar */}
              <div className="flex gap-2">
                <div className="flex-1 bg-white h-8 rounded-lg border border-slate-200 flex items-center px-3">
                  <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
                  <div className="w-16 h-1 bg-slate-200 rounded-full ml-2"></div>
                </div>
                <div className="w-20 bg-indigo-600 h-8 rounded-lg flex items-center justify-center text-[10px] text-white font-bold">+ Add</div>
              </div>

              {/* Table Headers */}
              <div className="flex px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="w-24">Customer</div>
                <div className="flex-1">Contact</div>
                <div className="w-16 text-center">Tier</div>
                <div className="w-16 text-center">Status</div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2 relative">
                {[
                  { n: "Sarah Jenkins", initial: "S", e: "sarah.j@gmail...", t: "Regular", s: "Active" },
                  { n: "Michael Chen", initial: "M", e: "m.chen@gmail...", t: "VIP", s: "Active" },
                  { n: "Emily Davis", initial: "E", e: "emily.d@gmail...", t: "Regular", s: "Inactive" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-2 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="w-24 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-600 shrink-0">{row.initial}</div>
                      <div className="text-[10px] font-bold text-slate-800 truncate">{row.n}</div>
                    </div>
                    <div className="flex-1 text-[9px] text-slate-500 truncate">{row.e}</div>
                    <div className="w-16 flex justify-center">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[8px] font-bold rounded-full">{row.t}</span>
                    </div>
                    <div className="w-16 flex justify-center">
                      <span className={`px-2 py-0.5 text-[8px] font-bold rounded-full border ${row.s === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>{row.s}</span>
                    </div>
                  </div>
                ))}

                {/* Subtle gradient to mask the bottom of the table */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
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
            {/* Widget Glimpse -> Dashboard Stat Cards */}
            <div className="absolute right-[-10%] top-[10%] w-[60%] h-[120%] bg-[#F8FAFC] rounded-t-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 p-5 transition-transform duration-700 ease-out group-hover:-translate-y-4 flex flex-col gap-3">
              {[
                { title: "Total Appointments", val: "128", iconColor: "bg-blue-500", text: "text-blue-500" },
                { title: "Total Customers", val: "89", iconColor: "bg-emerald-500", text: "text-emerald-500" },
                { title: "Revenue", val: "₹45,230", iconColor: "bg-purple-500", text: "text-purple-500" },
                { title: "Services", val: "24", iconColor: "bg-orange-500", text: "text-orange-500" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex justify-between items-center transition-transform duration-500 hover:-translate-y-1">
                  <div>
                    <div className="text-[10px] font-medium text-slate-500 mb-1">{stat.title}</div>
                    <div className="text-xl font-bold text-slate-800">{stat.val}</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full ${stat.iconColor} flex items-center justify-center shrink-0`}>
                    <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
