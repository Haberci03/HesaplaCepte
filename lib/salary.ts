// 2026 gelir vergisi dilimleri (yıllık kümülatif matrah üzerinden)
export const TAX_BRACKETS_2026 = [
  { limit: 190_000, rate: 0.15 },
  { limit: 400_000, rate: 0.2 },
  { limit: 950_000, rate: 0.27 },
  { limit: 3_000_000, rate: 0.35 },
  { limit: Infinity, rate: 0.4 },
] as const;

export const SGK_RATE = 0.14;
export const UNEMPLOYMENT_RATE = 0.01;
export const STAMP_TAX_RATE = 0.00759;
export const MIN_GROSS_WAGE_2026 = 33_030;

const MIN_WAGE_TAX_BASE =
  MIN_GROSS_WAGE_2026 * (1 - SGK_RATE - UNEMPLOYMENT_RATE);

// Kümülatif matrah üzerinden dilim usulüyle toplam vergiyi hesaplar.
function progressiveTax(matrah: number): number {
  if (matrah <= 0) return 0;
  let tax = 0;
  let prevLimit = 0;
  for (const bracket of TAX_BRACKETS_2026) {
    if (matrah <= prevLimit) break;
    const taxableInBracket = Math.min(matrah, bracket.limit) - prevLimit;
    tax += taxableInBracket * bracket.rate;
    prevLimit = bracket.limit;
  }
  return tax;
}

// [prevCum, prevCum + delta] aralığına isabet eden vergiyi hesaplar.
function taxOnSlice(prevCum: number, delta: number): number {
  return progressiveTax(prevCum + delta) - progressiveTax(prevCum);
}

// Verilen kümülatif matrahın içinde bulunduğu dilimin oranını döner.
export function getBracketRate(kumulatifMatrah: number): number {
  for (const bracket of TAX_BRACKETS_2026) {
    if (kumulatifMatrah <= bracket.limit) return bracket.rate;
  }
  return TAX_BRACKETS_2026[TAX_BRACKETS_2026.length - 1].rate;
}

export interface SalaryResult {
  ay: number;
  brut: number;
  sgkPrimi: number;
  issizlikPrimi: number;
  gelirVergisiMatrahi: number;
  kumulatifMatrah: number;
  dilimOrani: number;
  gelirVergisiBrut: number;
  gelirVergisiIstisnasi: number;
  gelirVergisi: number;
  damgaVergisiBrut: number;
  damgaVergisiIstisnasi: number;
  damgaVergisi: number;
  toplamKesinti: number;
  net: number;
}

// Aynı brüt maaşın yıl boyunca değişmeden alındığı varsayılır; ayIndex (1-12)
// önceki ayların kümülatif matrahını hesaba katar (Ocak = 1).
export function calculateFromGross(
  brut: number,
  ayIndex: number = 1
): SalaryResult {
  const sgkPrimi = brut * SGK_RATE;
  const issizlikPrimi = brut * UNEMPLOYMENT_RATE;
  const gelirVergisiMatrahi = brut - sgkPrimi - issizlikPrimi;

  const gecenAy = Math.min(Math.max(ayIndex, 1), 12) - 1;
  const prevCumEmployee = gecenAy * gelirVergisiMatrahi;
  const prevCumMinWage = gecenAy * MIN_WAGE_TAX_BASE;
  const kumulatifMatrah = prevCumEmployee + gelirVergisiMatrahi;
  const dilimOrani = getBracketRate(kumulatifMatrah);

  const gelirVergisiBrut = taxOnSlice(prevCumEmployee, gelirVergisiMatrahi);
  const gelirVergisiIstisnasi = taxOnSlice(prevCumMinWage, MIN_WAGE_TAX_BASE);
  const gelirVergisi = Math.max(0, gelirVergisiBrut - gelirVergisiIstisnasi);

  const damgaVergisiBrut = brut * STAMP_TAX_RATE;
  const damgaVergisiIstisnasi =
    Math.min(brut, MIN_GROSS_WAGE_2026) * STAMP_TAX_RATE;
  const damgaVergisi = Math.max(0, damgaVergisiBrut - damgaVergisiIstisnasi);

  const toplamKesinti =
    sgkPrimi + issizlikPrimi + gelirVergisi + damgaVergisi;
  const net = brut - toplamKesinti;

  return {
    ay: ayIndex,
    brut,
    sgkPrimi,
    issizlikPrimi,
    gelirVergisiMatrahi,
    kumulatifMatrah,
    dilimOrani,
    gelirVergisiBrut,
    gelirVergisiIstisnasi,
    gelirVergisi,
    damgaVergisiBrut,
    damgaVergisiIstisnasi,
    damgaVergisi,
    toplamKesinti,
    net,
  };
}
