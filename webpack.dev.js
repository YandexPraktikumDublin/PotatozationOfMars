const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    open: true
  },
  target: 'node',
  externals: [
    nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })
  ],
})
