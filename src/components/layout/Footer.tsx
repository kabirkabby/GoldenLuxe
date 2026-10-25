"use client";

import React from "react";
import Link from "next/link";
import { WhatsAppIcon, MapPinIcon, PhoneCallIcon, CheckOrnamentIcon } from "@/components/ui/Icons";
import { TOURS_DATA } from "@/data/tours";

export function Footer() {
  return (
    <footer className="bg-black text-neutral-300 pt-20 pb-14 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="font-serif text-3xl font-light tracking-tight text-white block">
                Golden Luxe Tours
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C2983B] font-semibold mt-1 block">
                Private Journeys & Cultural Concierge • Amritsar
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              Amritsar’s premier private travel company. We curate bespoke spiritual, cultural, and culinary journeys for discerning families, couples, international travelers, and NRIs who seek grace, privacy, and profound authenticity.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-neutral-400 font-light">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="w-4 h-4 text-[#C2983B]" />
                <span>Amritsar, Punjab, India • Airport & Railway Transfers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCallIcon className="w-4 h-4 text-[#C2983B]" />
                <span>Direct Concierge: Inquire via WhatsApp or Online</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-[#C2983B] hover:text-black text-[#DFCA8A] border border-neutral-800 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Tour Specialist</span>
              </a>
            </div>
          </div>

          {/* Curated Itineraries Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#DFCA8A] font-semibold tracking-widest uppercase">
              Curated Itineraries
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              {TOURS_DATA.slice(0, 4).map((tour) => (
                <li key={tour.id}>
                  <Link 
                    href={`/tours/${tour.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{tour.title}</span>
                    <span className="text-[10px] text-neutral-500 font-mono ml-2">
                      {tour.durationNights}N/{tour.durationDays}D
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link 
                  href="/tours" 
                  className="inline-block text-[#C2983B] hover:text-[#DFCA8A] font-medium transition-colors uppercase tracking-wider text-[11px]"
                >
                  View All 6 Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Special Initiatives */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#DFCA8A] font-semibold tracking-widest uppercase">
              Signature Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li>
                <Link href="/kuch-khaas" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#721824]" />
                  <span className="text-white font-medium group-hover:text-[#DFCA8A]">Kuch Khaas Home Dining</span>
                </Link>
              </li>
              <li>
                <Link href="/kuch-khaas" className="hover:text-white transition-colors">
                  Heritage High Tea & Street Food
                </Link>
              </li>
              <li>
                <Link href="/tours/amritsar-food-craft-old-city-walk" className="hover:text-white transition-colors">
                  Old City Culinary & Craft Walk
                </Link>
              </li>
              <li>
                <Link href="/tours/amritsar-city-tour-punjabi-village-excursion" className="hover:text-white transition-colors">
                  Rural Punjabi Village Excursion
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Executive Chauffeur Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* The Luxe Standard */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#DFCA8A] font-semibold tracking-widest uppercase">
              The Luxe Promise
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400 font-light">
              <div className="flex items-start gap-2.5">
                <CheckOrnamentIcon className="w-3.5 h-3.5 text-[#C2983B] shrink-0 mt-0.5" />
                <span>Private climate-controlled Innova Crysta & luxury sedans</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckOrnamentIcon className="w-3.5 h-3.5 text-[#C2983B] shrink-0 mt-0.5" />
                <span>Punctual, courteous English & Punjabi-speaking chauffeurs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckOrnamentIcon className="w-3.5 h-3.5 text-[#C2983B] shrink-0 mt-0.5" />
                <span>Transparent custom quotes with zero tourist trap stops</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckOrnamentIcon className="w-3.5 h-3.5 text-[#C2983B] shrink-0 mt-0.5" />
                <span>Unrushed private pacing tailored for multi-gen families</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light gap-4">
          <div>
            © 2026 Golden Luxe Tours & Travel Concierge. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Golden Temple • Wagah Border • Heritage Walks • Kuch Khaas</span>
            <Link href="/plan-trip" className="text-[#C2983B] hover:underline uppercase tracking-wider text-[11px] font-medium">
              Plan Bespoke Trip
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
