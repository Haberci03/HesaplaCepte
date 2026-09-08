import type { Metadata } from "next";
import InflationCalculator from "@/app/components/InflationCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { INFLATION_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Enflasyon Hesaplama - TÜFE ile Güncel Değer Hesaplayıcı",
  description:
    "2012-2025 yıl sonu TÜFE endekslerine göre geçmiş bir tutarın bugünkü karşılığını ve iki yıl arasındaki toplam enflasyon oranını ücretsiz hesaplayın.",
  alternates: { canonical: "/enflasyon-hesaplama" },
};

export default function EnflasyonHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/enflasyon-hesaplama",
          INFLATION_FAQ_ITEMS
        )}
      />
      <InflationCalculator />
      <Disclaimer />
      <Faq items={INFLATION_FAQ_ITEMS} />
    </>
  );
}
