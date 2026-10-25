"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourItinerary } from "@/data/tours";
import { BookingModal } from "@/components/ui/BookingModal";
import { 
  CheckOrnamentIcon, 
  WhatsAppIcon, 
  CalendarIcon, 
  UsersGroupIcon, 
  ChevronDownIcon
} from "@/components/ui/Icons";

interface TourDetailClientProps {
  tour: TourItinerary;
}

export function TourDetailClient({ tour }: TourDetailClientProps) {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState("2 Travelers (Couple)");

  const handleDirectWhatsApp = () => {
    const text = `*Golden Luxe Tours - Itinerary Inquiry*
----------------------------------------
*Tour:* ${tour.title}
*Duration:* ${tour.durationLabel}
*Lead Guest:* ${name || "Not provided"}
*Email:* ${email || "Not provided"}
*Phone:* ${phone || "Not provided"}
*Preferred Dates:* ${selectedDate || "To be decided"}
*Number of Travelers:* ${guests}
----------------------------------------
Hello! I would like to check availability and request a private quote for this itinerary.`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Itinerary Details, Days, Inclusions */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview Statement */}
          <section className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8DFD3] shadow-sm space-y-4">
            <h2 className="font-sans font-medium text-2xl text-[#0B132B]">
              Journey Overview
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              {tour.overview}
            </p>

            {/* Curated Highlights list */}
            <div className="pt-4 border-t border-[#F3EFE7]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#855D25] mb-3">
                Key Curated Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1E2421]">
                    <CheckOrnamentIcon className="w-4 h-4 text-[#C2983B] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DAY-BY-DAY ITINERARY TIMELINE */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#855D25]">
                  Detailed Schedule
                </span>
                <h2 className="font-sans font-medium text-2xl sm:text-3xl text-[#0B132B]">
                  Day-by-Day Experience
                </h2>
              </div>
              <span className="text-xs text-gray-500">
                Pacing can be adapted to your preferences
              </span>
            </div>

            <div className="space-y-4">
              {tour.days.map((day) => {
                const isOpen = activeDay === day.dayNumber;
                return (
                  <div
                    key={day.dayNumber}
                    className="bg-white rounded-2xl border border-[#E8DFD3] shadow-sm overflow-hidden transition-all"
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => setActiveDay(isOpen ? 0 : day.dayNumber)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 bg-black text-[#DFCA8A] font-sans font-medium text-sm flex items-center justify-center shrink-0">
                          {String(day.dayNumber).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#855D25]">
                            Day {day.dayNumber}
                          </div>
                          <h4 className="font-sans font-medium text-lg sm:text-xl text-neutral-900">
                            {day.title}
                          </h4>
                        </div>
                      </div>

                      <div className={`p-1.5 bg-neutral-100 text-neutral-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable phase breakdown */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-neutral-100 space-y-4 animate-in fade-in duration-200">
                        <div className="space-y-4">
                          {day.phases.map((phase, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                              <span className="px-2.5 py-1 bg-neutral-100 text-neutral-900 font-semibold text-[11px] uppercase tracking-wide shrink-0">
                                {phase.period}
                              </span>
                              <p className="text-neutral-700 leading-relaxed font-light">
                                {phase.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Day insider tip */}
                        {day.insiderTip && (
                          <div className="mt-4 p-4 bg-white border border-neutral-200 flex items-start gap-3 text-xs text-[#855D25]">
                            <span className="font-bold uppercase tracking-wider shrink-0 text-[10px] bg-[#C2983B]/15 text-[#855D25] px-2 py-0.5">
                              Insider Note
                            </span>
                            <span className="text-neutral-700 font-light">{day.insiderTip}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* INCLUSIONS & EXCLUSIONS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-white p-7 rounded-3xl border border-[#E8DFD3] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f5132]">
                <CheckOrnamentIcon className="w-4 h-4 text-[#25D366]" />
                <span>What Is Included</span>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-700">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#25D366] font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white p-7 rounded-3xl border border-[#E8DFD3] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>✕ What Is Not Included</span>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-600">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 shrink-0">•</span>
                    <span className="leading-relaxed">{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* GALLERY OF MOMENTS */}
          {tour.gallery && tour.gallery.length > 0 && (
            <section className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#855D25]">
                Visual Journal
              </div>
              <h2 className="font-sans font-medium text-2xl text-[#0B132B]">
                Moments Along This Journey
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tour.gallery.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm">
                    <Image
                      src={img}
                      alt={`Gallery moment ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Sticky Concierge & Booking Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl border border-[#C2983B]/40 shadow-xl p-6 sm:p-7 space-y-5">
            <div className="border-b border-[#F3EFE7] pb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#855D25] block">
                Bespoke Private Experience
              </span>
              <h3 className="font-sans font-medium text-xl text-[#0B132B] mt-0.5">
                Reserve or Inquire
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Direct chauffeur & personal tour coordinator. Transparent pricing.
              </p>
            </div>

            {/* Quick booking parameters */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gurpreet Singh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. contact@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none rounded-md"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#C2983B]" />
                  <span>Preferred Dates</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none rounded-md"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  <UsersGroupIcon className="w-3.5 h-3.5 text-[#C2983B]" />
                  <span>Number of Travelers</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none rounded-md"
                >
                  <option value="1 Traveler (Solo)">1 Traveler (Solo)</option>
                  <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                  <option value="3-4 Travelers (Family)">3-4 Travelers (Family)</option>
                  <option value="5-7 Travelers (Group)">5-7 Travelers (Group)</option>
                  <option value="8+ Travelers (Large Group)">8+ Travelers (Large Group)</option>
                </select>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Inquire via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 rounded-md bg-[#0B132B] hover:bg-[#141F42] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Customize Itinerary Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTourSlug={tour.slug}
        defaultExperienceTitle={tour.title}
      />
    </div>
  );
}
