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
    unoptimized: true,
  },
  // Next.js 15 specific configurations
  experimental: {
    // Enable React 19's new features
    optimizePackageImports: [
      'styled-components',
      'framer-motion',
    ],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Theo_Online_Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Theo_Online_Portfolio/' : '',
}

module.exports = nextConfig 