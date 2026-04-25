"use client";

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-white text-palama-navy min-h-screen">
      <section className="pt-32 pb-16 sm:pt-48 sm:pb-24 bg-[#FFF9FB] border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-6">Privacy Policy</h1>
          <p className="text-xl text-palama-muted font-medium">Last updated: April 25, 2026</p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <p className="text-xl leading-relaxed text-palama-muted mb-12">
            Your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use the Palama platform.
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-6">1. Information We Collect</h2>
          <p className="mb-8">
            We collect information you provide directly to us (name, email, business details), as well as automated data about your use of our services (IP address, device info, booking history).
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-6">2. How We Use Information</h2>
          <p className="mb-8">
            We use your data to provide and improve our services, process payments, send automated notifications, and personalize your experience. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-6">3. Data Sharing</h2>
          <p className="mb-8">
            We share information with service providers (like payment processors) necessary for our operations. When you book an appointment, your information is shared with the specific business you are booking with.
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-6">4. Your Rights</h2>
          <p className="mb-8">
            You have the right to access, correct, or delete your personal data. You can manage your privacy settings directly within your Palama account.
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-palama-navy mb-6">5. Data Security</h2>
          <p className="mb-8">
            We use industry-standard encryption and security measures to protect your data from unauthorized access or disclosure.
          </p>

          <div className="mt-20 p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Data Privacy Officer</h3>
            <p className="text-palama-muted mb-6">For any data-related requests or concerns, please reach out to our privacy officer.</p>
            <button className="text-brand-pink font-bold hover:underline">privacy@palama.io</button>
          </div>
        </div>
      </section>
    </div>
  );
}
