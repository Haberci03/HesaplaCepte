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
      </body>
    </html>
  );
}
