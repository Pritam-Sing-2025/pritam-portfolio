import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
