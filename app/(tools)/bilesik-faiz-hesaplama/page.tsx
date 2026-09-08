import type { Metadata } from "next";
import CompoundInterestCalculator from "@/app/components/CompoundInterestCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import { COMPOUND_INTEREST_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Bileşik Faiz Hesaplama - Yatırım Getirisi Hesaplayıcı",
  description:
    "Anapara, yıllık faiz oranı, vade ve isteğe bağlı aylık ek yatırımınıza göre vade sonu tutarınızı ve toplam kazancınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/bilesik-faiz-hesaplama" },
};

export default function BilesikFaizHesaplamaPage() {
  return (
    <>
      <CompoundInterestCalculator />
      <Disclaimer />
      <Faq items={COMPOUND_INTEREST_FAQ_ITEMS} />
    </>
  );
}
