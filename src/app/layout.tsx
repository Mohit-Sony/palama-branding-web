import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Palama",
    default: "Palama | The World's Most Powerful Booking Software",
  },
  description: "Join 120,000+ businesses and 450,000+ professionals worldwide using Palama to grow their sales and manage their bookings seamlessly.",
  keywords: ["booking software", "scheduling tool", "salon management", "business growth", "online booking", "SaaS"],
  authors: [{ name: "Palama Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palama.com",
    siteName: "Palama",
    images: [
      {
        url: "/assets/palama-logo-black.svg",
        width: 1200,
        height: 630,
        alt: "Palama Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palama | The World's Most Powerful Booking Software",
    description: "The all-in-one platform for your service business.",
    images: ["/assets/palama-logo-black.svg"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.svg", media: "(prefers-color-scheme: light)" },
      { url: "/assets/favicon-pink.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=SUSE:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
