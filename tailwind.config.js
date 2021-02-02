const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.tsx'],
    options: {
      blocklist: ['test.tsx']
    }
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['serif'],
      display: ['Roboto', 'serif'],
      body: ['Roboto', 'sans-serif']
    },
    colors: {
      primary: '#353535',
      black: colors.black,
      white: colors.white,
      danger: '#d54356'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
