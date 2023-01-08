/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mohit.sgp1.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

module.exports = nextConfig
