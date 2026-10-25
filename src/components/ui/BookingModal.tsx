"use client";

import React, { useState } from "react";
import { TOURS_DATA } from "@/data/tours";
import { WhatsAppIcon, CheckOrnamentIcon } from "@/components/ui/Icons";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExperienceTitle?: string;
  defaultTourSlug?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultExperienceTitle = "02-nights-amritsar-wagah-palki-sahib",
  defaultTourSlug
}: BookingModalProps) {
  const [selectedTour, setSelectedTour] = useState(defaultTourSlug || defaultExperienceTitle);
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guestCount, setGuestCount] = useState("2 Guests (Couple)");
  const [vehiclePref, setVehiclePref] = useState("Toyota Innova Crysta (AC - Recommended for Families)");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Look up human-readable title if possible
    const tourObj = TOURS_DATA.find((t) => t.slug === selectedTour);
    const tourTitle = tourObj ? tourObj.title : selectedTour;

    const message = `*NEW PRIVATE TOUR INQUIRY - GOLDEN LUXE TOURS*

*Tour / Experience:* ${tourTitle}
*Lead Guest:* ${fullName || "Not provided"}
*Contact:* ${contactNumber || "Not provided"}
*Estimated Date:* ${travelDate || "Flexible"}
*Party Size:* ${guestCount}
*Vehicle Preference:* ${vehiclePref}
*Special Requests / Notes:* ${notes || "None"}

Please share tour availability and customized pricing.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white border border-neutral-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black text-white p-6 sm:p-8 relative border-b border-neutral-800">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#DFCA8A] font-semibold">
            Bespoke Concierge Reservation
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
            Request Private Tour Itinerary
          </h3>
          <p className="text-xs text-neutral-300 font-light mt-1.5">
            Tailored for families, international visitors & NRIs. Transparent quotes with private chauffeur.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-white">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 border border-[#25D366] text-[#25D366] mx-auto flex items-center justify-center">
                <CheckOrnamentIcon className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-neutral-900">
                Inquiry Generated!
              </h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed font-light">
                Your bespoke tour inquiry has opened in WhatsApp. Our tour specialist will respond promptly with itinerary options and custom pricing.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3.5 bg-black hover:bg-[#C2983B] hover:text-black text-white text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              {/* Select Experience */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Select Tour / Experience
                </label>
                <select
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none"
                >
                  <optgroup label="Curated Tour Packages">
                    {TOURS_DATA.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.title} ({t.durationLabel})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Kuch Khaas Culinary">
                    <option value="kuch-khaas-feast">
                      Kuch Khaas: Hands-on Home Feast & Cooking Class
                    </option>
                    <option value="kuch-khaas-tea">
                      Kuch Khaas: Heritage High Tea & Street Food Gathering
                    </option>
                  </optgroup>
                  <optgroup label="Custom Itinerary">
                    <option value="general">
                      Custom Bespoke Itinerary (Tailored to your dates)
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Two columns: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Harpreet Singh / Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +1 / +44..."
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Two columns: Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                    Estimated Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none"
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="3-4 Guests (Family)">3-4 Guests (Family)</option>
                    <option value="5-7 Guests (Group)">5-7 Guests (Group)</option>
                    <option value="8+ Guests (Large Family)">8+ Guests (Large Family)</option>
                  </select>
                </div>
              </div>

              {/* Vehicle preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Private Vehicle Preference
                </label>
                <select
                  value={vehiclePref}
                  onChange={(e) => setVehiclePref(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none"
                >
                  <option value="Toyota Innova Crysta (AC - Recommended for Families)">
                    Toyota Innova Crysta (AC - Premier Choice for Comfort)
                  </option>
                  <option value="Executive Luxury Sedan (AC - Ideal for 2)">
                    Executive Luxury Sedan (AC - Ideal for Couples)
                  </option>
                  <option value="Toyota Fortuner 4x4 (VIP Luxury SUV)">
                    Toyota Fortuner 4x4 (VIP Luxury SUV)
                  </option>
                  <option value="Executive Tempo Traveller (12-16 Seater AC)">
                    Executive Luxury Tempo Traveller (For Larger Groups)
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Special Requests / Airport Pickup Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Flight arrival at ATQ airport, wheelchair assistance needed, prefer strictly vegetarian cuisine..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-neutral-300 px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-black hover:bg-[#C2983B] hover:text-black text-white font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 shadow-md transition-all duration-300 rounded-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Send Inquiry via WhatsApp Concierge</span>
                </button>
                <div className="text-center text-[11px] text-neutral-500 mt-2 font-light">
                  No payment required now • Direct communication with Golden Luxe tour specialists
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
