"use client";

const stats = [
  { label: "Partner businesses", value: "120,000+" },
  { label: "Professionals", value: "450,000+" },
  { label: "Countries", value: "120+" },
  { label: "Appointments booked", value: "1 billion+" },
];

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left border-l-0 md:border-l border-gray-100 md:pl-8 first:border-0 first:pl-0">
              <div className="text-4xl lg:text-5xl font-bold text-palama-navy mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm lg:text-[15px] font-bold text-palama-muted uppercase tracking-[0.1em] leading-relaxed max-w-[140px] md:max-w-none mx-auto md:mx-0">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
