import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // ads.txt gibi hash'siz statik dosyalar Next.js'in varsayılan
        // sunucusunda "no-cache" olarak sunulur; tarayıcı önbelleğini etkin
        // kullanmak için makul bir max-age tanımlıyoruz. (favicon artık
        // app/icon.tsx ile üretiliyor ve hash'li olduğu için zaten
        // immutable cache alıyor.)
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
