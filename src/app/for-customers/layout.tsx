import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Customers",
  description: "Book appointments directly with your favorite brands. Our centralized brand catalogue is coming soon.",
};

export default function ForCustomersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
