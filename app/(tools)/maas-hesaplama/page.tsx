import type { Metadata } from "next";
import SalaryCalculator from "@/app/components/SalaryCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { SALARY_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "2026 Maaş Hesaplama - Net Brüt Maaş Hesaplayıcı",
  description:
    "2026 gelir vergisi dilimleri, SGK, işsizlik sigortası, damga vergisi ve asgari ücret istisnasına göre net-brüt maaş hesaplayın. 12 aylık kümülatif vergi tablosuyla ücretsiz maaş hesaplama.",
  alternates: { canonical: "/maas-hesaplama" },
};

export default function MaasHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas("/maas-hesaplama", SALARY_FAQ_ITEMS)}
      />
      <SalaryCalculator />
      <Disclaimer />
      <Faq items={SALARY_FAQ_ITEMS} />
    </>
  );
}
