"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ANNUAL_LEAVE_PAY_MAX_DAYS,
  calculateAnnualLeavePay,
} from "@/lib/annualLeavePay";
import { formatTL, parseAmount } from "@/lib/format";

export default function AnnualLeavePayCalculator() {
  const [amount, setAmount] = useState("30.000");
  const [gun, setGun] = useState("12");

  const result = useMemo(() => {
    const brut = parseAmount(amount);
    const izinGunu = Math.min(
      ANNUAL_LEAVE_PAY_MAX_DAYS,
      Math.max(0, Math.round(Number(gun) || 0))
    );
    if (!brut || brut <= 0 || izinGunu <= 0) return null;
    return calculateAnnualLeavePay(brut, izinGunu);
  }, [amount, gun]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Aylık Brüt Ücret
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
            Kullanılmamış İzin (Gün)
          </span>
          <input
            type="number"
            min={1}
            max={ANNUAL_LEAVE_PAY_MAX_DAYS}
            inputMode="numeric"
            value={gun}
            onChange={(e) => setGun(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Yıllık İzin Ücreti (Brüt)
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.brutIzinUcreti)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Aylık Brüt Ücret" value={formatTL(result.brutMaas)} />
            <Row
              label="Günlük Brüt Ücret"
              value={formatTL(result.gunlukBrutUcret)}
            />
            <Row label="İzin Günü" value={`${result.izinGunu} gün`} />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Günlük brüt ücret, aylık brüt ücretin 30&apos;a bölünmesiyle;
            brüt izin ücreti ise günlük brüt ücretin kullanılmamış izin günü
            sayısıyla çarpılmasıyla bulunur. Gösterilen tutar brüttür. Yıllık
            izin ücretinden normal maaş gibi SGK primi, gelir vergisi ve damga
            vergisi kesilir; bu kesintiler kümülatif vergi matrahınıza ve
            bordronuza göre değiştiği için net tutar burada gösterilmez.
            Kesintileri görmek için{" "}
            <Link href="/maas-hesaplama" className="underline">
              maaş hesaplama
            </Link>{" "}
            aracını kullanabilirsiniz. Gün sayısı en fazla{" "}
            {ANNUAL_LEAVE_PAY_MAX_DAYS} olarak alınır.
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
