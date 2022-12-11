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
    // screens: {
    //   sm: "576px",
    //   md: "960px",
    //   lg: "1440px",
    // },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      // addVariant("children", "&>*");
      // addVariant("child-hover", "& > *:hover");
    }),
  ],
};

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }