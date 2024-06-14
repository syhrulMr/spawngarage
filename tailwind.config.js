/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home/**/*.html",
    "./other-page/**/*.html",
    "./assets/css/**/*.css",
    "./src/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      colors: {
        primary:'rgb(26,26,26)',
        secondary:'rgb(232,25,56)',
        accent:'#8e8e8e',
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
