const autoprefixer = require('autoprefixer');

module.exports = {
  srcDir: 'app/',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }
    ]
  },
  css: [
    { src: "~assets/style/global.less", lang: "less" }
  ],
  build: {
    postcss: [
      autoprefixer({
        browsers: [
          'Android >= 4.0',
          'IOS >= 7.0'
        ]
      })
    ]
  }
};