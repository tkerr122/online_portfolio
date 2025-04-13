/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  // Next.js 15 specific configurations
  experimental: {
    // Enable React 19's new features
    optimizePackageImports: [
      'styled-components',
      'framer-motion',
    ],
  },
}

module.exports = nextConfig 