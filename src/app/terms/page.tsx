"use client";

import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-white text-palama-navy min-h-screen">
      <section className="pt-32 pb-16 sm:pt-48 sm:pb-24 bg-[#F9FAFB] border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-6">Terms of Service</h1>
          <p className="text-xl text-palama-muted font-medium">Last updated: April 25, 2026</p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate prose-headings:text-palama-navy prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand-pink prose-strong:text-palama-navy">
          <p className="text-xl leading-relaxed text-palama-muted mb-12">
            Welcome to Palama. These Terms of Service ("Terms") govern your access to and use of Palama's website, mobile applications, and other services. By using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-3xl mb-6">1. Use of Services</h2>
          <p className="mb-8">
            You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-3xl mb-6">2. Business Accounts</h2>
          <p className="mb-8">
            Businesses using Palama are responsible for the accuracy of their booking information, service listings, and professional conduct. Palama provides the platform but is not responsible for the actual services provided by businesses to their clients.
          </p>

          <h2 className="text-3xl mb-6">3. Payments & Fees</h2>
          <p className="mb-8">
            Subscription fees are charged based on the number of bookable team members. Fees are non-refundable except as required by law. Transaction fees may apply to payments processed through our platform.
          </p>

          <h2 className="text-3xl mb-6">4. Intellectual Property</h2>
          <p className="mb-8">
            The "Palama" name, logo, and all original software and content are the exclusive property of Palama. You may not use our intellectual property without prior written consent.
          </p>

          <h2 className="text-3xl mb-6">5. Termination</h2>
          <p className="mb-8">
            We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in fraudulent or harmful behavior.
          </p>

          <div className="mt-20 p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Questions?</h3>
            <p className="text-palama-muted mb-6">If you have any questions about our Terms of Service, please contact our legal team.</p>
            <button className="text-brand-pink font-bold hover:underline">legal@palama.io</button>
          </div>
        </div>
      </section>
    </div>
  );
}
