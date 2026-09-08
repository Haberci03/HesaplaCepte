export interface LoanResult {
  anaPara: number;
  vade: number;
  aylikTaksit: number;
  toplamOdeme: number;
  toplamFaiz: number;
}

// yillikFaizOrani yüzde olarak (ör. 3.5), vade ay cinsinden gönderilir.
export function calculateLoan(
  anaPara: number,
  yillikFaizOrani: number,
  vade: number
): LoanResult {
  const r = yillikFaizOrani / 12 / 100;

  const aylikTaksit =
    r === 0
      ? anaPara / vade
      : (anaPara * r * Math.pow(1 + r, vade)) / (Math.pow(1 + r, vade) - 1);

  const toplamOdeme = aylikTaksit * vade;
  const toplamFaiz = toplamOdeme - anaPara;

  return { anaPara, vade, aylikTaksit, toplamOdeme, toplamFaiz };
}
