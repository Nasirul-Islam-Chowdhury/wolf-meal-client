/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['Abril Fatface', "cursive"],
      'secondary': ['Almarai', "sans-serif"],
      'third': ['Didact Gothic', "sans-serif"],
      'founrth': ['Outfit', "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}

