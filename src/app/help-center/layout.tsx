import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Get the most out of Palama with our comprehensive guides, tutorials, and specialist support.",
};

export default function HelpCenterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
