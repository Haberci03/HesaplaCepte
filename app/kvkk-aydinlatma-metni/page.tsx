import type { Metadata } from "next";
import StaticPage from "@/app/components/StaticPage";
import { LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında HesaplaCepte tarafından kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
};

export default function KvkkAydinlatmaMetniPage() {
  return (
    <StaticPage title="KVKK Aydınlatma Metni">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        uyarınca, veri sorumlusu sıfatıyla HesaplaCepte (hesaplacepte.com)
        tarafından işlenen kişisel verilerinize ilişkin olarak sizi
        bilgilendirmek isteriz.
      </p>

      <h2>Veri Sorumlusu</h2>
      <p>
        Bu site, bireysel bir proje olarak işletilmektedir. İletişim
        bilgileri için <a href="/iletisim">İletişim</a> sayfamızı ziyaret
        edebilirsiniz.
      </p>

      <h2>İşlenen Kişisel Veri Kategorileri</h2>
      <p>
        HesaplaCepte, hesaplayıcılara girdiğiniz verileri (maaş tutarı,
        tarihler vb.) sunucularımıza göndermez veya saklamaz — bu veriler
        yalnızca tarayıcınızda, cihazınızda işlenir.
      </p>
      <p>
        Sitemizi ziyaret ettiğinizde, kullandığımız üçüncü taraf hizmetler
        (Google Analytics, Google AdSense) aracılığıyla şu türde veriler
        dolaylı olarak işlenebilir:
      </p>
      <ul>
        <li>IP adresi</li>
        <li>Cihaz ve tarayıcı bilgileri</li>
        <li>Ziyaret edilen sayfalar ve gezinme davranışı</li>
        <li>Çerezler aracılığıyla toplanan kullanım verileri</li>
      </ul>

      <h2>Kişisel Verilerin İşlenme Amacı</h2>
      <p>
        Toplanan veriler; site trafiğinin analiz edilmesi, kullanıcı
        deneyiminin iyileştirilmesi ve reklam hizmetlerinin sunulması
        amacıyla işlenmektedir.
      </p>

      <h2>Kişisel Verilerin Aktarımı</h2>
      <p>
        Google Analytics ve Google AdSense hizmetleri kapsamında veriler,
        Google LLC ile paylaşılmaktadır. Bu hizmetlerin kendi gizlilik
        politikaları ve veri işleme esasları geçerlidir.
      </p>

      <h2>Hukuki Sebep</h2>
      <p>
        Kişisel verileriniz, KVKK&apos;nın 5. maddesinde belirtilen
        &quot;ilgili kişinin temel hak ve özgürlüklerine zarar vermemek
        kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin
        zorunlu olması&quot; hukuki sebebine dayanılarak işlenmektedir.
      </p>

      <h2>KVKK Kapsamındaki Haklarınız</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca şu haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>
          İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını
          öğrenme
        </li>
        <li>Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>
          İşlemenin kanuna aykırı olması durumunda zararın giderilmesini
          talep etme
        </li>
      </ul>
      <p>
        Bu haklarınızı kullanmak için <a href="/iletisim">İletişim</a>{" "}
        sayfamızdan bize ulaşabilirsiniz.
      </p>

      <h2>Çerezler Hakkında</h2>
      <p>
        Çerez kullanımı hakkında detaylı bilgi için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a> sayfamızı
        inceleyebilirsiniz.
      </p>

      <p className="pt-4 text-xs text-black/40 dark:text-white/40">
        Son güncelleme: {LAST_UPDATED}
      </p>
    </StaticPage>
  );
}
