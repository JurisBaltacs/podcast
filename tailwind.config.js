/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
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
    require("flowbite/plugin"),
    // require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
