import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
  // Add build cache configuration
  distDir: ".next",
};

export default nextConfig;
