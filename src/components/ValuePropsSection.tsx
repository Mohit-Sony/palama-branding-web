import React from "react";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function ValuePropsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy tracking-tight max-w-3xl leading-[1.1]">
            Unrivaled value. Instant transformation.
          </h2>
          <button className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors w-fit">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Value Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Box 1: 7 Days to transform */}
          <div className="bg-gradient-to-br from-[#E8F8F5] to-[#A3E4D7] rounded-[2rem] p-8 md:p-12 h-[450px] relative overflow-hidden group shadow-sm transition-shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-[#0E6251] mb-4 max-w-[300px] relative z-10 leading-tight">
              7 days to transform your portal live and ready
            </h3>
            
            {/* Inner Dashboard Card */}
            <div className="absolute -bottom-4 right-6 left-6 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 transition-transform duration-700 ease-out group-hover:-translate-y-6 border border-white/60">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[#0E6251] font-bold text-sm bg-[#D1F2EB] px-3 py-1 rounded-full">Status: Active</span>
                <span className="text-gray-400 font-semibold text-sm">100% Complete</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
                <div className="w-[100%] h-full bg-[#1ABC9C] rounded-full relative overflow-hidden">
                   <div className="absolute top-0 left-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D1F2EB] flex items-center justify-center shrink-0">
                  <CheckCircle className="text-[#1ABC9C] w-6 h-6" />
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-xl tracking-tight">Portal is Live!</p>
                  <p className="text-sm text-gray-500 font-medium">Your business is ready for bookings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Dedicated Support */}
          <div className="bg-gradient-to-br from-[#EBF5FB] to-[#A9CCE3] rounded-[2rem] p-8 md:p-12 h-[450px] relative overflow-hidden group shadow-sm transition-shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-[#154360] mb-4 max-w-[320px] relative z-10 leading-tight">
              Dedicated support always. We're with you every step
            </h3>
            
            {/* Inner Chat Card */}
            <div className="absolute -bottom-8 right-6 left-6 bg-white rounded-t-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 transition-transform duration-700 ease-out border border-white group-hover:-translate-y-6">
               <div className="flex gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-palama-navy flex items-center justify-center shrink-0 shadow-md">
                   <span className="text-white font-bold text-xs">CS</span>
                 </div>
                 <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 flex-1 border border-gray-100">
                   <div className="w-4/5 h-2.5 bg-gray-200 rounded-full mb-3"></div>
                   <div className="w-1/2 h-2.5 bg-gray-200 rounded-full"></div>
                 </div>
               </div>
               <div className="flex gap-4 flex-row-reverse mb-2 transition-transform duration-700 group-hover:-translate-y-2">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shrink-0 shadow-md border-2 border-white relative">
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                 </div>
                 <div className="bg-[#EBF5FB] rounded-2xl rounded-tr-sm p-4 flex-1 text-right">
                   <div className="w-full h-2.5 bg-[#AED6F1] rounded-full mb-3 inline-block"></div>
                   <div className="w-2/3 h-2.5 bg-[#AED6F1] rounded-full inline-block"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Box 3: Customised Portal */}
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-[2rem] p-8 md:p-12 h-[450px] relative overflow-hidden group shadow-sm transition-shadow hover:shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 max-w-[380px] relative z-10 leading-tight">
              Your Business, Your Terms, Customised Portal, Your Identity
            </h3>
            
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Inner Customization Editor UI */}
            <div className="absolute top-[45%] md:top-1/2 left-8 right-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-6 transition-all duration-700 group-hover:scale-105 border border-white">
              
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 shadow-md"></div>
                  <span className="font-bold text-gray-800 text-sm">Theme Settings</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <span className="text-xs font-semibold text-gray-500">Dark Mode</span>
                     <div className="w-10 h-5 bg-palama-navy rounded-full relative cursor-pointer shadow-inner">
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full transition-transform group-hover:-translate-x-5"></div>
                     </div>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-xs font-semibold text-gray-500">Primary Color</span>
                     <div className="flex gap-1">
                        <span className="w-4 h-4 rounded-full bg-pink-500 ring-2 ring-offset-1 ring-pink-500/50"></span>
                        <span className="w-4 h-4 rounded-full bg-purple-500"></span>
                        <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                     </div>
                   </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center justify-center">
                   <div className="w-full space-y-2">
                      <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* Box 4: Crafted for excellence */}
          <div className="rounded-[2rem] h-[450px] relative overflow-hidden group bg-gray-900 text-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80" 
                alt="Excellence in service" 
                className="w-full h-full object-cover opacity-60" 
              />
            </div>
            
            {/* Smooth Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
            
            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <div className="flex items-center gap-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 drop-shadow-md" />
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight max-w-[340px]">
                Crafted for excellence where every interaction delights.
              </h3>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
