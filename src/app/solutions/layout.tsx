import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description: "Bespoke booking and management solutions tailored for salons, spas, barbers, and fitness professionals.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
