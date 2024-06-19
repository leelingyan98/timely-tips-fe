const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
    ],
  theme: {
    colors: {
      offwhite: '#FAF9F6',
      primary: '#2e7a8c',
      primarylight: '#b8e4e9',
      primarydark: '#2a5360',
      secondary: '#f27a8a',
      secondarylight: '#fde6e7',
      secondarydark: '#b31d3f',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}