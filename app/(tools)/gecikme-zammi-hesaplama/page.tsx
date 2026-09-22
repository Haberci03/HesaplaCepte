import type { Metadata } from "next";
import LatePaymentSurchargeCalculator from "@/app/components/LatePaymentSurchargeCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { LATE_PAYMENT_SURCHARGE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Gecikme Zammı Hesaplama - Güncel Oranla Hesaplayıcı",
  description:
    "Borç aslı ve gecikme süresine göre 6183 sayılı Kanun'daki güncel aylık %3,7 oranıyla gecikme zammını ve ödenmesi gereken toplam tutarı ücretsiz hesaplayın.",
  alternates: { canonical: "/gecikme-zammi-hesaplama" },
};

export default function GecikmeZammiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/gecikme-zammi-hesaplama",
          LATE_PAYMENT_SURCHARGE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Vadesinde ödenmeyen kamu alacaklarına (vergi, ceza, sigorta primi
        gibi) 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun
        uyarınca gecikme zammı uygulanır. Bu hesaplayıcı, 13.11.2025
        tarihinden itibaren geçerli olan aylık %3,7 gecikme zammı oranını
        kullanarak, borç aslınız ve gecikme süresine (tam ay sayısı ve
        artık gün sayısı) göre ödemeniz gereken toplam gecikme zammını ve
        buna bağlı toplam tutarı hesaplar. Ay kesirleri ve artık günler
        için aylık oranın otuzda biri kadar günlük oran uygulanır; bu,
        kanunun öngördüğü hesaplama yöntemiyle birebir örtüşür. Vergi
        dairesine, SGK&apos;ya veya bir kamu kurumuna gecikmiş bir ödemesi
        bulunan mükellefler, muhasebeciler ve mali müşavirler, ödeyecekleri
        tutarı önceden görmek için bu aracı kullanabilir. Oran, Cumhurbaşkanı
        kararıyla dönem dönem değiştirilebildiğinden, hesaplayıcıdaki oranın
        güncelliğini sayfanın altındaki son güncelleme tarihinden teyit
        etmeniz önemlidir. Hesaplama yalnızca gecikme zammı tutarını
        gösterir; borcun aslına ilişkin herhangi bir vergi cezası, faiz
        veya ayrıca uygulanabilecek diğer yaptırımlar hesaba dahil
        değildir. Kesin ve resmi tutar için ilgili kurumun tebligatını
        veya sistemini esas almanız gerekir.
      </AboutSection>
      <LatePaymentSurchargeCalculator />
      <Disclaimer />
      <Faq items={LATE_PAYMENT_SURCHARGE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/gecikme-zammi-hesaplama")}
      />
    </>
  );
}
