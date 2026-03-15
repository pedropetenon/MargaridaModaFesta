/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Useful for basic export or local dev without sharp
  },
}

module.exports = nextConfig
