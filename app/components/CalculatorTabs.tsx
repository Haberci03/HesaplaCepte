"use client";

import { useState } from "react";
import SalaryCalculator from "@/app/components/SalaryCalculator";
import VatCalculator from "@/app/components/VatCalculator";
import SeveranceCalculator from "@/app/components/SeveranceCalculator";
import Faq from "@/app/components/Faq";
import {
  SALARY_FAQ_ITEMS,
  VAT_FAQ_ITEMS,
  SEVERANCE_FAQ_ITEMS,
} from "@/app/data/faq";

const TABS = [
  { id: "maas", label: "Maaş Hesaplama" },
  { id: "kdv", label: "KDV Hesaplama" },
  { id: "kidem", label: "Kıdem Tazminatı" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function CalculatorTabs() {
  const [tab, setTab] = useState<TabId>("maas");

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <nav className="flex gap-1 rounded-full border border-black/10 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="flex w-full flex-col items-center gap-14">
        {tab === "maas" && (
          <>
            <SalaryCalculator />
            <Faq items={SALARY_FAQ_ITEMS} />
          </>
        )}
        {tab === "kdv" && (
          <>
            <VatCalculator />
            <Faq items={VAT_FAQ_ITEMS} />
          </>
        )}
        {tab === "kidem" && (
          <>
            <SeveranceCalculator />
            <Faq items={SEVERANCE_FAQ_ITEMS} />
          </>
        )}
      </div>
    </div>
  );
}
