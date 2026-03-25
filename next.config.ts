import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Dev-Folio',
  assetPrefix: '/Dev-Folio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
