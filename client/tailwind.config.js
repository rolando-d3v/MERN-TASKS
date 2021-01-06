const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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

        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        gray: colors.gray,

        azul: {
          100: "#f5f5f5",
          200: "#42424242",
          300: "#18202e",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#10131a",
          900: "#0c0a20",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
