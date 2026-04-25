"use client";

const stats = [
  { value: "130k+", label: "Partner businesses" },
  { value: "1 billion+", label: "Appointments booked" },
  { value: "450k+", label: "Professionals" },
  { value: "120+", label: "Countries" },
];

export default function GlobalStats() {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-br from-[#0D1619] via-[#2D1F6B] to-[#0D1619] text-white">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left flex flex-col gap-4">
              <div className="text-5xl lg:text-[72px] font-extrabold leading-none tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm lg:text-[15px] font-bold text-white/60 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
