"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Zap, Star, Users, User, X, ChevronDown } from 'lucide-react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'independent' | 'team'>('independent');
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['scheduling', 'management', 'marketing']);

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const featureGroups = [
    {
      id: 'scheduling',
      title: 'Scheduling Essentials',
      features: [
        { f: "Branded Booking Page", i: true, t: true },
        { f: "Calendar Management", i: true, t: true },
        { f: "Automated Reminders", i: "SMS & Email", t: "Custom Branding" },
        { f: "Room & Equipment Booking", i: false, t: true },
        { f: "Class & Group Sessions", i: false, t: true },
      ]
    },
    {
      id: 'management',
      title: 'Business Management',
      features: [
        { f: "Team Management", i: "Solo Only", t: "Unlimited" },
        { f: "Point of Sale (POS)", i: true, t: true },
        { f: "Inventory Tracking", i: "Basic", t: "Advanced" },
        { f: "Financial Reporting", i: "Monthly", t: "Real-time" },
        { f: "Payroll & Commissions", i: false, t: true },
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Growth',
      features: [
        { f: "Client CRM", i: "Up to 500", t: "Unlimited" },
        { f: "Email Marketing", i: false, t: true },
        { f: "Loyalty Programs", i: false, t: true },
        { f: "Smart Promotions", i: true, t: true },
        { f: "Custom Domain", i: false, t: true },
      ]
    }
  ];

  return (
    <div className="bg-white text-palama-navy min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F8F9FF] to-white -z-10" />
        <div className="max-w-(--spacing-container) mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-pink mb-8"
          >
            Pricing Plans
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] sm:text-[72px] lg:text-[88px] font-extrabold tracking-tighter leading-[0.95] mb-10 max-w-4xl mx-auto"
          >
            Software that grows <br className="hidden md:block" />
            with your <span className="text-brand-pink italic">business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-palama-muted font-medium max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Simple, transparent pricing. As you expand, we charge for each bookable team member.
          </motion.p>

          {/* Two Column Pricing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-32">

            {/* Independent Plan */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] p-10 sm:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-brand-pink/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-palama-navy group-hover:bg-brand-pink group-hover:text-white transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight">Independent</h2>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-xl font-bold text-palama-navy">₹</span>
                  <span className="text-6xl font-extrabold text-palama-navy tracking-tighter">0</span>
                </div>
                <p className="text-palama-muted font-bold text-base mb-8">Free forever</p>

                <p className="text-base font-medium text-palama-navy/60 mb-8 leading-relaxed">
                  The perfect foundation for solo professionals building their empire.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    'One bookable member',
                    'Smart Calendar',
                    'Online Bookings',
                    'Basic Marketing',
                    '24/7 Support'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-emerald-500" />
                      </div>
                      <span className="text-sm font-bold text-palama-navy/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/signup"
                className="block bg-gray-100 text-palama-navy text-center py-4 rounded-full text-base font-extrabold hover:bg-palama-navy hover:text-white transition-all"
              >
                Get started for free
              </Link>
            </div>

            {/* Team Plan */}
            <div className="bg-palama-navy rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-10 sm:p-12 flex flex-col justify-between relative overflow-hidden text-white group scale-105 lg:translate-y-[-20px] border border-white/10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute top-0 right-0 px-6 py-1.5 bg-brand-pink text-white font-extrabold text-[10px] uppercase tracking-widest rounded-bl-2xl">Most Popular</div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight">Team</h2>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-xl font-bold text-white/60">₹</span>
                  <span className="text-6xl font-extrabold text-white tracking-tighter">1,499</span>
                </div>
                <p className="text-white/50 font-bold text-base mb-8">per member / month</p>

                <p className="text-base font-medium text-white/60 mb-8 leading-relaxed">
                  Advanced tools and automation for growing teams and multi-location brands.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    'Multiple bookable members',
                    'Advanced Analytics',
                    'Team Commissions',
                    'Enterprise Security',
                    'Dedicated Manager'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/signup"
                className="relative z-10 block bg-white text-palama-navy text-center py-4 rounded-full text-base font-extrabold shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform"
              >
                Scale your team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 sm:py-40 bg-[#F9FAFB]">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tighter mb-8">Compare plans</h2>
            <p className="text-xl text-palama-muted font-medium max-w-2xl mx-auto">
              Everything you need to manage your business effectively, no matter your size.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="py-10 px-12 text-sm font-extrabold uppercase tracking-widest text-gray-400">Features</th>
                    <th className="py-10 px-12 text-center w-1/4">
                      <span className="text-xl font-extrabold text-palama-navy">Independent</span>
                    </th>
                    <th className="py-10 px-12 text-center w-1/4">
                      <span className="text-xl font-extrabold text-brand-pink">Team</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {featureGroups.map((group) => (
                    <React.Fragment key={group.id}>
                      <tr
                        className="bg-palama-navy/[0.03] cursor-pointer hover:bg-palama-navy/[0.06] transition-colors group"
                        onClick={() => toggleGroup(group.id)}
                      >
                        <td colSpan={3} className="py-7 px-12">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-extrabold text-palama-navy uppercase tracking-[0.2em]">{group.title}</span>
                            <motion.div
                              animate={{ rotate: expandedGroups.includes(group.id) ? 0 : -90 }}
                              className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-palama-navy shadow-sm group-hover:border-brand-pink group-hover:text-brand-pink transition-colors"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </div>
                        </td>
                      </tr>

                      <AnimatePresence initial={false}>
                        {expandedGroups.includes(group.id) && (
                          <>
                            {group.features.map((row, idx) => (
                              <tr
                                key={`${group.id}-${idx}`}
                                className="hover:bg-gray-50/50 transition-colors"
                              >
                                <td className="p-0">
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="py-8 px-12 font-bold text-palama-navy/70">{row.f}</div>
                                  </motion.div>
                                </td>
                                <td className="p-0 border-l border-gray-50">
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="py-8 px-12 text-center">
                                      {typeof row.i === 'string' ? <span className="text-sm font-bold text-palama-navy">{row.i}</span> : row.i ? <Check className="w-6 h-6 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-gray-200 mx-auto" />}
                                    </div>
                                  </motion.div>
                                </td>
                                <td className="p-0 border-l border-gray-50">
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="py-8 px-12 text-center">
                                      {typeof row.t === 'string' ? <span className="text-sm font-bold text-palama-navy">{row.t}</span> : row.t ? <Check className="w-6 h-6 text-brand-pink mx-auto" /> : <X className="w-5 h-5 text-gray-200 mx-auto" />}
                                    </div>
                                  </motion.div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-(--spacing-container) mx-auto px-6 text-center">
          <div className="flex justify-center mb-10">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-extrabold tracking-tighter text-palama-navy max-w-5xl mx-auto leading-tight mb-12">
            "Palama has completely transformed how I run my salon. The pricing is fair, and the software is lightyears ahead of anything else."
          </blockquote>
          <p className="text-xl font-bold text-brand-pink">— Maria Rossi, Founder of Glow Studio</p>
        </div>
      </section>
    </div>
  );
}
