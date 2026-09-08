import type { Metadata } from "next";
import AnnualLeaveCalculator from "@/app/components/AnnualLeaveCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { ANNUAL_LEAVE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yıllık İzin Hesaplama - Kaç Gün İzin Hakkınız Var?",
  description:
    "İş Kanunu Madde 53'e göre çalışma sürenize göre yıllık ücretli izin hakkınızı (14, 20 veya 26 gün) ücretsiz hesaplayın.",
  alternates: { canonical: "/yillik-izin-hesaplama" },
};

export default function YillikIzinHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yillik-izin-hesaplama",
          ANNUAL_LEAVE_FAQ_ITEMS
        )}
      />
      <AnnualLeaveCalculator />
      <Disclaimer />
      <Faq items={ANNUAL_LEAVE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/yillik-izin-hesaplama")}
      />
    </>
  );
}
