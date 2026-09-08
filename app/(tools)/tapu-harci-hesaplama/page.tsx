import type { Metadata } from "next";
import TitleDeedFeeCalculator from "@/app/components/TitleDeedFeeCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { TITLE_DEED_FEE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Tapu Harcı Hesaplama - Alıcı ve Satıcı Harcı Hesaplayıcı",
  description:
    "Satış bedeline göre tapu harcını (alıcı %2, satıcı %2, toplam %4) ve yaklaşık döner sermaye bedelini ücretsiz hesaplayın.",
  alternates: { canonical: "/tapu-harci-hesaplama" },
};

export default function TapuHarciHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/tapu-harci-hesaplama",
          TITLE_DEED_FEE_FAQ_ITEMS
        )}
      />
      <TitleDeedFeeCalculator />
      <Disclaimer />
      <Faq items={TITLE_DEED_FEE_FAQ_ITEMS} />
    </>
  );
}
