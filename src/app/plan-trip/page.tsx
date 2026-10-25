"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  WhatsAppIcon,
  CheckOrnamentIcon
} from "@/components/ui/Icons";

export default function PlanTripPage() {
  const [duration, setDuration] = useState("3 Days / 2 Nights (Recommended Classic)");
  const [partySize, setPartySize] = useState("2 Adults (Couple)");
  const [vehicle, setVehicle] = useState("Toyota Innova Crysta (AC)");
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([
    "Golden Temple & Palki Sahib Darshan",
    "VIP Wagah Border Ceremony Coordination",
    "Kuch Khaas Home Dining Experience",
    "Old City Street Food & Artisan Heritage Walk"
  ]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const experienceOptions = [
    { id: "darshan", name: "Golden Temple & Palki Sahib Darshan" },
    { id: "wagah", name: "VIP Wagah Border Ceremony Coordination" },
    { id: "kuchkhaas", name: "Kuch Khaas Home Dining Experience" },
    { id: "foodwalk", name: "Old City Street Food & Artisan Heritage Walk" },
    { id: "village", name: "Rural Punjabi Village & Farmstead Excursion" },
    { id: "partition", name: "Partition Museum & Jallianwala Bagh Archives" },
    { id: "gurudwara-circuit", name: "Sacred Gurudwara Circuit (Tarn Taran / Goindwal / Khadur Sahib)" },
    { id: "shopping", name: "Authentic Phulkari & Jutti Craft Trails" },
    { id: "airport", name: "Seamless ATQ Airport / Railway Transfers" }
  ];

  const toggleExperience = (expName: string) => {
    if (selectedExperiences.includes(expName)) {
      setSelectedExperiences(selectedExperiences.filter((item) => item !== expName));
    } else {
      setSelectedExperiences([...selectedExperiences, expName]);
    }
  };

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const planMessage = `*BESPOKE AMRITSAR TOUR INQUIRY - GOLDEN LUXE TOURS*

*Lead Traveler:* ${name || "Guest"}
*Contact:* ${contact || "Not provided"}
*Estimated Arrival Date:* ${arrivalDate || "Flexible"}
*Duration:* ${duration}
*Party Size:* ${partySize}
*Vehicle Tier:* ${vehicle}

*Selected Experiences:*
${selectedExperiences.map((e) => `• ${e}`).join("\n")}

*Special Notes / Requests:*
${specialRequests || "None provided"}

Please prepare a personalized custom quote and itinerary.`;

    window.open(`https://wa.me/?text=${encodeURIComponent(planMessage)}`, "_blank");
    setIsSuccess(true);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900 pb-24">
      {/* Editorial Header */}
      <section className="bg-black text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C2983B]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DFCA8A]">
              Tailor-Made Concierge
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
            Design Your <br />
            <span className="gold-gradient-text italic font-light">Bespoke Amritsar Journey</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Select your preferred sacred landmarks, pacing, culinary moments, and private vehicle tier. Our team will craft a personalized day-by-day plan.
          </p>
        </div>
      </section>

      {/* Main Interactive Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-12">
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-8 sm:p-14">
          {isSuccess ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 border border-[#25D366] text-[#25D366] mx-auto flex items-center justify-center">
                <CheckOrnamentIcon className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900">
                Your Plan Has Been Transferred!
              </h2>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed font-light">
                Your bespoke tour requirements have been formatted into WhatsApp. Our Amritsar tour coordinator will review your preferences and share a personalized itinerary.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/tours"
                  className="px-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C2983B] hover:text-black transition-all rounded-md"
                >
                  Browse Fixed Packages
                </Link>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3.5 bg-neutral-100 text-neutral-900 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-neutral-200 transition-all rounded-md"
                >
                  Edit Preferences
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePlanSubmit} className="space-y-12">
              {/* Step 1: Duration & Travelers */}
              <div className="space-y-5">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#855D25]">
                    Step 01
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-900">
                    Duration & Party Size
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                      Trip Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none"
                    >
                      <option value="2 Days / 1 Night (Quick Gateway)">2 Days / 1 Night (Quick Gateway)</option>
                      <option value="3 Days / 2 Nights (Recommended Classic)">3 Days / 2 Nights (Recommended Classic)</option>
                      <option value="4 Days / 3 Nights (Immersive)">4 Days / 3 Nights (Immersive)</option>
                      <option value="5+ Days (Extended Punjab & Gurudwara Circuit)">5+ Days (Extended Punjab & Gurudwara Circuit)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none"
                    >
                      <option value="1 Adult (Solo Traveler)">1 Adult (Solo Traveler)</option>
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="Family with 1-2 Children">Family with 1-2 Children</option>
                      <option value="Multi-generation Family (4-6 Pax)">Multi-generation Family (4-6 Pax)</option>
                      <option value="Extended Group (7-15 Pax)">Extended Group (7-15 Pax)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Choose Experiences */}
              <div className="space-y-5">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#855D25]">
                    Step 02
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-900">
                    Select What You Want to Experience
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    Pick the highlights that matter to you. We will weave them into an effortless schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {experienceOptions.map((opt) => {
                    const isSelected = selectedExperiences.includes(opt.name);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleExperience(opt.name)}
                        className={`p-4 text-left border transition-all duration-200 flex items-start gap-3 ${
                          isSelected
                            ? "bg-black text-white border-black shadow-sm"
                            : "bg-white text-neutral-700 border-neutral-200 hover:border-black"
                        }`}
                      >
                        <span className={`w-4 h-4 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5 ${
                          isSelected ? "bg-[#C2983B] text-black" : "border border-neutral-300 text-transparent"
                        }`}>
                          ✓
                        </span>
                        <span className="text-xs font-normal leading-snug">
                          {opt.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Vehicle Preference */}
              <div className="space-y-5">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#855D25]">
                    Step 03
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-900">
                    Private Vehicle Standard
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Toyota Innova Crysta (AC)",
                    "Executive Luxury Sedan (AC)",
                    "Luxury Tempo Traveller (AC)",
                  ].map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setVehicle(v)}
                      className={`p-5 text-center border transition-all duration-200 ${
                        vehicle === v
                          ? "bg-black text-white border-black shadow-sm"
                          : "bg-white border-neutral-200 text-neutral-700 hover:border-black text-xs"
                      }`}
                    >
                      <div className="text-xs font-medium">{v}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact & Travel Timing */}
              <div className="space-y-5">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#855D25]">
                    Step 04
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-neutral-900">
                    Lead Traveler & Timing
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jasleen Kaur"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / +1 / +44..."
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                      Estimated Arrival Date
                    </label>
                    <input
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2">
                    Special Notes / Mobility / Hotel Assistance
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need hotel recommendations near the Golden Temple, traveling with elderly parents, interested in early morning Amrit Vela darshan..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-black hover:bg-[#C2983B] hover:text-black text-white font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-3 transition-all duration-300 shadow-md rounded-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Send Customized Itinerary Brief via WhatsApp</span>
                </button>
                <div className="text-center text-[11px] text-neutral-500 mt-3 font-light">
                  Direct quote from our Amritsar local tour specialist • Zero spam • Pure privacy
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
