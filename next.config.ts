import type { NextConfig } from "next";

// `*.dev.tsx` 라우트(브랜드 실험실)는 `pnpm dev`에서만 열리고 정적 빌드에는 포함되지 않는다.
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: isDev ? ["dev.tsx", "tsx", "ts"] : ["tsx", "ts"],
  experimental: {
    globalNotFound: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
