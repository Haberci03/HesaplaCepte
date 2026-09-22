import type { Metadata } from "next";
import InflationCalculator from "@/app/components/InflationCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { INFLATION_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Enflasyon Hesaplama - TÜFE ile Güncel Değer Hesaplayıcı",
  description:
    "2012-2025 yıl sonu TÜFE endekslerine göre geçmiş bir tutarın bugünkü karşılığını ve iki yıl arasındaki toplam enflasyon oranını ücretsiz hesaplayın.",
  alternates: { canonical: "/enflasyon-hesaplama" },
};

export default function EnflasyonHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/enflasyon-hesaplama",
          INFLATION_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Bu hesaplayıcı, geçmişte belirli bir yılda elinizde olan bir
        tutarın bugünkü satın alma gücü karşılığında ne kadar olduğunu,
        TÜİK&apos;in yıl sonu Tüketici Fiyat Endeksi (TÜFE) verilerine
        dayanarak hesaplar. Hesaplayıcı, 2012 yılı Aralık ayı 100 baz
        alınarak zincirleme şekilde oluşturulmuş 2012-2025 yıl sonu endeks
        değerlerini kullanır; iki yıl arasındaki endeks oranına göre
        seçtiğiniz tutarı güncel değerine çevirir ve aradaki toplam
        enflasyon oranını yüzde olarak gösterir. Örneğin 2015 yılında
        elinizdeki 1.000 TL&apos;nin bugün hangi tutara denk geldiğini
        merak ediyorsanız, ya da geçmiş yıllardaki bir maaş, kira veya
        fiyatın enflasyona göre ne kadar arttığını karşılaştırmak
        istiyorsanız bu araç size net bir cevap verir. Ev sahipleri ve
        kiracılar geçmiş kira tutarlarını değerlendirirken, çalışanlar
        maaş artışlarının enflasyonun gerisinde kalıp kalmadığını
        kontrol ederken, yatırımcılar ise getirilerinin reel karşılığını
        görmek isterken bu hesaplayıcıyı kullanabilir. Kullanılan endeks
        değerleri TÜİK&apos;in resmi yıllık değişim oranlarından türetilmiş
        yıl sonu bazlı yaklaşık rakamlardır; bu nedenle en yakın tarihli
        karşılaştırmalar için sonuçları yaklaşık değer olarak
        değerlendirmenizi öneririz.
      </AboutSection>
      <InflationCalculator />
      <Disclaimer />
      <Faq items={INFLATION_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/enflasyon-hesaplama")}
      />
    </>
  );
}
