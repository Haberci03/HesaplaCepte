"use client";

import { useMemo, useState } from "react";
import { calculateTitleDeedFee } from "@/lib/titleDeedFee";
import { formatTL, parseAmount } from "@/lib/format";

export default function TitleDeedFeeCalculator() {
  const [amount, setAmount] = useState("2.000.000");

  const result = useMemo(() => {
    const satisBedeli = parseAmount(amount);
    if (!satisBedeli || satisBedeli <= 0) return null;
    return calculateTitleDeedFee(satisBedeli);
  }, [amount]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
          Satış Bedeli
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

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Toplam Tapu Harcı (%4)
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(result.toplamHarc)}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <Row label="Satış Bedeli" value={formatTL(result.satisBedeli)} />
            <Row label="Alıcı Harcı (%2)" value={formatTL(result.aliciHarci)} />
            <Row
              label="Satıcı Harcı (%2)"
              value={formatTL(result.saticiHarci)}
            />
            <Row label="Toplam Harç (%4)" value={formatTL(result.toplamHarc)} />
            <Row
              label="Döner Sermaye (yaklaşık)"
              value={formatTL(result.donerSermayeYaklasik)}
            />
          </dl>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Döner sermaye bedeli bölgeye ve işlem türüne göre değişir; burada
            yaklaşık {formatTL(result.donerSermayeYaklasik)} olarak
            gösterilmiştir. Kesin tutar için işlemi yapacağınız Tapu Sicil
            Müdürlüğü&apos;ne danışmanız önerilir.
          </p>

          <div className="rounded-xl bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-700 dark:text-amber-400 sm:text-sm">
            <strong>Uyarı:</strong> Tapu harcı matrahı, taraflarca beyan
            edilen satış bedelinden değil, bu bedelin taşınmazın emlak
            vergisi (rayiç) değerinden düşük olamayacağı kuralına tabidir.
            Beyan edeceğiniz bedel, ilgili belediyeden alınacak emlak vergisi
            değerinin altında olamaz.
          </div>
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
