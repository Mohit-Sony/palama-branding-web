"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 overflow-hidden relative">
      {/* Abstract Background Decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-pink/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full" />

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-[120px] sm:text-[180px] font-extrabold text-palama-navy/5 leading-none tracking-tighter select-none">
            404
          </h1>
          <div className="mt-[-60px] sm:mt-[-90px]">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-palama-navy tracking-tighter mb-6">
              Page not <span className="text-brand-pink italic">found</span>
            </h2>
            <p className="text-xl text-palama-muted font-medium leading-relaxed max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved to a new destination.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/"
            className="w-full sm:w-auto bg-palama-navy text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
          >
            <Home className="w-5 h-5" /> Back to home
          </Link>
          <Link
            href="/features"
            className="w-full sm:w-auto bg-white text-palama-navy border border-gray-200 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
          >
            Explore features <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-gray-100"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Common destinations</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-palama-navy">
            <Link href="/pricing" className="hover:text-brand-pink transition-colors">Pricing</Link>
            <Link href="/help-center" className="hover:text-brand-pink transition-colors">Help Center</Link>
            <Link href="/blog" className="hover:text-brand-pink transition-colors">Blog</Link>
            <Link href="/support" className="hover:text-brand-pink transition-colors">Support</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
