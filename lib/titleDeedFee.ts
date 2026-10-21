import {
  TITLE_DEED_FEE_RATE_BUYER,
  TITLE_DEED_FEE_RATE_SELLER,
  TITLE_DEED_REVOLVING_FUND_FEE_MIN,
  TITLE_DEED_REVOLVING_FUND_FEE_MAX,
} from "./constants";

export interface TitleDeedFeeResult {
  satisBedeli: number;
  aliciHarci: number;
  saticiHarci: number;
  toplamHarc: number;
  donerSermayeMin: number;
  donerSermayeMax: number;
}

export function calculateTitleDeedFee(satisBedeli: number): TitleDeedFeeResult {
  const aliciHarci = satisBedeli * TITLE_DEED_FEE_RATE_BUYER;
  const saticiHarci = satisBedeli * TITLE_DEED_FEE_RATE_SELLER;
  const toplamHarc = aliciHarci + saticiHarci;

  return {
    satisBedeli,
    aliciHarci,
    saticiHarci,
    toplamHarc,
    donerSermayeMin: TITLE_DEED_REVOLVING_FUND_FEE_MIN,
    donerSermayeMax: TITLE_DEED_REVOLVING_FUND_FEE_MAX,
  };
}
