"use client";

import { useMemo, useState } from "react";
import {
  calculateRentIncrease,
  RENT_INCREASE_TUFE_RATE_DEFAULT,
} from "@/lib/rentIncrease";
import { formatTL, parseAmount } from "@/lib/format";

export default function RentIncreaseCalculator() {
  const [rent, setRent] = useState("15.000");
  const [rate, setRate] = useState(
    RENT_INCREASE_TUFE_RATE_DEFAULT.toString().replace(".", ",")
  );

  const result = useMemo(() => {
    const mevcutKira = parseAmount(rent);
    const oran = parseAmount(rate);
    if (!mevcutKira || mevcutKira <= 0 || oran < 0) return null;
    return calculateRentIncrease(mevcutKira, oran);
  }, [rent, rate]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Mevcut Kira
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-10 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              placeholder="0"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
              ₺
            </span>
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            TÜFE 12 Aylık Ortalama Artış Oranı
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-8 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              placeholder="0"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
              %
            </span>
          </div>
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Yeni Kira
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.yeniKira)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Mevcut Kira" value={formatTL(result.mevcutKira)} />
            <Row label="Artış Oranı" value={`%${result.oran}`} />
            <Row label="Artış Tutarı" value={formatTL(result.artisTutari)} />
            <Row label="Yeni Kira" value={formatTL(result.yeniKira)} />
          </dl>

          <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-400">
            Bu oran, konut kira sözleşmelerinde uygulanabilecek yasal üst
            sınırdır (TÜFE 12 aylık ortalamalara göre değişim oranı). TÜİK bu
            oranı her ay günceller; kira artışı yapacağınız aydaki güncel
            oranı TÜİK&apos;in resmi verilerinden kontrol etmeniz önerilir.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-black/50 dark:text-white/50">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
