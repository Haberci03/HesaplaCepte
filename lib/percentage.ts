export type PercentageMode = "of" | "isWhatPercent" | "change";

export interface PercentageResult {
  mode: PercentageMode;
  x: number;
  y: number;
  result: number;
}

// mode "of": x sayısının y%'si kaçtır -> result = x * y / 100
// mode "isWhatPercent": x sayısı y sayısının yüzde kaçıdır -> result = x / y * 100
// mode "change": x'ten y'ye değişim yüzde kaçtır -> result = (y - x) / |x| * 100
// (payda mutlak değer alınır; böylece eski değer negatifken de artış pozitif,
// azalış negatif çıkar, ör. -10'dan -5'e değişim %50 artıştır)
export function calculatePercentage(
  mode: PercentageMode,
  x: number,
  y: number
): PercentageResult {
  let result: number;
  switch (mode) {
    case "of":
      result = (x * y) / 100;
      break;
    case "isWhatPercent":
      result = (x / y) * 100;
      break;
    case "change":
      result = ((y - x) / Math.abs(x)) * 100;
      break;
  }
  return { mode, x, y, result };
}
