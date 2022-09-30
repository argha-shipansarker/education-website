/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primaryColor": "#D6BB4E",
        "secondaryColor": "#F6F2DF",
        "navbarBackground": "rgba(0, 0, 0, 0.2)"
      },

      spacing: {
        26: "6.5rem",
        35: "8.75rem",
        46: "11.5rem",
        49: "12.25rem",
        152: "38rem",
        174: "43.5rem",
        220: "55rem"
      },

      borderWidth: {
        1: "1px"
      },

      backdropBlur: {
        xs: "2px"
      },

      fontSize: {
        "6.5xl": "4rem"
      }
    },
  },
  plugins: [],
}
