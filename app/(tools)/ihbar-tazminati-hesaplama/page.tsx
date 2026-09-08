import type { Metadata } from "next";
import NoticePayCalculator from "@/app/components/NoticePayCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { NOTICE_PAY_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "İhbar Tazminatı Hesaplama - 2026 Güncel Hesaplayıcı",
  description:
    "Brüt maaşınız ve çalışma sürenize göre İş Kanunu Madde 17'ye göre ihbar süresi ve ihbar tazminatı tutarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/ihbar-tazminati-hesaplama" },
};

export default function IhbarTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/ihbar-tazminati-hesaplama",
          NOTICE_PAY_FAQ_ITEMS
        )}
      />
      <NoticePayCalculator />
      <Disclaimer />
      <Faq items={NOTICE_PAY_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/ihbar-tazminati-hesaplama")}
      />
    </>
  );
}
