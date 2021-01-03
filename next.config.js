module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/clar' : '',
  env: {
    APP_NAME: process.env.APP_NAME,
  },
};
