const path = require('path')
const { readFileSync } = require('fs')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { NODE_ENV = 'production' } = process.env

const IS_DEV = NODE_ENV !== 'production'

module.exports = {
  name: 'client',
  target: 'web',
  entry: [path.join(__dirname, '/src/index.tsx')],
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : false,
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '*': 'http://0.0.0.0:8000'
    },
    liveReload: false,
    https: {
      key: readFileSync(path.resolve('network/config/key.pem'), 'utf8'),
      cert: readFileSync(path.resolve('network/config/server.pem'), 'utf8')
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
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript',
                '@babel/preset-react'
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                'react-hot-loader/babel',
                ['@babel/plugin-proposal-decorators', { legacy: true }]
              ]
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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              iesafe: true
            }
          }
        ]
      }
    ]
  },
  output: {
    publicPath: IS_DEV ? 'https://127.0.0.1:8080/' : '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  optimization: {
    minimize: !IS_DEV,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4
      })
    ]
  },
  plugins: [
    IS_DEV && new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/webmanifest'),
          to: path.resolve(__dirname, 'dist/webmanifest')
        },
        {
          from: path.resolve(__dirname, 'src/robots.txt'),
          to: path.resolve(__dirname, 'dist/robots.txt')
        },
        {
          from: path.resolve(__dirname, 'src/sw.js'),
          to: path.resolve(__dirname, 'dist/sw.js')
        }
      ]
    })
  ].filter(Boolean)
}
