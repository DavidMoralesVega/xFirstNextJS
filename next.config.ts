import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita exportación estática
  images: {
    unoptimized: true  // Necesario para exportación estática
  }
};

export default nextConfig;
