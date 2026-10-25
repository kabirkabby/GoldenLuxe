"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TOURS_DATA } from "@/data/tours";
import { TourCard } from "@/components/ui/TourCard";
import { BookingModal } from "@/components/ui/BookingModal";
import { FoodTrailSlider } from "@/components/ui/FoodTrailSlider";
import { DistinctionSlider } from "@/components/ui/DistinctionSlider";
import { HeroSection } from "@/components/home/HeroSection";
import { FAQSection } from "@/components/home/FAQSection";
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
      {/* 1. FULL-SCREEN HERO SECTION WITH 5-6S BACKGROUND SLIDER & LEAD FORM */}
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 2. CURATED EXPEDITIONS (JUST AFTER HERO SECTION) */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
                Curated Expeditions
              </div>
              <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950 mt-1">
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

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 rounded-sm ${selectedCategory === cat
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-black border border-neutral-200 hover:border-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY PEOPLE TRAVEL WITH GOLDEN LUXE TOURS (IMAGE ON LEFT, TEXT ON RIGHT, 4 POINTERS 2-IN-A-ROW) */}
      <section className="py-16 sm:py-16 bg-neutral-200/40 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Automatic Slideshow with Guest Moments (No text or buttons) */}
            <div className="lg:col-span-5 relative">
              <DistinctionSlider />
            </div>

            {/* Right Column: Headings & 4 Pointers (2 in a row) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
                  The Golden Luxe Distinction
                </div>
                <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950 mt-1.5 leading-tight">
                  Why people travel with Golden Luxe Tours
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 font-light mt-3 leading-relaxed">
                  We replace crowded commercial tours with private comfort, transparent pricing, and respectful access to the spiritual and culinary heart of Punjab.
                </p>
              </div>

              {/* 4 Pointers - 2 in a row (2x2 grid) with reduced content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">

                {/* Pointer 1 */}
                <div className="p-5 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#C2983B] hover:bg-white transition-all duration-300">
                  <div className="font-sans font-medium text-base text-[#C2983B] flex items-center gap-2">
                    <span>01</span>
                    <span className="text-neutral-900 font-medium text-sm sm:text-base">Private Chauffeur Fleet</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mt-2">
                    Immaculate Toyota Innova Crystas with chilled water, phone chargers, and polite, punctual chauffeurs.
                  </p>
                </div>

                {/* Pointer 2 */}
                <div className="p-5 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#C2983B] hover:bg-white transition-all duration-300">
                  <div className="font-sans font-medium text-base text-[#C2983B] flex items-center gap-2">
                    <span>02</span>
                    <span className="text-neutral-900 font-medium text-sm sm:text-base">VIP Wagah Coordination</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mt-2">
                    Strategic arrival timing for the retreat ceremony, ensuring stress-free stadium entry and parking.
                  </p>
                </div>

                {/* Pointer 3 */}
                <div className="p-5 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#C2983B] hover:bg-white transition-all duration-300">
                  <div className="font-sans font-medium text-base text-[#C2983B] flex items-center gap-2">
                    <span>03</span>
                    <span className="text-neutral-900 font-medium text-sm sm:text-base">Sacred Gurudwara Etiquette</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mt-2">
                    Respectful guidance on parikrama protocols, langar seva, and peaceful evening Palki Sahib darshans.
                  </p>
                </div>

                {/* Pointer 4 */}
                <div className="p-5 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#721824] hover:bg-white transition-all duration-300">
                  <div className="font-sans font-medium text-base text-[#721824] flex items-center gap-2">
                    <span>04</span>
                    <span className="text-neutral-900 font-medium text-sm sm:text-base">Kuch Khaas Home Dining</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mt-2">
                    Authentic home-cooked Punjabi meals shared with a welcoming family around a private dining table.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KUCH KHAAS FLAGSHIP SHOWCASE BANNER (ROYAL MAROON THEME) */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#240508] via-[#480E17] to-[#1E0306] text-white relative overflow-hidden border-b border-neutral-900">
        {/* Subtle decorative ambient glow */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#DFCA8A]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#721824]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3.5 py-1 bg-white/10 border border-white/15 text-[#DFCA8A] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] rounded-sm">
                Signature Living Experience
              </div>

              <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Kuch Khaas <br />
                <span className="text-[#DFCA8A] font-normal italic">
                  An Authentic Indian Home Kitchen
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-xl">
                Step inside our welcoming home for an intimate culinary immersion. Learn generational spice combinations, roll crisp laccha parathas on hot griddles, simmer velvety Dal Makhani, and share a heartwarming family meal around our dining table.
              </p>

              <blockquote className="border-l-2 border-[#DFCA8A] pl-5 italic text-sm text-[#F6F0DB] font-light">
                &ldquo;Every dish is prepared fresh, by hand, and shared together at our home table with stories and genuine laughter.&rdquo;
              </blockquote>

              {/* 2 Feature Insets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl space-y-1.5 hover:border-[#DFCA8A]/40 transition-colors">
                  <div className="text-[#DFCA8A] text-xs font-semibold uppercase tracking-wider">
                    Hands-On Home Feast
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Paneer curries, slow-simmered dal makhani, chole, freshly tossed flatbreads, and authentic home dining.
                  </p>
                </div>

                <div className="p-5 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl space-y-1.5 hover:border-[#DFCA8A]/40 transition-colors">
                  <div className="text-[#DFCA8A] text-xs font-semibold uppercase tracking-wider">
                    Heritage High Tea
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Artisanal pakoras, dahi toast, pav bhaji, slow-simmered kadak masala chai & local refreshments.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/kuch-khaas"
                  className="px-7 py-3.5 bg-[#DFCA8A] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2 rounded-md"
                >
                  <span>Explore Kuch Khaas Menu</span>
                  <ArrowRightIcon className="w-4 h-4 text-black" />
                </Link>

                <a
                  href="https://wa.me/?text=Hello!%20I%20would%20like%20to%20reserve%20an%20intimate%20table%20at%20Kuch%20Khaas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.16em] border border-white/30 transition-all flex items-center gap-2 rounded-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Reserve a Private Table</span>
                </a>
              </div>
            </div>

            {/* Right Visual: Clean Image without Text or Overlay Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-950 group">
                <Image
                  src="/images/kuch-khaas/dal-makhani-kadai.jpg"
                  alt="Kuch Khaas authentic slow-simmered Dal Makhani in traditional copper kadai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.96]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OLD CITY HERITAGE & FOOD CRAFT HIGHLIGHT */}
      <section className="py-18 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Visual Frame: 6-Second Food Trail Slideshow */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FoodTrailSlider />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
                The Iconic Food Trail
              </div>
              <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950">
                Old City Food & Artisan Craft Walk
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Amritsar&apos;s culinary soul lives inside its historical walled katras. Our private guided walk navigates ancient heritage lanes where generational halwais and artisans have perfected their recipes for over a century.
              </p>

              {/* 3 Clean Designer Snippets */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4 rounded-lg">
                  <span className="font-sans font-medium text-lg sm:text-xl text-[#C2983B] mt-0.5">01</span>
                  <div>
                    <strong className="text-xs text-neutral-900 font-semibold block uppercase tracking-wider">
                      Gian di Lassi
                    </strong>
                    <span className="text-xs text-neutral-600 font-light">
                      Thick, velvety sweet lassi crowned with freshly churned malai in traditional earthen kulhads.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4 rounded-lg">
                  <span className="font-sans font-medium text-lg sm:text-xl text-[#C2983B] mt-0.5">02</span>
                  <div>
                    <strong className="text-xs text-neutral-900 font-semibold block uppercase tracking-wider">
                      Kulwant De Kulche
                    </strong>
                    <span className="text-xs text-neutral-600 font-light">
                      Crispy, multi-layered tandoor-baked potato kulchas served with spiced chana & tangy imli pyaz chutney.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200/90 hover:border-[#C2983B] transition-colors flex items-start gap-4 rounded-lg">
                  <span className="font-sans font-medium text-lg sm:text-xl text-[#C2983B] mt-0.5">03</span>
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

      {/* 6. TRAVELER TESTIMONIALS / TRUST WALL */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          <div className="text-center max-w-xl mx-auto space-y-2 mb-16 sm:mb-20">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
              Guest Reflections
            </div>
            <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950">
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

                  <p className="font-sans text-base sm:text-lg font-light text-neutral-800 leading-relaxed italic">
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

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
