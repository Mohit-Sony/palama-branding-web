"use client";

import { Calendar, CreditCard, Users, Package, BarChart3, UserPlus, ChevronRight } from "lucide-react";

export default function FeatureGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy mb-6 tracking-tight leading-[1.1]">
            Transform Your Setup with Our Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-palama-muted leading-relaxed font-medium max-w-2xl mx-auto">
            Embed workflows effortlessly. Improve your user experience with simple, seamless widgets and no-code tools.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          
          {/* Feature 1: Appointment Scheduling (Wide) */}
          <div className="relative bg-[#F4F6F4] rounded-[32px] overflow-hidden group md:col-span-2 p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white">
            <div className="relative z-10 w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Appointment scheduling</h3>
              <p className="text-[15px] text-gray-600 font-medium mb-6">Create appointments effortlessly with our powerful widget. Beautiful calendar interface inside.</p>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#107050] group-hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute right-[-5%] top-[10%] w-[55%] h-[120%] bg-white rounded-t-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-4 border border-gray-100 transition-transform duration-700 group-hover:-translate-y-4 group-hover:-rotate-2">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-50">
                <span className="font-bold text-sm text-gray-800">October 2026</span>
                <div className="flex gap-1"><div className="w-4 h-4 bg-gray-100 rounded"></div><div className="w-4 h-4 bg-gray-100 rounded"></div></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center text-[10px] text-gray-300 font-bold overflow-hidden relative">
                    {i === 7 && <div className="absolute inset-0 bg-green-500 animate-pulse"></div>}
                    {i === 12 && <div className="absolute inset-1 bg-purple-200 rounded"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Point of Sale (Tall) */}
          <div className="relative bg-[#FCF3F6] rounded-[32px] overflow-hidden group lg:row-span-2 p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Point of sale (POS)</h3>
              <p className="text-[15px] text-gray-600 font-medium">A seamless checkout experience for you and your clients.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute bottom-[-10%] left-[10%] right-[10%] h-[75%] bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-x border-gray-100 transition-transform duration-500 group-hover:-translate-y-6">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-8"></div>
              <div className="px-6 space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                   <div className="flex items-center gap-3">
                     <CreditCard className="w-6 h-6 text-pink-500" />
                     <div className="h-3 w-16 bg-gray-200 rounded-full"></div>
                   </div>
                   <div className="w-4 h-4 rounded-full border-2 border-pink-500"></div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border-2 border-transparent transition-colors group-hover:border-pink-500/20">
                   <div className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-blue-100 text-[10px] flex items-center justify-center text-blue-600 font-bold">G</div>
                     <div className="h-3 w-20 bg-gray-200 rounded-full"></div>
                   </div>
                   <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                </div>
                <div className="mt-8 pt-4 border-t border-dashed border-gray-200">
                   <div className="flex justify-between">
                     <span className="text-sm font-semibold text-gray-500">Total</span>
                     <span className="text-lg font-bold text-gray-900">$120.00</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Client CRM */}
          <div className="relative bg-[#EBEDF9] rounded-[32px] overflow-hidden group p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white">
            <div className="relative z-10 pr-[40%]">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Client CRM</h3>
              <p className="text-[14px] text-gray-600 font-medium">Build strong relationships.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute -bottom-8 right-6 w-[200px] h-48 bg-white rounded-t-3xl shadow-xl border border-gray-100 p-4 transition-transform duration-500 group-hover:translate-y-2 group-hover:scale-105">
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((v, i) => (
                   <div key={v} className="flex items-center gap-3 bg-gray-50 rounded-xl p-2 transition-transform duration-300" style={{ transform: `translateX(${i * 10}px)` }}>
                      <div className={`w-8 h-8 rounded-full flex shrink-0 ${['bg-blue-200','bg-purple-200','bg-yellow-200'][i]}`}></div>
                      <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                   </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 4: Product Inventory */}
          <div className="relative bg-[#FEF3EB] rounded-[32px] overflow-hidden group p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white">
            <div className="relative z-10 w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Inventory</h3>
              <p className="text-[14px] text-gray-600 font-medium">Manage stock seamlessly.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute right-[-20px] bottom-[-20px] w-52 h-44 bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-110 border border-gray-100 flex flex-col">
               <div className="h-10 bg-orange-50 border-b border-orange-100 flex items-center px-4">
                  <span className="text-[10px] font-bold text-orange-800 uppercase tracking-wider">Low Stock Alert</span>
               </div>
               <div className="p-4 flex-1 flex flex-col justify-center gap-3">
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-gray-600">Shampoo v2</span>
                     <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">3 left</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-gray-600">Conditioner</span>
                     <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">45 left</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Feature 5: Financial Reporting (Wide) */}
          <div className="relative bg-[#F4F0FF] rounded-[32px] overflow-hidden group md:col-span-2 p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white flex flex-col justify-center">
            <div className="relative z-10 w-1/2">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Financial reporting</h3>
              <p className="text-[15px] text-gray-600 font-medium">Track your performance with advanced business analytics and beautiful charts.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[35%] h-[60%] flex items-end gap-3 transition-all duration-700">
               {[40, 70, 45, 90, 60].map((h, i) => (
                 <div key={i} className="flex-1 bg-white rounded-t-xl group-hover:bg-purple-200 transition-colors duration-500 shadow-sm relative group-hover:-translate-y-2" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}>
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
               ))}
            </div>
          </div>

          {/* Feature 6: Staff Management */}
          <div className="relative bg-[#E6F7F5] rounded-[32px] overflow-hidden group p-8 transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-transparent hover:border-white">
            <div className="relative z-10 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Staffing</h3>
              <p className="text-[14px] text-gray-600 font-medium">Manage shifts and teams.</p>
            </div>
            {/* Widget Glimpse */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-center">
              <div className="flex -space-x-4 transition-transform duration-500 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full border-4 border-[#E6F7F5] bg-blue-400 z-30 shadow-md"></div>
                <div className="w-12 h-12 rounded-full border-4 border-[#E6F7F5] bg-pink-400 z-20 shadow-md transform -rotate-12"></div>
                <div className="w-12 h-12 rounded-full border-4 border-[#E6F7F5] bg-yellow-400 z-10 shadow-md"></div>
                <div className="w-12 h-12 rounded-full border-4 border-[#E6F7F5] bg-white flex items-center justify-center text-xs font-bold text-gray-400 z-0 shadow-md">+5</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

