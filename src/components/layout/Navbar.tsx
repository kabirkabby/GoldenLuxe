"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When on homepage, at the top, and mobile menu closed, navbar is transparent
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`${
        isHomePage ? "fixed top-0 left-0" : "sticky top-0"
      } z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-white/10 shadow-none"
          : "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Main navigation bar */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4.5 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center">
          <span
            className={`font-sans text-2xl sm:text-3xl font-medium tracking-tight transition-colors ${
              isTransparent
                ? "text-white group-hover:text-[#DFCA8A]"
                : "text-neutral-900 group-hover:text-[#C2983B]"
            }`}
          >
            Golden Luxe Tours
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link
            href="/tours"
            className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors ${
              isTransparent
                ? "text-white/90 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Tours
          </Link>

          <Link
            href="/tours/amritsar-food-craft-old-city-walk"
            className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors ${
              isTransparent
                ? "text-white/90 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Food Tour
          </Link>

          <Link
            href="/fleet"
            className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors ${
              isTransparent
                ? "text-white/90 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Private Fleet
          </Link>

          {/* Kuch Khaas in distinct maroonish styling */}
          <Link
            href="/kuch-khaas"
            className={`text-[13px] tracking-[0.08em] uppercase font-semibold transition-colors flex items-center gap-2 group/kuch ${
              isTransparent
                ? "text-[#DFCA8A] hover:text-white"
                : "text-[#721824] hover:text-[#4A0D15]"
            }`}
          >
            <span>Kuch Khaas</span>
            <span
              className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 transition-colors ${
                isTransparent
                  ? "bg-[#721824] text-white group-hover/kuch:bg-[#8e202e]"
                  : "bg-[#58111A] text-white group-hover/kuch:bg-[#721824]"
              }`}
            >
              Living
            </span>
          </Link>
        </nav>

        {/* Right Action button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/plan-trip"
            className={`inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 border shadow-sm rounded-full ${
              isTransparent
                ? "text-white bg-white/15 hover:bg-white hover:text-black border-white/40 backdrop-blur-sm"
                : "text-white bg-black hover:bg-[#C2983B] hover:text-black border-black"
            }`}
          >
            <span>Plan Your Journey</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors ${
            isTransparent ? "text-white hover:text-[#DFCA8A]" : "text-neutral-900 hover:text-[#C2983B]"
          }`}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white text-neutral-900 px-6 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <Link
              href="/tours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-medium text-neutral-800 py-1 border-b border-neutral-100"
            >
              Tours
            </Link>
            <Link
              href="/tours/amritsar-food-craft-old-city-walk"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-medium text-neutral-800 py-1 border-b border-neutral-100"
            >
              Food Tour
            </Link>
            <Link
              href="/fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-medium text-neutral-800 py-1 border-b border-neutral-100"
            >
              Private Fleet
            </Link>
            <Link
              href="/kuch-khaas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider font-semibold text-[#721824] py-1 flex items-center justify-between"
            >
              <span>Kuch Khaas</span>
              <span className="text-[10px] font-bold uppercase bg-[#58111A] text-white px-2 py-0.5">
                Living
              </span>
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/plan-trip"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-black hover:bg-[#C2983B] hover:text-black transition-colors rounded-md"
            >
              <span>Plan Your Journey</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20plan%20a%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors rounded-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
