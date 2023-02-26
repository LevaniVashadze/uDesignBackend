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
        yellow: {
          250: "#fff684",
          270: "#eddf37"
        },
        custom: {
          1: "#2C394B"
        }
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};

