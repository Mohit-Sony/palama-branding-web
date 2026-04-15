import type { Metadata } from "next";
import FeaturesHero from "@/components/features/FeaturesHero";

export const metadata: Metadata = {
  title: "Features | Palama — Everything You Need to Run Your Business",
  description:
    "Explore every feature Palama offers: appointment scheduling, POS, client CRM, inventory, financial reporting, staff management, and more.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full">
      <FeaturesHero />
    </div>
  );
}
