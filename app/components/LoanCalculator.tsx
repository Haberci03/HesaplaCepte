"use client";

import { useMemo, useState } from "react";
import { calculateLoan } from "@/lib/loan";
import { formatTL, parseAmount } from "@/lib/format";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("100.000");
  const [rate, setRate] = useState("3,5");
  const [term, setTerm] = useState("12");

  const result = useMemo(() => {
    const anaPara = parseAmount(amount);
    const yillikFaizOrani = parseAmount(rate);
    // Aşırı büyük vade değerleri (1+r)^vade'yi taşırıp NaN/Infinity üretebilir;
    // 600 ay (50 yıl) hiçbir gerçek krediyi karşılamayacak kadar yüksek bir sınır.
    const vade = Math.min(600, Math.max(0, Math.round(Number(term) || 0)));
    if (!anaPara || anaPara <= 0 || vade <= 0 || yillikFaizOrani < 0)
      return null;
    return calculateLoan(anaPara, yillikFaizOrani, vade);
  }, [amount, rate, term]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Anapara
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
            Vade (Ay)
          </span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Aylık Taksit
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.aylikTaksit)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Anapara" value={formatTL(result.anaPara)} />
            <Row label="Vade" value={`${result.vade} ay`} />
            <Row label="Aylık Taksit" value={formatTL(result.aylikTaksit)} />
            <Row label="Toplam Ödeme" value={formatTL(result.toplamOdeme)} />
            <Row label="Toplam Faiz" value={formatTL(result.toplamFaiz)} />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, sabit faizli ve eşit taksitli (anüite) bir kredi
            yapısı varsayımıyla yapılmıştır. Bankaların uyguladığı dosya
            masrafı, sigorta gibi ek maliyetler bu hesaplamaya dahil
            değildir.
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
