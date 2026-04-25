import Hero from "@/components/Hero";
import ValuePropsSection from "@/components/ValuePropsSection";
import GlobalStats from "@/components/GlobalStats";
import PlatformIntroSection from "@/components/PlatformIntroSection";
import BusinessTypes from "@/components/BusinessTypes";
import BusinessTypesClassical from "@/components/BusinessTypesClassical";
import FeatureGrid from "@/components/FeatureGrid";
import MarketplaceSection from "@/components/MarketplaceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* <GlobalStats /> */}
      <PlatformIntroSection />
      <BusinessTypesClassical />
      <FeatureGrid />

      <ValuePropsSection />

      {/* <MarketplaceSection /> */}
      <TestimonialsSection />
      <BusinessTypes />
      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 bg-white text-center">
        <div className="max-w-(--spacing-container) mx-auto px-6">
          <h2 className="text-4xl md:text-[80px] font-extrabold text-palama-navy mb-10 max-w-5xl mx-auto leading-[1] tracking-tight">
            Ready to grow your business?
          </h2>
          <p className="text-xl md:text-2xl text-palama-muted mb-16 max-w-3xl mx-auto font-medium">
            Join the world's most popular platform for beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/pricing" className="w-full sm:w-auto cursor-pointer">
              <button className="w-full bg-palama-navy text-white px-12 py-[22px] rounded-full text-xl font-extrabold hover:bg-opacity-90 transition-all active:scale-95 shadow-2xl shadow-black/10 cursor-pointer">
                Get started now
              </button>
            </Link>
            <Link href="/contact-sales" className="w-full sm:w-auto cursor-pointer">
              <button className="w-full bg-white text-palama-navy border-2 border-palama-navy px-12 py-[20px] rounded-full text-xl font-bold hover:bg-palama-navy hover:text-white transition-all active:scale-95 cursor-pointer">
                Contact sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
