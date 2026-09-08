import type { Metadata } from "next";
import StaticPage from "@/app/components/StaticPage";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "HesaplaCepte gizlilik politikası: çerez kullanımı, üçüncü taraf hizmetler, kişiselleştirilmiş reklamcılık ve hesaplayıcı verilerinin işlenmesi hakkında bilgi.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <StaticPage title="Gizlilik Politikası">
      <p>
        HesaplaCepte olarak kullanıcılarımızın gizliliğine önem veriyoruz. Bu
        sayfada, siteyi kullanırken hangi verilerin nasıl işlendiğini
        açıklıyoruz.
      </p>

      <h2>Hesaplayıcı Verileri</h2>
      <p>
        Sitedeki tüm hesaplayıcılar (maaş, KDV, kredi, vb.) tarafınızca
        girilen tutar, tarih ve diğer değerleri yalnızca tarayıcınızda
        (istemci tarafında) işler. Girdiğiniz hiçbir veri sunucularımıza
        gönderilmez, kaydedilmez veya üçüncü kişilerle paylaşılmaz.
      </p>

      <h2>Çerezler</h2>
      <p>
        HesaplaCepte şu anda herhangi bir çerez (cookie) kullanmamaktadır ve
        ziyaretçi takibi yapmamaktadır. İleride site deneyimini geliştirmek
        veya reklam/analiz hizmetleri sunmak amacıyla çerez kullanımı
        eklenebilir; bu durumda bu sayfa güncellenecektir.
      </p>

      <h2>Üçüncü Taraf Hizmetler</h2>
      <p>
        İleride Google AdSense ve Google Analytics gibi üçüncü taraf
        hizmetler siteye eklenebilir. Bu hizmetler, reklamların
        kişiselleştirilmesi, kullanım istatistiklerinin toplanması ve
        sitenin geliştirilmesi amacıyla kendi çerezlerini kullanabilir.
        Google&apos;ın reklam hizmetleriyle ilgili çerez kullanımı hakkında
        detaylı bilgiye{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Reklam İlkeleri
        </a>{" "}
        sayfasından ulaşabilirsiniz.
      </p>

      <h2>Kişiselleştirilmiş Reklamcılık</h2>
      <p>
        Google&apos;ın reklam hizmetlerinin kullanıldığı durumlarda,
        kişiselleştirilmiş reklamları{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Reklam Ayarları
        </a>{" "}
        sayfasından yönetebilir veya kapatabilirsiniz.
      </p>

      <h2>KVKK Kapsamında Bilgilendirme</h2>
      <p>
        HesaplaCepte, hesaplayıcılarını kullanırken sizden herhangi bir kimlik
        bilgisi talep etmez ve girdiğiniz veriler sunucularımızda
        işlenmediği için 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (KVKK) kapsamında bir veri işleme faaliyeti bulunmamaktadır.
        İletişim sayfamız üzerinden bize e-posta gönderdiğinizde, yalnızca
        talebinizi yanıtlamak amacıyla bu iletişim bilgisi işlenir.
      </p>

      <h2>İletişim</h2>
      <p>
        Bu politikayla ilgili sorularınız için{" "}
        <a href="/iletisim">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
      </p>

      <p className="pt-4 text-xs text-black/40 dark:text-white/40">
        Son güncelleme: {LAST_UPDATED}
      </p>
    </StaticPage>
  );
}
