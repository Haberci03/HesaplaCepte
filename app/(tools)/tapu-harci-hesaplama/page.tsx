import type { Metadata } from "next";
import TitleDeedFeeCalculator from "@/app/components/TitleDeedFeeCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { TITLE_DEED_FEE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Tapu Harcı Hesaplama - Alıcı ve Satıcı Harcı Hesaplayıcı",
  description:
    "Satış bedeline göre tapu harcını (alıcı %2, satıcı %2, toplam %4) ve yaklaşık döner sermaye bedelini ücretsiz hesaplayın.",
  alternates: { canonical: "/tapu-harci-hesaplama" },
};

export default function TapuHarciHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/tapu-harci-hesaplama",
          TITLE_DEED_FEE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Bir gayrimenkul alım satımında tapu devri sırasında, 492 sayılı
        Harçlar Kanunu&apos;na bağlı 4 sayılı tarife uyarınca hem
        alıcıdan hem satıcıdan tapu harcı tahsil edilir. Bu hesaplayıcı,
        satış bedelini girerek alıcı payına düşen %2&apos;lik harç,
        satıcı payına düşen %2&apos;lik harç ve bu ikisinin toplamı olan
        %4&apos;lük toplam tapu harcı tutarını hesaplar; uygulamada
        taraflar aksini kararlaştırmadıkça bu oran genellikle eşit
        paylaşılır. Ayrıca tapu işlemleri sırasında ödenmesi gereken ve
        bölgeye göre değişebilen yaklaşık döner sermaye bedelini de
        sonuçlara dahil eder, böylece toplam işlem maliyetine dair daha
        gerçekçi bir fikir edinebilirsiniz. Ev almayı veya satmayı
        planlayan, işlem öncesi bütçesini netleştirmek isteyen alıcı ve
        satıcılar, ya da bir emlak danışmanı adına hızlı bir ön hesap
        yapmak isteyenler bu aracı kullanabilir. Önemli bir nokta: tapu
        harcı, resmi senette beyan edilen ve emlak vergisi değerinden
        düşük olamayacak gerçek satış bedeli üzerinden hesaplanır;
        bedelin düşük gösterilmesi cezai yaptırımlara yol açabilir.
        Döner sermaye bedeli yaklaşık bir tutardır, kesin rakam için
        ilgili Tapu Sicil Müdürlüğü&apos;ne başvurmanızı öneririz.
      </AboutSection>
      <TitleDeedFeeCalculator />
      <Disclaimer />
      <Faq items={TITLE_DEED_FEE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/tapu-harci-hesaplama")}
      />
    </>
  );
}
