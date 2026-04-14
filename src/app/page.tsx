import Hero from "@/components/Hero";
import ValuePropsSection from "@/components/ValuePropsSection";
import GlobalStats from "@/components/GlobalStats";
import BusinessTypes from "@/components/BusinessTypes";
import FeatureGrid from "@/components/FeatureGrid";
import MarketplaceSection from "@/components/MarketplaceSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ValuePropsSection />
      {/* <GlobalStats /> */}
      <BusinessTypes />
      <FeatureGrid />
      {/* <MarketplaceSection /> */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 bg-white text-center">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-4xl md:text-[80px] font-bold text-palama-navy mb-10 max-w-5xl mx-auto leading-[1] tracking-tight">
            Ready to grow your business?
          </h2>
          <p className="text-xl md:text-2xl text-palama-muted mb-16 max-w-3xl mx-auto font-medium">
            Join the world's most popular platform for beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-palama-navy text-white px-12 py-[22px] rounded-full text-xl font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-2xl shadow-black/10">
              Get started now
            </button>
            <button className="w-full sm:w-auto bg-white text-palama-navy border-2 border-palama-navy px-12 py-[20px] rounded-full text-xl font-bold hover:bg-palama-navy hover:text-white transition-all active:scale-95">
              Contact sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
