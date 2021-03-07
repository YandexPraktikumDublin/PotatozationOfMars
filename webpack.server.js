const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  target: 'node',
  externals: [
    nodeExternals({ allowlist: [/\.(?!(?:tsx?|json|js)$).{1,5}$/i] })
  ],
}) 