import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xcelsior26.tech",
      },
    ],
  },
};

export default nextConfig;
