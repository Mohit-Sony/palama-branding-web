"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
      <div className="max-w-(--spacing-container) mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-[28px] sm:text-4xl md:text-6xl lg:text-[80px] font-bold text-palama-navy leading-[1.1] mb-4 sm:mb-5 md:mb-6 max-w-5xl mx-auto tracking-tight">
          Build Your Brand.
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[22px] text-palama-navy mb-7 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-bold">
          Get a powerful, custom-branded booking system that works exclusively for you. Own your data, own your clients, and manage your operations seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16">
          <button className="w-full sm:w-auto bg-palama-navy text-white px-7 sm:px-8 md:px-10 py-3 sm:py-[14px] md:py-[18px] rounded-full text-[14px] sm:text-[15px] md:text-[17px] font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-lg shadow-black/10">
            Get started now
          </button>
          <button className="w-full sm:w-auto bg-white text-palama-navy border border-gray-200 px-7 sm:px-8 md:px-10 py-3 sm:py-[14px] md:py-[18px] rounded-full text-[14px] sm:text-[15px] md:text-[17px] font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-95 shadow-sm">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-palama-navy flex items-center justify-center text-white shrink-0">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-current ml-0.5" />
            </div>
            Watch an overview
          </button>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-2 sm:px-4 mt-6 md:mt-16">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[1000px] max-h-[600px] bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-blue-500/30 rounded-[100%] blur-[60px] md:blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <div className="relative w-full flex justify-start items-center pb-6 sm:pb-10 md:pb-16">
            {/* Desktop Image */}
            <div className="relative z-10 w-[94%] md:w-[85%] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white transition-transform duration-1000 ease-out hover:-translate-y-2">
              <Image
                src="/hero-section-admin-panel-desktop.png"
                alt="Desktop Admin Panel"
                width={1600}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Mobile Image */}
            <div 
              className="absolute right-0 md:right-[2%] bottom-0 md:bottom-[-2%] w-[26%] md:w-[22%] z-20 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-[3px] sm:border-[4px] md:border-[8px] border-white bg-white transition-transform duration-1000 ease-out hover:-translate-y-4"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <Image
                src="/hero-section-admin-panel-mobile.png"
                alt="Mobile Admin Panel"
                width={400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}} />
      </div>
    </section>
  );
}
