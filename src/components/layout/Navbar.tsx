"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TempleIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-all">
      {/* Top Black Bar */}
      <div className="bg-black text-neutral-300 text-xs py-2.5 sm:py-3 px-4 sm:px-8 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2983B] animate-pulse" />
            <span className="tracking-[0.14em] uppercase text-[11px] sm:text-xs text-neutral-200 font-medium">
              Amritsar Private Concierge & Chauffeur Tours
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-neutral-400 text-xs">
            <a 
              href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20inquire%20about%20a%20private%20tour%20in%20Amritsar." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C2983B] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>
            <span className="text-neutral-700">|</span>
            <span className="tracking-wide">Fluent English & Punjabi Assistance</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Brand Identity - Clean and minimal */}
        <Link href="/" className="group flex items-center">
          <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900 group-hover:text-[#C2983B] transition-colors">
            Golden Luxe Tours
          </span>
        </Link>

        {/* Desktop Navigation Links: Tours, Food tour, Private fleet, Kuch Khaas */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link 
            href="/tours" 
            className="text-[13px] tracking-[0.08em] uppercase font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Tours
          </Link>

          <Link 
            href="/tours/amritsar-food-craft-old-city-walk" 
            className="text-[13px] tracking-[0.08em] uppercase font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Food Tour
          </Link>

          <Link 
            href="/fleet" 
            className="text-[13px] tracking-[0.08em] uppercase font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Private Fleet
          </Link>

          {/* Kuch Khaas in distinct maroonish styling */}
          <Link 
            href="/kuch-khaas" 
            className="text-[13px] tracking-[0.08em] uppercase font-semibold text-[#721824] hover:text-[#4A0D15] transition-colors flex items-center gap-2 group/kuch"
          >
            <span>Kuch Khaas</span>
            <span className="text-[9px] uppercase tracking-wider font-bold bg-[#58111A] text-white px-2 py-0.5 group-hover/kuch:bg-[#721824] transition-colors">
              Living
            </span>
          </Link>
        </nav>

        {/* Right Action button - Refined small rounded edges */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/plan-trip"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-black hover:bg-[#C2983B] hover:text-black transition-all duration-300 border border-black shadow-sm rounded-md"
          >
            <span>Plan Your Journey</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-900 hover:text-[#C2983B] focus:outline-none"
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
        <div className="lg:hidden border-t border-neutral-100 bg-white px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
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
