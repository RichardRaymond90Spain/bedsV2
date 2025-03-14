/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Add any other image domains you might use
  },
  // Ensure your app is optimized for Vercel
  output: 'standalone',
}

module.exports = nextConfig 