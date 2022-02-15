module.exports = {
  assetPrefix: './',
  async redirects() {
    return [
      {
        source: '/resort/good-time-relax-resort',
        destination: '/good-time-relax-resort',
        permanent: true,
      },
    ]
  },
  // cssLoaderOptions: {
  //   url: false
  // },
  // reactStrictMode: true,
  images: {
      // loader: 'imgix',
      // path: 'https://goodtimehospitality.com/',
      domains: ['www.datocms-assets.com']
  },
}