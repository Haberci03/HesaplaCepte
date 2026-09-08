export type ConversionDirection = "toTl" | "fromTl";

export interface CurrencyConversionResult {
  miktar: number;
  kur: number;
  sonuc: number;
  yon: ConversionDirection;
}

// yon "toTl": miktar (gram altın/döviz) -> TL karşılığı. "fromTl": TL tutarı -> miktar.
export function calculateCurrencyConversion(
  miktar: number,
  kur: number,
  yon: ConversionDirection
): CurrencyConversionResult {
  const sonuc = yon === "toTl" ? miktar * kur : miktar / kur;
  return { miktar, kur, sonuc, yon };
}
