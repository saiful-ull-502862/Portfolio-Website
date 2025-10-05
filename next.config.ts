import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages (only in production build)
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '',
  // Disable server-side image optimization for static export
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable static image optimization during export
      Object.assign(config.resolve.fallback, {
        fs: false,
        net: false,
        tls: false,
      });
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
