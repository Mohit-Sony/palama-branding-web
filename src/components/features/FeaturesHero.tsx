"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  CreditCard,
  Users,
  Package,
  BarChart3,
  Bell,
  Star,
  MessageSquare,
  Zap,
  Globe,
  Smartphone,
  Shield,
} from "lucide-react";

// ─── Feature card data ─────────────────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    id: "scheduling",
    icon: Calendar,
    label: "Appointments",
    color: "#107050",
    bg: "bg-[#F0FAF4]",
    accent: "text-[#107050]",
    accentBg: "bg-[#107050]",
    preview: <AppointmentPreview />,
  },
  {
    id: "pos",
    icon: CreditCard,
    label: "Point of Sale",
    color: "#DB2777",
    bg: "bg-[#FDF2F8]",
    accent: "text-[#DB2777]",
    accentBg: "bg-[#DB2777]",
    preview: <POSPreview />,
  },
  {
    id: "crm",
    icon: Users,
    label: "Client CRM",
    color: "#4F46E5",
    bg: "bg-[#F0F0FF]",
    accent: "text-[#4F46E5]",
    accentBg: "bg-[#4F46E5]",
    preview: <CRMPreview />,
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    color: "#D97706",
    bg: "bg-[#FFFBEB]",
    accent: "text-[#D97706]",
    accentBg: "bg-[#D97706]",
    preview: <InventoryPreview />,
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    color: "#7C3AED",
    bg: "bg-[#F5F3FF]",
    accent: "text-[#7C3AED]",
    accentBg: "bg-[#7C3AED]",
    preview: <AnalyticsPreview />,
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
    color: "#0369A1",
    bg: "bg-[#F0F9FF]",
    accent: "text-[#0369A1]",
    accentBg: "bg-[#0369A1]",
    preview: <NotificationsPreview />,
  },
  {
    id: "reviews",
    icon: Star,
    label: "Reviews",
    color: "#B45309",
    bg: "bg-[#FFFBEB]",
    accent: "text-[#B45309]",
    accentBg: "bg-[#B45309]",
    preview: <ReviewsPreview />,
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messaging",
    color: "#0F766E",
    bg: "bg-[#F0FDFA]",
    accent: "text-[#0F766E]",
    accentBg: "bg-[#0F766E]",
    preview: <MessagingPreview />,
  },
  {
    id: "automation",
    icon: Zap,
    label: "Automation",
    color: "#C2410C",
    bg: "bg-[#FFF7ED]",
    accent: "text-[#C2410C]",
    accentBg: "bg-[#C2410C]",
    preview: <AutomationPreview />,
  },
  {
    id: "online",
    icon: Globe,
    label: "Online Booking",
    color: "#1D4ED8",
    bg: "bg-[#EFF6FF]",
    accent: "text-[#1D4ED8]",
    accentBg: "bg-[#1D4ED8]",
    preview: <OnlineBookingPreview />,
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Mobile App",
    color: "#6D28D9",
    bg: "bg-[#F5F3FF]",
    accent: "text-[#6D28D9]",
    accentBg: "bg-[#6D28D9]",
    preview: <MobilePreview />,
  },
  {
    id: "security",
    icon: Shield,
    label: "Security",
    color: "#065F46",
    bg: "bg-[#ECFDF5]",
    accent: "text-[#065F46]",
    accentBg: "bg-[#065F46]",
    preview: <SecurityPreview />,
  },
];

// ─── Mini Previews ─────────────────────────────────────────────────────────────

function AppointmentPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      {["9:00 AM – Sarah K.", "10:30 AM – James R.", "2:00 PM – Maya L."].map(
        (t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm"
          >
            <div
              className={`w-1.5 h-8 rounded-full flex-shrink-0`}
              style={{
                background: ["#107050", "#4F46E5", "#DB2777"][i],
              }}
            />
            <span className="text-[10px] font-semibold text-gray-700 truncate">
              {t}
            </span>
          </div>
        )
      )}
    </div>
  );
}

function POSPreview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2 shadow-sm">
        <span className="text-[10px] font-bold text-gray-600">Subtotal</span>
        <span className="text-[10px] font-bold text-gray-800">$85.00</span>
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2 shadow-sm border-2 border-[#DB2777]/20">
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-3 h-3 text-[#DB2777]" />
          <span className="text-[10px] font-bold text-gray-600">Card</span>
        </div>
        <div className="w-3 h-3 rounded-full border-2 border-[#DB2777] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#DB2777] rounded-lg px-3 py-2">
        <span className="text-[10px] font-bold text-white">Charge</span>
        <span className="text-[10px] font-bold text-white">$85.00</span>
      </div>
    </div>
  );
}

function CRMPreview() {
  const clients = [
    { name: "Alice M.", visits: 12, bg: "bg-blue-200" },
    { name: "Bob W.", visits: 7, bg: "bg-purple-200" },
    { name: "Cara T.", visits: 23, bg: "bg-pink-200" },
  ];
  return (
    <div className="flex flex-col gap-1.5">
      {clients.map((c, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm"
        >
          <div
            className={`w-6 h-6 rounded-full ${c.bg} flex-shrink-0 flex items-center justify-center text-[8px] font-extrabold text-gray-600`}
          >
            {c.name[0]}
          </div>
          <span className="text-[10px] font-semibold text-gray-700 flex-1 truncate">
            {c.name}
          </span>
          <span className="text-[9px] font-bold text-[#4F46E5] bg-[#4F46E5]/10 px-1.5 py-0.5 rounded-full">
            {c.visits}x
          </span>
        </div>
      ))}
    </div>
  );
}

function InventoryPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      {[
        { name: "Shampoo Pro", stock: 3, warning: true },
        { name: "Conditioner", stock: 45, warning: false },
        { name: "Hair Mask", stock: 12, warning: false },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white rounded-lg px-2 py-1.5 shadow-sm"
        >
          <span className="text-[10px] font-semibold text-gray-700 truncate flex-1">
            {item.name}
          </span>
          <span
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ml-1 ${item.warning ? "text-red-600 bg-red-50" : "text-green-700 bg-green-50"}`}
          >
            {item.stock} left
          </span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [35, 60, 45, 80, 55, 90, 70];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold text-gray-500">
          This week
        </span>
        <span className="text-[10px] font-extrabold text-[#7C3AED]">▲ 18%</span>
      </div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background:
                i === 5
                  ? "#7C3AED"
                  : `rgba(124, 58, 237, ${0.15 + i * 0.05})`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="text-[8px] font-bold text-gray-400 flex-1 text-center">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function NotificationsPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      {[
        { dot: "bg-green-500", msg: "New booking confirmed" },
        { dot: "bg-blue-500", msg: "Reminder sent to Lucy" },
        { dot: "bg-amber-500", msg: "Client checked in" },
      ].map((n, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm"
        >
          <div className={`w-2 h-2 rounded-full ${n.dot} flex-shrink-0`} />
          <span className="text-[10px] font-medium text-gray-700 truncate">
            {n.msg}
          </span>
        </div>
      ))}
    </div>
  );
}

function ReviewsPreview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
        ))}
        <span className="text-[10px] font-extrabold text-gray-800 ml-1">4.9</span>
      </div>
      <div className="bg-white rounded-lg p-2 shadow-sm">
        <p className="text-[9px] font-medium text-gray-600 italic leading-snug">
          &quot;Absolutely amazing service, booked again next week!&quot;
        </p>
        <p className="text-[9px] font-bold text-gray-400 mt-1">— Sarah K.</p>
      </div>
    </div>
  );
}

function MessagingPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-end">
        <div className="bg-[#0F766E] text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[80%]">
          <p className="text-[9px] font-medium">Your 10am is confirmed ✓</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white shadow-sm rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[80%]">
          <p className="text-[9px] font-medium text-gray-700">
            Thanks! See you then 🙌
          </p>
        </div>
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      {[
        { trigger: "Booking made", action: "Send confirmation" },
        { trigger: "24hrs before", action: "Send reminder" },
      ].map((flow, i) => (
        <div
          key={i}
          className="bg-white rounded-lg px-2 py-1.5 shadow-sm flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#C2410C] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-bold text-[#C2410C] block truncate">
              {flow.trigger}
            </span>
            <span className="text-[8px] font-medium text-gray-500 truncate">
              → {flow.action}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OnlineBookingPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 shadow-sm">
        <Globe className="w-3 h-3 text-[#1D4ED8]" />
        <span className="text-[9px] font-bold text-gray-500 truncate">
          yoursalon.palama.com
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["Mon", "Wed", "Fri"].map((d) => (
          <div
            key={d}
            className="bg-[#1D4ED8]/10 rounded-md px-1 py-1.5 text-center"
          >
            <span className="text-[8px] font-extrabold text-[#1D4ED8]">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="bg-[#6D28D9] rounded-lg px-2 py-1.5 flex items-center justify-between">
        <span className="text-[9px] font-bold text-white">Today</span>
        <span className="text-[9px] font-bold text-white/70">3 apts</span>
      </div>
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white rounded-lg px-2 py-1.5 shadow-sm flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
            <div className="w-10 h-1 bg-gray-100 rounded-full mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SecurityPreview() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm">
        <Shield className="w-3 h-3 text-[#065F46]" />
        <span className="text-[9px] font-bold text-green-700">
          SSL Encrypted
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["2FA", "GDPR", "PCI"].map((badge) => (
          <div
            key={badge}
            className="bg-green-50 rounded-md py-1 text-center border border-green-100"
          >
            <span className="text-[8px] font-extrabold text-[#065F46]">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Individual floating card ──────────────────────────────────────────────────

type FloatingCard = {
  feature: (typeof FEATURE_CARDS)[0];
  x: number; // % from left
  y: number; // % from top
  delay: number; // animation delay seconds
  duration: number; // float duration seconds
  scale: number;
  rotation: number;
};

function FeatureFloatingCard({
  card,
  index,
}: {
  card: FloatingCard;
  index: number;
}) {
  const Icon = card.feature.icon;
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${card.x}%`,
        top: `${card.y}%`,
        transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
        animation: `floatCard ${card.duration}s ease-in-out ${card.delay}s infinite`,
        zIndex: index % 2 === 0 ? 1 : 2,
      }}
    >
      <div
        className={`${card.feature.bg} backdrop-blur-sm rounded-2xl shadow-lg border border-white/80 p-3 w-[160px]`}
        style={{
          boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Card header */}
        <div className="flex items-center gap-2 mb-2.5">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${card.feature.color}15` }}
          >
            <Icon
              className="w-3.5 h-3.5"
              style={{ color: card.feature.color }}
            />
          </div>
          <span
            className="text-[10px] font-extrabold tracking-wide"
            style={{ color: card.feature.color }}
          >
            {card.feature.label}
          </span>
        </div>

        {/* Mini preview */}
        <div className="relative overflow-hidden">{card.feature.preview}</div>
      </div>
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateCards(): FloatingCard[] {
  // Fixed positions — hugging left/right edges, clear of the central headline zone
  const positions = [
    { x: 1, y: 3 },  // top-left
    { x: 1, y: 38 },  // mid-left
    { x: 2, y: 72 },  // bottom-left
    { x: 20, y: 6 },  // upper-left-inner
    { x: 18, y: 80 },  // lower-left-inner
    { x: 79, y: 3 },  // top-right
    { x: 79, y: 38 },  // mid-right
    { x: 79, y: 72 },  // bottom-right
    { x: 61, y: 6 },  // upper-right-inner
    { x: 62, y: 80 },  // lower-right-inner
    { x: 41, y: 1 },  // top-centre (narrow peek above headline)
    { x: 38, y: 88 },  // very bottom centre
  ];

  // Shuffle feature order with a fixed seed so it's deterministic
  const shuffled = [...FEATURE_CARDS].sort(
    (a, b) => seededRandom(a.label.length) - seededRandom(b.label.length)
  );

  return shuffled.map((feature, i) => ({
    feature,
    x: positions[i].x,
    y: positions[i].y,
    delay: seededRandom(i * 3) * 4,
    duration: 5 + seededRandom(i * 7) * 4,
    scale: 0.82 + seededRandom(i * 11) * 0.28,
    rotation: (seededRandom(i * 13) - 0.5) * 10,
  }));
}

const CARDS = generateCards();

export default function FeaturesHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Inject keyframe via style tag */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: var(--tw-transform) translateY(0px); }
          50% { transform: var(--tw-transform) translateY(-18px); }
        }
        @keyframes floatCardBase {
          0%, 100% { transform: translateY(0px) rotate(var(--card-rotate)) scale(var(--card-scale)); }
          50% { transform: translateY(-18px) rotate(var(--card-rotate)) scale(var(--card-scale)); }
        }
        .feature-float {
          animation-name: featureFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes featureFloat {
          0%, 100% { transform: translateY(0px); }
          50%  { transform: translateY(-18px); }
        }
        .hero-text-fade {
          animation: heroFade 0.8s ease-out both;
        }
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .badge-pulse {
          animation: badgePulse 2.4s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 112, 80, 0.25); }
          50%       { box-shadow: 0 0 0 8px rgba(16, 112, 80, 0); }
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FAF9] via-white to-[#F9FAFB]">

        {/* ── Subtle radial glow in centre ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,112,80,0.05) 0%, transparent 70%)",
          }}
        />

        {/* ── Floating feature cards — always behind the hero text (z-index 3) ── */}
        {mounted &&
          CARDS.map((card, i) => (
            <div
              key={card.feature.id}
              className="absolute pointer-events-none select-none"
              style={{
                left: `${card.x}%`,
                top: `${card.y}%`,
                transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
                animationName: "featureFloat",
                animationDuration: `${card.duration}s`,
                animationDelay: `${card.delay}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                zIndex: 2,
              }}
            >
              <div
                className={`${card.feature.bg} rounded-2xl border border-white/90 p-3 w-[158px]`}
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${card.feature.color}18` }}
                  >
                    <card.feature.icon
                      className="w-3.5 h-3.5"
                      style={{ color: card.feature.color }}
                    />
                  </div>
                  <span
                    className="text-[10px] font-extrabold tracking-wide"
                    style={{ color: card.feature.color }}
                  >
                    {card.feature.label}
                  </span>
                </div>
                {/* Mini preview */}
                {card.feature.preview}
              </div>
            </div>
          ))}

        {/* ── Edge gradient fades so cards bleed out cleanly ── */}
        <div className="absolute inset-y-0 left-0 w-52 pointer-events-none z-10 bg-gradient-to-r from-[#F8FAF9] via-[#F8FAF9]/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-52 pointer-events-none z-10 bg-gradient-to-l from-[#F8FAF9] via-[#F8FAF9]/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 pointer-events-none z-10 bg-gradient-to-b from-[#F8FAF9] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10 bg-gradient-to-t from-[#F9FAFB] to-transparent" />

        {/* ── Soft radial shield so floating cards don't bleed over the headline ── */}
        <div
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            background: "radial-gradient(ellipse 55% 52% at 50% 48%, rgba(248,250,249,0.92) 0%, rgba(248,250,249,0.60) 60%, transparent 100%)",
          }}
        />

        {/* ── Central content — z-30 to sit above everything ── */}
        <div className="relative z-30 text-center max-w-4xl mx-auto px-6">

          {/* Headline */}
          <h1
            className="hero-text-fade text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-palama-navy leading-[1.0] tracking-[-0.03em] mb-6"
            style={{ animationDelay: "0.05s" }}
          >
            One platform,
            <br />
            <span className="text-palama-muted/30">everything you need.</span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-text-fade text-lg sm:text-xl md:text-2xl text-palama-muted font-medium leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ animationDelay: "0.15s" }}
          >
            Explore all the features you need to run, grow, and love your business — from day one.
          </p>

          {/* CTAs */}
          <div
            className="hero-text-fade flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="/signup"
              className="bg-palama-navy text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-xl shadow-black/10 inline-flex items-center gap-2"
            >
              Get started free
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#features"
              className="text-palama-navy border-2 border-palama-navy/20 bg-white/80 px-8 py-4 rounded-full text-[16px] font-bold hover:bg-palama-navy hover:text-white hover:border-palama-navy transition-all active:scale-95"
            >
              Explore features
            </a>
          </div>

          {/* Feature count strip */}
          <div
            className="hero-text-fade mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            style={{ animationDelay: "0.35s" }}
          >
            {[
              { count: "12+", label: "Core features" },
              { count: "120k+", label: "Businesses" },
              { count: "4.9★", label: "App rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-[22px] font-extrabold text-palama-navy tracking-tight">
                  {stat.count}
                </span>
                <span className="text-[13px] font-medium text-palama-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
