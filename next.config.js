const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
    }
  }
  return withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      path: '',
    },
    basePath: '/',
    assetPrefix: '/',
  })
}
