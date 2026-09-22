import type { Metadata } from "next";
import SalaryCalculator from "@/app/components/SalaryCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { SALARY_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "2026 Maaş Hesaplama - Net Brüt Maaş Hesaplayıcı",
  description:
    "2026 gelir vergisi dilimleri, SGK, işsizlik sigortası, damga vergisi ve asgari ücret istisnasına göre net-brüt maaş hesaplayın. 12 aylık kümülatif vergi tablosuyla ücretsiz maaş hesaplama.",
  alternates: { canonical: "/maas-hesaplama" },
};

export default function MaasHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas("/maas-hesaplama", SALARY_FAQ_ITEMS)}
      />
      <AboutSection>
        Net maaşınızın brüt maaşınızdan ne kadar farklı olduğunu merak
        ediyorsanız, bu hesaplayıcı size 2026 yılı gelir vergisi dilimleri ve
        SGK kesintileriyle tam bir döküm sunar. Hesaplama; %14 SGK işçi
        primi, %1 işsizlik sigortası primi, binde 7,59 damga vergisi ve
        kümülatif matrah esasına göre işleyen gelir vergisi dilimlerini bir
        arada uygular. Türkiye&apos;de gelir vergisi kümülatif matrah
        esasına göre hesaplandığı için, aynı brüt maaşla çalışan biri yılın
        farklı aylarında farklı net maaş alabilir; matrahınız bir üst
        dilime geçtiğinde net maaşınız da küçük bir miktar düşer. Bu
        hesaplayıcı, yıl boyunca 12 ayın tamamını tek seferde göstererek
        hangi ayda vergi diliminizin değişeceğini önceden görmenizi sağlar,
        böylece yıllık bütçenizi daha isabetli planlayabilirsiniz. Ayrıca
        asgari ücret düzeyindeki maaşlar için gelir vergisi istisnasını da
        hesaba katar. İster işe yeni başlıyor, ister zam sonrası net
        maaşınızı kontrol etmek, ister mevcut ve teklif edilen bir maaşı
        karşılaştırmak istiyor olun, güncel oranlarla doğru bir tahmin elde
        edersiniz. Sonuçlar yalnızca standart, prim gün sayısı eksiksiz bir
        çalışan için geçerlidir; icra kesintisi, BES gibi özel kesintiler
        hesaba dahil değildir.
      </AboutSection>
      <SalaryCalculator />
      <Disclaimer />
      <Faq items={SALARY_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/maas-hesaplama")}
      />
    </>
  );
}
