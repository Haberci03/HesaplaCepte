"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/maas-hesaplama", label: "Maaş Hesaplama" },
  { href: "/kdv-hesaplama", label: "KDV Hesaplama" },
  { href: "/kidem-tazminati-hesaplama", label: "Kıdem Tazminatı" },
  { href: "/kredi-taksit-hesaplama", label: "Kredi Taksit" },
  { href: "/yillik-izin-hesaplama", label: "Yıllık İzin" },
  { href: "/ihbar-tazminati-hesaplama", label: "İhbar Tazminatı" },
  { href: "/yuzde-hesaplama", label: "Yüzde Hesaplama" },
  { href: "/enflasyon-hesaplama", label: "Enflasyon Hesaplama" },
  { href: "/yakit-masrafi-hesaplama", label: "Yakıt Masrafı" },
  { href: "/vki-hesaplama", label: "VKİ Hesaplama" },
  { href: "/bilesik-faiz-hesaplama", label: "Bileşik Faiz" },
  { href: "/kira-artis-hesaplama", label: "Kira Artışı" },
  { href: "/kredi-karti-asgari-odeme-hesaplama", label: "Asgari Ödeme" },
  { href: "/tapu-harci-hesaplama", label: "Tapu Harcı" },
  { href: "/gecikme-zammi-hesaplama", label: "Gecikme Zammı" },
  { href: "/altin-doviz-cevirici", label: "Altın/Döviz Çevirici" },
  { href: "/tarih-farki-hesaplama", label: "Tarih Farkı" },
] as const;

type Href = (typeof TABS)[number]["href"];

const LABEL_BY_HREF = Object.fromEntries(
  TABS.map((t) => [t.href, t.label])
) as Record<Href, string>;

const CATEGORIES: { title: string; hrefs: Href[] }[] = [
  {
    title: "Vergi & Maaş",
    hrefs: [
      "/maas-hesaplama",
      "/kdv-hesaplama",
      "/kidem-tazminati-hesaplama",
      "/kredi-karti-asgari-odeme-hesaplama",
      "/tapu-harci-hesaplama",
      "/gecikme-zammi-hesaplama",
    ],
  },
  {
    title: "İş Hukuku",
    hrefs: ["/yillik-izin-hesaplama", "/ihbar-tazminati-hesaplama"],
  },
  {
    title: "Kredi & Yatırım",
    hrefs: [
      "/kredi-taksit-hesaplama",
      "/bilesik-faiz-hesaplama",
      "/enflasyon-hesaplama",
      "/kira-artis-hesaplama",
      "/altin-doviz-cevirici",
    ],
  },
  {
    title: "Genel",
    hrefs: [
      "/yuzde-hesaplama",
      "/yakit-masrafi-hesaplama",
      "/vki-hesaplama",
      "/tarih-farki-hesaplama",
    ],
  },
];

export default function CalculatorNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel =
    (pathname && LABEL_BY_HREF[pathname as Href]) || "Hesaplayıcı Seç";

  return (
    <>
      <nav className="hidden flex-wrap justify-center gap-1 rounded-2xl border border-black/10 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5 md:flex">
        {TABS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === t.href
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <div ref={containerRef} className="relative w-full max-w-2xl md:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium backdrop-blur dark:border-white/10 dark:bg-white/5"
        >
          <span>{activeLabel}</span>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 shrink-0 text-black/50 transition-transform dark:text-white/50 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-10 mt-2 max-h-[70vh] w-full overflow-y-auto rounded-xl border border-black/10 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-zinc-900">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="mb-2 last:mb-0">
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
                  {cat.title}
                </p>
                {cat.hrefs.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      pathname === href
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
                    }`}
                  >
                    {LABEL_BY_HREF[href]}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
