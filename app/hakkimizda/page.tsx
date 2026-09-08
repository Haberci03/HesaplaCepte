import type { Metadata } from "next";
import StaticPage from "@/app/components/StaticPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "HesaplaCepte, güncel oranlarla ücretsiz Türkçe maaş, vergi, sağlık ve finans hesaplama araçları sunan bağımsız bir projedir.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <StaticPage title="Hakkımızda">
      <p>
        HesaplaCepte, Türkiye&apos;deki güncel oranlar ve mevzuata göre maaş,
        vergi, kredi, sağlık ve günlük hayatla ilgili hesaplamaları kolay ve
        hızlı bir şekilde yapabilmeniz için hazırlanmış ücretsiz bir
        hesaplama araçları koleksiyonudur.
      </p>

      <p>
        Amacımız; maaş net-brüt hesaplama, KDV hesaplama, kıdem ve ihbar
        tazminatı, kredi taksiti, enflasyon ve benzeri konularda dağınık
        şekilde bulunan bilgileri tek bir yerde, sade ve anlaşılır bir
        arayüzle bir araya getirmektir. Her hesaplayıcı, ilgili güncel oran
        ve mevzuata göre düzenli olarak gözden geçirilir.
      </p>

      <p>
        HesaplaCepte, herhangi bir banka, kamu kurumu veya mali müşavirlik
        şirketiyle bağlantılı olmayan, bireysel bir proje olarak
        işletilmektedir. Sitedeki tüm hesaplayıcılar yalnızca bilgilendirme
        amaçlıdır ve resmi ya da hukuki tavsiye niteliği taşımaz; kesin ve
        bağlayıcı sonuçlar için ilgili resmi kurumlara veya bir uzmana
        danışmanızı öneririz.
      </p>

      <p>
        Görüş, öneri veya bulduğunuz bir hata varsa{" "}
        <a href="/iletisim">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
      </p>
    </StaticPage>
  );
}
