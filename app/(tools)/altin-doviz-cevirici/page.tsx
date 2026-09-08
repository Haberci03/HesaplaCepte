import type { Metadata } from "next";
import CurrencyConverterCalculator from "@/app/components/CurrencyConverterCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { CURRENCY_CONVERTER_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Gram Altın / Döviz Çevirici - TL Karşılığı Hesaplayıcı",
  description:
    "Girdiğiniz güncel kur veya gram altın fiyatına göre döviz/altın tutarınızın TL karşılığını, ya da TL'den miktara çevirimini ücretsiz hesaplayın.",
  alternates: { canonical: "/altin-doviz-cevirici" },
};

export default function AltinDovizCeviriciPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/altin-doviz-cevirici",
          CURRENCY_CONVERTER_FAQ_ITEMS
        )}
      />
      <CurrencyConverterCalculator />
      <Disclaimer />
      <Faq items={CURRENCY_CONVERTER_FAQ_ITEMS} />
    </>
  );
}
