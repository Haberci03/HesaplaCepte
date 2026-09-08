"use client";

import { useMemo, useState } from "react";
import { calculateBmi } from "@/lib/bmi";
import { parseAmount } from "@/lib/format";

const bmiFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 1,
});

const CATEGORY_STYLES: Record<string, string> = {
  Zayıf: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  Normal: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "Fazla Kilolu": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  Obez: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
};

export default function BmiCalculator() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");

  const result = useMemo(() => {
    const boyCm = parseAmount(height);
    const kiloKg = parseAmount(weight);
    if (!boyCm || boyCm <= 0 || !kiloKg || kiloKg <= 0) return null;
    return calculateBmi(boyCm, kiloKg);
  }, [height, weight]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Boy (cm)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Kilo (kg)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Vücut Kitle İndeksi
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {bmiFormatter.format(result.bmi)}
            </p>
            <span
              className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                CATEGORY_STYLES[result.kategori] ?? ""
              }`}
            >
              {result.kategori}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Boy" value={`${result.boyCm} cm`} />
            <Row label="Kilo" value={`${result.kiloKg} kg`} />
            <Row label="BMI" value={bmiFormatter.format(result.bmi)} />
            <Row label="Kategori" value={result.kategori} />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Kategoriler Dünya Sağlık Örgütü&apos;nün standart BMI sınıflandırmasına
            göredir: 18.5 altı zayıf, 18.5-24.9 normal, 25-29.9 fazla kilolu,
            30 ve üzeri obez. BMI, kas kütlesi ve vücut yapısı gibi
            faktörleri dikkate almaz.
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
