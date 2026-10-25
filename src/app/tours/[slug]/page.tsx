import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS_DATA } from "@/data/tours";
import { TourDetailClient } from "./TourDetailClient";
import { 
  ClockIcon, 
  MapPinIcon, 
  ChauffeurCarIcon
} from "@/components/ui/Icons";

import type { Metadata } from "next";

export function generateStaticParams() {
  return TOURS_DATA.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS_DATA.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found | Golden Luxe Tours" };

  return {
    title: `${tour.title} (${tour.durationLabel}) | Golden Luxe Tours`,
    description: tour.overview,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = TOURS_DATA.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-neutral-900 pb-24">
      {/* Editorial Breadcrumbs & Header */}
      <section className="bg-black text-white pt-12 pb-16 sm:pb-20 border-b border-neutral-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2983B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                <ClockIcon className="w-3.5 h-3.5 text-[#DFCA8A]" />
                <span>{tour.durationLabel}</span>
              </div>

              <h1 className="font-sans font-medium text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                {tour.title}
              </h1>

              <p className="text-base sm:text-lg text-[#E8DFD3] font-light max-w-2xl leading-relaxed">
                {tour.subtitle}
              </p>

              {/* Quick snapshot tags */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-300 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ChauffeurCarIcon className="w-4 h-4 text-[#DFCA8A]" />
                  <span>Private AC Sedan / Innova Crysta</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-[#DFCA8A]" />
                  <span>Pickup: Hotel Pick-up in Amritsar (Airport on request)</span>
                </div>
              </div>
            </div>

            {/* Quick Hero Image Preview */}
            <div className="lg:col-span-4 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#C2983B]/30 shadow-2xl">
              <Image
                src={tour.heroImage}
                alt={tour.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <span className="font-light">Unrushed, personalized pacing throughout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Interactive Client Sidebar */}
      <TourDetailClient tour={tour} />
    </div>
  );
}
