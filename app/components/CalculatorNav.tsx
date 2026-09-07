"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/maas-hesaplama", label: "Maaş Hesaplama" },
  { href: "/kdv-hesaplama", label: "KDV Hesaplama" },
  { href: "/kidem-tazminati-hesaplama", label: "Kıdem Tazminatı" },
] as const;

export default function CalculatorNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 rounded-full border border-black/10 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5">
      {TABS.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            pathname === t.href
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
