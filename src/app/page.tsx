"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TOURS_DATA } from "@/data/tours";
import { TourCard } from "@/components/ui/TourCard";
import { BookingModal } from "@/components/ui/BookingModal";
import { FoodTrailSlider } from "@/components/ui/FoodTrailSlider";
import {
  ArrowRightIcon,
  WhatsAppIcon,
  StarRatingIcon
} from "@/components/ui/Icons";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const categories = ["All", "Spiritual & Iconic", "Rural & Cultural", "Sacred Pilgrimage", "Culinary & Living", "Old City Flavors"];

  const filteredTours = selectedCategory === "All"
    ? TOURS_DATA
    : TOURS_DATA.filter(t => t.category === selectedCategory);

  const testimonials = [
    {
      name: "Gurpreet & Simran Bains",
      location: "London, United Kingdom • 3N/4D Tour",
      quote: "Coming from the UK with elderly parents, we needed a tour that respected their pace. The Innova was immaculate, our driver was gentle and attentive, and the evening Palki Sahib darshan was handled without any stress.",
      date: "Traveled March 2026",
    },
    {
      name: "David & Catherine Miller",
      location: "Melbourne, Australia • Kuch Khaas Dining",
      quote: "The Kuch Khaas home dinner was the highlight of our entire trip to India. Rolling our own parathas and hearing family stories over hot chai was 100 times better than any luxury hotel restaurant.",
      date: "Traveled February 2026",
    },
    {
      name: "Vikramaditya & Rohini Rao",
      location: "Bengaluru, India • Wagah & City Tour",
      quote: "Wagah border seating was coordinated flawlessly. We were picked up straight from Amritsar airport and didn't have to negotiate or worry once. Truly luxury service at very fair pricing.",
      date: "Traveled January 2026",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      {/* HERO SECTION - Creative 2-Column Editorial Layout */}
      <section className="relative bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-neutral-100 overflow-hidden">
        {/* Subtle architectural background texture */}
        <div className="absolute inset-0 bg-subtle-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Engaging Copy & Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Editorial Kicker */}
              <div className="inline-flex items-center gap-3">

                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#855D25]">
                  Private Concierge & Chauffeured Travel • Amritsar
                </span>
              </div>

              {/* Engaging Luxury Headline in Cormorant Garamond */}
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.06]">
                Amritsar, Experienced with{" "}
                <span className="italic font-light gold-gradient-text block mt-1">
                  Grace, Reverence & Soul.
                </span>
              </h1>

              {/* Engaging Body Description */}
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                Step beyond hurried tourist buses and transactional taxi stands. We curate deeply personal, unhurried journeys across the holy city, from sacred morning Palki Sahib darshan, VIP Wagah Border experience, to an intimate dining table inside our family home.
              </p>

              {/* Primary & Secondary CTAs (Refined with small rounded edges) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/tours"
                  className="px-8 py-4 bg-black text-white hover:bg-[#C2983B] hover:text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-3 border border-black shadow-sm group rounded-md"
                >
                  <span>Explore Our Tours</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-950 hover:text-white font-semibold text-xs uppercase tracking-[0.18em] border border-neutral-300 transition-all duration-300 flex items-center justify-center gap-2 rounded-md"
                >
                  <span>Plan Your Journey</span>
                </button>
              </div>

              {/* Micro Trust Indicators (Clean Editorial Typography, No Generic Icon Boxes) */}
              {/* <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-neutral-600 font-sans">
                <div>
                  <span className="font-semibold text-neutral-900 block text-sm">100% Private</span>
                  <span className="text-[11px] text-neutral-500">Innova Crysta & Chauffeurs</span>
                </div>
                <div className="h-7 w-px bg-neutral-200 hidden sm:block" />
                <div>
                  <span className="font-semibold text-neutral-900 block text-sm">VIP Wagah Timing</span>
                  <span className="text-[11px] text-neutral-500">Effortless Border Transit</span>
                </div>
                <div className="h-7 w-px bg-neutral-200 hidden sm:block" />
                <div>
                  <span className="font-semibold text-[#721824] block text-sm">Kuch Khaas Table</span>
                  <span className="text-[11px] text-neutral-500">Authentic Home Living</span>
                </div>
              </div> */}
            </div>

            {/* Right Column: Creative Multi-layered Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Decorative Architectural Gold Framing behind Image */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-[#C2983B]/30 pointer-events-none hidden sm:block" />

                {/* Primary High-Resolution Frame */}
                <div className="relative h-[440px] sm:h-[520px] w-full border border-neutral-200 shadow-2xl overflow-hidden group bg-neutral-950">
                  <Image
                    src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=85"
                    alt="Golden Temple at Twilight in Amritsar"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Subtle Editorial Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#DFCA8A]">
                      Sacred Amrit Sarovar
                    </span>
                    <h3 className="font-serif text-2xl font-light leading-snug">
                      Harimandir Sahib at Golden Hour
                    </h3>
                    <p className="text-xs text-neutral-300 font-light">
                      Curated early morning and evening Palki Sahib darshans.
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Inset (Kuch Khaas Dining Preview) with Float Animation */}
                <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-52 h-44 sm:h-52 border-4 border-white shadow-2xl overflow-hidden hidden sm:block animate-float-slow group/inset bg-neutral-950">
                  <Image
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
                    alt="Kuch Khaas Home Dining Experience"
                    fill
                    className="object-cover group-hover/inset:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-[#DFCA8A] block">
                      Kuch Khaas
                    </span>
                    <span className="text-xs font-serif italic text-white leading-tight block">
                      A Punjabi Hospitality experience
                    </span>
                  </div>
                </div>

                {/* Overlapping Floating Tag (Top Right) with Reverse Float Animation */}
                <div className="absolute -top-5 -right-4 sm:-right-6 bg-black text-white px-4 py-3 border border-[#C2983B]/40 shadow-xl hidden sm:block animate-float-reverse">
                  <div className="flex items-center gap-1.5 text-[#DFCA8A] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <StarRatingIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                  <div className="text-[11px] font-sans tracking-wider uppercase font-semibold text-neutral-200 mt-1">
                    Verified 5.0 Rating
                  </div>
                  <div className="text-[10px] text-neutral-400 font-light">
                    Global NRIs & Discerning Guests
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PILLARS OF LUXURY / THE GOLDEN LUXE DISTINCTION */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
              The Golden Luxe Standard
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              We replace chaotic, commercialized touring with personal discretion, refined etiquette, and authentic Punjabi warmth.
            </p>
          </div>

          {/* 4 Designer Cards - No Generic Rounded Icon Boxes, Exquisite Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Pillar 1 */}
            <div className="group rounded-2xl bg-white border border-neutral-200/90 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#C2983B] transition-all duration-500 relative flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl font-light text-[#C2983B]/80 group-hover:text-[#C2983B] transition-colors">
                  01
                </div>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-5 group-hover:text-black">
                  Private Chauffeur Fleet
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-3">
                  Travel effortlessly in immaculate Toyota Innova Crystas or executive sedans equipped with chilled mineral water, phone chargers, and courteous, punctual chauffeurs.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-[#855D25] transition-colors">
                  Executive Comfort →
                </span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group rounded-2xl bg-white border border-neutral-200/90 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#C2983B] transition-all duration-500 relative flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl font-light text-[#C2983B]/80 group-hover:text-[#C2983B] transition-colors">
                  02
                </div>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-5 group-hover:text-black">
                  Sacred & Historical Depth
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-3">
                  Accompanied by knowledgeable local guides who honor Gurudwara maryada, uncover historical archives of 1919 and 1947, and narrate the living spirit of Punjab.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-[#855D25] transition-colors">
                  Cultural Heritage →
                </span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group rounded-2xl bg-white border border-neutral-200/90 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#C2983B] transition-all duration-500 relative flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl font-light text-[#C2983B]/80 group-hover:text-[#C2983B] transition-colors">
                  03
                </div>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-5 group-hover:text-black">
                  VIP Wagah Coordination
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-3">
                  Strategic timing for the high-energy Beating Retreat Ceremony at the Indo-Pak border, ensuring optimal transit, smooth entry, and comfortable return pacing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-[#855D25] transition-colors">
                  Seamless Access →
                </span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group rounded-2xl bg-white border border-neutral-200/90 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#721824] transition-all duration-500 relative flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl font-light text-[#721824] group-hover:text-[#58111A] transition-colors">
                  04
                </div>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-5 group-hover:text-[#721824] transition-colors">
                  Kuch Khaas Home Dining
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-3">
                  Step away from standard hotel dining. Experience genuine home-cooked hospitality, rolling crisp tandoor parathas, and sharing stories around a private family table.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#721824] transition-colors">
                  Signature Living →
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CURATED ITINERARIES SHOWCASE */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
                Curated Expeditions
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950 mt-1">
                Signature Amritsar Itineraries
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light mt-2 max-w-xl">
                Explore our signature 2-Night and 3-Night private packages, each thoughtfully designed around sacred pilgrimage, historic heritage, and culinary authenticity.
              </p>
            </div>

            {/* View all link */}
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:text-[#C2983B] transition-colors group"
            >
              <span>Explore All Packages</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Category Tabs (Sharp, Architectural Styling) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${selectedCategory === cat
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-black border border-neutral-200 hover:border-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tours Grid (Designer Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* KUCH KHAAS FLAGSHIP SHOWCASE BANNER (ROYAL MAROON THEME) */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#220408] via-[#480E17] to-[#1B0205] text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#DFCA8A]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#721824]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-block px-4 py-1.5 bg-[#721824] border border-[#ad2b3d]/50 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em]">
                Signature Living Experience
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.08]">
                Kuch Khaas <br />
                <span className="text-[#DFCA8A] font-normal italic">
                  An Authentic Indian Home Kitchen
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-xl">
                Step inside our welcoming home for an intimate culinary immersion. Learn generational spice combinations, roll crisp laccha parathas on hot griddles, simmer velvety Dal Makhani, and share a heartwarming family meal around our dining table.
              </p>

              <blockquote className="border-l-2 border-[#DFCA8A] pl-5 italic text-sm text-[#F6F0DB] font-light">
                &ldquo;Every dish is prepared fresh, by hand, and shared together at our home table with stories and genuine laughter.&rdquo;
              </blockquote>

              {/* 2 Feature Insets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-black/25 backdrop-blur-sm border border-white/10 space-y-1.5 hover:border-[#DFCA8A]/40 transition-colors">
                  <div className="text-[#DFCA8A] text-xs font-bold uppercase tracking-wider">
                    Hands-On Home Feast
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Paneer curries, dal makhani, chole, freshly tossed flatbreads, and authentic home dining.
                  </p>
                </div>

                <div className="p-5 bg-black/25 backdrop-blur-sm border border-white/10 space-y-1.5 hover:border-[#DFCA8A]/40 transition-colors">
                  <div className="text-[#DFCA8A] text-xs font-bold uppercase tracking-wider">
                    Heritage High Tea
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Artisanal pakoras, dahi toast, pav bhaji, slow-simmered kadak masala chai & local refreshments.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/kuch-khaas"
                  className="px-8 py-4 bg-[#DFCA8A] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2 rounded-md"
                >
                  <span>Explore Kuch Khaas Menu</span>
                  <ArrowRightIcon className="w-4 h-4 text-black" />
                </Link>

                <a
                  href="https://wa.me/?text=Hello!%20I%20would%20like%20to%20reserve%20an%20intimate%20table%20at%20Kuch%20Khaas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.18em] border border-white/30 transition-all flex items-center gap-2 rounded-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Reserve a Private Table</span>
                </a>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative h-96 sm:h-[440px] w-full border border-[#DFCA8A]/40 shadow-2xl overflow-hidden bg-neutral-950 group">
                  <Image
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic Indian Home Cooking"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#DFCA8A]">
                      Amritsar Home Kitchen
                    </span>
                    <h4 className="font-serif text-2xl font-light text-white mt-1">
                      Warmth, Stories & Generational Hospitality
                    </h4>
                    <p className="text-xs text-neutral-300 font-light mt-1">
                      No commercial hotel rush. Just genuine heart and flavor.
                    </p>
                  </div>
                </div>

                {/* Overlapping small badge */}
                <div className="absolute -bottom-6 -left-6 bg-white text-neutral-900 p-5 shadow-2xl border border-neutral-200 max-w-[220px] hidden sm:block">
                  <div className="text-[10px] uppercase tracking-wider text-[#721824] font-bold">
                    Private Table
                  </div>
                  <div className="font-serif text-base font-normal mt-0.5">
                    Max 8 Guests Per Session
                  </div>
                  <div className="text-[11px] text-neutral-500 font-light mt-0.5">
                    Preserving true dining intimacy
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OLD CITY HERITAGE & FOOD CRAFT HIGHLIGHT */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Visual Frame: 6-Second Food Trail Slideshow */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FoodTrailSlider />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
                The Iconic Food Trail
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
                Old City Food & Artisan Craft Walk
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Amritsar&apos;s culinary soul lives inside its historical walled katras. Our private guided walk navigates ancient heritage lanes where generational halwais and artisans have perfected their recipes for over a century.
              </p>

              {/* 3 Clean Designer Snippets (No Generic Icon Boxes) */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4">
                  <span className="font-serif text-xl font-light text-[#C2983B] mt-0.5">01</span>
                  <div>
                    <strong className="text-xs text-neutral-900 font-semibold block uppercase tracking-wider">
                      Gian di Lassi
                    </strong>
                    <span className="text-xs text-neutral-600 font-light">
                      Thick, velvety sweet lassi crowned with freshly churned malai in traditional earthen kulhads.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4">
                  <span className="font-serif text-xl font-light text-[#C2983B] mt-0.5">02</span>
                  <div>
                    <strong className="text-xs text-neutral-900 font-semibold block uppercase tracking-wider">
                      Kulwant De Kulche
                    </strong>
                    <span className="text-xs text-neutral-600 font-light">
                      Crispy, multi-layered tandoor-baked potato kulchas served with spiced chana & tangy imli pyaz chutney.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4">
                  <span className="font-serif text-xl font-light text-[#C2983B] mt-0.5">03</span>
                  <div>
                    <strong className="text-xs text-neutral-900 font-semibold block uppercase tracking-wider">
                      Jalebi Chowk & Heritage Halwais
                    </strong>
                    <span className="text-xs text-neutral-600 font-light">
                      Piping hot golden jalebis fried in pure desi ghee, paired with authentic pinni and creamy rabri.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/tours/amritsar-food-craft-old-city-walk"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C2983B] hover:text-black transition-all duration-300 rounded-md"
                >
                  <span>Explore Amritsar with Food Craft Old City Walk</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#DFCA8A]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRAVELER TESTIMONIALS / TRUST WALL (ANIMATIONS & ELEGANT DESIGNER CARDS) */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div className="text-center max-w-xl mx-auto space-y-2 mb-16 sm:mb-20">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
              Guest Reflections
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-950">
              Loved by NRIs & Discerning Visitors
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light">
              Personalized hospitality that turns a sacred pilgrimage into a cherished family memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveTestimonial(idx)}
                className={`p-8 rounded-2xl bg-white border transition-all duration-500 flex flex-col justify-between space-y-6 ${activeTestimonial === idx
                  ? "border-[#C2983B] shadow-[0_20px_45px_rgba(0,0,0,0.08)] -translate-y-2"
                  : "border-neutral-200/90 shadow-sm hover:border-[#C2983B] hover:-translate-y-1.5"
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#C2983B]">
                    {[...Array(5)].map((_, i) => (
                      <StarRatingIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>

                  <p className="font-serif text-lg font-light text-neutral-800 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="font-semibold text-xs text-neutral-900 uppercase tracking-wider">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-light mt-0.5">
                    {testimonial.location}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-1">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL BESPOKE CONCIERGE CALLOUT */}
      <section className="py-24 sm:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-7">
          <div className="w-12 h-12 border border-[#C2983B]/50 flex items-center justify-center mx-auto text-[#DFCA8A]">
            <span className="font-serif text-lg font-light italic">GL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Ready to Experience Amritsar with <br />
            <span className="italic gold-gradient-text">Grace & Peace of Mind?</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
            Whether you need a custom 4-day sacred circuit, a private Wagah border transit, or an intimate culinary afternoon at Kuch Khaas, our concierge is ready to assemble your bespoke itinerary.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#C2983B] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 rounded-md"
            >
              Request Custom Quote Online
            </button>

            <a
              href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 rounded-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
