import { SEVERANCE_CEILING_2026, STAMP_TAX_RATE } from "./constants";

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
  const damgaVergisi = kidemTazminatiBrut * STAMP_TAX_RATE;
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
