"use client";

import React, { useState } from "react";
import { ChevronDownIcon, WhatsAppIcon } from "@/components/ui/Icons";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is included in the private chauffeur service?",
    answer:
      "Every tour includes a dedicated, climate-controlled vehicle (Toyota Innova Crysta or executive sedan) exclusively for your party. It covers fuel, highway tolls, dedicated parking fees, chilled bottled water, phone chargers, and a verified, polite chauffeur who knows Amritsar's routes and Gurudwara drop-off points.",
  },
  {
    question: "What should we wear and what etiquette is required at the Golden Temple?",
    answer:
      "All visitors must cover their heads (scarves are provided complimentary at entrances or you may bring your own) and remove footwear before stepping through the sanitizing footbaths. Modest clothing covering shoulders and knees is strictly required. Tobacco, alcohol, and leather items are prohibited inside the complex.",
  },
  {
    question: "How is the Wagah Border Beating Retreat ceremony coordinated?",
    answer:
      "The ceremony takes place daily at sunset at the Attari-Wagah border (~32 km from Amritsar). Your private chauffeur coordinates optimal afternoon departure timing so you avoid heavy traffic bottlenecks, navigate stadium security smoothly, and secure comfortable stadium seats before the military drills begin.",
  },
  {
    question: "Are hotel pickups and airport transfers included?",
    answer:
      "Yes, your chauffeur will greet you directly at your Amritsar hotel lobby at the scheduled morning time. We can also coordinate direct pickup or drop-off at Sri Guru Ram Dass Jee International Airport (ATQ) or Amritsar Railway Station upon request.",
  },
  {
    question: "Can the itinerary pacing be adjusted for elderly parents or children?",
    answer:
      "Yes, absolutely. Because all Golden Luxe Tours are 100% private, you set the pace. If elderly family members need extra time resting around the sacred sarovar, or wish to return to the hotel during peak afternoon heat, your chauffeur adapts the schedule effortlessly without any rush.",
  },
  {
    question: "What is the Kuch Khaas dining experience and can dietary preferences be accommodated?",
    answer:
      "Kuch Khaas is an intimate home dining immersion hosted inside a private Punjabi family residence. Meals are 100% vegetarian, prepared fresh with pure desi ghee and hand-ground spices. We happily accommodate allergies, Jain dietary rules, or mild spice levels for children and international guests.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#855D25] font-semibold">
              Clear & Transparent Answers
            </div>
            
            <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Everything you need to know about private chauffeur travel, Gurudwara etiquette, Wagah Border timing, and family pacing in Amritsar.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3.5 mt-6">
              <span className="text-xs font-medium text-neutral-900 block">
                Have a custom question about your dates or group?
              </span>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Our private concierge is available on WhatsApp to answer specific questions regarding vehicle sizes, timing, and custom circuits.
              </p>
              <a
                href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours,%20I%20have%20a%20question%20about%20planning%20a%20tour%20in%20Amritsar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#855D25] hover:text-black transition-colors pt-1"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Tour Concierge →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion FAQs */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-neutral-900 bg-white shadow-xs"
                      : "border-neutral-200/90 bg-white hover:border-neutral-400"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-medium text-base sm:text-lg text-neutral-900 pr-2">
                      {item.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-neutral-100 text-neutral-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-neutral-900 text-white" : ""
                      }`}
                    >
                      <ChevronDownIcon className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100 mt-1">
                      <p className="pt-3">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
