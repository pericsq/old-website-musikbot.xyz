const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/invite',
        destination:
          'https://discord.com/oauth2/authorize?client_id=1290277492950564875&permissions=2184538160&response_type=code&redirect_uri=https%3A%2F%2Fmeww.me%2Fthankyou&integration_type=0&scope=bot+applications.commands+guilds',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://discord.gg/QXgV5mBt',
        permanent: true,
      },
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.meww.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
