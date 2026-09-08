// Tüm hesaplayıcıların href/etiket/kategori eşlemesi.
// CalculatorNav, blog yazılarındaki "İlgili Hesaplayıcı" CTA'sı ve JSON-LD
// breadcrumb şeması bu listeyi kullanır.
export const CALCULATORS = [
  { href: "/maas-hesaplama", label: "Maaş Hesaplama", category: "Vergi & Maaş" },
  { href: "/kdv-hesaplama", label: "KDV Hesaplama", category: "Vergi & Maaş" },
  {
    href: "/kidem-tazminati-hesaplama",
    label: "Kıdem Tazminatı",
    category: "Vergi & Maaş",
  },
  {
    href: "/kredi-taksit-hesaplama",
    label: "Kredi Taksit",
    category: "Kredi & Yatırım",
  },
  { href: "/yillik-izin-hesaplama", label: "Yıllık İzin", category: "İş Hukuku" },
  {
    href: "/ihbar-tazminati-hesaplama",
    label: "İhbar Tazminatı",
    category: "İş Hukuku",
  },
  { href: "/yuzde-hesaplama", label: "Yüzde Hesaplama", category: "Genel" },
  {
    href: "/enflasyon-hesaplama",
    label: "Enflasyon Hesaplama",
    category: "Kredi & Yatırım",
  },
  { href: "/yakit-masrafi-hesaplama", label: "Yakıt Masrafı", category: "Genel" },
  { href: "/vki-hesaplama", label: "VKİ Hesaplama", category: "Genel" },
  {
    href: "/bilesik-faiz-hesaplama",
    label: "Bileşik Faiz",
    category: "Kredi & Yatırım",
  },
  {
    href: "/kira-artis-hesaplama",
    label: "Kira Artışı",
    category: "Kredi & Yatırım",
  },
  {
    href: "/kredi-karti-asgari-odeme-hesaplama",
    label: "Asgari Ödeme",
    category: "Vergi & Maaş",
  },
  { href: "/tapu-harci-hesaplama", label: "Tapu Harcı", category: "Vergi & Maaş" },
  {
    href: "/gecikme-zammi-hesaplama",
    label: "Gecikme Zammı",
    category: "Vergi & Maaş",
  },
  {
    href: "/altin-doviz-cevirici",
    label: "Altın/Döviz Çevirici",
    category: "Kredi & Yatırım",
  },
  { href: "/tarih-farki-hesaplama", label: "Tarih Farkı", category: "Genel" },
] as const;

export type CalculatorHref = (typeof CALCULATORS)[number]["href"];

export const CALCULATOR_LABEL_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.label])
) as Record<CalculatorHref, string>;

export const CALCULATOR_CATEGORY_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.category])
) as Record<CalculatorHref, string>;
