import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero1 from "@/components/home1/Hero1";
import PlatformIntro1 from "@/components/home1/PlatformIntro1";
import BusinessTypes1 from "@/components/home1/BusinessTypes1";
import FeatureGrid1 from "@/components/home1/FeatureGrid1";
import ValueProps1 from "@/components/home1/ValueProps1";
import FinalCTA1 from "@/components/home1/FinalCTA1";

export default function Home1() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans text-palama-navy selection:bg-palama-navy selection:text-white">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero1 />
        <PlatformIntro1 />
        <BusinessTypes1 />
        <FeatureGrid1 />
        <ValueProps1 />
        <FinalCTA1 />
      </main>
      <Footer />
    </div>
  );
}
