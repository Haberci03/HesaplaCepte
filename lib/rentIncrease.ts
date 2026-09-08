import { RENT_INCREASE_TUFE_RATE_DEFAULT } from "./constants";

export { RENT_INCREASE_TUFE_RATE_DEFAULT };

export interface RentIncreaseResult {
  mevcutKira: number;
  oran: number;
  yeniKira: number;
  artisTutari: number;
}

export function calculateRentIncrease(
  mevcutKira: number,
  oran: number
): RentIncreaseResult {
  const yeniKira = mevcutKira * (1 + oran / 100);
  const artisTutari = yeniKira - mevcutKira;

  return { mevcutKira, oran, yeniKira, artisTutari };
}
