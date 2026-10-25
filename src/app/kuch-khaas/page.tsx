"use client";

import React, { useState } from "react";
import Image from "next/image";
import { KUCH_KHAAS_DATA } from "@/data/kuchKhaas";
import { BookingModal } from "@/components/ui/BookingModal";
import { 
  WhatsAppIcon,
  ArrowRightIcon
} from "@/components/ui/Icons";

export default function KuchKhaasPage() {
  const [activeTab, setActiveTab] = useState<"feast" | "hightea">("feast");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExperience, setModalExperience] = useState<string>("kuch-khaas-feast");

  const openBooking = (expType: string) => {
    setModalExperience(expType);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900 pb-24">
      {/* HERO SECTION - Deep Royal Maroon */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#220408] via-[#480E17] to-[#1B0205] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=2000&q=85"
            alt="Warm Indian Kitchen Feast"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#220408]/85 via-[#3E0910]/50 to-[#220408]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-24 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#721824] border border-[#ad2b3d]/50 text-white text-[11px] font-bold uppercase tracking-[0.24em]">
            Signature Living Initiative
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            Kuch Khaas <br />
            <span className="italic font-normal text-[#DFCA8A]">A Seat at Our Family Table</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F6F0DB] font-light leading-relaxed">
            Not a commercial restaurant. Not a rushed cooking class. Step inside our welcoming Amritsar home to knead, cook, laugh, and share an authentic meal together.
          </p>

          <blockquote className="border-l-2 border-[#DFCA8A] inline-block px-5 py-2 italic text-sm text-[#DFCA8A] font-light">
            &ldquo;{KUCH_KHAAS_DATA.tagline}&rdquo;
          </blockquote>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking("kuch-khaas-feast")}
              className="w-full sm:w-auto px-8 py-4 bg-[#DFCA8A] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-lg rounded-md"
            >
              <span>Reserve Hands-on Home Feast</span>
            </button>

            <button
              onClick={() => openBooking("kuch-khaas-tea")}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.18em] border border-white/30 transition-all flex items-center justify-center gap-2 rounded-md"
            >
              <span>Reserve High Tea & Street Food</span>
            </button>
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY / STORY */}
      <section className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 sm:p-14 border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#721824]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#721824]">
                The Heart of Kuch Khaas
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
              Hospitality as Sacred Tradition
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              In Punjabi culture, welcoming a guest is considered an honor. Kuch Khaas was born from a simple desire: to offer travelers a genuine, warm, home-cooked experience far removed from industrial hotel buffets.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              Here, you don&apos;t just watch—you feel the heat of the tawa, learn how to puff phulkas and fold flaky laccha parathas, explore the nuance of whole garam masala, and end the session around a shared table sharing stories of home and heritage.
            </p>
            <div className="pt-4 flex items-center gap-8 text-xs text-neutral-700 font-sans">
              <div>
                <span className="font-semibold text-neutral-900 block text-sm">Max 8 Guests</span>
                <span className="text-[11px] text-neutral-500 font-light">Unrushed Intimacy</span>
              </div>
              <div className="h-6 w-px bg-neutral-200" />
              <div>
                <span className="font-semibold text-[#721824] block text-sm">100% Homestyle Fresh</span>
                <span className="text-[11px] text-neutral-500 font-light">Pure Ghee & Hand Spices</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative h-80 sm:h-96 border border-neutral-200 overflow-hidden shadow-lg bg-neutral-950 group">
            <Image
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80"
              alt="Homestyle rotis and fresh food"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* THE TWO EXPERIENCES */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 border-t border-neutral-100">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#721824]">
            Two Curated Gatherings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
            Choose Your Experience
          </h2>
          <p className="text-sm text-neutral-600 font-light">
            Available as an intimate private half-day booking or paired with any Golden Luxe private tour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KUCH_KHAAS_DATA.sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] hover:border-[#721824] transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                  <span className="px-3 py-1 bg-[#721824]/10 text-[#721824] text-[11px] font-bold uppercase tracking-wider">
                    {session.duration}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {session.timings}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900">
                  {session.title}
                </h3>
                <p className="text-xs text-[#721824] font-semibold uppercase tracking-wider">
                  {session.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {session.description}
                </p>

                <div className="pt-3 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                    Experience Highlights:
                  </div>
                  {session.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#721824] mt-1.5 shrink-0" />
                      <span className="font-light">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-neutral-400">
                    Ideal For
                  </div>
                  <div className="text-xs font-medium text-neutral-900">
                    {session.idealFor}
                  </div>
                </div>

                <button
                  onClick={() => openBooking(session.id)}
                  className="px-6 py-3 bg-black hover:bg-[#721824] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors shadow-sm rounded-md"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL INTERACTIVE MENU EXPLORER */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 border-t border-neutral-100">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#721824]">
            Generational Recipes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
            The Kuch Khaas Menu
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Handcrafted with farm-fresh ingredients, pure desi ghee, and no industrial pastes.
          </p>

          {/* Tab selector */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("feast")}
              className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "feast"
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-black"
              }`}
            >
              Home Feast Menu (Lunch & Dinner)
            </button>

            <button
              onClick={() => setActiveTab("hightea")}
              className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "hightea"
                  ? "bg-[#721824] text-white shadow-sm"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#721824]"
              }`}
            >
              High Tea & Street Food Menu
            </button>
          </div>
        </div>

        {/* Tab 1: Feast Categories */}
        {activeTab === "feast" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {KUCH_KHAAS_DATA.mainMenuCategories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div className="border-b border-neutral-200 pb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="text-xs text-neutral-500 font-light mt-0.5">{cat.subtitle}</p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {cat.items.length} dishes
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#721824] transition-all space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-serif text-lg font-normal text-neutral-900">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-3 text-[10px] text-[#721824] font-semibold uppercase tracking-wider border-t border-neutral-100">
                        Freshly Prepared by Hand
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: High Tea Categories */}
        {activeTab === "hightea" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {KUCH_KHAAS_DATA.highTeaMenuCategories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div className="border-b border-neutral-200 pb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="text-xs text-neutral-500 font-light mt-0.5">{cat.subtitle}</p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {cat.items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#721824] transition-all space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-serif text-lg font-normal text-neutral-900">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-3 text-[10px] text-[#721824] font-semibold uppercase tracking-wider border-t border-neutral-100">
                        Served Hot with Artisanal Chutneys
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* HOW THE EXPERIENCE WORKS */}
      <section className="py-20 sm:py-28 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#721824]">
              The Flow of the Day
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#721824] transition-colors space-y-4">
              <span className="font-serif text-3xl font-light text-[#721824]">
                01
              </span>
              <h3 className="font-serif text-xl font-normal text-neutral-900">
                Warm Welcome & Spice Introduction
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Arrive as guests and be welcomed with fresh ginger-cardamom Masala Chai. Explore the traditional brass masala daani (spice box) and smell roasted cumin, cloves, and mace.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#721824] transition-colors space-y-4">
              <span className="font-serif text-3xl font-light text-[#721824]">
                02
              </span>
              <h3 className="font-serif text-xl font-normal text-neutral-900">
                Hands-On Cooking by the Hearth
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Put on your apron! Learn the wrist flick of rolling thin rotis, layering butter for crisp laccha parathas, and tempering the sizzling ghee tadka for dal.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#721824] transition-colors space-y-4">
              <span className="font-serif text-3xl font-light text-[#721824]">
                03
              </span>
              <h3 className="font-serif text-xl font-normal text-neutral-900">
                Gathering Around the Table
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Sit down as friends. We feast on everything prepared together, accompanied by fresh cucumber or dates raita, pickles, and sweet halwa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BOOKING CALLOUT */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#220408] via-[#480E17] to-[#1B0205] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="w-12 h-12 border border-[#DFCA8A]/50 flex items-center justify-center mx-auto text-[#DFCA8A]">
            <span className="font-serif text-lg font-light italic">KK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight">
            Reserve Your Seat at the Table
          </h2>

          <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed font-light">
            Due to the intimate nature of our home kitchen, each session is strictly limited to 8 guests to ensure true connection and authentic warmth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking("kuch-khaas-feast")}
              className="w-full sm:w-auto px-8 py-4 bg-[#DFCA8A] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 rounded-md"
            >
              Inquire Available Dates
            </button>

            <a
              href="https://wa.me/?text=Hello!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Kuch%20Khaas%20experience%20for%20my%20family."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 rounded-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Host</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultExperienceTitle={modalExperience}
      />
    </div>
  );
}
