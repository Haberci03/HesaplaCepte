import type { Metadata } from "next";
import DateDiffCalculator from "@/app/components/DateDiffCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { DATE_DIFF_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Tarih Farkı Hesaplama - Yaş ve İki Tarih Arası Süre Hesaplayıcı",
  description:
    "İki tarih arasındaki farkı yıl, ay, gün ve toplam gün olarak ücretsiz hesaplayın. Yaş hesaplama için de kullanabilirsiniz.",
  alternates: { canonical: "/tarih-farki-hesaplama" },
};

export default function TarihFarkiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/tarih-farki-hesaplama",
          DATE_DIFF_FAQ_ITEMS
        )}
      />
      <AboutSection>
        İki tarih arasındaki süreyi gün, ay ve yıl olarak doğru şekilde
        hesaplamak, ayların farklı gün sayılarına sahip olması ve artık
        yıllar nedeniyle elle yapıldığında sıkça hataya açık bir
        işlemdir. Bu hesaplayıcı, seçtiğiniz iki tarih arasındaki farkı
        hem yıl-ay-gün kırılımında hem de toplam gün sayısı olarak
        gösterir; böylece kaç gün, kaç hafta veya kaç ay geçtiğini net
        bir şekilde görebilirsiniz. En sık kullanım alanlarından biri
        yaş hesaplamasıdır: doğum tarihinizi bugünün tarihiyle
        karşılaştırarak tam olarak kaç yıl, ay ve gün yaşadığınızı
        öğrenebilirsiniz. Bunun dışında bir projenin başlangıç ve bitiş
        tarihi arasındaki süreyi hesaplamak isteyen bir proje
        yöneticisi, doğum gününe veya önemli bir yıl dönümüne kaç gün
        kaldığını merak eden biri, kira sözleşmesi veya sigorta
        poliçesinin ne kadar süredir yürürlükte olduğunu kontrol etmek
        isteyen biri de bu araçtan faydalanabilir. Hesaplama, standart
        Miladi takvime dayanır ve artık yılları (29 Şubat) otomatik
        olarak dikkate alır. Herhangi bir yasal veya finansal sabite
        bağlı değildir, bu nedenle sonuçlar her zaman geçerlidir ve
        zamanla güncellenmesi gerekmez.
      </AboutSection>
      <DateDiffCalculator />
      <Disclaimer />
      <Faq items={DATE_DIFF_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/tarih-farki-hesaplama")}
      />
    </>
  );
}
