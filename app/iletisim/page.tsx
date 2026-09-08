import type { Metadata } from "next";
import StaticPage from "@/app/components/StaticPage";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Soru, öneri veya geri bildirimleriniz için HesaplaCepte ile e-posta üzerinden iletişime geçin.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <StaticPage title="İletişim">
      <p>
        Hesaplayıcılarla ilgili bir soru, öneri veya geri bildiriminiz var
        mı? Ya da bir hesaplamada hata mı fark ettiniz? Aşağıdaki e-posta
        adresi üzerinden bize ulaşabilirsiniz, mesajlarınızı en kısa sürede
        yanıtlamaya çalışıyoruz.
      </p>

      <p>
        <a href="mailto:ozcankurt03@gmail.com" className="font-medium">
          ozcankurt03@gmail.com
        </a>
      </p>

      <p>
        Gizliliğinizle ilgili detaylı bilgi için{" "}
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a> sayfamızı
        inceleyebilirsiniz.
      </p>
    </StaticPage>
  );
}
