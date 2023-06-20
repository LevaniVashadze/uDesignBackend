/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js, jsx, ts, tsx, html, css}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#16224C",
        "light-gray": "#D9D9D9",
        "light-yellow": "#FFF684"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"]
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};

