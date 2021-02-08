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
    fontSize: {
      'xxs': '.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      primary: '#353535',
      black: colors.black,
      white: colors.white,
      danger: '#d54356',
      transparent: colors.transparent
    },
    screens: {
      'portrait': {'max': '567px'},
      'sm': {'min': '568px','max': '719px'},
      'middle': {'min': '720px', 'max': '767px'},
      'md': {'min': '767px', 'max': '1023px'},
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
