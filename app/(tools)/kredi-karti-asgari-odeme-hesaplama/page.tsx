import type { Metadata } from "next";
import CreditCardMinPaymentCalculator from "@/app/components/CreditCardMinPaymentCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kredi Kartı Asgari Ödeme Hesaplama - Güncel Oranlarla Hesaplayıcı",
  description:
    "Kart limitiniz ve dönem borcunuza göre BDDK'nın güncel kararına göre kredi kartı asgari ödeme tutarınızı ve kalan bakiyenizi ücretsiz hesaplayın.",
  alternates: { canonical: "/kredi-karti-asgari-odeme-hesaplama" },
};

export default function KrediKartiAsgariOdemeHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kredi-karti-asgari-odeme-hesaplama",
          CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Kredi kartı dönem borcunuzun tamamını ödeyemediğinizde, kart
        borcunuzu temerrüde düşürmeden ödeyebileceğiniz en düşük tutar
        asgari ödeme tutarıdır. Bu hesaplayıcı, BDDK&apos;nın 26.09.2024
        tarihli ve 10970 sayılı kararı uyarınca yürürlükte olan güncel
        oranları kullanır: kart limitiniz 50.000 TL ve altındaysa dönem
        borcunuzun %20&apos;si, 50.000 TL&apos;nin üzerindeyse
        %40&apos;ı asgari ödeme tutarı olarak hesaplanır. Kart limitiniz
        ve dönem borcunuzu girerek, ödemeniz gereken asgari tutarı ve bu
        ödeme sonrası kalan bakiyenizi anında görebilirsiniz. Kredi
        kartı borcunu yönetmekte zorlanan, asgari ödeme ile devam
        etmenin ne anlama geldiğini merak eden veya borç kapatma planı
        yapan herkes bu aracı kullanabilir. Önemli bir uyarı: asgari
        ödeme tutarını düzenli olarak ödemek, kalan bakiyeye kredi
        kartı akdi faizi ve gecikme faizinin işlemeye devam etmesini
        engellemez; bu nedenle asgari ödemeyle devam etmek, toplam
        maliyeti önemli ölçüde artırır. Hesaplayıcı yalnızca o dönem
        için ödenmesi gereken asgari tutarı gösterir; sonraki
        dönemlerde faiz işlemiş bakiye üzerinden hesaplanacak yeni
        asgari ödeme tutarını içermez. BDDK oranları zaman zaman
        değişebildiğinden güncelliğini teyit etmenizi öneririz.
      </AboutSection>
      <CreditCardMinPaymentCalculator />
      <Disclaimer />
      <Faq items={CREDIT_CARD_MIN_PAYMENT_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems(
          "/kredi-karti-asgari-odeme-hesaplama"
        )}
      />
    </>
  );
}
