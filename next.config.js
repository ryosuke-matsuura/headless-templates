/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: ['static.wixstatic.com', 'media.wixstatic.com', 'wix.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
