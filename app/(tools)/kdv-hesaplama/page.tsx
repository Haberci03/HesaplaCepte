import type { Metadata } from "next";
import VatCalculator from "@/app/components/VatCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { VAT_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "KDV Hesaplama - KDV Dahil ve Hariç Tutar Hesaplayıcı",
  description:
    "%1, %10 ve %20 KDV oranlarına göre KDV dahil veya KDV hariç tutarı ve KDV miktarını anında hesaplayın. Ücretsiz ve kolay KDV hesaplama aracı.",
  alternates: { canonical: "/kdv-hesaplama" },
};

export default function KdvHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas("/kdv-hesaplama", VAT_FAQ_ITEMS)}
      />
      <AboutSection>
        KDV (Katma Değer Vergisi), Türkiye&apos;de mal ve hizmet
        teslimlerinde uygulanan ve nihai olarak tüketiciye yansıtılan
        dolaylı bir vergidir. Bu hesaplayıcı, yürürlükteki üç temel KDV
        oranını (%1, %10 ve %20) kullanarak iki yönlü hesaplama yapmanızı
        sağlar: KDV hariç bir tutara KDV eklenmiş halini bulmak veya KDV
        dahil bir tutarın içindeki KDV tutarı ile KDV hariç net tutarını
        ayrıştırmak. %1&apos;lik oran temel gıda maddeleri gibi zorunlu
        ihtiyaç kalemlerinde, %10&apos;luk oran bazı gıda ve hizmet
        gruplarında, %20&apos;lik genel oran ise çoğu mal ve hizmette
        uygulanır. Fatura keserken doğru KDV tutarını hesaplamak isteyen
        esnaf ve küçük işletme sahipleri, alışveriş yaparken fiyat
        etiketindeki KDV dahil/hariç farkını merak eden tüketiciler, ya da
        teklif hazırlarken net ve brüt tutarları netleştirmek isteyen
        serbest çalışanlar bu aracı sıkça kullanabilir. Hesaplama basit
        yüzdesel bir işlemdir ve hangi ürün veya hizmetin hangi orana
        tabi olduğuna dair sınıflandırmayı içermez; doğru oranı seçmek
        kullanıcının sorumluluğundadır. KDV oranları zaman zaman
        Cumhurbaşkanı kararlarıyla değiştirilebildiğinden, ticari
        işlemlerinizde resmi mevzuattaki güncel oranı teyit etmeniz
        önerilir.
      </AboutSection>
      <VatCalculator />
      <Disclaimer />
      <Faq items={VAT_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/kdv-hesaplama")}
      />
    </>
  );
}
