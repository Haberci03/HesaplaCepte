import {
  ANNUAL_LEAVE_TIER_1_MAX_YEARS,
  ANNUAL_LEAVE_TIER_1_DAYS,
  ANNUAL_LEAVE_TIER_2_MAX_YEARS,
  ANNUAL_LEAVE_TIER_2_DAYS,
  ANNUAL_LEAVE_TIER_3_DAYS,
  ANNUAL_LEAVE_MIN_DAYS_SPECIAL_AGE,
} from "./constants";

export interface AnnualLeaveResult {
  kidemYili: number;
  hakKazanmadi: boolean;
  hakEdilenGun: number;
  ozelYasGrubuUygulandi: boolean;
}

export function calculateAnnualLeave(
  kidemYili: number,
  ozelYasGrubu: boolean
): AnnualLeaveResult {
  if (kidemYili < 1) {
    return {
      kidemYili,
      hakKazanmadi: true,
      hakEdilenGun: 0,
      ozelYasGrubuUygulandi: false,
    };
  }

  let hakEdilenGun: number;
  if (kidemYili <= ANNUAL_LEAVE_TIER_1_MAX_YEARS) {
    hakEdilenGun = ANNUAL_LEAVE_TIER_1_DAYS;
  } else if (kidemYili < ANNUAL_LEAVE_TIER_2_MAX_YEARS) {
    hakEdilenGun = ANNUAL_LEAVE_TIER_2_DAYS;
  } else {
    hakEdilenGun = ANNUAL_LEAVE_TIER_3_DAYS;
  }

  let ozelYasGrubuUygulandi = false;

  if (ozelYasGrubu && hakEdilenGun < ANNUAL_LEAVE_MIN_DAYS_SPECIAL_AGE) {
    hakEdilenGun = ANNUAL_LEAVE_MIN_DAYS_SPECIAL_AGE;
    ozelYasGrubuUygulandi = true;
  }

  return { kidemYili, hakKazanmadi: false, hakEdilenGun, ozelYasGrubuUygulandi };
}
