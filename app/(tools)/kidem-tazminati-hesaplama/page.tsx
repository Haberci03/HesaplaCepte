import type { Metadata } from "next";
import SeveranceCalculator from "@/app/components/SeveranceCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { SEVERANCE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kıdem Tazminatı Hesaplama - 2026 Güncel Tavan ile Hesaplayıcı",
  description:
    "Brüt maaşınız ve çalışma sürenize göre 2026 kıdem tazminatı tavanı ve damga vergisi dahil net kıdem tazminatınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kidem-tazminati-hesaplama" },
};

export default function KidemTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kidem-tazminati-hesaplama",
          SEVERANCE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Kıdem tazminatı, en az bir yıl çalışmış ve iş sözleşmesi kanunda
        sayılan haklı nedenlerle sona ermiş bir çalışana, her tam yıl için
        işvereni tarafından ödenmesi gereken bir tazminattır. Bu
        hesaplayıcı, brüt maaşınız ve çalışma sürenize (yıl ve ay) göre
        kıdem tazminatı tutarınızı hesaplar. Hesaplamada, 2026
        yılının ikinci döneminde (01.07.2026-31.12.2026) geçerli olan
        73.729,87 TL&apos;lik kıdem tazminatı tavanı dikkate alınır; brüt
        maaşınız bu tavanı aşıyorsa hesaplama tavan tutar üzerinden
        yapılır, aşmıyorsa doğrudan brüt maaşınız esas alınır. Bulunan
        brüt kıdem tazminatı tutarından yalnızca binde 7,59 oranındaki
        damga vergisi kesilir; gelir vergisi kesintisi uygulanmaz, bu da
        kıdem tazminatını net maaş hesaplamasından ayıran önemli bir
        noktadır. İşten çıkarılan veya emeklilik, askerlik, evlilik gibi
        kanunda sayılan nedenlerle işten ayrılan çalışanlar, alacakları
        tutarı önceden tahmin etmek için; işverenler ise fesih maliyetini
        planlamak için bu aracı kullanabilir. Kıdem tazminatı tavanı
        yılda iki kez (Ocak ve Temmuz aylarında) memur maaş
        katsayısındaki artışa paralel olarak güncellenir, bu nedenle
        hesaplayıcıdaki tavan tutarının döneme uygun olduğunu sayfa
        altındaki güncelleme tarihinden kontrol etmenizi öneririz.
      </AboutSection>
      <SeveranceCalculator />
      <Disclaimer />
      <Faq items={SEVERANCE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/kidem-tazminati-hesaplama")}
      />
    </>
  );
}
