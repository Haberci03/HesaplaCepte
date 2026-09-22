import type { Metadata } from "next";
import BmiCalculator from "@/app/components/BmiCalculator";
import AboutSection from "@/app/components/AboutSection";
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
      <AboutSection>
        Vücut kitle indeksi (VKİ/BMI), kilonuzun boy uzunluğunuza
        oranlanmasıyla elde edilen ve Dünya Sağlık Örgütü&apos;nün
        uluslararası kabul görmüş standardına göre vücut ağırlığınızın
        sağlıklı aralıkta olup olmadığına dair genel bir gösterge sunan
        basit bir hesaplamadır. Bu hesaplayıcı, boy ve kilonuzu
        girmeniz üzerine VKİ değerinizi hesaplar ve bu değeri dört
        kategoriden birine yerleştirir: 18,5&apos;in altı zayıf,
        18,5-25 arası normal, 25-30 arası fazla kilolu, 30 ve üzeri
        ise obez olarak sınıflandırılır. Kilo kontrolüne yeni başlayan,
        beslenme ve egzersiz hedefleri belirlemek isteyen, ya da
        düzenli olarak kilo takibi yapıp genel eğilimini görmek isteyen
        herkes bu aracı kullanabilir. VKİ, popülasyon düzeyinde hızlı
        bir tarama aracı olarak geliştirilmiştir; kas kütlesi yüksek
        sporcularda, hamilelerde, çocuklarda ve yaşlılarda tek başına
        yanıltıcı sonuçlar verebilir, çünkü formül yağ oranı ile kas
        kütlesini birbirinden ayırt etmez. Bu nedenle hesaplayıcının
        sonucu, bel çevresi ölçümü, vücut yağ oranı gibi diğer
        göstergelerin yerine geçmez ve tıbbi bir teşhis niteliği
        taşımaz. Sağlığınızla ilgili değerlendirmeler için sonuçları
        bir doktor veya diyetisyene danışarak yorumlamanızı öneririz.
      </AboutSection>
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
