import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Fleet & Chauffeur Standards | Golden Luxe Tours Amritsar",
  description: "Toyota Innova Crysta, luxury sedans, and Tempo Travellers for Amritsar and Punjab touring with professional, punctual chauffeurs.",
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
