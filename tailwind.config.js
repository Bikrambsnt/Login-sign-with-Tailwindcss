/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik' ,'sans-serif'],
        roboto:['Roboto' ,'sans-serif'],
      },

      boxShadow:{
      custom:['rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'],
      },
    },
  },
  plugins: [],
}

