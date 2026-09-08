export interface FuelCostResult {
  mesafe: number;
  tuketim: number;
  fiyat: number;
  toplamMaliyet: number;
  kmBasiMaliyet: number;
}

// tuketim: L/100km, fiyat: TL/L
export function calculateFuelCost(
  mesafe: number,
  tuketim: number,
  fiyat: number
): FuelCostResult {
  const toplamMaliyet = (mesafe / 100) * tuketim * fiyat;
  const kmBasiMaliyet = mesafe > 0 ? toplamMaliyet / mesafe : 0;

  return { mesafe, tuketim, fiyat, toplamMaliyet, kmBasiMaliyet };
}
