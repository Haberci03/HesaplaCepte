import type { Metadata } from "next";
import FuelCostCalculator from "@/app/components/FuelCostCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { FUEL_COST_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yakıt Masrafı Hesaplama - Yol Masrafı Hesaplayıcı",
  description:
    "Mesafe, aracınızın 100 km'de tükettiği yakıt ve yakıt fiyatına göre toplam yol masrafınızı ve km başına maliyetinizi ücretsiz hesaplayın.",
  alternates: { canonical: "/yakit-masrafi-hesaplama" },
};

export default function YakitMasrafiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yakit-masrafi-hesaplama",
          FUEL_COST_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Bir yolculuğun size araç yakıtı olarak ne kadara mal olacağını
        önceden bilmek, özellikle uzun yol öncesi bütçe planlaması
        yapmak isteyenler için pratik bir ihtiyaçtır. Bu hesaplayıcı,
        gideceğiniz mesafe (km), aracınızın 100 km&apos;de tükettiği
        ortalama yakıt miktarı (litre) ve güncel yakıt fiyatına göre
        toplam yol masrafınızı ve kilometre başına düşen maliyeti
        hesaplar. Uzun bir yolculuğa çıkmadan önce yakıt bütçesi
        ayırmak isteyen sürücüler, farklı araçların yakıt tüketimini
        kıyaslayarak hangisinin daha ekonomik olduğuna karar vermek
        isteyen araç alıcıları, ya da işle ilgili kilometre
        masraflarını raporlamak isteyen kurye ve saha çalışanları bu
        aracı kullanabilir. Hesaplama, aracınızın teknik verilerinde
        veya güncel kullanımınızda gözlemlediğiniz ortalama yakıt
        tüketim değerine dayanır; bu değer şehir içi ve şehir dışı
        sürüşe, trafik yoğunluğuna, klima kullanımına ve sürüş
        tarzına göre değişebileceğinden, gerçek masrafınız hesaplanan
        tutardan farklı çıkabilir. Yakıt fiyatı da il ve dağıtıcı
        firmaya göre değişkenlik gösterdiğinden, en güncel ve size en
        yakın istasyonun fiyatını girmeniz daha isabetli bir sonuç
        verir. Sonuç, yaklaşık bir bütçe planlaması aracı olarak
        değerlendirilmelidir.
      </AboutSection>
      <FuelCostCalculator />
      <Disclaimer />
      <Faq items={FUEL_COST_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/yakit-masrafi-hesaplama")}
      />
    </>
  );
}
