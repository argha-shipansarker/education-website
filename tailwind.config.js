/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primaryColor": "#D6BB4E",
        "navbarBackground": "rgba(0, 0, 0, 0.2)"
      },

      spacing: {
        26: "6.5rem",
        35: "8.75rem"
      },

      backdropBlur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
}
