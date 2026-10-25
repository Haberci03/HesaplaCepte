import type { Metadata } from "next";
import Link from "next/link";
import StaticPage from "@/app/components/StaticPage";

export const metadata: Metadata = {
  title: "Güncelleme Günlüğü",
  description:
    "HesaplaCepte hesaplayıcılarında kullanılan oran ve tutarlarda yapılan değişikliklerin tarihli listesi.",
  alternates: { canonical: "/guncelleme-gunlugu" },
};

// En yeni kayıt en üstte olacak şekilde ekleyin.
const CHANGELOG: { date: string; items: string[] }[] = [
  {
    date: "21 Ekim 2026",
    items: [
      "Kredi kartı asgari ödeme: limit eşiği 50.000 TL'den 100.000 TL'ye çıkarıldı (BDDK, 1 Ekim 2026), oranlar %20 ve %40 aynı.",
      "Gelir vergisi ücret tarifesinde 3. ve 4. dilim sınırları Tebliğ'e göre düzeltildi (1.500.000 ve 5.300.000 TL).",
      "Kira artış varsayılan oranı Ekim 2026 için %31,49 olarak güncellendi.",
      "Tapu döner sermaye bedeli tek rakam yerine aralık olarak gösterilmeye başlandı.",
    ],
  },
];

export default function GuncellemeGunluguPage() {
  return (
    <StaticPage title="Güncelleme Günlüğü">
      <p>
        Sitedeki hesaplayıcılarda kullanılan oran ve tutarlar bu günlükle
        takip edilir; bir değer değiştiğinde değişikliği ve tarihini burada
        bulabilirsiniz. Bir hata fark ederseniz{" "}
        <Link href="/iletisim">İletişim</Link> sayfamızdan bize
        yazabilirsiniz.
      </p>

      {CHANGELOG.map((entry) => (
        <section key={entry.date}>
          <h2>{entry.date}</h2>
          <ul>
            {entry.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </StaticPage>
  );
}
