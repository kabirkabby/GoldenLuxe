"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookingModal } from "@/components/ui/BookingModal";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function FleetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vehicles = [
    {
      name: "Toyota Innova Crysta (Signature)",
      tagline: "The Gold Standard of Long-Distance & City Comfort",
      capacity: "Up to 5 Passengers • Executive Captain Seats",
      luggage: "3 Large + 2 Medium Bags",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Plush captain leather seats with individual recline",
        "Triple-zone climate control AC (essential for Punjab summers)",
        "Complimentary chilled mineral water, facial tissues & mints",
        "Multiple high-speed USB phone charging points",
        "Spacious boot for heavy suitcases and shopping bags",
        "Smoothest suspension for rural roads and highway transit"
      ]
    },
    {
      name: "Toyota Urban Cruiser / Premium Sedan",
      tagline: "Ideal for Solo Travelers, Couples & Quick Transfers",
      capacity: "Up to 3 Passengers • Quiet & Nimble",
      luggage: "2 Large Suitcases",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Quiet, refined cabin for couples or business travelers",
        "Excellent maneuverability through narrow Amritsar streets",
        "Chilled AC, phone chargers, and quiet ride",
        "Punctual airport & railway station transfers",
        "Non-smoking, disciplined executive chauffeur"
      ]
    },
    {
      name: "Luxury Mini Coach (Force Urbania / Tempo)",
      tagline: "Crafted for Large Families & Multi-Gen Groups",
      capacity: "Up to 10–12 Passengers • Full Standing Height",
      luggage: "10+ Large Suitcases",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Ergonomic individual high-back reclining bucket seats",
        "Powerful dual AC blowers for every passenger row",
        "Extra-large separate luggage hold in the rear",
        "Gentle step entry ideal for grandparents and young kids",
        "Equipped with public address mic for guided heritage stories"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-neutral-900 pb-24">
      {/* Editorial Header */}
      <section className="bg-black text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C2983B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DFCA8A]">
                Private Chauffeur Service
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Executive Fleet & <br />
              <span className="gold-gradient-text italic font-light">Chauffeur Standards</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              We never outsource your journeys to random taxi aggregators. Every Golden Luxe vehicle is impeccably maintained, fully air-conditioned, and captained by an experienced, courteous local chauffeur.
            </p>
          </div>
        </div>
      </section>

      {/* CHAUFFEUR CODE OF ETHICS - Clean Typography, No Generic Icon Boxes */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 sm:p-12 border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-serif text-3xl font-light text-[#C2983B]">01</span>
            <h4 className="font-serif text-xl font-normal text-neutral-900">
              Verified & Respectful
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Background-checked, non-smoking, polite professionals trained in Sikh religious customs and multi-generation family etiquette.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl font-light text-[#C2983B]">02</span>
            <h4 className="font-serif text-xl font-normal text-neutral-900">
              100% Punctual Arrival
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Your chauffeur monitors flight and train timings in real time, standing ready with your personalized name placard at ATQ airport.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl font-light text-[#C2983B]">03</span>
            <h4 className="font-serif text-xl font-normal text-neutral-900">
              Old City Route Mastery
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Skilled in navigating heritage checkpoints, temple drop-off points, and traffic bypasses without wasted transit time.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl font-light text-[#C2983B]">04</span>
            <h4 className="font-serif text-xl font-normal text-neutral-900">
              Zero Tourist Traps
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Strictly no unscheduled commission stops at high-pressure souvenir emporiums. Your route is purely dedicated to your itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* VEHICLES SHOWCASE - Designer Cards */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#855D25]">
            Our Fleet
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
            Select Your Preferred Ride
          </h2>
        </div>

        <div className="space-y-10">
          {vehicles.map((v, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:border-[#C2983B]/50 transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-5 relative h-80 sm:h-96 w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-[#DFCA8A] px-3.5 py-1 text-xs font-mono tracking-wider uppercase border border-[#C2983B]/30">
                  {v.capacity}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 group-hover:text-[#C2983B] transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-xs text-[#855D25] font-semibold uppercase tracking-wider mt-1">
                    {v.tagline}
                  </p>
                </div>

                <div className="text-xs text-neutral-500 font-light">
                  Luggage Capacity: <strong className="text-neutral-900 font-medium">{v.luggage}</strong>
                </div>

                <div className="space-y-2 pt-3 border-t border-neutral-100">
                  {v.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2983B] mt-1.5 shrink-0" />
                      <span className="font-light">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-3.5 bg-black hover:bg-[#C2983B] text-white hover:text-black text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-md"
                  >
                    Reserve with Itinerary
                  </button>
                  <a
                    href={`https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(v.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-neutral-50 text-neutral-800 hover:text-[#128C7E] border border-neutral-200 transition-all rounded-md shadow-xs flex items-center justify-center"
                    title="Inquire via WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
