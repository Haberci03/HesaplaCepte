import type { Metadata } from "next";
import LoanCalculator from "@/app/components/LoanCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { LOAN_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Kredi Taksit Hesaplama - Aylık Taksit ve Faiz Hesaplayıcı",
  description:
    "Anapara, yıllık faiz oranı ve vadeye göre aylık kredi taksitinizi, toplam ödeme ve toplam faiz tutarınızı ücretsiz hesaplayın.",
  alternates: { canonical: "/kredi-taksit-hesaplama" },
};

export default function KrediTaksitHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/kredi-taksit-hesaplama",
          LOAN_FAQ_ITEMS
        )}
      />
      <AboutSection>
        Bir kredi çekmeyi planlarken aylık ne kadar taksit ödeyeceğinizi
        ve toplamda ne kadar faiz maliyetine katlanacağınızı önceden
        bilmek, bütçenizi doğru planlamanız için kritik önem taşır. Bu
        hesaplayıcı, anapara tutarınız, bankanın size sunduğu yıllık
        faiz oranı ve vade süresine (ay sayısı) göre standart eşit
        taksitli (anüite) kredi ödeme formülünü kullanarak aylık taksit
        tutarınızı, kredi süresi boyunca ödeyeceğiniz toplam tutarı ve
        bunun içindeki toplam faiz payını hesaplar. İhtiyaç kredisi,
        taşıt kredisi veya konut kredisi başvurusu öncesinde farklı
        bankaların tekliflerini karşılaştırmak isteyen, ya da mevcut
        kredisinin erken kapatılması durumunda ne kadar tasarruf
        edeceğini merak eden herkes bu aracı kullanabilir. Hesaplama,
        bankaların ilan ettiği faiz oranı üzerine ayrıca eklenebilecek
        BSMV (banka ve sigorta muameleleri vergisi), dosya masrafı,
        hayat sigortası gibi ek maliyetleri içermez; bu nedenle gerçek
        aylık taksit tutarınız bankanın sunduğu resmi ödeme planında
        hesaplayıcıdakinden biraz daha yüksek çıkabilir. Sonuçları,
        farklı kredi tekliflerini birbiriyle kıyaslamak veya bir
        krediye başvurmadan önce yaklaşık bir bütçe fikri edinmek için
        bir ön değerlendirme aracı olarak kullanmanızı, kesin rakamlar
        için bankanızın resmi teklifini esas almanızı öneririz.
      </AboutSection>
      <LoanCalculator />
      <Disclaimer />
      <Faq items={LOAN_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/kredi-taksit-hesaplama")}
      />
    </>
  );
}
