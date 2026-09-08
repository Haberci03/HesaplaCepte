import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/maas-hesaplama", priority: 0.9 },
    { path: "/kdv-hesaplama", priority: 0.9 },
    { path: "/kidem-tazminati-hesaplama", priority: 0.9 },
    { path: "/kredi-taksit-hesaplama", priority: 0.9 },
    { path: "/yillik-izin-hesaplama", priority: 0.9 },
    { path: "/ihbar-tazminati-hesaplama", priority: 0.9 },
    { path: "/yuzde-hesaplama", priority: 0.9 },
    { path: "/enflasyon-hesaplama", priority: 0.9 },
    { path: "/yakit-masrafi-hesaplama", priority: 0.9 },
    { path: "/vki-hesaplama", priority: 0.9 },
    { path: "/bilesik-faiz-hesaplama", priority: 0.9 },
    { path: "/kira-artis-hesaplama", priority: 0.9 },
    { path: "/kredi-karti-asgari-odeme-hesaplama", priority: 0.9 },
    { path: "/hakkimizda", priority: 0.3 },
    { path: "/gizlilik-politikasi", priority: 0.3 },
    { path: "/iletisim", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
