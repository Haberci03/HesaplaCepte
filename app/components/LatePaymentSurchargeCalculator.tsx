"use client";

import { useMemo, useState } from "react";
import { calculateDateDiff } from "@/lib/dateDiff";
import { calculateLatePaymentSurcharge } from "@/lib/latePaymentSurcharge";
import { formatTL, parseAmount } from "@/lib/format";

type Mode = "tarih" | "ay-gun";

export default function LatePaymentSurchargeCalculator() {
  const [debt, setDebt] = useState("10.000");
  const [mode, setMode] = useState<Mode>("tarih");
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2026-01-01");
  const [months, setMonths] = useState("12");
  const [days, setDays] = useState("0");

  const result = useMemo(() => {
    const borcAsli = parseAmount(debt);
    if (!borcAsli || borcAsli <= 0) return null;

    let aySayisi: number;
    let gunSayisi: number;

    if (mode === "tarih") {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()))
        return null;
      const diff = calculateDateDiff(start, end);
      aySayisi = diff.years * 12 + diff.months;
      gunSayisi = diff.days;
    } else {
      aySayisi = Math.max(0, Number(months) || 0);
      gunSayisi = Math.max(0, Number(days) || 0);
    }

    if (aySayisi <= 0 && gunSayisi <= 0) return null;

    return calculateLatePaymentSurcharge(borcAsli, aySayisi, gunSayisi);
  }, [debt, mode, startDate, endDate, months, days]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
          Borç Aslı
        </span>
        <div className="relative">
          <input
            type="text"
            inputMode="decimal"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-10 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
            ₺
          </span>
        </div>
      </label>

      <div className="mt-4 flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
        <button
          type="button"
          onClick={() => setMode("tarih")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "tarih"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          Tarih İle
        </button>
        <button
          type="button"
          onClick={() => setMode("ay-gun")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "ay-gun"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          Ay/Gün İle
        </button>
      </div>

      <div className="mt-4">
        {mode === "tarih" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
                Gecikme Başlangıç Tarihi
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
                Gecikme Bitiş Tarihi
              </span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              />
            </label>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
                Ay Sayısı
              </span>
              <input
                type="number"
                min={0}
                inputMode="numeric"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
                Gün Sayısı
              </span>
              <input
                type="number"
                min={0}
                max={29}
                inputMode="numeric"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              />
            </label>
          </div>
        )}
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Ödenmesi Gereken Toplam Tutar
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.toplamOdenecek)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Borç Aslı" value={formatTL(result.borcAsli)} />
            <Row
              label="Gecikme Süresi"
              value={`${result.aySayisi} ay ${result.gunSayisi} gün`}
            />
            <Row label="Aylık Oran" value="%3,7" />
            <Row
              label="Gecikme Zammı"
              value={formatTL(result.gecikmeZammi)}
            />
            <Row
              label="Toplam Ödenecek"
              value={formatTL(result.toplamOdenecek)}
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında
            Kanun uyarınca tam aylar için %3,7 aylık gecikme zammı oranı, ay
            kesirleri/artık günler için bu oranın 30&apos;a bölünmesiyle
            bulunan günlük oran üzerinden yapılmıştır. Bu oran Cumhurbaşkanı
            kararıyla değiştirilebilir; güncel oranı kontrol etmeniz
            önerilir.
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
