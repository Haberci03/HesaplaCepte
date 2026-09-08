import { NOTICE_PERIOD_TIERS } from "./constants";

export interface NoticePayResult {
  brutMaas: number;
  kidemYili: number;
  haftaSayisi: number;
  gunlukUcret: number;
  ihbarTazminati: number;
}

export function calculateNoticePay(
  brutMaas: number,
  kidemYili: number
): NoticePayResult {
  const tier =
    NOTICE_PERIOD_TIERS.find((t) => kidemYili <= t.maxYears) ??
    NOTICE_PERIOD_TIERS[NOTICE_PERIOD_TIERS.length - 1];

  const haftaSayisi: number = tier.weeks;
  const gunlukUcret = brutMaas / 30;
  const ihbarTazminati = gunlukUcret * 7 * haftaSayisi;

  return { brutMaas, kidemYili, haftaSayisi, gunlukUcret, ihbarTazminati };
}
