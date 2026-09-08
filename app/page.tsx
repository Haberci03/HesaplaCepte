import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/app/components/Disclaimer";

export const metadata: Metadata = {
  title: {
    absolute: "HesaplaCepte - Maaş, KDV ve Kıdem Tazminatı Hesaplama Araçları",
  },
  description:
    "2026 güncel oranlarıyla ücretsiz maaş net-brüt hesaplama, KDV dahil/hariç hesaplama ve kıdem tazminatı hesaplama araçları. Hızlı, kolay ve güvenilir sonuçlar.",
  alternates: { canonical: "/" },
};

const TOOLS = [
  {
    href: "/maas-hesaplama",
    title: "Maaş Hesaplama",
    description:
      "2026 vergi dilimleri, SGK ve asgari ücret istisnasına göre net-brüt maaş hesaplayın.",
  },
  {
    href: "/kdv-hesaplama",
    title: "KDV Hesaplama",
    description:
      "%1, %10 ve %20 oranlarıyla KDV dahil veya hariç tutarı anında hesaplayın.",
  },
  {
    href: "/kidem-tazminati-hesaplama",
    title: "Kıdem Tazminatı Hesaplama",
    description:
      "Brüt maaşınız ve çalışma sürenize göre net kıdem tazminatınızı hesaplayın.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black sm:py-24">
      <header className="mb-10 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          HesaplaCepte
        </h1>
        <p className="mt-3 max-w-md text-balance text-zinc-600 dark:text-zinc-400">
          Güncel oranlarla maaş, KDV ve kıdem tazminatı hesaplayıcı
        </p>
      </header>

      <main className="grid w-full max-w-4xl gap-5 sm:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
          >
            <h2 className="font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-black/80 group-hover:gap-1.5 dark:text-white/80">
              Hesapla <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </main>

      <div className="mt-10 flex w-full justify-center">
        <Disclaimer />
      </div>
    </div>
  );
}
