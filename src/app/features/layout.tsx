import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the powerful features that make Palama the gold standard for booking and business management.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
