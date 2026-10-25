"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SlideItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
}

const FOOD_SLIDES: SlideItem[] = [
  {
    id: "lassi",
    image: "/images/food-trail/lassi.jpg",
    tag: "Gian di Lassi • Since 1921",
    title: "Thick Velvety Kulhad Lassi",
    description: "Hand-churned rich lassi crowned with a thick layer of fresh malai."
  },
  {
    id: "kulcha-thali",
    image: "/images/food-trail/kulcha-thali.jpg",
    tag: "Kulwant De Kulche",
    title: "Crisp Tandoor-Baked Kulcha",
    description: "Flaky, layered bread baked in clay tandoors topped with homemade butter."
  },
  {
    id: "kulcha-chole",
    image: "/images/food-trail/kulcha-chole.jpg",
    tag: "Old City Heritage Flavors",
    title: "Amritsari Kulcha & Chana Thali",
    description: "Slow-simmered spiced chickpeas, dal makhani, and tangy tamarind-onion chutney."
  },
  {
    id: "jalebi-chowk",
    image: "/images/food-trail/jalebi-chowk.jpg",
    tag: "Guddasram Jalebiwala • Jalebi Chowk",
    title: "Hot Desi Ghee Golden Jalebis",
    description: "Crispy spirals fried to golden perfection in pure desi ghee since decades."
  }
];

export function FoodTrailSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % FOOD_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + FOOD_SLIDES.length) % FOOD_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative h-[640px] sm:h-[680px] w-full rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-neutral-950 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {FOOD_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className={`object-cover object-center w-full h-full transition-transform duration-[6000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                }`}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

            {/* Captions */}
            <div className="absolute bottom-6 left-6 right-20 text-white z-20">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#DFCA8A] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#DFCA8A]/30 inline-block mb-2">
                {slide.tag}
              </span>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl text-white leading-tight">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1.5 max-w-md line-clamp-2 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        );
      })}

      {/* Progress Dots / Bars */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {FOOD_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-[#DFCA8A]" : "w-1.5 bg-white/40 hover:bg-white"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Subtle Arrow Controls with small rounded edges */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={prevSlide}
          className="w-8 h-8 rounded-md bg-black/70 hover:bg-black text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center border border-white/15 transition-all shadow-md"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-8 h-8 rounded-md bg-black/70 hover:bg-black text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center border border-white/15 transition-all shadow-md"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
