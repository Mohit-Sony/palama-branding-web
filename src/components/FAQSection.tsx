"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, ShieldCheck, Link as LinkIcon, Gift, CheckCircle, BarChart3, Users, Zap } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How does Palama improve my booking process?",
    answer: "Palama automates your entire booking calendar, sending automatic reminders to clients and organizing your stylists' schedules to eliminate double bookings and reduce no-shows.",
    visualBg: "from-[#E8F8F5] to-[#A3E4D7]",
    VisualComponent: () => (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 border border-white/60">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="font-bold text-gray-800 text-lg">Today's Appointments</h4>
            <p className="text-xs text-gray-500 font-medium">Synced instantly</p>
          </div>
          <span className="text-[#0E6251] bg-[#D1F2EB] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Auto-pilot
          </span>
        </div>
        <div className="space-y-4">
          {[
            { time: "09:00 AM", name: "Sarah J.", service: "Haircut & Style", color: "bg-[#1ABC9C]" },
            { time: "10:30 AM", name: "Mike T.", service: "Beard Trim", color: "bg-blue-400" },
            { time: "01:00 PM", name: "Emma W.", service: "Coloring", color: "bg-purple-400" },
          ].map((apt, i) => (
            <div key={i} className="flex gap-4 items-center p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <div className={`w-1.5 h-12 ${apt.color} rounded-full`}></div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h5 className="font-bold text-gray-800 text-sm">{apt.name}</h5>
                  <span className="text-xs font-bold text-gray-400">{apt.time}</span>
                </div>
                <div className="text-xs font-medium text-gray-500">{apt.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    question: "Is my client and business data secure?",
    answer: "Absolutely. We use bank-level encryption to protect all your client databases, payment information, and business analytics. Your data is always backed up and never shared.",
    visualBg: "from-[#F0F3F4] to-[#BDC3C7]",
    VisualComponent: () => (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-8 border border-white text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-gray-100 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-2 bg-gray-200 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute inset-4 bg-palama-navy text-white rounded-full flex items-center justify-center shadow-inner z-10">
            <ShieldCheck className="w-8 h-8" />
          </div>
        </div>
        <h4 className="font-extrabold text-gray-900 text-xl mb-6">Enterprise-Grade Security</h4>
        <div className="space-y-4 text-left">
          {[
            { text: "End-to-End Encryption", active: true },
            { text: "Daily Automated Backups", active: true },
            { text: "GDPR & CCPA Compliant", active: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-bold text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    question: "Can I integrate this with my existing tools?",
    answer: "Yes, Palama seamlessly integrates with popular tools including Instagram Bookings, Square POS, and major accounting software. Everything stays synced automatically.",
    visualBg: "from-[#FDF2E9] to-[#F5CBA7]",
    VisualComponent: () => (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
        <div className="relative w-full h-[300px] flex items-center justify-center">
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-palama-navy text-white rounded-[2rem] flex items-center justify-center font-bold text-4xl z-20 shadow-2xl">
            P
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-50" style={{ strokeDasharray: "4 4" }}>
            {/* Line to top left */}
            <path d="M 120 80 Q 200 150 250 150" fill="none" stroke="#E67E22" strokeWidth="3" />
            {/* Line to top right */}
            <path d="M 380 80 Q 300 150 250 150" fill="none" stroke="#E67E22" strokeWidth="3" />
            {/* Line to bottom left */}
            <path d="M 140 240 Q 200 150 250 150" fill="none" stroke="#E67E22" strokeWidth="3" />
            {/* Line to bottom right */}
            <path d="M 360 240 Q 300 150 250 150" fill="none" stroke="#E67E22" strokeWidth="3" />
          </svg>

          {/* Floating App Icons */}
          <div className="absolute top-[50px] left-[80px] w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center font-bold text-pink-500 z-10 animate-[bounce-slow_3s_ease-in-out_infinite]">IG</div>

          <div className="absolute top-[50px] right-[80px] w-14 h-14 bg-[#1DA1F2] text-white rounded-2xl shadow-lg flex items-center justify-center font-bold z-10 animate-[bounce-slow_4s_ease-in-out_infinite]">Tw</div>

          <div className="absolute bottom-[40px] left-[100px] w-14 h-14 bg-black text-white rounded-2xl shadow-lg flex items-center justify-center font-bold z-10 animate-[bounce-slow_3.5s_ease-in-out_infinite]">SQ</div>

          <div className="absolute bottom-[40px] right-[100px] w-14 h-14 bg-[#0F9D58] text-white rounded-2xl shadow-lg flex items-center justify-center font-bold z-10 animate-[bounce-slow_4.5s_ease-in-out_infinite]">QB</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer: "We offer a 14-day fully-featured free trial with no credit card required. You get full access to all premium features, letting you experience the full transformation before committing.",
    visualBg: "from-[#F5EEF8] to-[#D7BDE2]",
    VisualComponent: () => (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.12)] p-8 border border-white text-center">
        <div className="inline-flex items-center gap-2 bg-[#F5EEF8] text-[#8E44AD] px-5 py-2 rounded-full text-sm font-bold mb-6">
          <Zap className="w-4 h-4" /> Team Plan
        </div>
        <div className="flex justify-center items-end gap-1 mb-2">
          <span className="text-3xl font-bold text-gray-400 line-through">$49</span>
          <span className="text-6xl font-extrabold text-gray-900">$0</span>
          <span className="text-gray-500 font-bold mb-2">/mo</span>
        </div>
        <p className="text-gray-500 text-sm font-medium mb-8">For your first 14 days. No cc required.</p>
        <button className="w-full bg-[#8E44AD] text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          Start Free Trial <ChevronDown className="w-5 h-5 -rotate-90" />
        </button>
      </div>
    )
  }
];

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const ActiveVisual = faqs[activeQuestion].VisualComponent;
  const activeVisualBg = faqs[activeQuestion].visualBg;

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold rounded-full border border-gray-200 bg-white text-palama-navy shadow-sm">
            FAQ
          </div>
          <h2 className="text-4xl md:text-[56px] font-extrabold text-palama-navy mb-5 leading-[1.1] tracking-tight">
            FAQs
          </h2>
          <p className="text-lg md:text-xl text-palama-muted font-medium">
            Everything you need to know before getting started
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Visual Box (Sticky on Desktop) */}
          <div className="sticky top-32 hidden md:block">
            <div className={`relative w-full h-[500px] rounded-[2.5rem] overflow-hidden transition-all duration-700 bg-gradient-to-br ${activeVisualBg} shadow-sm border border-gray-100`}>
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Decorative glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-[2px] pointer-events-none"></div>

              {/* The active visual component */}
              <ActiveVisual />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col space-y-2 mt-4 md:mt-10">
            {faqs.map((faq, index) => {
              const isActive = activeQuestion === index;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl transition-all duration-300 ${isActive ? 'shadow-xl border-transparent border' : 'border border-gray-100 shadow-sm hover:shadow-md'}`}
                >
                  <button
                    className="w-full flex justify-between items-center text-left py-6 px-6 md:px-8 cursor-pointer focus:outline-none"
                    onClick={() => setActiveQuestion(index)}
                  >
                    <h3 className={`text-xl md:text-[22px] font-bold leading-tight pr-4 ${isActive ? 'text-palama-navy' : 'text-gray-700'}`}>
                      {faq.question}
                    </h3>
                    <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-500 ease-spring ${isActive ? 'rotate-180 text-palama-navy' : 'text-gray-400'}`} />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-palama-muted/90 font-medium leading-[1.7] text-lg px-6 md:px-8 pb-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
