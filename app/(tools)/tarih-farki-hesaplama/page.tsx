import type { Metadata } from "next";
import DateDiffCalculator from "@/app/components/DateDiffCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { DATE_DIFF_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Tarih Farkı Hesaplama - Yaş ve İki Tarih Arası Süre Hesaplayıcı",
  description:
    "İki tarih arasındaki farkı yıl, ay, gün ve toplam gün olarak ücretsiz hesaplayın. Yaş hesaplama için de kullanabilirsiniz.",
  alternates: { canonical: "/tarih-farki-hesaplama" },
};

export default function TarihFarkiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/tarih-farki-hesaplama",
          DATE_DIFF_FAQ_ITEMS
        )}
      />
      <DateDiffCalculator />
      <Disclaimer />
      <Faq items={DATE_DIFF_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/tarih-farki-hesaplama")}
      />
    </>
  );
}
