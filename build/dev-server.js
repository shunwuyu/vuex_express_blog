var config = require('../config')
if(!process.env.NODE_ENV) {
  process.env.NODE_ENV =
    JSON.parse(config.dev.env.NODE_ENV)
}
var opn = require('opn')
// console.log(process.env.NODE_ENV)
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware =
  require('http-proxy-middleware')
var autoOpenBrowser =
  !!config.dev.autoOpenBrowser
var port =
 process.env.PORT || config.dev.port
var proxyTable = config.dev.proxyTable
var webpackConfig =
  require('./webpack.dev.conf')

// / 路由 index.html
// webpack compiler
// *  index.html  spa
//  div#app  vue 挂载点
// webpack  babel loader
// vue-router spa
var app = express()

var compiler = webpack(webpackConfig)
// console.log(compiler)
var devMiddleware =
 require('webpack-dev-middleware')(compiler, {
   publicPath: webpackConfig.output.publicPath,
   quiet: true
 })
var hotMiddleware =
 require('webpack-hot-middleware')(compiler,{
   log: () => {}
 })
compiler.plugin('compilation',
 function(compilation) {
   compilation.plugin
    ('html-webpack-plugin-after-emit',
     function(data, cb) {
       hotMiddleware.publish({ action: 'reload'})
       cb()
     })
 })

app.use(devMiddleware)
app.use(hotMiddleware)

const uri = 'http://localhost:' + port
app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  if(autoOpenBrowser
    && process.env.NODE_ENV !== 'testing') {
      // 打开浏览器 uri  地址
      opn(uri)
    }
})
