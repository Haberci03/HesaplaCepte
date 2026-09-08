import type { Metadata } from "next";
import BmiCalculator from "@/app/components/BmiCalculator";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { BMI_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "VKI Hesaplama - Vücut Kitle İndeksi (BMI) Hesaplayıcı",
  description:
    "Boy ve kilonuza göre vücut kitle indeksinizi (BMI) ve zayıf, normal, fazla kilolu veya obez kategorinizi ücretsiz hesaplayın.",
  alternates: { canonical: "/vki-hesaplama" },
};

export default function VkiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas("/vki-hesaplama", BMI_FAQ_ITEMS)}
      />
      <BmiCalculator />
      <Disclaimer text="Bu hesaplayıcı yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Sağlığınızla ilgili değerlendirmeler için bir doktor veya diyetisyene danışmanızı öneririz." />
      <Faq items={BMI_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/vki-hesaplama")}
      />
    </>
  );
}
