var config = require('../config')
if(!process.env.NODE_ENV) {
  process.env.NODE_ENV =
    JSON.parse(config.dev.env.NODE_ENV)
}
// console.log(process.env.NODE_ENV)
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware =
  require('http-proxy-middleware')

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
app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
})
