"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Booking software", href: "/features#scheduling" },
      { name: "Point of sale", href: "/features#payments" },
      { name: "Client CRM", href: "/features#client-management" },
      { name: "Marketing tools", href: "/features#marketing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Partnerships", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help center", href: "/help-center" },
      { name: "Terms of service", href: "/terms" },
      { name: "Privacy policy", href: "/privacy" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Hair salons", href: "/business-types/hair-salons" },
      { name: "Barbershops", href: "/business-types/barbershops" },
      { name: "Nail salons", href: "/business-types/nail-salons" },
      { name: "Skin care", href: "/business-types/skin-care" },
      { name: "Spas & wellness", href: "/business-types/spas-wellness" },
      { name: "Massage therapy", href: "/business-types/massage-therapy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-palama-navy text-white pt-24 pb-12">
      <div className="max-w-(--spacing-container) mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="text-lg font-bold mb-6 italic">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/assets/palama-logo-white.svg" alt="Palama" className="h-8 w-auto" />
            <p className="text-sm text-gray-500">© 2026 Palama. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-8">
            {/* Social Links */}
            {[
              { name: "Instagram", href: "https://www.instagram.com/palama.io/" },
              { name: "Facebook", href: "https://www.facebook.com/palama.io" },
              { name: "LinkedIn", href: "https://www.linkedin.com/company/palama-io" }
            ].map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold">
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
