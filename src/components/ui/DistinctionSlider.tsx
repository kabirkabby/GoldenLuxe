"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface DistinctionSlide {
  id: string;
  image: string;
  alt: string;
}

const DISTINCTION_SLIDES: DistinctionSlide[] = [
  {
    id: "guest-golden-temple-group",
    image: "/images/distinction/guest-golden-temple-group.jpg",
    alt: "Happy international guests visiting Sri Harmandir Sahib (Golden Temple)",
  },
  {
    id: "guest-golden-temple-turban",
    image: "/images/distinction/guest-golden-temple-turban.jpg",
    alt: "Travelers in traditional headwear honoring Golden Temple parikrama",
  },
  {
    id: "guest-heritage-family",
    image: "/images/distinction/guest-heritage-family.jpg",
    alt: "Multi-generation family exploring historical heritage in Amritsar",
  },
  {
    id: "guest-punjabi-village",
    image: "/images/distinction/guest-punjabi-village.jpg",
    alt: "Guests experiencing authentic rural Punjabi cultural traditions",
  },
];

export function DistinctionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DISTINCTION_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-950">
      {DISTINCTION_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}
    </div>
  );
}
