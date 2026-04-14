"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)] py-4" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-(--spacing-container) mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-[26px] font-bold tracking-tighter text-palama-navy leading-none">
            palama
          </Link>
          <nav className="hidden xl:flex items-center gap-8 text-[15px] font-bold text-palama-navy">
            <Link href="#" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              Business types <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              Features <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="hidden sm:block bg-palama-navy text-white px-6 py-[14px] rounded-full text-[15px] font-bold hover:bg-opacity-90 transition-all active:scale-95"
          >
            Get started now
          </Link>
          <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <Menu className="w-5 h-5 text-palama-navy" />
          </button>
        </div>
      </div>
    </header>
  );
}
