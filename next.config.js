/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', 'vercel.app', 'theo-online-portfolio.vercel.app'],
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
  // Set the new experimental.serverActions configuration
  serverRuntimeConfig: {
    allowEmbeddedInProduction: true,
  },
}

module.exports = nextConfig 