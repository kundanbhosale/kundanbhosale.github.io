const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  // images: {
  //   loader: 'akamai',
  //   path: '/',
  // },
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
})
