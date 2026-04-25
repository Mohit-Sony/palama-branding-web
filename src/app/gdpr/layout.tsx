import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description: "Our commitment to data protection and how we comply with GDPR regulations to keep your business safe.",
};

export default function GDPRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
