"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles, Newspaper, Zap } from 'lucide-react';

export default function BlogComingSoon() {
  return (
    <div className="bg-white text-palama-navy min-h-screen flex flex-col items-center pt-32 md:pt-48 pb-20 relative overflow-hidden px-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 blur-[120px] rounded-full" />

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center mx-auto mb-12"
        >
          <BookOpen className="w-10 h-10 text-brand-blue animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-[88px] font-extrabold tracking-tighter leading-[0.9] text-palama-navy mb-8">
            Palama <br />
            <span className="text-brand-blue italic text-[0.8em]">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl text-palama-muted font-medium mb-12 leading-relaxed">
            Dropping soon. <br className="hidden md:block" />
            Insights, stories, and strategies for the modern beauty professional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-blue text-white flex items-center justify-center text-xs font-bold">
              +12k
            </div>
          </div>
          <p className="text-sm font-bold text-palama-navy">Join 12,000+ early readers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-bold text-palama-navy hover:text-brand-blue transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Categories Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left"
        >
          {[
            { title: "Growth Guides", icon: Zap, color: "text-amber-500" },
            { title: "Industry News", icon: Newspaper, color: "text-brand-blue" },
            { title: "Success Stories", icon: Sparkles, color: "text-brand-pink" }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-[#F9FAFB] border border-gray-50">
              <item.icon className={`w-6 h-6 ${item.color} mb-4`} />
              <h3 className="font-bold text-lg text-palama-navy">{item.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
