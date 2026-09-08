"use client";

import { useMemo, useState } from "react";
import { calculateCreditCardMinPayment } from "@/lib/creditCardMinPayment";
import { formatTL, parseAmount } from "@/lib/format";

const percentFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

export default function CreditCardMinPaymentCalculator() {
  const [limit, setLimit] = useState("50.000");
  const [debt, setDebt] = useState("10.000");

  const result = useMemo(() => {
    const kartLimiti = parseAmount(limit);
    const donemBorcu = parseAmount(debt);
    if (!kartLimiti || kartLimiti <= 0 || !donemBorcu || donemBorcu <= 0)
      return null;
    return calculateCreditCardMinPayment(kartLimiti, donemBorcu);
  }, [limit, debt]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Kart Limiti
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
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
            Dönem Borcu
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
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Asgari Ödeme Tutarı
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.asgariOdeme)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Kart Limiti" value={formatTL(result.kartLimiti)} />
            <Row label="Dönem Borcu" value={formatTL(result.donemBorcu)} />
            <Row
              label="Uygulanan Oran"
              value={`%${percentFormatter.format(result.oran * 100)}`}
            />
            <Row
              label="Asgari Ödeme"
              value={formatTL(result.asgariOdeme)}
            />
            <Row label="Kalan Bakiye" value={formatTL(result.kalanBakiye)} />
          </dl>

          <div className="rounded-xl bg-rose-500/10 p-4 text-xs leading-relaxed text-rose-700 dark:text-rose-400 sm:text-sm">
            <strong>Dikkat:</strong> Sadece asgari ödeme yaparsanız kalan{" "}
            {formatTL(result.kalanBakiye)} bakiye, bir sonraki döneme akdi
            faiziyle birlikte devreder. Düzenli olarak yalnızca asgari ödeme
            yapmak, borcunuzun zamanla katlanarak büyümesine (borç sarmalına)
            yol açabilir. Mümkün olduğunca dönem borcunun tamamını ödemeniz
            önerilir.
          </div>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, BDDK&apos;nın 26.09.2024 tarihli 10970 sayılı kararına
            göre yapılmıştır: kart limiti 50.000 TL ve altındaysa asgari
            ödeme dönem borcunun %20&apos;si, 50.000 TL üzerindeyse %40&apos;ıdır.
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
