import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for solo professionals and teams. Start for free and scale with your business.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
