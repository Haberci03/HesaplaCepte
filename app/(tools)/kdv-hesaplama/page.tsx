import type { Metadata } from "next";
import VatCalculator from "@/app/components/VatCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import { VAT_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "KDV Hesaplama - KDV Dahil ve Hariç Tutar Hesaplayıcı",
  description:
    "%1, %10 ve %20 KDV oranlarına göre KDV dahil veya KDV hariç tutarı ve KDV miktarını anında hesaplayın. Ücretsiz ve kolay KDV hesaplama aracı.",
  alternates: { canonical: "/kdv-hesaplama" },
};

export default function KdvHesaplamaPage() {
  return (
    <>
      <VatCalculator />
      <Disclaimer />
      <Faq items={VAT_FAQ_ITEMS} />
    </>
  );
}
