const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  name: 'client',
  entry: [
    IS_DEV && 'react-hot-loader/patch',
    IS_DEV &&
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    path.join(__dirname, '/src/index.tsx')
  ].filter(Boolean),
  devtool: 'eval',
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
    publicPath: '/',
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
