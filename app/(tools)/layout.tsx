import Link from "next/link";
import CalculatorNav from "@/app/components/CalculatorNav";
import { LAST_UPDATED } from "@/lib/constants";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black sm:py-24">
      <header className="mb-10 flex flex-col items-center text-center">
        <Link href="/" className="text-3xl font-bold tracking-tight sm:text-4xl">
          HesaplaCepte
        </Link>
        <p className="mt-3 max-w-lg text-balance text-zinc-600 dark:text-zinc-400">
          Güncel oranlarla ücretsiz maaş, vergi, finans ve günlük hesaplama
          araçları
        </p>
      </header>

      <main className="flex w-full flex-col items-center gap-10">
        <CalculatorNav />
        <div className="flex w-full flex-col items-center gap-14">
          {children}
        </div>
      </main>

      <p className="mt-10 text-center text-xs text-black/40 dark:text-white/40">
        Son güncelleme: {LAST_UPDATED}
      </p>
    </div>
  );
}
