import type { Metadata } from "next";
import Link from "next/link";
import AnnualLeavePayCalculator from "@/app/components/AnnualLeavePayCalculator";
import AboutSection from "@/app/components/AboutSection";
import Faq from "@/app/components/Faq";
import Disclaimer from "@/app/components/Disclaimer";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";
import { buildCalculatorPageSchemas } from "@/lib/jsonLd";
import { getRelatedCalculatorItems } from "@/lib/relatedContent";
import { ANNUAL_LEAVE_PAY_FAQ_ITEMS } from "@/app/data/faq";

export const metadata: Metadata = {
  title: "Yıllık İzin Ücreti Hesaplama - Kullanılmayan İzin Ücreti",
  description:
    "Aylık brüt ücretiniz ve kullanılmamış izin günü sayınıza göre günlük brüt ücretinizi ve brüt yıllık izin ücretinizi ücretsiz hesaplayın.",
  alternates: { canonical: "/yillik-izin-ucreti-hesaplama" },
};

const linkClassName = "underline hover:text-black dark:hover:text-white";

export default function YillikIzinUcretiHesaplamaPage() {
  return (
    <>
      <JsonLd
        data={buildCalculatorPageSchemas(
          "/yillik-izin-ucreti-hesaplama",
          ANNUAL_LEAVE_PAY_FAQ_ITEMS
        )}
      />
      <AboutSection
        sources={["4857 sayılı İş Kanunu m.59"]}
      >
        İş sözleşmesi sona erdiğinde, hak kazanılmış ama kullanılmamış
        yıllık izin günlerinin ücreti, sözleşme hangi nedenle sona ererse
        ersin çalışana ödenir. Bu hesaplayıcı, sözleşmenin sona erdiği
        tarihteki aylık çıplak brüt ücretinizi (yemek, yol, prim gibi ek
        ödemeler hariç temel ücret) ve kullanılmamış izin günü sayınızı
        girerek bu alacağın brüt tutarını bulmanızı sağlar. Hesaplamada genel
        yöntem uygulanır: aylık çıplak brüt ücret 30&apos;a bölünerek günlük
        brüt ücret bulunur, bu tutar da kullanılmamış izin günü sayısıyla
        çarpılarak brüt izin ücretine ulaşılır. Yasal kural, izin ücretinin
        sözleşmenin sona erdiği tarihteki çıplak brüt ücret üzerinden
        hesaplanmasıdır; iş sözleşmenizde ek ödemelerin de hesaba dahil
        edileceğine dair özel bir hüküm varsa bordro birimine veya insan
        kaynaklarına danışmalısınız. Sonuç brüt tutardır. Yıllık
        izin ücreti ücret niteliğinde olduğu için normal maaş gibi SGK
        primi, gelir vergisi ve damga vergisi kesintisine tabidir; bu
        kesintiler kişinin kümülatif vergi matrahına ve bordrosuna göre
        değiştiğinden sayfada net tutar gösterilmez. Kesintilerin nasıl
        hesaplandığını görmek için{" "}
        <Link href="/maas-hesaplama" className={linkClassName}>
          maaş hesaplama
        </Link>{" "}
        aracını kullanabilirsiniz. Kaç gün izin hakkınız olduğunu bilmiyorsanız
        önce{" "}
        <Link href="/yillik-izin-hesaplama" className={linkClassName}>
          yıllık izin hesaplayıcımızla
        </Link>{" "}
        hakkınızı öğrenebilir, işten ayrılırken alabileceğiniz diğer alacak
        için{" "}
        <Link href="/kidem-tazminati-hesaplama" className={linkClassName}>
          kıdem tazminatı hesaplayıcımızı
        </Link>{" "}
        kullanabilirsiniz. İki kalemin farkını ve birlikte nasıl
        hesaplandığını{" "}
        <Link
          href="/blog/kidem-tazminati-ve-yillik-izin-ucreti-hesaplama"
          className={linkClassName}
        >
          Kıdem Tazminatı ve Yıllık İzin Ücreti Birlikte Nasıl Hesaplanır?
        </Link>{" "}
        yazımızda ayrıntılı olarak anlattık.
      </AboutSection>
      <AnnualLeavePayCalculator />
      <Disclaimer text="Bu hesaplayıcı yalnızca bilgilendirme amaçlıdır, resmi veya hukuki tavsiye niteliği taşımaz. Gösterilen tutar brüttür; SGK primi, gelir vergisi ve damga vergisi kesintileri bordronuza göre değiştiği için elinize geçecek net tutar farklı olacaktır. Kesin sonuçlar için iş yerinizin insan kaynakları birimine, bir mali müşavire veya muhasebeciye danışmanızı öneririz." />
      <Faq items={ANNUAL_LEAVE_PAY_FAQ_ITEMS} />
      <RelatedContent
        title="İlgili Hesaplayıcılar"
        items={getRelatedCalculatorItems("/yillik-izin-ucreti-hesaplama")}
      />
    </>
  );
}
