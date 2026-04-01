import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: '/coming-soon', destination: '/waitlist', permanent: true },
      { source: '/vm-marketplace', destination: '/marketplace', permanent: true },
      { source: '/node-provider', destination: '/providers', permanent: true },
    ];
  },
};

export default nextConfig;
