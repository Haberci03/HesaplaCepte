import type { Metadata } from "next";
import RentIncreaseCalculator from "@/app/components/RentIncreaseCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { RENT_INCREASE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kira Artış Oranı Hesaplama - Güncel TÜFE Oranıyla Hesaplayıcı",
  description:
    "Mevcut kiranız ve TÜFE 12 aylık ortalama artış oranına göre yeni kira tutarınızı ve artış miktarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kira-artis-hesaplama" },
};

export default function KiraArtisHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kira-artis-hesaplama",
          RENT_INCREASE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        6098 sayılı Türk Borçlar Kanunu&apos;na göre konut ve çatılı
        işyeri kiralarında, kira sözleşmesinin yenilendiği dönemde
        uygulanabilecek azami artış oranı, bir önceki kira yılında
        tüketici fiyat endeksindeki on iki aylık ortalamalara göre
        değişim oranını geçemez. Bu hesaplayıcı, mevcut kira tutarınızı
        girip TÜFE oranını kullanarak yeni kira tutarınızı ve artış
        miktarını hesaplamanızı sağlar; varsayılan olarak Aralık 2025
        TÜİK verisine göre güncellenen %34,88&apos;lik on iki aylık
        ortalama TÜFE değişim oranı önerilir, ancak bu oranı TÜİK&apos;in
        güncel aylık açıklamasına göre kendiniz de değiştirebilirsiniz.
        TÜİK bu oranı her ay yeniden açıkladığından, kira yenileme
        tarihinize en yakın ayın verisini kullanmanız kesin sonuç için
        önemlidir. Kira sözleşmesi yenilenme dönemi yaklaşan kiracılar,
        artışın yasal sınırı aşıp aşmadığını kontrol etmek için; ev
        sahipleri ise talep edebilecekleri azami artış tutarını
        hesaplamak için bu aracı kullanabilir. Hesaplayıcı yalnızca
        yasal azami sınırı esas alır; taraflar sözleşmede daha düşük
        bir artış oranı kararlaştırmışsa veya özel bir anlaşma varsa,
        bu hesaplama sonucu değil, sözleşme hükümleri geçerli olur.
        Uyuşmazlık durumunda kesin karar için bir hukuk danışmanına
        başvurmanız önerilir.
      </AboutSection>
      <RentIncreaseCalculator />
      <Disclaimer />
      <Faq items={RENT_INCREASE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/kira-artis-hesaplama")}
      />
    </>
  );
}
