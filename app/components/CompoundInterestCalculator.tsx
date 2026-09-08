"use client";

import { useMemo, useState } from "react";
import { calculateCompoundInterest } from "@/lib/compoundInterest";
import { formatTL, parseAmount } from "@/lib/format";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("100.000");
  const [rate, setRate] = useState("40");
  const [term, setTerm] = useState("5");
  const [monthlyContribution, setMonthlyContribution] = useState("0");

  const result = useMemo(() => {
    const anaPara = parseAmount(principal);
    const yillikFaizOrani = parseAmount(rate);
    // Aşırı büyük vade değerleri (1+r)^n'i taşırıp Infinity üretebilir; 100 yıl
    // hiçbir gerçek yatırım ufkunu karşılamayacak kadar yüksek bir sınır.
    const vadeYil = Math.min(100, parseAmount(term));
    const aylikEkYatirim = parseAmount(monthlyContribution);
    if (!anaPara || anaPara < 0 || vadeYil <= 0 || yillikFaizOrani < 0)
      return null;
    if (anaPara === 0 && aylikEkYatirim === 0) return null;
    return calculateCompoundInterest(anaPara, yillikFaizOrani, vadeYil, aylikEkYatirim);
  }, [principal, rate, term, monthlyContribution]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Anapara
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
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
            Yıllık Faiz Oranı
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-8 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              placeholder="0"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
              %
            </span>
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Vade (Yıl)
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            placeholder="0"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Aylık Ek Yatırım (opsiyonel)
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              placeholder="0"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
              ₺
            </span>
          </div>
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Vade Sonu Tutar
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.vadeSonuTutar)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Anapara" value={formatTL(result.anaPara)} />
            <Row label="Vade" value={`${result.vadeYil} yıl`} />
            <Row
              label="Toplam Yatırılan"
              value={formatTL(result.toplamYatirilanAnapara)}
            />
            <Row
              label="Vade Sonu Tutar"
              value={formatTL(result.vadeSonuTutar)}
            />
            <Row
              label="Toplam Kazanç"
              value={formatTL(result.toplamKazanc)}
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, aylık bileşikleme ve sabit faiz oranı varsayımıyla
            yapılmıştır. Gerçek yatırım araçlarının getirisi piyasa
            koşullarına, vergilendirmeye ve işlem maliyetlerine göre
            değişebilir; bu araç yatırım tavsiyesi niteliği taşımaz.
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
