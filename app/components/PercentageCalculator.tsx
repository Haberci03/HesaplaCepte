"use client";

import { useMemo, useState } from "react";
import { calculatePercentage, type PercentageMode } from "@/lib/percentage";
import { parseAmount } from "@/lib/format";

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
});

const MODES: { id: PercentageMode; label: string }[] = [
  { id: "of", label: "X'in Y%'si" },
  { id: "isWhatPercent", label: "X, Y'nin Yüzde Kaçı" },
  { id: "change", label: "Değişim Yüzdesi" },
];

const FIELD_LABELS: Record<PercentageMode, { x: string; y: string }> = {
  of: { x: "Sayı (X)", y: "Yüzde (Y)" },
  isWhatPercent: { x: "Sayı (X)", y: "Sayı (Y)" },
  change: { x: "Eski Değer (X)", y: "Yeni Değer (Y)" },
};

export default function PercentageCalculator() {
  const [mode, setMode] = useState<PercentageMode>("of");
  const [x, setX] = useState("100");
  const [y, setY] = useState("20");

  const result = useMemo(() => {
    const xVal = parseAmount(x);
    const yVal = parseAmount(y);
    if (!Number.isFinite(xVal) || !Number.isFinite(yVal)) return null;
    if (mode === "isWhatPercent" && yVal === 0) return null;
    if (mode === "change" && xVal === 0) return null;
    return calculatePercentage(mode, xVal, yVal);
  }, [mode, x, y]);

  const labels = FIELD_LABELS[mode];
  const isChange = mode === "change";
  const isIncrease = isChange && result ? result.result > 0 : false;

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="flex flex-wrap gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={`flex-1 rounded-lg px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
              mode === m.id
                ? "bg-white text-black shadow-sm dark:bg-white/90"
                : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            {labels.x}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            {labels.y}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={y}
            onChange={(e) => setY(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div
            className={`rounded-xl p-5 text-center ${
              isChange
                ? isIncrease
                  ? "bg-emerald-500/10"
                  : "bg-rose-500/10"
                : "bg-black/[0.03] dark:bg-white/[0.06]"
            }`}
          >
            <p className="text-sm text-black/60 dark:text-white/60">
              {mode === "of" && "Sonuç"}
              {mode === "isWhatPercent" && "Yüzde Oranı"}
              {mode === "change" && (isIncrease ? "Artış (Zam)" : "Azalış (İndirim)")}
            </p>
            <p
              className={`mt-1 text-3xl font-bold tracking-tight ${
                isChange
                  ? isIncrease
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-rose-700 dark:text-rose-400"
                  : ""
              }`}
            >
              {mode === "of"
                ? numberFormatter.format(result.result)
                : `%${numberFormatter.format(Math.abs(result.result))}`}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            {mode === "of" &&
              `${numberFormatter.format(result.x)} sayısının %${numberFormatter.format(
                result.y
              )}'si ${numberFormatter.format(result.result)} eder.`}
            {mode === "isWhatPercent" &&
              `${numberFormatter.format(result.x)}, ${numberFormatter.format(
                result.y
              )} sayısının %${numberFormatter.format(result.result)}'idir.`}
            {mode === "change" &&
              `${numberFormatter.format(result.x)}'ten ${numberFormatter.format(
                result.y
              )}'ye değişim %${numberFormatter.format(
                Math.abs(result.result)
              )} oranında bir ${isIncrease ? "artıştır." : "azalıştır."}`}
          </p>
        </div>
      )}
    </div>
  );
}
