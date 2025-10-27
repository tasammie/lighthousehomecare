// import type { NextConfig } from "next";
const nextConfig = {
  experimental: {
    nextThirdParties: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
