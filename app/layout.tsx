import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
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
    default: `${SITE_NAME} - Maaş, KDV ve Kıdem Tazminatı Hesaplama`,
  },
  description:
    "2026 gelir vergisi dilimlerine göre maaş net-brüt hesaplayıcı, %1/%10/%20 oranlarıyla KDV dahil-hariç hesaplayıcı ve kıdem tazminatı hesaplayıcı.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
