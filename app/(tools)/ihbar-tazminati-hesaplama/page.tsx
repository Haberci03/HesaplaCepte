import type { Metadata } from "next";
import NoticePayCalculator from "@/app/components/NoticePayCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { NOTICE_PAY_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "İhbar Tazminatı Hesaplama - 2026 Güncel Hesaplayıcı",
  description:
    "Brüt maaşınız ve çalışma sürenize göre İş Kanunu Madde 17'ye göre ihbar süresi ve ihbar tazminatı tutarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/ihbar-tazminati-hesaplama" },
};

export default function IhbarTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/ihbar-tazminati-hesaplama",
          NOTICE_PAY_FAQ_ITEMS
        )}
      />
      <AboutSection>
        İşveren veya işçi tarafından iş sözleşmesi feshedilirken, 4857
        sayılı İş Kanunu&apos;nun 17. maddesinde belirtilen ihbar sürelerine
        uyulmadan yapılan fesihlerde karşı tarafa ihbar tazminatı ödenmesi
        gerekir. Bu hesaplayıcı, çalışma sürenize göre kanunda öngörülen
        kademeli ihbar sürelerini (6 aya kadar 2 hafta, 6 ay-1,5 yıl arası
        4 hafta, 1,5-3 yıl arası 6 hafta, 3 yıldan fazla 8 hafta) otomatik
        olarak belirler ve brüt maaşınıza göre ödenmesi gereken ihbar
        tazminatı tutarını hesaplar. İşten çıkarılan veya işten ayrılmayı
        düşünen bir çalışan, kendisine ne kadar ihbar tazminatı ödenmesi
        gerektiğini önceden öğrenmek için; bir işveren ise fesih öncesi
        maliyet planlaması yapmak için bu aracı kullanabilir. Hesaplama,
        günlük ücretin brüt maaşın otuzda biri olduğu varsayımına dayanır
        ve bulunan günlük ücret, ilgili hafta sayısının yedi katıyla
        çarpılarak toplam tutara ulaşılır. Sonuç brüt tutardır; gelir
        vergisi ve damga vergisi kesintisi olmadan işçiye ödenmesi gereken
        kısmı gösterir. İhbar öneli içinde çalışılmadan yapılan fesihlerde
        bu tutarın ödenmesi zorunludur; önel süresi kadar çalışılarak
        fesih yapılması durumunda ise ihbar tazminatı doğmaz. Kıdem
        tazminatı ile karıştırılmamalıdır, bu iki hak birbirinden bağımsız
        ve farklı kurallara tabidir.
      </AboutSection>
      <NoticePayCalculator />
      <Disclaimer />
      <Faq items={NOTICE_PAY_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/ihbar-tazminati-hesaplama")}
      />
    </>
  );
}
