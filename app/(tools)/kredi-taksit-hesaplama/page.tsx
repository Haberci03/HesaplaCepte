import type { Metadata } from "next";
import LoanCalculator from "@/app/components/LoanCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { LOAN_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kredi Taksit Hesaplama - Aylık Taksit ve Faiz Hesaplayıcı",
  description:
    "Anapara, yıllık faiz oranı ve vadeye göre aylık kredi taksitinizi, toplam ödeme ve toplam faiz tutarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kredi-taksit-hesaplama" },
};

export default function KrediTaksitHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kredi-taksit-hesaplama",
          LOAN_FAQ_ITEMS
        )}
      />
      <LoanCalculator />
      <Disclaimer />
      <Faq items={LOAN_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/kredi-taksit-hesaplama")}
      />
    </>
  );
}
