import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Palama Journal",
  description: "Insights, stories, and strategies for the modern beauty and wellness professional. Dropping soon.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
