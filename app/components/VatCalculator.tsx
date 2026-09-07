"use client";

import { useMemo, useState } from "react";
import { calculateVat, VAT_RATES, type VatRate } from "@/lib/vat";
import { formatTL, parseAmount } from "@/lib/format";

type Mode = "haric" | "dahil";

export default function VatCalculator() {
  const [mode, setMode] = useState<Mode>("haric");
  const [amount, setAmount] = useState("1.000");
  const [rate, setRate] = useState<VatRate>(20);

  const result = useMemo(() => {
    const value = parseAmount(amount);
    if (!value || value <= 0) return null;
    return calculateVat(value, mode, rate);
  }, [amount, mode, rate]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
        <button
          type="button"
          onClick={() => setMode("haric")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "haric"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          KDV Hariç Tutar
        </button>
        <button
          type="button"
          onClick={() => setMode("dahil")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "dahil"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          KDV Dahil Tutar
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[2fr_1fr]">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            {mode === "haric" ? "KDV Hariç Tutar" : "KDV Dahil Tutar"}
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
            KDV Oranı
          </span>
          <select
            value={rate}
            onChange={(e) => setRate(Number(e.target.value) as VatRate)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          >
            {VAT_RATES.map((r) => (
              <option key={r} value={r}>
                %{r}
              </option>
            ))}
          </select>
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              {mode === "haric" ? "KDV Dahil Tutar" : "KDV Hariç Tutar"}
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(mode === "haric" ? result.kdvDahil : result.kdvHaric)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="KDV Hariç Tutar" value={formatTL(result.kdvHaric)} />
            <Row label="KDV Dahil Tutar" value={formatTL(result.kdvDahil)} />
            <Row
              label={`KDV Tutarı (%${result.oran})`}
              value={formatTL(result.kdvTutari)}
            />
          </dl>
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
