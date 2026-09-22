import type { Metadata } from "next";
import CurrencyConverterCalculator from "@/app/components/CurrencyConverterCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { CURRENCY_CONVERTER_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Gram Altın / Döviz Çevirici - TL Karşılığı Hesaplayıcı",
  description:
    "Girdiğiniz güncel kur veya gram altın fiyatına göre döviz/altın tutarınızın TL karşılığını, ya da TL'den miktara çevirimini ücretsiz hesaplayın.",
  alternates: { canonical: "/altin-doviz-cevirici" },
};

export default function AltinDovizCeviriciPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/altin-doviz-cevirici",
          CURRENCY_CONVERTER_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Elinizdeki dövizin veya gram altının bugünkü TL karşılığını, ya
        da elinizdeki bir TL tutarıyla kaç birim döviz veya altın
        alabileceğinizi hızlıca öğrenmek istediğinizde bu araç işinize
        yarar. Hesaplayıcı, sizin girdiğiniz güncel kur veya gram altın
        fiyatına göre iki yönlü çevirim yapar: döviz/altın miktarından
        TL karşılığına, ya da TL tutarından döviz/altın miktarına.
        Döviz bozdurmayı veya altın alıp satmayı planlayan, birikimini
        farklı para birimleri arasında karşılaştırmak isteyen, ya da
        yurt dışı harcaması için bütçe hesaplayan herkes bu aracı
        kullanabilir. Aracın en önemli özelliği, kuru veya gram altın
        fiyatını otomatik olarak çekmemesi, tamamen sizin girdiğiniz
        değere göre çalışmasıdır; bu sayede bankanızın, kuyumcunuzun
        veya işlem yapacağınız platformun size sunduğu gerçek
        alım-satım fiyatını kullanarak en isabetli sonucu elde
        edersiniz. Döviz kurları ve altın fiyatları gün içinde, hatta
        dakikalar içinde değişebildiğinden, hesaplayıcı herhangi bir
        sabit veya geçmişe dönük kur verisi tutmaz; her hesaplama, o
        an girdiğiniz fiyata göre anlık olarak yapılır. Alım satım
        kararınızı vermeden önce, işlem yapacağınız kurum veya
        platformun güncel alış-satış fiyatını teyit etmenizi öneririz.
      </AboutSection>
      <CurrencyConverterCalculator />
      <Disclaimer />
      <Faq items={CURRENCY_CONVERTER_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/altin-doviz-cevirici")}
      />
    </>
  );
}
