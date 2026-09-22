import type { Metadata } from "next";
import PercentageCalculator from "@/app/components/PercentageCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
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
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yuzde-hesaplama",
          PERCENTAGE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Yüzde hesaplama, günlük hayatın en sık karşılaşılan matematik
        işlemlerinden biridir: bir indirim tutarını bulmak, zam sonrası yeni
        fiyatı hesaplamak, iki sayı arasındaki oransal farkı görmek ya da bir
        bütünün belirli bir yüzdesinin kaç olduğunu bulmak gibi. Bu
        hesaplayıcı, üç farklı yüzde işlemini tek bir arayüzde toplar: bir
        sayının belirtilen yüzdesini bulma, bir sayının başka bir sayıya göre
        yüzde kaçına denk geldiğini hesaplama ve bir değerden diğerine
        geçişteki artış veya azalış yüzdesini bulma. Örneğin bir ürünün %20
        indirimli fiyatını öğrenmek isteyen bir tüketici, eski ve yeni maaşı
        arasındaki zam oranını merak eden bir çalışan ya da bir bütçe
        kaleminin toplam harcama içindeki payını hesaplamak isteyen biri bu
        araçtan doğrudan faydalanabilir. Hesaplama tamamen standart aritmetik
        kurallara dayanır ve herhangi bir yasal veya finansal düzenlemeye
        bağlı değildir; bu nedenle sonuçlar her zaman ve her bağlamda
        geçerlidir. Öğrenciler ödev ve sınav hazırlığında, esnaf ve satıcılar
        fiyatlandırma yaparken, herkes ise günlük hesaplarında hızlı ve
        hatasız sonuç almak için bu hesaplayıcıyı kullanabilir. Sayıları elle
        çarpıp bölme zahmetine girmeden, girdiğiniz değerlere göre anında ve
        doğru sonuca ulaşırsınız.
      </AboutSection>
      <PercentageCalculator />
      <Disclaimer />
      <Faq items={PERCENTAGE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/yuzde-hesaplama")}
      />
    </>
  );
}
