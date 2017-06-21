var path = require('path')

module.exports = {
  build: {
    assetsRoot:
      path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/'
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: { //代理
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
    cssSourceMap: false
  }
}
