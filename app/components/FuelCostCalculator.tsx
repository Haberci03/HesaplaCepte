"use client";

import { useMemo, useState } from "react";
import { calculateFuelCost } from "@/lib/fuelCost";
import { formatTL, parseAmount } from "@/lib/format";

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState("500");
  const [consumption, setConsumption] = useState("7,5");
  const [price, setPrice] = useState("45");

  const result = useMemo(() => {
    const mesafe = parseAmount(distance);
    const tuketim = parseAmount(consumption);
    const fiyat = parseAmount(price);
    if (!mesafe || mesafe <= 0 || tuketim <= 0 || fiyat <= 0) return null;
    return calculateFuelCost(mesafe, tuketim, fiyat);
  }, [distance, consumption, price]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Mesafe (km)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Tüketim (L/100km)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Yakıt Fiyatı (TL/L)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Toplam Yakıt Maliyeti
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.toplamMaliyet)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Mesafe" value={`${result.mesafe} km`} />
            <Row label="Tüketim" value={`${result.tuketim} L/100km`} />
            <Row label="Yakıt Fiyatı" value={formatTL(result.fiyat)} />
            <Row
              label="Toplam Maliyet"
              value={formatTL(result.toplamMaliyet)}
            />
            <Row
              label="Km Başına Maliyet"
              value={formatTL(result.kmBasiMaliyet)}
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
