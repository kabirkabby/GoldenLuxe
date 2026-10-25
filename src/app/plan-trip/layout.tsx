import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Bespoke Amritsar Journey | Golden Luxe Tours",
  description: "Create a customized private tour of Amritsar tailored to your family's dates, preferred landmarks, and vehicle tier.",
};

export default function PlanTripLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
