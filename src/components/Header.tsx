"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessTypesList } from "@/data/businessTypes";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [pathname]);

  // Pages that have a dark hero section requiring white header text
  const isDarkPage = pathname === "/help-center" || pathname === "/gdpr";
  const useWhiteText = isDarkPage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)] py-4" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-(--spacing-container) mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src={useWhiteText ? "/assets/palama-logo-white.svg" : "/assets/palama-logo-black.svg"} 
              alt="Palama" 
              className="h-9 w-auto transition-all duration-300" 
            />
          </Link>
          <nav className={`hidden xl:flex items-center gap-8 text-[15px] font-bold transition-colors duration-300 ${useWhiteText ? "text-white" : "text-palama-navy"}`}>
            <div className="relative">
              <button 
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 hover:opacity-70 transition-opacity py-4 cursor-pointer"
              >
                Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 pt-2 z-50"
                  >
                    <div className="w-[520px] bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6">
                      <div className="grid grid-cols-2 gap-2">
                        {businessTypesList.map((type) => (
                          <Link 
                            key={type}
                            href={`/business-types/${type.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className="px-6 py-3.5 text-[15px] font-bold text-gray-600 hover:text-palama-navy hover:bg-gray-50 rounded-2xl transition-all flex items-center justify-between group/item cursor-pointer"
                          >
                            {type}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-pink" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/features" className="hover:opacity-70 transition-opacity py-4 cursor-pointer">
              Features
            </Link>
            <Link href="/pricing" className="hover:opacity-70 transition-opacity cursor-pointer">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 relative">
          <Link
            href="/signup"
            className="hidden sm:block bg-brand-blue text-white px-6 py-[14px] rounded-full text-[15px] font-bold hover:bg-opacity-90 transition-all active:scale-95 cursor-pointer"
          >
            Get started now
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex items-center gap-2 px-4 h-12 rounded-full border transition-all cursor-pointer ${
              useWhiteText 
                ? "border-white/20 hover:bg-white/10" 
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <span className={`text-[15px] font-bold hidden sm:block transition-colors cursor-pointer ${useWhiteText ? "text-white" : "text-palama-navy"}`}>Menu</span>
            <Menu className={`w-5 h-5 transition-colors cursor-pointer ${useWhiteText ? "text-white" : "text-palama-navy"}`} />
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
                      <Link href="/help-center" className="text-[17px] font-bold text-palama-navy hover:opacity-70 transition-opacity">
                        Help and support
                      </Link>
                    </div>
                  </div>
                  <Link 
                    href="/for-customers"
                    className="pt-4 border-t border-gray-100 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-[17px] font-bold text-palama-navy">For customers</span>
                    <ArrowRight className="w-5 h-5 text-palama-navy group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
