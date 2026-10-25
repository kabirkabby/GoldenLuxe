"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function WhatsAppFloatingPill() {
  return (
    <aside aria-label="Quick WhatsApp Concierge Assistance" className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/?text=Hello%20Golden%20Luxe%20Tours!%20I%20am%20planning%20a%20visit%20to%20Amritsar%20and%20would%20love%20to%20learn%20more%20about%20your%20private%20tours."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#0B132B] text-white rounded-full shadow-2xl border border-[#C2983B]/40 hover:bg-[#141F42] hover:border-[#C2983B] transition-all transform hover:-translate-y-1"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
          <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
        </div>
        <div className="text-left hidden sm:block pr-1">
          <div className="text-[10px] uppercase tracking-wider text-[#DFCA8A] font-semibold leading-tight">
            Private Concierge
          </div>
          <div className="text-xs font-semibold text-white leading-tight">
            Chat on WhatsApp
          </div>
        </div>
      </a>
    </aside>
  );
}
