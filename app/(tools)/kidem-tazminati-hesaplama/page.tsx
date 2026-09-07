import type { Metadata } from "next";
import SeveranceCalculator from "@/app/components/SeveranceCalculator";
import Faq from "@/app/components/Faq";
import { SEVERANCE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kıdem Tazminatı Hesaplama - 2026 Güncel Tavan ile Hesaplayıcı",
  description:
    "Brüt maaşınız ve çalışma sürenize göre 2026 kıdem tazminatı tavanı ve damga vergisi dahil net kıdem tazminatınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kidem-tazminati-hesaplama" },
};

export default function KidemTazminatiHesaplamaPage() {
  return (
    <>
      <SeveranceCalculator />
      <Faq items={SEVERANCE_FAQ_ITEMS} />
    </>
  );
}
