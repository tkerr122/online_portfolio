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
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Next.js 15 specific configurations
  experimental: {
    // Enable React 19's new features
    optimizePackageImports: [
      'styled-components',
      'framer-motion',
    ],
  },
  // Ensure we handle static HTML generation properly
  output: process.env.NEXT_PUBLIC_EXPORT === 'true' ? 'export' : undefined,
  // Configure basePath and assetPrefix for GitHub Pages deployment if needed
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Set the new experimental.serverActions configuration
  serverRuntimeConfig: {
    allowEmbeddedInProduction: true,
  },
}

module.exports = nextConfig 