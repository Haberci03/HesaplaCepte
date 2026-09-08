"use client";

import { useMemo, useState } from "react";
import { calculateDateDiff } from "@/lib/dateDiff";

const numberFormatter = new Intl.NumberFormat("tr-TR");

export default function DateDiffCalculator() {
  const [startDate, setStartDate] = useState("1990-01-01");
  const [endDate, setEndDate] = useState("2026-01-01");

  const result = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()))
      return null;
    return calculateDateDiff(start, end);
  }, [startDate, endDate]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Başlangıç Tarihi
          </span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Bitiş Tarihi
          </span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Tarih Farkı
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {result.years} yıl {result.months} ay {result.days} gün
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
            <Row label="Yıl" value={`${result.years}`} />
            <Row label="Ay" value={`${result.months}`} />
            <Row label="Gün" value={`${result.days}`} />
            <Row
              label="Toplam Gün"
              value={numberFormatter.format(result.totalDays)}
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
