var webpack = require('webpack')
var baseWebpackConfig =
 require('./webpack.base.conf')
var merge = require('webpack-merge')
module.exports = merge(baseWebpackConfig,{
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
