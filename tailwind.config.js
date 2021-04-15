const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
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
      primary: 'var(--primaryColor, #353535)',
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      danger: '#d54356'
    },
    fill: (theme) => ({
      primary: theme('colors.primary'),
      black: theme('colors.black'),
      white: theme('colors.white')
    })
  },
  variants: {
    extend: {
      display: ['dark', 'group-hover'],
      backgroundOpacity: ['dark'],
      margin: ['last'],
      fill: ['dark'],
      placeholderOpacity: ['dark']
    }
  },
  plugins: []
}
