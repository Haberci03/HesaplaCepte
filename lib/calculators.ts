// Tüm hesaplayıcıların href/etiket eşlemesi.
// CalculatorNav ve blog yazılarındaki "İlgili Hesaplayıcı" CTA'sı bu listeyi kullanır.
export const CALCULATORS = [
  { href: "/maas-hesaplama", label: "Maaş Hesaplama" },
  { href: "/kdv-hesaplama", label: "KDV Hesaplama" },
  { href: "/kidem-tazminati-hesaplama", label: "Kıdem Tazminatı" },
  { href: "/kredi-taksit-hesaplama", label: "Kredi Taksit" },
  { href: "/yillik-izin-hesaplama", label: "Yıllık İzin" },
  { href: "/ihbar-tazminati-hesaplama", label: "İhbar Tazminatı" },
  { href: "/yuzde-hesaplama", label: "Yüzde Hesaplama" },
  { href: "/enflasyon-hesaplama", label: "Enflasyon Hesaplama" },
  { href: "/yakit-masrafi-hesaplama", label: "Yakıt Masrafı" },
  { href: "/vki-hesaplama", label: "VKİ Hesaplama" },
  { href: "/bilesik-faiz-hesaplama", label: "Bileşik Faiz" },
  { href: "/kira-artis-hesaplama", label: "Kira Artışı" },
  { href: "/kredi-karti-asgari-odeme-hesaplama", label: "Asgari Ödeme" },
  { href: "/tapu-harci-hesaplama", label: "Tapu Harcı" },
  { href: "/gecikme-zammi-hesaplama", label: "Gecikme Zammı" },
  { href: "/altin-doviz-cevirici", label: "Altın/Döviz Çevirici" },
  { href: "/tarih-farki-hesaplama", label: "Tarih Farkı" },
] as const;

export type CalculatorHref = (typeof CALCULATORS)[number]["href"];

export const CALCULATOR_LABEL_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.label])
) as Record<CalculatorHref, string>;
