import type { Metadata } from "next";
import AnnualLeaveCalculator from "@/app/components/AnnualLeaveCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { ANNUAL_LEAVE_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yıllık İzin Hesaplama - Kaç Gün İzin Hakkınız Var?",
  description:
    "İş Kanunu Madde 53'e göre çalışma sürenize göre yıllık ücretli izin hakkınızı (14, 20 veya 26 gün) ücretsiz hesaplayın.",
  alternates: { canonical: "/yillik-izin-hesaplama" },
};

export default function YillikIzinHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yillik-izin-hesaplama",
          ANNUAL_LEAVE_FAQ_ITEMS
        )}
      />
      <AboutSection>
        4857 sayılı İş Kanunu&apos;nun 53. maddesine göre, aynı işverene
        bağlı olarak en az bir yıl çalışmış her işçiye, kıdemine göre
        değişen sürelerde yıllık ücretli izin hakkı tanınır. Bu
        hesaplayıcı, çalışma sürenizi (yıl) girerek yasada belirtilen
        üç kademeden hangisine girdiğinizi belirler: 1-5 yıl arası (5
        dahil) çalışanlara 14 gün, 5 yıldan fazla 15 yıldan az
        çalışanlara 20 gün, 15 yıl ve üzeri çalışanlara ise 26 gün
        yıllık izin hakkı tanınır. Ayrıca, 18 yaşından küçük veya 50
        yaşından büyük işçiler için kanun, kıdemleri ne olursa olsun
        en az 20 gün izin verilmesini şart koşar; hesaplayıcı bu özel
        yaş grubunu işaretlediğinizde hakkınızı buna göre günceller.
        Yeni bir işe başlayan, kıdemi artan veya izin hakkını
        işvereniyle netleştirmek isteyen çalışanlar, izin planlaması
        yapan insan kaynakları uzmanları bu aracı kullanabilir. Bir
        yıldan az çalışanların yıllık ücretli izin hakkı henüz
        doğmadığından hesaplayıcı bu durumu da ayrıca belirtir.
        Sonuçlar, işyerinde toplu iş sözleşmesi veya bireysel
        sözleşmeyle kanuni asgari sürenin üzerinde bir izin hakkı
        tanınmış olma ihtimalini kapsamaz; bu gibi durumlarda sözleşme
        hükümleri esas alınmalıdır.
      </AboutSection>
      <AnnualLeaveCalculator />
      <Disclaimer />
      <Faq items={ANNUAL_LEAVE_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/yillik-izin-hesaplama")}
      />
    </>
  );
}
