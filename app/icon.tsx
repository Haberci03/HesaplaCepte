import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    { contentType: "image/png", size: { width: 16, height: 16 }, id: "16" },
    { contentType: "image/png", size: { width: 32, height: 32 }, id: "32" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const iconId = await id;
  const size = iconId === "16" ? 16 : 32;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0284c7",
          borderRadius: size === 16 ? 3 : 7,
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: size === 16 ? 11 : 21,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          H
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
