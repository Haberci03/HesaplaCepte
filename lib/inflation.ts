import { TUFE_YEAR_END_INDEX } from "./constants";

export const TUFE_YEARS = Object.keys(TUFE_YEAR_END_INDEX)
  .map(Number)
  .sort((a, b) => a - b);

export interface InflationResult {
  tutar: number;
  baslangicYili: number;
  bitisYili: number;
  bitisTutari: number;
  toplamArtisYuzdesi: number;
}

export function calculateInflation(
  tutar: number,
  baslangicYili: number,
  bitisYili: number
): InflationResult | null {
  const startIndex = TUFE_YEAR_END_INDEX[baslangicYili];
  const endIndex = TUFE_YEAR_END_INDEX[bitisYili];
  if (!startIndex || !endIndex) return null;

  const bitisTutari = tutar * (endIndex / startIndex);
  const toplamArtisYuzdesi = (endIndex / startIndex - 1) * 100;

  return { tutar, baslangicYili, bitisYili, bitisTutari, toplamArtisYuzdesi };
}
