"use client";

import { useMemo, useState } from "react";
import { calculateNoticePay } from "@/lib/noticePay";
import { formatTL, parseAmount } from "@/lib/format";

export default function NoticePayCalculator() {
  const [amount, setAmount] = useState("33.030");
  const [yil, setYil] = useState("2");
  const [ay, setAy] = useState("0");

  const result = useMemo(() => {
    const brut = parseAmount(amount);
    const yilSayisi = Math.max(0, Number(yil) || 0);
    const aySayisi = Math.max(0, Math.min(11, Number(ay) || 0));
    if (!brut || brut <= 0) return null;
    return calculateNoticePay(brut, yilSayisi + aySayisi / 12);
  }, [amount, yil, ay]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-[2fr_1fr_1fr]">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Brüt Maaş
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
            Çalışılan Yıl
          </span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={yil}
            onChange={(e) => setYil(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
            Ek Ay
          </span>
          <input
            type="number"
            min={0}
            max={11}
            inputMode="numeric"
            value={ay}
            onChange={(e) => setAy(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
          />
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              İhbar Tazminatı (Brüt)
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.ihbarTazminati)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Brüt Maaş" value={formatTL(result.brutMaas)} />
            <Row label="Günlük Ücret" value={formatTL(result.gunlukUcret)} />
            <Row label="İhbar Süresi" value={`${result.haftaSayisi} hafta`} />
            <Row
              label="İhbar Tazminatı"
              value={formatTL(result.ihbarTazminati)}
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, 4857 sayılı İş Kanunu Madde 17&apos;deki bildirim
            sürelerine göre yapılmıştır: 6 aya kadar 2 hafta, 6 ay - 1,5 yıl
            arası 4 hafta, 1,5 - 3 yıl arası 6 hafta, 3 yıldan fazla 8 hafta.
            İhbar tazminatı, gelir vergisi ve damga vergisine tabidir; burada
            gösterilen brüt tutardır.
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
