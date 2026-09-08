import type { Metadata } from "next";
import RentIncreaseCalculator from "@/app/components/RentIncreaseCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { RENT_INCREASE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kira Artış Oranı Hesaplama - Güncel TÜFE Oranıyla Hesaplayıcı",
  description:
    "Mevcut kiranız ve TÜFE 12 aylık ortalama artış oranına göre yeni kira tutarınızı ve artış miktarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kira-artis-hesaplama" },
};

export default function KiraArtisHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kira-artis-hesaplama",
          RENT_INCREASE_FAQ_ITEMS
        )}
      />
      <RentIncreaseCalculator />
      <Disclaimer />
      <Faq items={RENT_INCREASE_FAQ_ITEMS} />
    </>
  );
}
