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

const isDev = process.env.NODE_ENV !== 'production'

dotenv.config({
  path: isDev ? './film-doms-env/.env.local' : './film-doms-env/.env',
})

module.exports = nextConfig
