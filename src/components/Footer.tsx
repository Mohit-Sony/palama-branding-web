"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: ["Booking software", "Point of sale", "Client CRM", "Marketing tools", "Inventory management", "Reporting & analytics"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Contact us", "Press", "Partnerships", "Palama Academy"],
  },
  {
    title: "Resources",
    links: ["Help center", "Blog", "Sitemap", "Terms of service", "Privacy policy", "GDPR"],
  },
  {
    title: "Industries",
    links: ["Hair salons", "Barbershops", "Nail salons", "Skin care", "Spas & wellness", "Massage therapy"],
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
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-2xl font-bold tracking-tighter">palama</span>
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
