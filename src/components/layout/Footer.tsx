"use client";

import React from "react";
import Link from "next/link";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { TOURS_DATA } from "@/data/tours";

export function Footer() {
  const navLinks = [
    { name: "Tours", href: "/tours" },
    { name: "Food Tour", href: "/tours/amritsar-food-craft-old-city-walk" },
    { name: "Private Fleet", href: "/fleet" },
    { name: "Kuch Khaas", href: "/kuch-khaas" },
    { name: "Plan Your Journey", href: "/plan-trip" },
  ];

  return (
    <footer className="bg-black text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid: Left brand/social + 2 right columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-neutral-800/80">
          
          {/* Left Column: Brand, WhatsApp, FB & Insta */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Link href="/" className="font-sans font-medium text-2xl sm:text-3xl tracking-tight text-white block hover:text-[#DFCA8A] transition-colors">
                Golden Luxe Tours
              </Link>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C2983B] font-medium block mt-1.5">
                Private Journeys & Cultural Concierge • Amritsar
              </span>
            </div>

            {/* Chat with WhatsApp option */}
            <div>
              <a
                href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-neutral-900 hover:bg-[#C2983B] hover:text-black text-white border border-neutral-800 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 rounded-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Facebook and Instagram logos */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Golden Luxe Tours on Facebook"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#C2983B] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Golden Luxe Tours on Instagram"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#C2983B] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns: Navigation & Our Tours */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Column 1: Navigation */}
            <div className="space-y-4">
              <h4 className="font-sans font-medium text-xs text-[#DFCA8A] tracking-[0.2em] uppercase">
                Navigation
              </h4>
              <ul className="space-y-3 text-xs text-neutral-400 font-light">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Tours */}
            <div className="space-y-4">
              <h4 className="font-sans font-medium text-xs text-[#DFCA8A] tracking-[0.2em] uppercase">
                Our Tours
              </h4>
              <ul className="space-y-3 text-xs text-neutral-400 font-light">
                {TOURS_DATA.map((tour) => (
                  <li key={tour.id}>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="hover:text-white transition-colors block py-0.5 line-clamp-1"
                      title={tour.title}
                    >
                      {tour.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Lower bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light gap-4">
          <div>
            © 2026 Golden Luxe Tours. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Amritsar • Punjab • India</span>
            <span>Fluent English & Punjabi Assistance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
