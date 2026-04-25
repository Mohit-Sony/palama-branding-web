"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessTypesList } from "@/data/businessTypes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessTypesOpen, setIsBusinessTypesOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link href="/" className="flex items-center">
            <img src="/assets/palama-logo.svg" alt="Palama" className="h-9 w-auto" />
          </Link>
          <nav className="hidden xl:flex items-center gap-8 text-[15px] font-bold text-palama-navy">
            <div 
              className="relative group"
              onMouseEnter={() => setIsBusinessTypesOpen(true)}
              onMouseLeave={() => setIsBusinessTypesOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:opacity-70 transition-opacity cursor-pointer py-2">
                Business types <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isBusinessTypesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isBusinessTypesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 py-4"
                  >
                    <div className="flex flex-col">
                      {businessTypesList.map((type) => (
                        <Link 
                          key={type}
                          href={`/business-types/${type.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          className="px-8 py-3.5 text-[17px] font-medium text-gray-700 hover:text-palama-navy hover:bg-gray-50 transition-colors"
                        >
                          {type}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/features" className="hover:opacity-70 transition-opacity">
              Features
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 relative">
          <Link
            href="/signup"
            className="hidden sm:block bg-brand-blue text-white px-6 py-[14px] rounded-full text-[15px] font-bold hover:bg-opacity-90 transition-all active:scale-95"
          >
            Get started now
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-4 h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-[15px] font-bold text-palama-navy hidden sm:block">Menu</span>
            <Menu className="w-5 h-5 text-palama-navy" />
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full right-0 mt-2 w-[280px] bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 p-6"
              >
                <div className="flex flex-col gap-5">
                  <div className="pb-2">
                    <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4">For businesses</p>
                    <div className="flex flex-col gap-4">
                      <Link href="/login" className="text-[17px] font-bold text-brand-pink hover:opacity-70 transition-opacity">
                        Log in or sign up
                      </Link>
                      <Link href="/" className="text-[17px] font-bold text-palama-navy hover:opacity-70 transition-opacity">
                        Home
                      </Link>
                      <Link href="/blog" className="text-[17px] font-bold text-palama-navy hover:opacity-70 transition-opacity">
                        Blog
                      </Link>
                      <Link href="/support" className="text-[17px] font-bold text-palama-navy hover:opacity-70 transition-opacity">
                        Help and support
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between group cursor-pointer">
                    <span className="text-[17px] font-bold text-palama-navy">For customers</span>
                    <ArrowRight className="w-5 h-5 text-palama-navy group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
