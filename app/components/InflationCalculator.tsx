"use client";

import { useMemo, useState } from "react";
import { calculateInflation, TUFE_YEARS } from "@/lib/inflation";
import { formatTL, parseAmount } from "@/lib/format";

const percentFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
});

export default function InflationCalculator() {
  const [amount, setAmount] = useState("1.000");
  const [startYear, setStartYear] = useState(TUFE_YEARS[0]);
  const [endYear, setEndYear] = useState(TUFE_YEARS[TUFE_YEARS.length - 1]);

  const result = useMemo(() => {
    const tutar = parseAmount(amount);
    if (!tutar || tutar <= 0) return null;
    return calculateInflation(tutar, startYear, endYear);
  }, [amount, startYear, endYear]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Tutar
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            Başlangıç Yılı
          </span>
          <select
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          >
            {TUFE_YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Bitiş Yılı
          </span>
          <select
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          >
            {TUFE_YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              {result.bitisYili} Yılı Sonu Güncel Karşılığı
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.bitisTutari)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row
              label={`${result.baslangicYili} Tutarı`}
              value={formatTL(result.tutar)}
            />
            <Row
              label={`${result.bitisYili} Karşılığı`}
              value={formatTL(result.bitisTutari)}
            />
            <Row
              label="Toplam Artış"
              value={`%${percentFormatter.format(result.toplamArtisYuzdesi)}`}
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, {result.baslangicYili} ve {result.bitisYili} yıl sonu
            (Aralık ayı) TÜFE endeksleri oranlanarak yapılan yaklaşık bir
            hesaplamadır. Yıl içindeki (ay bazlı) hassas hesaplama için
            TÜİK&apos;in güncel enflasyon verilerine bakmanız önerilir.
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
