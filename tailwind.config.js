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
        "navbarBackground": "rgba(0, 0, 0, 0.2)",
        "aboutSectionBackground": "#F4F9F8",
        "mutedTextColor": "#707070"
      },

      spacing: {
        18: "4.5rem",
        26: "6.5rem",
        35: "8.75rem",
        46: "11.5rem",
        49: "12.25rem",
        70: "17.5rem",
        74.5: "18.625rem",
        94.5: "23.625rem",
        152: "38rem",
        164: "41rem",
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
        "3.5xl": "2rem",
        "6.5xl": "4rem",
      },

      lineHeight: {
        16: "4rem"
      }
    },
  },
  plugins: [],
}
