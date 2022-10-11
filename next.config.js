/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
