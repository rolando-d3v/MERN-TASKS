const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        orange: colors.orange,
        rose: colors.rose,

        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,

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
