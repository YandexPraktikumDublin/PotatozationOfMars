const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'

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
  devtool: 'eval',
  externals: [nodeExternals()],
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })]
}
