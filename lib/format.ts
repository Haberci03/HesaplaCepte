const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
});

export function formatTL(value: number): string {
  return `${numberFormatter.format(value)} ₺`;
}

export function parseAmount(raw: string): number {
  const normalized = raw
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^0-9.]/g, "");
  const value = parseFloat(normalized);
  return Number.isFinite(value) ? value : 0;
}
