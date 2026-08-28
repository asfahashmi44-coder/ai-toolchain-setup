import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during production build on Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during production build on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

