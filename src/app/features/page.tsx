import FeatureLanding from "@/components/FeatureLanding";
import { ArrowRight, Smartphone, Calendar, Zap, MessageSquare, ShieldCheck, Star } from "lucide-react";
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Take control of your day <br />with advanced <span className="text-brand-pink">scheduling</span></h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto mb-10 font-medium">
            Seamlessly manage appointments, set custom availability, and send automated reminders designed for the beauty and selfcare industry
          </p>
          <button className="bg-white text-brand-blue border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-shadow inline-flex items-center gap-2">
            Get started now <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-16 relative max-w-[900px] mx-auto">
            <div className="absolute inset-0 bg-brand-pink/10 blur-[120px] rounded-full scale-75" />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
              alt="Scheduling App"
              className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Supporting every business */}
      <section className="py-20 sm:py-28 bg-gray-50/50">
        <div className="max-w-[1240px] mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Supporting every business, <br />at every stage</h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium">Every business has its own needs. Palama brings booking, payments, teams, clients, reminders and more into one powerful platform</p>
        </div>
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Independents", desc: "Smart business management for professionals", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
            { title: "Single locations", desc: "Spend less time managing and more time doing what you do best", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80" },
            { title: "Multi-location", desc: "Scale faster with customizable solutions built for enterprise", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-56 rounded-[1.5rem] overflow-hidden mb-6">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-base font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Powerful calendar functionality */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Powerful calendar functionality</h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto font-medium">A smart, flexible calendar built for busy selfcare businesses. Palama helps you stay fully booked, prevent scheduling clashes, and manage every appointment with total confidence.</p>
        </div>
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Smart scheduling", desc: "Intuitive, flexible, and built to handle every scheduling need.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
            { title: "Schedule shifts", desc: "Create clear schedules in minutes and keep everyone aligned.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
            { title: "Blocked time and breaks", desc: "Add lunch breaks and holidays in seconds.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
            { title: "Service extra time", desc: "Add extra time where it matters for complex services.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" }
          ].map((card, i) => (
            <div key={i} className="bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all text-center md:text-left">
              <div className="aspect-square rounded-xl overflow-hidden mb-5">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Automation */}
      <section className="py-20 sm:py-28 bg-gray-50/50">
        <div className="max-w-[1240px] mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Automation to ensure your clients <br />have the best experience</h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto font-medium">Shaped by real businesses and the entire selfcare industry, Palama automates the moments that matter most to you and your clients</p>
        </div>
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Easy client bookings", desc: "Intuitive, flexible, and built to handle every scheduling need.", color: "bg-brand-pink", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
            { title: "Intelligent notifications", desc: "Reduce phone time by sending automated confirmation requests.", color: "bg-brand-blue", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" },
            { title: "Loyalty programs", desc: "Add upsold products and tips in seconds for a happy team.", color: "bg-brand-blue-light", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80" }
          ].map((card, i) => (
            <div key={i} className="group">
              <div className={`${card.color} rounded-[2.5rem] p-10 mb-6 relative overflow-hidden h-[340px] flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 w-[160px] shadow-2xl rounded-[2rem] border-[6px] border-white overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img src={card.img} alt={card.title} className="w-full" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-base font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </FeatureLanding>
  );
}
