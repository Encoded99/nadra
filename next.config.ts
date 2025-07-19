import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Disables ESLint during build
  },
};

export default nextConfig;
