import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '',
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
