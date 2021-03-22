module.exports = {
  plugins: ['react-hot-loader/babel'],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
}
