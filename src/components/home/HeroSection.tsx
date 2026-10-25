"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "golden-temple",
    image: "/images/hero/golden-temple-arch.jpg",
    alt: "Sri Harmandir Sahib (Golden Temple) framed through historic archway",
    tag: "Sri Harmandir Sahib • Amritsar",
  },
  {
    id: "wagah-border",
    image: "/images/hero/wagah-border-soldiers.jpg",
    alt: "Wagah Border Beating Retreat ceremony with marching soldiers",
    tag: "Attari-Wagah Border • VIP Coordination",
  },
  {
    id: "punjabi-feast",
    image: "/images/hero/punjabi-royal-thali.jpg",
    alt: "Authentic Punjabi Royal Thali and Kulcha culinary heritage",
    tag: "Heritage Dining & Culinary Trails",
  },
];

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Amritsar Tour & Wagah Border");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // 5.5-second image transition
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NEW INQUIRY - GOLDEN LUXE TOURS*
----------------------------------------
*Name:* ${name || "Not provided"}
*Phone:* ${phone || "Not provided"}
*Email:* ${email || "Not provided"}
*Interested In:* ${interest}
----------------------------------------
Hello! I would like to inquire about this experience and receive a customized quote.`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image Slider with 5-6s crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center w-full h-full transition-transform duration-[6000ms] ease-out ${isActive ? "scale-100" : "scale-100"
                  }`}
              />
            </div>
          );
        })}

        {/* Light 10% dark overlay as requested (should not be more than 10%) */}
        <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
      </div>

      {/* Main Content: Left Copy + Right Form (Reduced side spacing) */}
      <div className="relative z-20 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-white">

            {/* Reduced weight Sans-Serif Heading in White */}
            <h1 className="font-sans font-medium text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1]">
              Experience Amritsar <br />
              Like Never Before.
            </h1>

            {/* Short Engaging Sub-Heading */}
            <p className="text-base sm:text-lg text-white/95 font-light leading-relaxed max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Curated private chauffeur journeys, sacred Golden Temple & Gurudwara darshans, and authentic culinary experiences tailored exclusively for you.
            </p>

            {/* CTAs with White Color and More Rounded (Pill) Edges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 drop-shadow-none">
              <Link
                href="/tours"
                className="px-8 py-4 bg-white hover:bg-neutral-100 text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl rounded-full group"
              >
                <span>Explore Our Tours</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
              </Link>

              <button
                type="button"
                onClick={onOpenModal}
                className="px-8 py-4 bg-black/40 hover:bg-black/60 text-white hover:text-white font-semibold text-xs uppercase tracking-[0.18em] border border-white/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 rounded-full"
              >
                <span>Plan Your Journey</span>
              </button>
            </div>

            {/* Verified 5-Star Rating */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#DFCA8A]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-white font-medium tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                Verified 5-star rating from 200+ guests
              </span>
            </div>

            {/* Current Slide Badge */}
            <div className="pt-3 hidden sm:flex items-center gap-2 text-[11px] text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA8A]" />
              <span>Current view: {HERO_SLIDES[currentSlide].tag}</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form in White with Rounded Corners */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100 text-neutral-900 max-w-md w-full mx-auto lg:ml-auto">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="font-sans font-medium text-2xl text-neutral-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    Your inquiry has opened in WhatsApp. Our private tour concierge will connect with you shortly with tailored pricing and options.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs text-[#855D25] font-semibold underline hover:text-black"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="border-b border-neutral-100 pb-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#855D25] block">
                      Quick Concierge Request
                    </span>
                    <h3 className="font-sans font-medium text-2xl text-neutral-950 mt-0.5">
                      Plan Your Amritsar Trip
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">
                      Personalized itineraries & transparent chauffeur quotes.
                    </p>
                  </div>

                  <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-800 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gurpreet Singh"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-md focus:bg-white focus:border-black focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-800 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-md focus:bg-white focus:border-black focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-800 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-md focus:bg-white focus:border-black focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-800 mb-1">
                        Interested In
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-md focus:bg-white focus:border-black focus:outline-none transition-colors"
                      >
                        <option value="Amritsar Tour with Wagah Border">
                          Amritsar Tour with Wagah Border
                        </option>
                        <option value="Golden Temple & Sacred Palki Sahib Night Darshan">
                          Golden Temple & Palki Sahib Night Darshan
                        </option>
                        <option value="Old City Food & Artisan Craft Walk">
                          Old City Food & Artisan Craft Walk
                        </option>
                        <option value="Kuch Khaas Home Dining & Cooking">
                          Kuch Khaas Home Dining & Cooking
                        </option>
                        <option value="Sacred Sikh Gurudwaras Circuit">
                          Sacred Sikh Gurudwaras Circuit
                        </option>
                        <option value="Punjabi Rural Village Excursion">
                          Punjabi Rural Village Excursion
                        </option>
                        <option value="Custom Bespoke Itinerary">
                          Custom Bespoke Itinerary
                        </option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-black hover:bg-[#C2983B] hover:text-black text-white font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md rounded-full flex items-center justify-center gap-2"
                      >
                        <span>Enquire Now</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </button>
                      <p className="text-[10px] text-center text-neutral-400 mt-2 font-light">
                        Direct WhatsApp inquiry • Transparent quotes
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Slider Progress Indicator (Bottom Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "w-6 bg-[#DFCA8A]" : "w-1.5 bg-white/40 hover:bg-white"
              }`}
            aria-label={`Jump to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
