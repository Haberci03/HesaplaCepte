import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "HesaplaCepte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <div
            style={{
              width: 18,
              height: 76,
              borderRadius: 9,
              backgroundColor: "#0284c7",
            }}
          />
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#0a0a0a",
            }}
          >
            {SITE_NAME}
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            color: "#52525b",
            maxWidth: 920,
            textAlign: "center",
          }}
        >
          Güncel oranlarla ücretsiz maaş, vergi, sağlık ve finans hesaplama
          araçları
        </div>
      </div>
    ),
    { ...size }
  );
}
