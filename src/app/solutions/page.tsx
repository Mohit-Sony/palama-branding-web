import type { Metadata } from "next";
import HeroSolutions from "@/components/solutions/HeroSolutions";
import NicheSelector from "@/components/solutions/NicheSelector";
import CorePillars from "@/components/solutions/CorePillars";
import ValuePropHighlights from "@/components/solutions/ValuePropHighlights";
import TestimonialSlider from "@/components/solutions/TestimonialSlider";
import FinalCTA from "@/components/solutions/FinalCTA";

export const metadata: Metadata = {
  title: "Solutions | Palama",
  description: "The ultimate command center for your Spa, Salon, Med Spa, or Pet Grooming business. Own your data, zero marketplace hijacking.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSolutions />
      <NicheSelector />
      <CorePillars />
      <ValuePropHighlights />
      <TestimonialSlider />
      <FinalCTA />
    </div>
  );
}
