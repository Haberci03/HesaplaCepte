// Kullanılmamış izin günü için üst sınır. Birikmiş izinler birkaç yılı
// bulabilir; 365 gün gerçekçi her durumu karşılayacak kadar yüksek bir sınır.
export const ANNUAL_LEAVE_PAY_MAX_DAYS = 365;

export interface AnnualLeavePayResult {
  brutMaas: number;
  izinGunu: number;
  gunlukBrutUcret: number;
  brutIzinUcreti: number;
}

export function calculateAnnualLeavePay(
  brutMaas: number,
  izinGunu: number
): AnnualLeavePayResult {
  const gunlukBrutUcret = brutMaas / 30;
  const brutIzinUcreti = gunlukBrutUcret * izinGunu;

  return { brutMaas, izinGunu, gunlukBrutUcret, brutIzinUcreti };
}
