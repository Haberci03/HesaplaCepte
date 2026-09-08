import type { Metadata } from "next";
import FuelCostCalculator from "@/app/components/FuelCostCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { FUEL_COST_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yakıt Masrafı Hesaplama - Yol Masrafı Hesaplayıcı",
  description:
    "Mesafe, aracınızın 100 km'de tükettiği yakıt ve yakıt fiyatına göre toplam yol masrafınızı ve km başına maliyetinizi ücretsiz hesaplayın.",
  alternates: { canonical: "/yakit-masrafi-hesaplama" },
};

export default function YakitMasrafiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yakit-masrafi-hesaplama",
          FUEL_COST_FAQ_ITEMS
        )}
      />
      <FuelCostCalculator />
      <Disclaimer />
      <Faq items={FUEL_COST_FAQ_ITEMS} />
    </>
  );
}
