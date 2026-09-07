import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/maas-hesaplama", priority: 0.9 },
    { path: "/kdv-hesaplama", priority: 0.9 },
    { path: "/kidem-tazminati-hesaplama", priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
