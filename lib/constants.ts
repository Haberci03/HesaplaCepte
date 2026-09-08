// HesaplaCepte vergi ve SGK sabitleri
// Tüm hesaplayıcılar (maaş, KDV, kıdem tazminatı) değerlerini bu dosyadan alır.
// Bir değer güncellendiğinde ilgili yorum satırındaki dönemi ve LAST_UPDATED'ı da güncelleyin.

// Bu sabitlerin en son kontrol edildiği/güncellendiği tarih.
export const LAST_UPDATED = "8 Eylül 2026";

// Gelir vergisi dilimleri (yıllık kümülatif matrah üzerinden)
// Dönem: 2026 tam yılı, 01.01.2026 - 31.12.2026
export const TAX_BRACKETS_2026 = [
  { limit: 190_000, rate: 0.15 },
  { limit: 400_000, rate: 0.2 },
  { limit: 950_000, rate: 0.27 },
  { limit: 3_000_000, rate: 0.35 },
  { limit: Infinity, rate: 0.4 },
] as const;

// SGK primi oranı (çalışan payı)
// Dönem: 2026 tam yılı, 01.01.2026 - 31.12.2026
export const SGK_RATE = 0.14;

// İşsizlik sigortası primi oranı (çalışan payı)
// Dönem: 2026 tam yılı, 01.01.2026 - 31.12.2026
export const UNEMPLOYMENT_RATE = 0.01;

// Damga vergisi oranı (binde 7,59)
// Dönem: 2026 tam yılı, 01.01.2026 - 31.12.2026
export const STAMP_TAX_RATE = 0.00759;

// Brüt asgari ücret
// Dönem: 2026 1. dönem, 01.01.2026 - 30.06.2026 (yıl içinde güncellenirse bu değeri değiştirin)
export const MIN_GROSS_WAGE_2026 = 33_030;

// Kıdem tazminatı tavanı (brüt)
// Dönem: 2026 2. dönem, 01.07.2026 - 31.12.2026
export const SEVERANCE_CEILING_2026 = 73_729.87;

// KDV oranları
// Dönem: 2026 tam yılı, 01.01.2026 - 31.12.2026
export const VAT_RATES = [1, 10, 20] as const;
