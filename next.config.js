/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/microsoft-factorialIT' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/microsoft-factorialIT' : '',
}

module.exports = nextConfig
