"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TOURS_DATA } from "@/data/tours";
import { TourCard } from "@/components/ui/TourCard";
import { BookingModal } from "@/components/ui/BookingModal";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function ToursListingPage() {
  const [filterDuration, setFilterDuration] = useState<string>("All");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Spiritual & Iconic",
    "Rural & Cultural",
    "Sacred Pilgrimage",
    "Culinary & Living",
    "Old City Flavors",
  ];

  const durations = ["All", "2 Nights / 3 Days", "3 Nights / 4 Days"];

  const filteredTours = TOURS_DATA.filter((tour) => {
    const matchCategory =
      filterCategory === "All" || tour.category === filterCategory;
    const matchDuration =
      filterDuration === "All" ||
      (filterDuration === "2 Nights / 3 Days" && tour.durationNights === 2) ||
      (filterDuration === "3 Nights / 4 Days" && tour.durationNights === 3);

    return matchCategory && matchDuration;
  });

  return (
    <div className="bg-white min-h-screen text-neutral-900 pb-24">
      {/* Editorial Header */}
      <div className="bg-black text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C2983B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DFCA8A]">
                Private Curated Itineraries
              </span>
            </div>

            <h1 className="font-sans font-medium text-4xl sm:text-6xl tracking-tight text-white leading-tight">
              Curated Amritsar <br />
              <span className="gold-gradient-text italic font-light">Private Tour Packages</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Every itinerary includes your dedicated climate-controlled private vehicle (Innova Crysta or executive sedan), professional chauffeur, and flexible pacing tailored to your family.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section with Filters & Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        {/* Filter controls */}
        <div className="p-6 sm:p-8 bg-white border border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.02)] mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5">
                Filter by Category:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      filterCategory === cat
                        ? "bg-black text-white"
                        : "bg-white text-neutral-600 border border-neutral-200 hover:border-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:self-end">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5">
                Duration:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setFilterDuration(dur)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      filterDuration === dur
                        ? "bg-[#C2983B] text-black font-bold"
                        : "bg-white text-neutral-600 border border-neutral-200 hover:border-black"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-500 pt-4 border-t border-neutral-100 flex items-center justify-between font-light">
            <span>
              Showing <strong className="font-semibold text-neutral-900">{filteredTours.length}</strong> of{" "}
              {TOURS_DATA.length} private packages
            </span>
            {(filterCategory !== "All" || filterDuration !== "All") && (
              <button
                onClick={() => {
                  setFilterCategory("All");
                  setFilterDuration("All");
                }}
                className="text-[#855D25] hover:underline font-semibold tracking-wide uppercase text-[11px]"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Tours Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Bespoke Custom Tour Callout */}
        <div className="mt-20 p-8 sm:p-14 bg-black text-white border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFCA8A]">
              Personalized Tailored Journeys
            </span>
            <h3 className="font-sans font-medium text-2xl sm:text-3xl">
              Looking for a Customized Itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Want to combine the rural village tour with a Kuch Khaas cooking session, or add extra days for Himachal or Delhi transfers? We build custom itineraries for private groups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#C2983B] hover:bg-white text-black font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 rounded-md"
            >
              Request Custom Route
            </button>
            <Link
              href="/plan-trip"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.18em] border border-white/30 transition-all flex items-center gap-2 rounded-md"
            >
              <span>Interactive Planner</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#DFCA8A]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
