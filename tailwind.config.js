/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      display:'Bebas Neue'
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1300px',
      }
    },
  },
  plugins: [],
}

