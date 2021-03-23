const path = require('path')
const webpack = require('webpack')
const { readFileSync } = require('fs')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    IS_DEV && 'react-hot-loader/patch',
    path.join(__dirname, '/src/index.tsx')
  ].filter(Boolean),
  mode: IS_DEV ? 'development' : 'production',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hotOnly: true,
    port: 8080,
    liveReload: false,
    https: {
      key: readFileSync(path.resolve('network/config/key.pem'), 'utf8'),
      cert: readFileSync(path.resolve('network/config/server.crt'), 'utf8')
    },
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  output: {
    publicPath: 'https://localhost:8080/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  plugins: [
    IS_DEV && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ].filter(Boolean)
}
