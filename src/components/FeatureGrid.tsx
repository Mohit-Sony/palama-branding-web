"use client";

import { Calendar, CreditCard, Users, Package, BarChart3, UserPlus, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Appointment scheduling",
    description: "Our world-class calendar is easy to use on any device.",
    icon: <Calendar className="w-8 h-8 text-palama-navy" />,
  },
  {
    title: "Point of sale (POS)",
    description: "A seamless checkout experience for you and your clients.",
    icon: <CreditCard className="w-8 h-8 text-palama-navy" />,
  },
  {
    title: "Client CRM",
    description: "Build strong relationships with detailed client profiles.",
    icon: <Users className="w-8 h-8 text-palama-navy" />,
  },
  {
    title: "Product inventory",
    description: "Manage your stock levels and sell products with ease.",
    icon: <Package className="w-8 h-8 text-palama-navy" />,
  },
  {
    title: "Financial reporting",
    description: "Track your performance with advanced business analytics.",
    icon: <BarChart3 className="w-8 h-8 text-palama-navy" />,
  },
  {
    title: "Staff management",
    description: "Manage shifts, commissions and staff performance.",
    icon: <UserPlus className="w-8 h-8 text-palama-navy" />,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 md:py-40 bg-[#F9FAFA]">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-[56px] font-bold text-palama-navy mb-8 tracking-tight leading-[1.1]">
            Everything you need in one software
          </h2>
          <p className="text-lg md:text-xl text-palama-muted leading-relaxed font-medium max-w-2xl mx-auto">
            Palama's all-in-one platform is built for fast-growing businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 group cursor-pointer flex flex-col items-start text-left">
              <div className="bg-[#F3F0FF] w-20 h-20 rounded-[28px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-palama-navy mb-6 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[17px] text-palama-muted leading-relaxed font-medium mb-10 flex-1">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-palama-navy font-bold text-[15px] group-hover:gap-4 transition-all">
                Learn more <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
