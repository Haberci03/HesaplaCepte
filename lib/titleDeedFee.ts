import {
  TITLE_DEED_FEE_RATE_BUYER,
  TITLE_DEED_FEE_RATE_SELLER,
  TITLE_DEED_REVOLVING_FUND_FEE_APPROX,
} from "./constants";

export interface TitleDeedFeeResult {
  satisBedeli: number;
  aliciHarci: number;
  saticiHarci: number;
  toplamHarc: number;
  donerSermayeYaklasik: number;
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
    donerSermayeYaklasik: TITLE_DEED_REVOLVING_FUND_FEE_APPROX,
  };
}
