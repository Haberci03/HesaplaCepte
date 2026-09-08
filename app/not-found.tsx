import type { Metadata } from "next";
import Link from "next/link";
import RelatedContent from "@/app/components/RelatedContent";
import { CALCULATOR_LABEL_BY_HREF, type CalculatorHref } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı.",
};

const POPULAR_HREFS: CalculatorHref[] = [
  "/maas-hesaplama",
  "/kdv-hesaplama",
  "/kidem-tazminati-hesaplama",
  "/kredi-taksit-hesaplama",
];

export default function NotFound() {
  const popularItems = POPULAR_HREFS.map((href) => ({
    href,
    title: CALCULATOR_LABEL_BY_HREF[href],
  }));

  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black sm:py-24">
      <Link href="/" className="text-3xl font-bold tracking-tight sm:text-4xl">
        HesaplaCepte
      </Link>

      <div className="mt-10 w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-3 text-sm text-black/60 dark:text-white/60">
          Aradığınız sayfa kaldırılmış, taşınmış ya da hiç var olmamış
          olabilir. Adresi kontrol edin veya aşağıdan devam edin.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
        >
          Ana Sayfaya Dön
        </Link>
      </div>

      <div className="mt-10 w-full max-w-2xl">
        <RelatedContent title="Popüler Hesaplayıcılar" items={popularItems} />
      </div>
    </div>
  );
}
