"use client";

import { useMemo, useState } from "react";
import {
  calculateCurrencyConversion,
  type ConversionDirection,
} from "@/lib/currencyConverter";
import { formatTL, parseAmount } from "@/lib/format";

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 4,
});

export default function CurrencyConverterCalculator() {
  const [direction, setDirection] = useState<ConversionDirection>("toTl");
  const [amount, setAmount] = useState("1");
  const [rate, setRate] = useState("4.500");

  const result = useMemo(() => {
    const miktar = parseAmount(amount);
    const kur = parseAmount(rate);
    if (!miktar || miktar <= 0 || !kur || kur <= 0) return null;
    return calculateCurrencyConversion(miktar, kur, direction);
  }, [amount, rate, direction]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
        <button
          type="button"
          onClick={() => setDirection("toTl")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            direction === "toTl"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          Dövize/Altına TL Karşılığı
        </button>
        <button
          type="button"
          onClick={() => setDirection("fromTl")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            direction === "fromTl"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          TL&apos;den Miktara Çevir
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            {direction === "toTl"
              ? "Miktar (gram altın veya döviz)"
              : "TL Tutarı"}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Birim Fiyat / Kur (TL)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              {direction === "toTl" ? "TL Karşılığı" : "Miktar"}
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {direction === "toTl"
                ? formatTL(result.sonuc)
                : numberFormatter.format(result.sonuc)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row
              label={direction === "toTl" ? "Miktar" : "TL Tutarı"}
              value={
                direction === "toTl"
                  ? numberFormatter.format(result.miktar)
                  : formatTL(result.miktar)
              }
            />
            <Row label="Birim Fiyat / Kur" value={formatTL(result.kur)} />
            <Row
              label={direction === "toTl" ? "TL Karşılığı" : "Miktar"}
              value={
                direction === "toTl"
                  ? formatTL(result.sonuc)
                  : numberFormatter.format(result.sonuc)
              }
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Bu hesaplayıcı canlı kur/fiyat verisi çekmez; girdiğiniz birim
            fiyat, güncel piyasa değerini yansıtan ve sizin girmeniz gereken
            bir değerdir. Güncel altın gramı veya döviz kurunu bankanızdan ya
            da güvenilir bir piyasa kaynağından teyit etmeniz önerilir.
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
