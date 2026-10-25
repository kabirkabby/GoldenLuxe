import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuch Khaas | Authentic Indian Home Kitchen & High Tea Amritsar",
  description: "An authentic Indian home-cooking and High Tea cultural experience in Amritsar. Hands-on cooking, traditional breads, dal makhani, paneer specialties, and authentic hospitality.",
};

export default function KuchKhaasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
