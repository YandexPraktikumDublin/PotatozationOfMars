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
    screens: {
      'portrait': {'max': '567px'},
      'sm': {'min': '568px','max': '719px'},
      'md': {'min': '720px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
