import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} - Ücretsiz Maaş, Vergi, Sağlık ve Finans Hesaplama Araçları`,
  },
  description:
    "Maaş net-brüt, KDV, kıdem tazminatı, kredi taksiti, yıllık izin, ihbar tazminatı, yüzde, enflasyon, yakıt masrafı, VKİ, bileşik faiz, kira artışı ve kredi kartı asgari ödeme hesaplama araçları. Güncel oranlarla ücretsiz ve hızlı hesaplama.",
  verification: {
    google: "4AdzpLnYBCczTzFa8yazrWncjuwz--eFSrYvoH2XPtM",
  },
  other: {
    "google-adsense-account": "ca-pub-2480279740153872",
  },
  // title/description kasıtlı olarak boş bırakıldı: Next.js, her sayfanın
  // kendi title/description'ı varsa bunu otomatik olarak openGraph ve
  // twitter alanlarına da miras bırakır. Görsel, app/opengraph-image.tsx
  // üzerinden otomatik olarak her sayfaya eklenir.
  // url kasıtlı olarak ayarlanmadı: mutlak bir değer atanırsa tüm sayfalar
  // için sabitlenir. Sayfaların kendi doğru URL'si zaten alternates.canonical
  // ile ayarlanıyor.
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2480279740153872"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SP56LJR2F2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SP56LJR2F2');
          `}
        </Script>
      </body>
    </html>
  );
}
