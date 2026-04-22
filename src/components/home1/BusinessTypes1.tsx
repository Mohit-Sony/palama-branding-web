"use client";

import { motion } from "framer-motion";

const businesses = [
  { name: 'Medspa & Aesthetics', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80', description: 'Advanced charting, memberships, and premium client experience.' },
  { name: 'High-End Salons', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', description: 'Multi-location staff management, inventory, and seamless booking.' },
  { name: 'Luxury Spas', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80', description: 'Resource optimization, packages, and white-glove check-ins.' },
  { name: 'Wellness Clinics', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', description: 'Secure records, forms, and custom consultation flows.' },
];

export default function BusinessTypes1() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[36px] md:text-5xl lg:text-[64px] font-bold text-palama-navy leading-[1.05] tracking-tight mb-6"
            >
              Built exclusively for <br className="hidden md:block" />
              <span className="text-slate-400">ambitious wellness brands.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl"
            >
              Whether you run a premium aesthetics clinic or a multi-location salon empire, Palama provides the tailored, white-label tools you need to dominate your market.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {businesses.map((business, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={i} 
              className="group relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[32px] bg-slate-100"
            >
              <div className="absolute inset-0 bg-palama-navy/20 group-hover:bg-palama-navy/10 transition-colors z-10 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-palama-navy/90 via-palama-navy/30 to-transparent z-10 opacity-90 transition-opacity duration-700" />
              
              <img 
                src={business.image} 
                alt={business.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                <div className="overflow-hidden">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform transition-transform duration-500 ease-out translate-y-0 group-hover:-translate-y-1">
                    {business.name}
                  </h3>
                </div>
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="text-white/80 font-medium text-sm md:text-base max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {business.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
