import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "HesaplaCepte - Maaş, KDV ve Kıdem Tazminatı Hesaplama",
  description:
    "2026 gelir vergisi dilimlerine göre maaş net-brüt hesaplayıcı, %1/%10/%20 oranlarıyla KDV dahil-hariç hesaplayıcı ve kıdem tazminatı hesaplayıcı.",
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
