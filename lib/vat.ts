import { VAT_RATES } from "./constants";

export type VatRate = (typeof VAT_RATES)[number];

export interface VatResult {
  oran: VatRate;
  kdvHaric: number;
  kdvTutari: number;
  kdvDahil: number;
}

// tutar KDV hariç fiyat ise "haric", KDV dahil fiyat ise "dahil" gönderilir.
export function calculateVat(
  tutar: number,
  tip: "haric" | "dahil",
  oran: VatRate
): VatResult {
  if (tip === "haric") {
    const kdvHaric = tutar;
    const kdvTutari = kdvHaric * (oran / 100);
    return { oran, kdvHaric, kdvTutari, kdvDahil: kdvHaric + kdvTutari };
  }

  const kdvDahil = tutar;
  const kdvHaric = kdvDahil / (1 + oran / 100);
  return { oran, kdvHaric, kdvTutari: kdvDahil - kdvHaric, kdvDahil };
}
