/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js, jsx, ts, tsx, html, css}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          250: "#fff684",
          270: "#eddf37",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
