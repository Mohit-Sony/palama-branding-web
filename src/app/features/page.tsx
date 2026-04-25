import FeatureLanding from "@/components/FeatureLanding";
import { ArrowRight, Smartphone, Calendar, Zap, MessageSquare, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FeaturesPage() {
  const sections = [
    {
      id: "scheduling",
      title: "Scheduling",
      subtitle: "Manage your appointments and bookings with ease",
      items: [
        { title: "Calendar", description: "A powerful calendar that works on any device. View your team and resources, and quickly find available slots for clients to book" },
        { title: "Appointments", description: "Create client appointments with built-in forms and upfront payments to secure bookings" },
        { title: "Checkout", description: "Easily check out client appointments by charging their card or other supported payment methods" },
        { title: "Services", description: "Add and customise services directly on appointments" },
        { title: "Resources", description: "Create, allocate, and automatically assign resources to services and appointments" },
        { title: "Automated messages", description: "Ensure clients never miss a booking with automated notifications" },
        { title: "Waitlist", description: "Automatically fill last-minute gaps by allowing clients to join a waitlist" },
        { title: "Group appointments", description: "Give clients the flexibility to book appointments with multiple guests" },
        { title: "Clients", description: "View important client information such as forms, patch tests, documents, and notes, all directly on the appointment" },
        { title: "Forms", description: "Add forms to appointments for clients to complete before their appointment date" },
        { title: "Payment policy", description: "Reduce cancellations and no-shows with appointment card confirmation and upfront client payments" },
      ]
    },
    {
      id: "client-management",
      title: "Client management",
      subtitle: "Build lasting relationships with your clients",
      items: [
        { title: "Client profiles", description: "Store detailed information about every client, including contact details and history." },
        { title: "Notes & History", description: "Keep track of every appointment, formula, and preference." },
        { title: "Loyalty programs", description: "Reward your best clients and keep them coming back." }
      ]
    },
    {
      id: "team-management",
      title: "Team management",
      subtitle: "Empower your team to deliver their best work",
      items: [
        { title: "Staff schedules", description: "Easily manage shifts and time off for your entire team." },
        { title: "Commission tracking", description: "Automatically calculate commissions and tips for each staff member." },
        { title: "Performance stats", description: "Track individual performance and growth over time." }
      ]
    },
    {
      id: "notifications",
      title: "Notifications",
      subtitle: "Ensure clients never miss a booking with automated notifications",
      items: [
        { title: "SMS reminders", description: "Send automated text reminders to reduce no-shows." },
        { title: "Email confirmations", description: "Instantly confirm every booking with professional emails." },
        { title: "Push notifications", description: "Stay connected with clients via mobile push alerts." }
      ]
    },
    {
      id: "reporting",
      title: "Reporting and analytics",
      subtitle: "Track your sales, team, and finances in one place",
      items: [
        { title: "Sales reports", description: "Get a clear picture of your revenue and growth." },
        { title: "Financial tracking", description: "Monitor your expenses and profitability effortlessly." },
        { title: "Inventory reports", description: "Never run out of stock with smart inventory alerts." }
      ]
    },
    {
      id: "payments",
      title: "Payments",
      subtitle: "Take secure payments effortlessly, online and in-store",
      isDark: true,
      items: [
        { title: "Online deposits", description: "Secure every booking with upfront deposits or full payments." },
        { title: "In-store checkout", description: "Process payments quickly with our integrated POS." },
        { title: "Card storage", description: "Safely store client cards for easy one-click checkout." }
      ]
    },
    {
      id: "online-bookings",
      title: "Online bookings",
      subtitle: "Fill your calendar with 24/7 seamless online booking",
      items: [
        { title: "Branded booking page", description: "Your own professional booking site that matches your brand." },
        { title: "Social media booking", description: "Let clients book directly from Instagram and Facebook." },
        { title: "Google booking", description: "Accept bookings directly from Google Search and Maps." }
      ]
    },
    {
      id: "marketing",
      title: "Marketing and promotions",
      subtitle: "Drive more bookings and maximize your revenue effortlessly",
      items: [
        { title: "Email marketing", description: "Create and send beautiful email campaigns in minutes." },
        { title: "Smart vouchers", description: "Sell gift cards and vouchers to boost your cash flow." },
        { title: "Flash sales", description: "Fill quiet periods with targeted promotions and discounts." }
      ]
    }
  ];

  return (
    <FeatureLanding sections={sections}>
      {/* Bespoke Sections at the TOP */}

      {/* Section 1: Take control of your day */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-pink mb-8">Efficiency Redefined</p>
            <h2 className="text-[48px] sm:text-[72px] lg:text-[88px] font-extrabold text-palama-navy tracking-tighter leading-[0.95] mb-10 max-w-4xl">
              Take control of your day <br className="hidden md:block" />
              with advanced <span className="text-brand-pink italic">scheduling</span>
            </h2>
            <p className="text-xl md:text-2xl text-palama-muted font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
              Seamlessly manage appointments, set custom availability, and send automated reminders designed for the world's most elite professionals.
            </p>
            <Link href="/pricing" className="cursor-pointer">
              <button className="bg-palama-navy text-white px-12 py-6 rounded-full font-extrabold text-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform flex items-center gap-4 cursor-pointer">
                Get started now <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>

          <div className="relative max-w-[1200px] mx-auto">
            <div className="absolute inset-0 bg-brand-pink/5 blur-[120px] rounded-full scale-110" />
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                alt="Scheduling App"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Supporting every business */}
      <section className="py-24 sm:py-40 bg-[#F9FAFB]">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="mb-24">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Built for Scale</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2 className="text-4xl md:text-[64px] lg:text-[72px] font-extrabold text-palama-navy tracking-tighter leading-[1] max-w-4xl">
                Supporting every business, <br className="hidden md:block" />at every stage
              </h2>
              <p className="text-xl text-palama-muted font-medium leading-relaxed max-w-sm md:text-right">
                Every business has its own unique needs. Palama brings booking, payments, teams, and clients into one unified engine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Independents", desc: "Smart business management for elite solo professionals.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
              { title: "Single locations", desc: "Spend less time managing and more time doing what you love.", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80" },
              { title: "Multi-location", desc: "Scale faster with enterprise solutions built for massive growth.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-transparent hover:border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700 group">
                <div className="h-80 rounded-[2rem] overflow-hidden mb-10">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight text-palama-navy">{card.title}</h3>
                <p className="text-palama-muted text-lg font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Powerful calendar functionality */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">The High-Performance Engine</p>
            <h2 className="text-4xl md:text-[64px] lg:text-[72px] font-extrabold text-palama-navy tracking-tighter leading-[1] mb-10">
              Powerful calendar functionality
            </h2>
            <p className="text-xl md:text-2xl text-palama-muted font-medium leading-relaxed">
              A smart, flexible calendar built for busy selfcare businesses. Palama helps you stay fully booked, prevent scheduling clashes, and manage every appointment with total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Smart scheduling", desc: "Intuitive, flexible, and built to handle every scheduling need.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
              { title: "Schedule shifts", desc: "Create clear schedules in minutes and keep everyone aligned.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
              { title: "Blocked time and breaks", desc: "Add lunch breaks and holidays in seconds.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
              { title: "Service extra time", desc: "Add extra time where it matters for complex services.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" }
            ].map((card, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-[3rem] border border-transparent hover:border-white hover:bg-white hover:shadow-2xl transition-all duration-700 group">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-palama-navy">{card.title}</h3>
                <p className="text-palama-muted text-base font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Automation */}
      <section className="py-24 sm:py-40 bg-[#F9FAFB]">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <div className="mb-24">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-palama-muted mb-6">Always Evolving</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2 className="text-4xl md:text-[64px] lg:text-[72px] font-extrabold text-palama-navy tracking-tighter leading-[1] max-w-4xl">
                Automation to ensure your clients <br className="hidden md:block" />have the best experience
              </h2>
              <p className="text-xl text-palama-muted font-medium leading-relaxed max-w-sm md:text-right">
                Shaped by real-world data, Palama automates the moments that matter most to your brand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Easy client bookings", desc: "Intuitive, flexible, and built to handle every scheduling need.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
              { title: "Intelligent notifications", desc: "Reduce phone time by sending automated confirmation requests.", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" },
              { title: "Loyalty programs", desc: "Add upsold products and tips in seconds for a happy team.", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80" }
            ].map((card, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-[4rem] p-12 mb-10 relative overflow-hidden h-[450px] flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-2xl border border-gray-50">
                  <div className="absolute inset-0 bg-[#F9FAFB] opacity-50" />
                  <div className="relative z-10 w-[240px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] border-[10px] border-white overflow-hidden group-hover:rotate-3 transition-transform duration-700">
                    <img src={card.img} alt={card.title} className="w-full" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight text-palama-navy">{card.title}</h3>
                <p className="text-palama-muted text-lg font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FeatureLanding>
  );
}
