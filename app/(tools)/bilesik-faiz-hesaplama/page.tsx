import type { Metadata } from "next";
import CompoundInterestCalculator from "@/app/components/CompoundInterestCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
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
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/bilesik-faiz-hesaplama",
          COMPOUND_INTEREST_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Bileşik faiz, kazanılan faizin de sonraki dönemlerde anaparaya
        eklenerek tekrar faiz kazanması anlamına gelir ve bu da uzun vadede
        birikimlerinizi basit faize göre çok daha hızlı büyütür. Bu
        hesaplayıcı; başlangıç anaparanız, yıllık faiz oranınız, vade
        süreniz ve isterseniz düzenli olarak eklediğiniz aylık ek yatırım
        tutarına göre vade sonunda elinize geçecek toplam tutarı ve bu
        tutarın ne kadarının sizin yatırdığınız paradan, ne kadarının
        kazanılan faizden oluştuğunu ayrı ayrı gösterir. Birikim hesabı
        açtırmayı düşünen, yatırım fonları veya mevduat arasında
        karşılaştırma yapan ya da emeklilik için ne kadar biriktirmesi
        gerektiğini planlayan herkes bu aracı kullanabilir. Aylık düzenli
        katkı payı eklendiğinde, hesaplayıcı bu katkıların da bileşik
        faizden nasıl faydalandığını gösterir; bu sayede küçük ama düzenli
        yatırımların zaman içinde nasıl büyük tutarlara dönüşebileceğini
        somut biçimde görebilirsiniz. Hesaplama standart bileşik faiz
        formülüne dayanır ve herhangi bir banka, fon veya yatırım aracının
        güncel faiz oranını içermez; girdiğiniz oran tamamen sizin
        belirlediğiniz veya araştırdığınız bir varsayımdır. Bu nedenle
        sonuçlar bir yatırım tavsiyesi değil, farklı senaryoları
        karşılaştırmanıza yardımcı olacak bir simülasyondur.
      </AboutSection>
      <CompoundInterestCalculator />
      <Disclaimer />
      <Faq items={COMPOUND_INTEREST_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/bilesik-faiz-hesaplama")}
      />
    </>
  );
}
