const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        pink: colors.pink,
        orange: colors.orange,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,
        green: colors.green,
        red: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
