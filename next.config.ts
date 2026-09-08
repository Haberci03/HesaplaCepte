import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // favicon.ico ve ads.txt gibi hash'siz statik dosyalar Next.js'in
        // varsayılan sunucusunda "no-cache" olarak sunulur; tarayıcı önbelleğini
        // etkin kullanmak için makul bir max-age tanımlıyoruz.
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate",
          },
        ],
      },
      {
        source: "/ads.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
