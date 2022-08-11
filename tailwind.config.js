/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        nav1: '#013298',
        nav2: '#6898CE',
        tomblurb1: '#FFCB99',
        tomblurb: '#F27A2B'
      }
    },
  },
  plugins: [],
}
