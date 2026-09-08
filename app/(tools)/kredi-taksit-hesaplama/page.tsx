import type { Metadata } from "next";
import LoanCalculator from "@/app/components/LoanCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
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
      <LoanCalculator />
      <Disclaimer />
      <Faq items={LOAN_FAQ_ITEMS} />
    </>
  );
}
