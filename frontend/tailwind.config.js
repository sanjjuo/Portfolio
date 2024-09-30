/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
          center: true,
        padding:{
          lg :"1.5rem",
          sm: "5rem",
          xs: "1rem",
          md: "1rem"
        }
      }
    },
  },
  plugins: [],
})