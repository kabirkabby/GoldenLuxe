import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Private Tours & Itineraries | Golden Luxe Tours Amritsar",
  description: "Explore 6 curated private Amritsar tour packages: Golden Temple, Wagah Border, Punjabi village immersion, sacred Gurudwaras circuit, and old city food walks.",
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
