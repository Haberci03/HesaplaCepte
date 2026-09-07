// 2026 yılı kıdem tazminatı tavanı (brüt).
export const SEVERANCE_CEILING_2026 = 73_729.87;
export const SEVERANCE_STAMP_TAX_RATE = 0.00759;

export interface SeveranceResult {
  brutMaas: number;
  tavanUygulanan: boolean;
  esasAlinanMaas: number;
  kidemYili: number;
  kidemTazminatiBrut: number;
  damgaVergisi: number;
  net: number;
}

export function calculateSeverance(
  brutMaas: number,
  yil: number,
  ay: number
): SeveranceResult {
  const esasAlinanMaas = Math.min(brutMaas, SEVERANCE_CEILING_2026);
  const kidemYili = yil + ay / 12;
  const kidemTazminatiBrut = esasAlinanMaas * kidemYili;
  const damgaVergisi = kidemTazminatiBrut * SEVERANCE_STAMP_TAX_RATE;
  const net = kidemTazminatiBrut - damgaVergisi;

  return {
    brutMaas,
    tavanUygulanan: brutMaas > SEVERANCE_CEILING_2026,
    esasAlinanMaas,
    kidemYili,
    kidemTazminatiBrut,
    damgaVergisi,
    net,
  };
}
