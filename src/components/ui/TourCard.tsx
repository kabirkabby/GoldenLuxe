import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TourItinerary } from "@/data/tours";
import { ClockIcon, MapPinIcon, CheckOrnamentIcon, ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

interface TourCardProps {
  tour: TourItinerary;
  featured?: boolean;
}

export function TourCard({ tour, featured = false }: TourCardProps) {
  const waMessage = encodeURIComponent(
    `Hello Golden Luxe Tours! I would like to inquire about "${tour.title}" (${tour.durationLabel}). Could you please share availability and custom pricing?`
  );

  return (
    <div className={`group rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#C2983B]/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col ${featured ? "lg:flex-row lg:col-span-2" : ""}`}>
      {/* Image container */}
      <div className={`relative overflow-hidden bg-neutral-950 ${featured ? "lg:w-1/2 min-h-[340px]" : "h-72 w-full"}`}>
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.93]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        {/* Floating Badges */}
        {/* <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-white backdrop-blur-md text-black text-[10px] font-semibold tracking-wider uppercase rounded-md">
            {tour.category}
          </span>
        </div> */}

        {/* Duration bottom badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-black text-xs bg-white backdrop-blur-md px-3 py-1.5 rounded-lg">

          <span className="tracking-wide">{tour.durationLabel}</span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white ${featured ? "lg:w-1/2" : ""}`}>
        <div>
          <h3 className="font-sans text-xl sm:text-2xl font-medium text-neutral-900 group-hover:text-[#C2983B] transition-colors leading-snug">
            <Link href={`/tours/${tour.slug}`}>
              {tour.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2.5 line-clamp-2 leading-relaxed">
            {tour.tagline}
          </p>

          {/* Key highlights snippet */}
          {/* <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
            {tour.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2983B] mt-1.5 shrink-0" />
                <span className="line-clamp-1 font-light">{highlight}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex  gap-2.5">
          <a
            href={`https://wa.me/?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inquire about this tour on WhatsApp"
            className="p-2.5 bg-white hover:bg-neutral-50 text-neutral-800 hover:text-[#128C7E] transition-all border border-neutral-200 rounded-md shadow-xs flex items-center justify-center group/wa"
            title="Quick WhatsApp Inquire"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover/wa:scale-110 transition-transform" />
          </a>

          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-[#C2983B] text-white hover:text-black text-xs font-semibold uppercase tracking-[0.14em] shadow-sm transition-all duration-300 rounded-lg"
          >
            <span>View Itinerary</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-[#DFCA8A]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
