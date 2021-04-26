const path = require('path')
const { readFileSync } = require('fs')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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
      key: IS_DEV
        ? readFileSync(path.resolve('network/config/key.pem'), 'utf8')
        : null,
      cert: IS_DEV
        ? readFileSync(path.resolve('network/config/server.pem'), 'utf8')
        : null
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
        test: /.mp3$/,
        loader: 'file-loader'
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
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      }),
      new CssMinimizerPlugin({
        parallel: 4
      })
    ]
  },
  plugins: [
    IS_DEV && new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ].filter(Boolean)
}
