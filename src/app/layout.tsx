import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingPill } from "@/components/ui/WhatsAppFloatingPill";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Luxe Tours | Private Guided Amritsar Tours & Kuch Khaas Experience",
  description: "Curated private journeys across Amritsar: Golden Temple, Wagah Border VIP coordination, sacred Gurudwara circuits, rural Punjabi village excursions, and authentic home-cooking with Kuch Khaas.",
  keywords: [
    "Amritsar luxury tours",
    "Golden Temple private guide",
    "Wagah border private tour",
    "Kuch Khaas Indian home cooking",
    "Amritsar chauffeur service",
    "NRI Amritsar tour packages",
    "Gurudwara Tarn Taran Goindwal Khadur Sahib",
    "Amritsar street food walk"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#111827] selection:bg-[#C2983B]/20 selection:text-[#0B132B]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingPill />
      </body>
    </html>
  );
}
