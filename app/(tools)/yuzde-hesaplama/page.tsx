import type { Metadata } from "next";
import PercentageCalculator from "@/app/components/PercentageCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import { PERCENTAGE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yüzde Hesaplama - Online Yüzde Hesaplayıcı",
  description:
    "Bir sayının yüzdesini, iki sayı arasındaki yüzde oranını veya zam/indirim yüzdesini kolayca ve ücretsiz hesaplayın.",
  alternates: { canonical: "/yuzde-hesaplama" },
};

export default function YuzdeHesaplamaPage() {
  return (
    <>
      <PercentageCalculator />
      <Disclaimer />
      <Faq items={PERCENTAGE_FAQ_ITEMS} />
    </>
  );
}
