const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { NODE_ENV = 'production' } = process.env

const IS_DEV = NODE_ENV !== 'production'

module.exports = {
  name: 'server',
  target: 'node',
  mode: IS_DEV ? 'development' : 'production',
  entry: path.join(__dirname, '/src/server.ts'),
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
                ['@babel/plugin-proposal-class-properties', { loose: true }]
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
              limit: false
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    pathinfo: false
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
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
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  devtool: IS_DEV ? 'eval' : false,
  externals: [nodeExternals()],
  plugins: [
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
  ]
}
