/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        grey1: "#252525",
        grey2: "#868686",
        grey3: "#ececec",
        grey4: "#B4B4B4",
        grey5: "#3c3c3c",
        grey6: "#948f8a",
        black1: "#222222",
        orange1: "#f74557",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      // addVariant("children", "&>*");
      // addVariant("child-hover", "& > *:hover");
    }),
  ],
};
