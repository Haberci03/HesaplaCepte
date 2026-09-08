import type { Metadata } from "next";
import CreditCardMinPaymentCalculator from "@/app/components/CreditCardMinPaymentCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kredi Kartı Asgari Ödeme Hesaplama - Güncel Oranlarla Hesaplayıcı",
  description:
    "Kart limitiniz ve dönem borcunuza göre BDDK'nın güncel kararına göre kredi kartı asgari ödeme tutarınızı ve kalan bakiyenizi ücretsiz hesaplayın.",
  alternates: { canonical: "/kredi-karti-asgari-odeme-hesaplama" },
};

export default function KrediKartiAsgariOdemeHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kredi-karti-asgari-odeme-hesaplama",
          CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS
        )}
      />
      <CreditCardMinPaymentCalculator />
      <Disclaimer />
      <Faq items={CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS} />
    </>
  );
}
