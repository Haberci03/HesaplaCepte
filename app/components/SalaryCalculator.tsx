"use client";

import { useMemo, useState } from "react";
import { calculateFromGross, type SalaryResult } from "@/lib/salary";
import { MIN_GROSS_WAGE_2026 } from "@/lib/constants";
import { formatTL, parseAmount } from "@/lib/format";

const AYLAR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const percentFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

export default function SalaryCalculator() {
  const [amount, setAmount] = useState("33.030");

  const months: SalaryResult[] | null = useMemo(() => {
    const brut = parseAmount(amount);
    if (!brut || brut <= 0) return null;
    return Array.from({ length: 12 }, (_, i) => calculateFromGross(brut, i + 1));
  }, [amount]);

  const yillikNetToplam = months?.reduce((sum, m) => sum + m.net, 0) ?? 0;

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
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

      {months && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
            <p className="text-sm text-black/60 dark:text-white/60">
              Yıllık Toplam Net Maaş
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight">
              {formatTL(yillikNetToplam)}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-black/[0.03] text-left text-black/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/60">
                  <th className="px-4 py-2.5 font-medium">Ay</th>
                  <th className="px-4 py-2.5 font-medium">Kümülatif Matrah</th>
                  <th className="px-4 py-2.5 font-medium">Vergi Dilimi</th>
                  <th className="px-4 py-2.5 text-right font-medium">
                    Net Maaş
                  </th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => {
                  const bracketJumped =
                    i > 0 && m.dilimOrani > months[i - 1].dilimOrani;
                  return (
                    <tr
                      key={m.ay}
                      className="border-b border-black/5 last:border-0 dark:border-white/5"
                    >
                      <td className="px-4 py-2.5">{AYLAR[i]}</td>
                      <td className="px-4 py-2.5 text-black/70 dark:text-white/70">
                        {formatTL(m.kumulatifMatrah)}
                      </td>
                      <td className="px-4 py-2.5">
                        <span>%{percentFormatter.format(m.dilimOrani * 100)}</span>
                        {bracketJumped && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:text-amber-400">
                            Dilim atladı
                          </span>
                        )}
                      </td>
                      <td
                        className={`px-4 py-2.5 text-right font-medium ${
                          bracketJumped
                            ? "text-amber-700 dark:text-amber-400"
                            : ""
                        }`}
                      >
                        {bracketJumped && "↓ "}
                        {formatTL(m.net)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, aynı brüt maaşın yıl boyunca değişmeden alındığı ve
            gelir vergisi dilimlerinin yıllık kümülatif matrah üzerinden
            işlediği varsayımına dayanır. Vergi dilimi değiştiğinde net maaş
            düşer; bu satırlar tabloda &quot;Dilim atladı&quot; etiketiyle
            işaretlenmiştir. Asgari ücret istisnası, brüt{" "}
            {formatTL(MIN_GROSS_WAGE_2026)} üzerinden hesaplanmıştır.
          </p>
        </div>
      )}
    </div>
  );
}
