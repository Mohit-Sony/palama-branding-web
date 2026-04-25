"use client";

import React, { useEffect, useState } from "react";
import {
  Globe,
  Calendar,
  Clock,
  CheckCircle2,
  Star,
  Zap,
  Smartphone,
  BellRing,
  User,
} from "lucide-react";
import FeatureSectionLayout from "./FeatureSectionLayout";

// ─── Booking Widget Data ───────────────────────────────────────────────────────

const SERVICES = [
  { name: "Haircut & Style", duration: "60 min", price: "$65", color: "#107050" },
  { name: "Colour Treatment", duration: "120 min", price: "$140", color: "#4F46E5" },
  { name: "Deep Conditioning", duration: "45 min", price: "$45", color: "#DB2777" },
];

const TIME_SLOTS = ["9:00", "10:30", "11:00", "13:00", "14:30", "16:00"];
const STEP_DURATIONS = [3200, 3800, 3500, 3000];

const CALENDAR_DAYS = [
  { d: "M", n: 14, avail: true },
  { d: "T", n: 15, avail: false },
  { d: "W", n: 16, avail: true, active: true },
  { d: "T", n: 17, avail: true },
  { d: "F", n: 18, avail: true },
  { d: "S", n: 19, avail: false },
  { d: "S", n: 20, avail: true },
];

// ─── Animated Booking Widget ──────────────────────────────────────────────────

function BookingWidget() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(2);
  const [animIn, setAnimIn] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setAnimIn(false);
      setTimeout(() => {
        setStep((s) => (s === 3 ? 0 : s + 1));
        setAnimIn(true);
      }, 350);
    }, STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div
      className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18),0_8px_24px_rgba(0,0,0,0.08)] w-full max-w-[360px] mx-auto select-none"
      style={{ background: "linear-gradient(145deg,#fff 0%,#f8faf9 100%)", border: "8px solid #101921" }}
    >
      {/* Status bar */}
      <div className="bg-[#101921] px-5 pt-3 pb-2 flex items-center justify-between">
        <span className="text-[11px] font-bold text-white/70">9:41</span>
        <div className="w-20 h-4 bg-[#101921] rounded-b-xl mx-auto absolute left-1/2 -translate-x-1/2 top-0" />
        <div className="w-3.5 h-2 bg-white/60 rounded-sm" />
      </div>

      {/* App header */}
      <div className="bg-white px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-[#101921] flex items-center justify-center">
            <span className="text-white font-extrabold text-[11px]">P</span>
          </div>
          <span className="text-[13px] font-extrabold text-[#101921]">palama</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>

      {/* Step progress */}
      <div className="bg-white px-5 pt-4 pb-2">
        <div className="flex items-center gap-1.5">
          {["Service", "Date & Time", "Confirm"].map((lbl, i) => (
            <React.Fragment key={lbl}>
              <div className="flex items-center gap-1">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold transition-all duration-500"
                  style={{
                    background: step > i ? "#107050" : step === i ? "#101921" : "#E5E7EB",
                    color: step >= i ? "white" : "#9CA3AF",
                  }}
                >
                  {step > i ? "✓" : i + 1}
                </div>
                <span
                  className="text-[9px] font-bold transition-colors duration-300 hidden sm:block"
                  style={{ color: step >= i ? "#101921" : "#9CA3AF" }}
                >
                  {lbl}
                </span>
              </div>
              {i < 2 && (
                <div className="flex-1 h-px bg-gray-200 mx-1">
                  <div
                    className="h-full bg-[#107050] transition-all duration-700"
                    style={{ width: step > i ? "100%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div
        className="bg-white px-4 pb-5"
        style={{
          opacity: animIn ? 1 : 0,
          transform: animIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          minHeight: 300,
        }}
      >
        {/* Step 0 — Service */}
        {step === 0 && (
          <div>
            <h3 className="text-[13px] font-extrabold text-[#101921] mb-3">Choose a service</h3>
            <div className="flex flex-col gap-2">
              {SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 p-3 rounded-2xl border-2 cursor-pointer transition-all duration-200"
                  style={{
                    borderColor: selectedService === i ? s.color : "transparent",
                    background: selectedService === i ? `${s.color}08` : "#F9FAFB",
                  }}
                  onClick={() => setSelectedService(i)}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}15` }}>
                    <Zap className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-extrabold text-[#101921] truncate">{s.name}</div>
                    <div className="text-[10px] text-gray-400 font-medium">{s.duration}</div>
                  </div>
                  <span className="text-[12px] font-extrabold" style={{ color: s.color }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 1 — Date & Time */}
        {step === 1 && (
          <div>
            <h3 className="text-[13px] font-extrabold text-[#101921] mb-3">Pick a date & time</h3>
            <div className="flex gap-1.5 mb-4">
              {CALENDAR_DAYS.map((day) => (
                <div
                  key={day.n}
                  className="flex-1 flex flex-col items-center py-2 rounded-xl transition-all duration-200"
                  style={{ background: day.active ? "#101921" : day.avail ? "#F0FAF4" : "#F3F4F6", opacity: day.avail ? 1 : 0.4 }}
                >
                  <span className="text-[8px] font-bold" style={{ color: day.active ? "rgba(255,255,255,0.6)" : "#9CA3AF" }}>{day.d}</span>
                  <span className="text-[11px] font-extrabold" style={{ color: day.active ? "white" : day.avail ? "#101921" : "#9CA3AF" }}>{day.n}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {TIME_SLOTS.map((slot, i) => (
                <div
                  key={slot}
                  className="py-2 rounded-xl text-center cursor-pointer transition-all duration-200"
                  style={{ background: selectedSlot === i ? "#107050" : "#F0FAF4" }}
                  onClick={() => setSelectedSlot(i)}
                >
                  <span className="text-[10px] font-extrabold" style={{ color: selectedSlot === i ? "white" : "#107050" }}>{slot}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — Confirm */}
        {step === 2 && (
          <div>
            <h3 className="text-[13px] font-extrabold text-[#101921] mb-3">Review your booking</h3>
            <div className="bg-[#F0FAF4] rounded-2xl p-3 mb-3">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#107050]/15 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#107050]" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-[#101921]">{SERVICES[selectedService].name}</div>
                  <div className="text-[10px] text-gray-400">{SERVICES[selectedService].duration}</div>
                </div>
                <span className="ml-auto text-[12px] font-extrabold text-[#107050]">{SERVICES[selectedService].price}</span>
              </div>
              <div className="border-t border-[#107050]/10 pt-2 flex gap-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#107050]" />
                  <span className="text-[10px] font-bold text-[#101921]">Wed, Jun 16</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#107050]" />
                  <span className="text-[10px] font-bold text-[#101921]">{TIME_SLOTS[selectedSlot]}</span>
                </div>
              </div>
            </div>
            <button className="w-full py-3 rounded-2xl text-[12px] font-extrabold text-white" style={{ background: "#101921" }}>
              Confirm Booking
            </button>
          </div>
        )}

        {/* Step 3 — Success */}
        {step === 3 && (
          <div className="flex flex-col items-center py-4 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ background: "#107050" }}>
              <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[14px] font-extrabold text-[#101921] mb-1">Booking confirmed! 🎉</h3>
            <p className="text-[10px] text-gray-400 font-medium mb-4 max-w-[200px]">A confirmation has been sent to your email.</p>
            <div className="bg-[#F0FAF4] rounded-2xl p-3 w-full text-left">
              <div className="text-[10px] font-extrabold text-[#107050] mb-1.5">Booking summary</div>
              <div className="text-[11px] font-bold text-[#101921]">{SERVICES[selectedService].name}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">Wed, Jun 16 · {TIME_SLOTS[selectedSlot]}</div>
            </div>
            <div className="mt-3 flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-3 py-1.5">
              <BellRing className="w-3 h-3 text-[#107050]" />
              <span className="text-[9px] font-bold text-gray-500">Reminder set for 24hrs before</span>
            </div>
          </div>
        )}
      </div>

      {/* Home bar */}
      <div className="bg-white pt-1 pb-3 flex justify-center">
        <div className="w-20 h-1 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}

// ─── Floating overlay badges (specific to Online Booking) ─────────────────────

function OnlineBookingOverlay() {
  return (
    <>
      {/* Social proof — bottom left */}
      <div
        className="fsl-float-1 absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 px-3 py-2.5 flex items-center gap-2.5"
      >
        <div className="flex -space-x-1.5">
          {["bg-blue-300", "bg-pink-300", "bg-amber-300"].map((c, i) => (
            <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-white`} />
          ))}
        </div>
        <div>
          <div className="text-[10px] font-extrabold text-[#101921]">+2,400 bookings today</div>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>

      {/* "Booked online" chip — top right */}
      <div
        className="fsl-float-2 absolute -top-4 -right-6 bg-[#107050] text-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
      >
        <Globe className="w-3.5 h-3.5" />
        <div>
          <div className="text-[10px] font-extrabold">Booked online</div>
          <div className="text-[9px] text-white/70">via your website</div>
        </div>
      </div>
    </>
  );
}

// ─── Section export ───────────────────────────────────────────────────────────

export default function OnlineBookingSection() {
  return (
    <FeatureSectionLayout
      id="online-booking"
      accentColor="#107050"
      labelIcon={Globe}
      label="Online Booking"
      visual={<div className="relative w-full max-w-[380px] mx-auto"><BookingWidget /><OnlineBookingOverlay /></div>}
      visualSide="left"
      headline={
        <>
          Your clients book
          <br />
          <span style={{ color: "#107050" }}>24 / 7,</span>
          {" "}you focus
          <br />
          on the craft.
        </>
      }
      description="Give clients a seamless, branded booking experience directly on your website or via the Palama marketplace — with zero back-and-forth required."
      bullets={[
        {
          icon: Globe,
          title: "Embed on any website",
          description: "Drop the booking widget onto your existing site in minutes — no developer needed.",
        },
        {
          icon: Smartphone,
          title: "Mobile-first experience",
          description: "Clients book effortlessly from any device on a beautiful, fast-loading interface.",
        },
        {
          icon: BellRing,
          title: "Automatic reminders",
          description: "Cut no-shows by up to 70% with automated SMS and email reminders sent at the right time.",
        },
        {
          icon: Zap,
          title: "Instant confirmation",
          description: "Real-time availability, instant booking confirmation, and calendar sync — all automatic.",
        },
      ]}
      stats={[
        { value: "70%", label: "fewer no-shows" },
        { value: "24/7", label: "online availability" },
        { value: "2 min", label: "average booking time" },
      ]}
    />
  );
}
