"use client";

import { useMemo, useState } from "react";
import { calculateAnnualLeave } from "@/lib/annualLeave";

type Mode = "tarih" | "yil";

const yearFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 1,
});

function yearsSince(dateStr: string): number | null {
  const start = new Date(dateStr);
  if (Number.isNaN(start.getTime())) return null;
  const diffMs = Date.now() - start.getTime();
  if (diffMs < 0) return null;
  return diffMs / (1000 * 60 * 60 * 24 * 365.25);
}

export default function AnnualLeaveCalculator() {
  const [mode, setMode] = useState<Mode>("tarih");
  const [startDate, setStartDate] = useState("2020-01-01");
  const [years, setYears] = useState("5");
  const [ozelYasGrubu, setOzelYasGrubu] = useState(false);

  const result = useMemo(() => {
    const kidemYili =
      mode === "tarih" ? yearsSince(startDate) : Number(years.replace(",", "."));
    if (kidemYili === null || !Number.isFinite(kidemYili) || kidemYili < 0)
      return null;
    return calculateAnnualLeave(kidemYili, ozelYasGrubu);
  }, [mode, startDate, years, ozelYasGrubu]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
      <div className="flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
        <button
          type="button"
          onClick={() => setMode("tarih")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "tarih"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          İşe Başlama Tarihi
        </button>
        <button
          type="button"
          onClick={() => setMode("yil")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
            mode === "yil"
              ? "bg-white text-black shadow-sm dark:bg-white/90"
              : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          }`}
        >
          Çalışma Yılı
        </button>
      </div>

      <div className="mt-6">
        {mode === "tarih" ? (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
              İşe Başlama Tarihi
            </span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
            />
          </label>
        ) : (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-black/70 dark:text-white/70">
              Çalıştığı Yıl Sayısı
            </span>
            <input
              type="text"
              inputMode="decimal"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-lg font-semibold outline-none focus:border-black/30 dark:border-white/15 dark:bg-black/30 dark:focus:border-white/40"
              placeholder="0"
            />
          </label>
        )}

        <label className="mt-4 flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
          <input
            type="checkbox"
            checked={ozelYasGrubu}
            onChange={(e) => setOzelYasGrubu(e.target.checked)}
            className="h-4 w-4 rounded border-black/20 dark:border-white/30"
          />
          18 yaşından küçüğüm veya 50 yaşından büyüğüm
        </label>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          {result.hakKazanmadi ? (
            <div className="rounded-xl bg-amber-500/10 p-5 text-center text-sm text-amber-700 dark:text-amber-400">
              Henüz 1 yıllık kıdemi doldurmadığınız için yıllık ücretli izne
              hak kazanmadınız.
            </div>
          ) : (
            <>
              <div className="rounded-xl bg-black/[0.03] p-5 text-center dark:bg-white/[0.06]">
                <p className="text-sm text-black/60 dark:text-white/60">
                  Yıllık İzin Hakkı
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight">
                  {result.hakEdilenGun} gün
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                <Row
                  label="Kıdem Süresi"
                  value={`${yearFormatter.format(result.kidemYili)} yıl`}
                />
                <Row
                  label="Yıllık İzin Hakkı"
                  value={`${result.hakEdilenGun} gün`}
                />
                {result.ozelYasGrubuUygulandi && (
                  <Row
                    label="Özel Yaş Grubu İstisnası"
                    value="Uygulandı (min. 20 gün)"
                  />
                )}
              </dl>
            </>
          )}

          <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
            Hesaplama, 4857 sayılı İş Kanunu Madde 53&apos;e göre yapılmıştır:
            1-5 yıl arası (5 dahil) 14 gün, 5-15 yıl arası 20 gün, 15 yıl ve
            üzeri 26 gün. 18 yaşından küçük ve 50 yaşından büyük çalışanların
            yıllık izni, kıdemi ne olursa olsun 20 günden az olamaz.
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
