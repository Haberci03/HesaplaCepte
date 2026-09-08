import {
  Wallet,
  Receipt,
  Briefcase,
  CreditCard,
  CalendarDays,
  FileWarning,
  Percent,
  TrendingUp,
  Fuel,
  HeartPulse,
  PiggyBank,
  Home,
  FileText,
  Calendar,
  Coins,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";

// Tüm hesaplayıcıların href/etiket/kategori/ikon eşlemesi.
// CalculatorNav, blog yazılarındaki "İlgili Hesaplayıcı" CTA'sı, ana
// sayfadaki araç kartları ve JSON-LD breadcrumb şeması bu listeyi kullanır.
export const CALCULATORS = [
  {
    href: "/maas-hesaplama",
    label: "Maaş Hesaplama",
    category: "Vergi & Maaş",
    icon: Wallet,
  },
  {
    href: "/kdv-hesaplama",
    label: "KDV Hesaplama",
    category: "Vergi & Maaş",
    icon: Receipt,
  },
  {
    href: "/kidem-tazminati-hesaplama",
    label: "Kıdem Tazminatı",
    category: "Vergi & Maaş",
    icon: Briefcase,
  },
  {
    href: "/kredi-taksit-hesaplama",
    label: "Kredi Taksit",
    category: "Kredi & Yatırım",
    icon: CreditCard,
  },
  {
    href: "/yillik-izin-hesaplama",
    label: "Yıllık İzin",
    category: "İş Hukuku",
    icon: CalendarDays,
  },
  {
    href: "/ihbar-tazminati-hesaplama",
    label: "İhbar Tazminatı",
    category: "İş Hukuku",
    icon: FileWarning,
  },
  {
    href: "/yuzde-hesaplama",
    label: "Yüzde Hesaplama",
    category: "Genel",
    icon: Percent,
  },
  {
    href: "/enflasyon-hesaplama",
    label: "Enflasyon Hesaplama",
    category: "Kredi & Yatırım",
    icon: TrendingUp,
  },
  {
    href: "/yakit-masrafi-hesaplama",
    label: "Yakıt Masrafı",
    category: "Genel",
    icon: Fuel,
  },
  {
    href: "/vki-hesaplama",
    label: "VKİ Hesaplama",
    category: "Genel",
    icon: HeartPulse,
  },
  {
    href: "/bilesik-faiz-hesaplama",
    label: "Bileşik Faiz",
    category: "Kredi & Yatırım",
    icon: PiggyBank,
  },
  {
    href: "/kira-artis-hesaplama",
    label: "Kira Artışı",
    category: "Kredi & Yatırım",
    icon: Home,
  },
  {
    href: "/kredi-karti-asgari-odeme-hesaplama",
    label: "Asgari Ödeme",
    category: "Vergi & Maaş",
    icon: CreditCard,
  },
  {
    href: "/tapu-harci-hesaplama",
    label: "Tapu Harcı",
    category: "Vergi & Maaş",
    icon: FileText,
  },
  {
    href: "/gecikme-zammi-hesaplama",
    label: "Gecikme Zammı",
    category: "Vergi & Maaş",
    icon: AlertCircle,
  },
  {
    href: "/altin-doviz-cevirici",
    label: "Altın/Döviz Çevirici",
    category: "Kredi & Yatırım",
    icon: Coins,
  },
  {
    href: "/tarih-farki-hesaplama",
    label: "Tarih Farkı",
    category: "Genel",
    icon: Calendar,
  },
] as const;

export type CalculatorHref = (typeof CALCULATORS)[number]["href"];

export const CALCULATOR_LABEL_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.label])
) as Record<CalculatorHref, string>;

export const CALCULATOR_CATEGORY_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.category])
) as Record<CalculatorHref, string>;

export const CALCULATOR_ICON_BY_HREF = Object.fromEntries(
  CALCULATORS.map((c) => [c.href, c.icon])
) as Record<CalculatorHref, LucideIcon>;
