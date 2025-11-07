import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  output: 'export',  // Habilita exportación estática
  images: {
    unoptimized: true  // Necesario para exportación estática
  },
  // Configuración vacía de Turbopack para silenciar warning
  turbopack: {},
};

// Configuración de PWA
const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Deshabilitar en dev
  register: true,
  skipWaiting: true,
  // Para exportación estática
  buildExcludes: [/middleware-manifest\.json$/],
});

export default pwaConfig(nextConfig);
