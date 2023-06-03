// Validate schema on build
// see: https://env.t3.gg/docs/nextjs
import './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
