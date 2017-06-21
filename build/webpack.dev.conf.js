var webpack = require('webpack')
var config = require('../config')
var baseWebpackConfig =
 require('./webpack.base.conf')
var merge = require('webpack-merge')
var HtmlWebpackPlugin =
  require('html-webpack-plugin')


module.exports = merge(baseWebpackConfig,{
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
