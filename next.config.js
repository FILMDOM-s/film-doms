const dotenv = require('dotenv')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'imagedelivery.net',
      'ssl.pstatic.net',
      'k.kakaocdn.net',
      'lh3.googleusercontent.com',
      'picsum.photos',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
}

dotenv.config({
  path: './film-doms-env/.env.local',
})

module.exports = nextConfig
