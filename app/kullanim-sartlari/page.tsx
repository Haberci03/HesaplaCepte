import type { Metadata } from "next";
import StaticPage from "@/app/components/StaticPage";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "HesaplaCepte kullanım şartları: hesaplayıcıların bilgilendirme amaçlı olduğu, sorumluluk sınırlaması ve telif hakları hakkında bilgi.",
  alternates: { canonical: "/kullanim-sartlari" },
};

export default function KullanimSartlariPage() {
  return (
    <StaticPage title="Kullanım Şartları">
      <p>
        HesaplaCepte&apos;yi (&quot;Site&quot;) kullanarak aşağıdaki şartları
        kabul etmiş olursunuz. Lütfen siteyi kullanmadan önce bu şartları
        dikkatlice okuyun.
      </p>

      <h2>Hizmetin Niteliği</h2>
      <p>
        Sitedeki tüm hesaplayıcılar (maaş, vergi, kredi, sağlık, tarih ve
        benzeri araçlar) yalnızca bilgilendirme ve genel tahmin amaçlıdır.
        Sunulan sonuçlar resmi, mali, hukuki veya tıbbi tavsiye niteliği
        taşımaz ve herhangi bir resmi kurum, banka, muhasebe/mali müşavirlik
        hizmeti veya sağlık kuruluşunun yerini tutmaz.
      </p>

      <h2>Kullanıcı Sorumluluğu</h2>
      <p>
        Siteyi ve hesaplayıcıları kullanmak tamamen kendi sorumluluğunuzdadır.
        Hesaplama sonuçlarına dayanarak alacağınız mali, hukuki veya kişisel
        kararlardan HesaplaCepte sorumlu tutulamaz. Önemli kararlar öncesinde
        ilgili resmi kurumlara, bir mali müşavire, avukata veya uzmana
        başvurmanız önerilir.
      </p>

      <h2>Sorumluluk Sınırlaması</h2>
      <p>
        Hesaplayıcılarda kullanılan oran, tutar ve mevzuat bilgilerini güncel
        ve doğru tutmaya özen gösteriyoruz; ancak sitenin hiçbir sonucun
        kesin, hatasız veya her koşulda güncel olduğuna dair bir garanti
        vermiyoruz. Mevzuat değişiklikleri, yazılım hataları veya güncelleme
        gecikmeleri nedeniyle sonuçlarda sapmalar olabilir. Site,
        &quot;olduğu gibi&quot; sunulmaktadır ve doğrudan veya dolaylı olarak
        ortaya çıkabilecek herhangi bir zarardan HesaplaCepte sorumlu
        değildir.
      </p>

      <h2>Fikri Mülkiyet ve Telif Hakları</h2>
      <p>
        Sitedeki tasarım, yazılım, metin, görsel ve içerikler (blog yazıları
        dahil) aksi belirtilmedikçe HesaplaCepte&apos;ye aittir ve telif
        hakkı yasalarıyla korunmaktadır. İçeriklerin ticari amaçla
        kopyalanması, çoğaltılması veya dağıtılması ancak önceden yazılı
        izin alınarak yapılabilir.
      </p>

      <h2>Şartlarda Değişiklik</h2>
      <p>
        Bu kullanım şartları zaman zaman güncellenebilir. Güncellemeler bu
        sayfada yayımlandığı anda yürürlüğe girer; siteyi kullanmaya devam
        etmeniz güncel şartları kabul ettiğiniz anlamına gelir.
      </p>

      <h2>İletişim</h2>
      <p>
        Bu şartlarla ilgili sorularınız için{" "}
        <a href="/iletisim">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
      </p>

      <p className="pt-4 text-xs text-black/40 dark:text-white/40">
        Son güncelleme: {LAST_UPDATED}
      </p>
    </StaticPage>
  );
}
