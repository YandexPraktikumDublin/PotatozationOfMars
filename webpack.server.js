const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
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
