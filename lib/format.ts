const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
});

export function formatTL(value: number): string {
  return `${numberFormatter.format(value)} ₺`;
}

// Türkçe biçimde ("1.234,56") veya basit ondalıklı ("1234.56") girilen bir
// tutarı sayıya çevirir. Virgül her zaman ondalık ayraç olarak kabul edilir.
// Virgül yoksa, son "."ten sonra tam olarak 1-2 hane varsa bu nokta ondalık
// ayraç sayılır (ör. "3.5" -> 3.5); 3 hane varsa binlik ayraç sayılır
// (ör. "33.030" -> 33030).
export function parseAmount(raw: string): number {
  let normalized = raw.trim();

  if (normalized.includes(",")) {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else {
    const lastDotIndex = normalized.lastIndexOf(".");
    if (lastDotIndex !== -1) {
      const trailingDigits = normalized.length - lastDotIndex - 1;
      if (trailingDigits === 3) {
        normalized = normalized.replace(/\./g, "");
      } else {
        const before = normalized.slice(0, lastDotIndex).replace(/\./g, "");
        const after = normalized.slice(lastDotIndex + 1);
        normalized = `${before}.${after}`;
      }
    }
  }

  normalized = normalized.replace(/[^0-9.]/g, "");
  const value = parseFloat(normalized);
  return Number.isFinite(value) ? value : 0;
}
