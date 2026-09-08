import type { Metadata } from "next";
import LatePaymentSurchargeCalculator from "@/app/components/LatePaymentSurchargeCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import { LATE_PAYMENT_SURCHARGE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Gecikme Zammı Hesaplama - Güncel Oranla Hesaplayıcı",
  description:
    "Borç aslı ve gecikme süresine göre 6183 sayılı Kanun'daki güncel aylık %3,7 oranıyla gecikme zammını ve ödenmesi gereken toplam tutarı ücretsiz hesaplayın.",
  alternates: { canonical: "/gecikme-zammi-hesaplama" },
};

export default function GecikmeZammiHesaplamaPage() {
  return (
    <>
      <LatePaymentSurchargeCalculator />
      <Disclaimer />
      <Faq items={LATE_PAYMENT_SURCHARGE_FAQ_ITEMS} />
    </>
  );
}
