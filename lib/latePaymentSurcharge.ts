import { LATE_PAYMENT_SURCHARGE_MONTHLY_RATE } from "./constants";

export interface LatePaymentSurchargeResult {
  borcAsli: number;
  aySayisi: number;
  gunSayisi: number;
  gecikmeZammi: number;
  toplamOdenecek: number;
}

// aySayisi: tam ay sayısı (aylık orana tabi). gunSayisi: artık gün sayısı (günlük orana tabi, aylık oran/30).
export function calculateLatePaymentSurcharge(
  borcAsli: number,
  aySayisi: number,
  gunSayisi: number
): LatePaymentSurchargeResult {
  const gunlukOran = LATE_PAYMENT_SURCHARGE_MONTHLY_RATE / 30;
  const gecikmeZammi =
    borcAsli * (aySayisi * LATE_PAYMENT_SURCHARGE_MONTHLY_RATE + gunSayisi * gunlukOran);
  const toplamOdenecek = borcAsli + gecikmeZammi;

  return { borcAsli, aySayisi, gunSayisi, gecikmeZammi, toplamOdenecek };
}
