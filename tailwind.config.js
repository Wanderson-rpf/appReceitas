/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Figtree'],
      },
      colors: {
        clrMain: {
          50: '#FF6C4D',
          100: '#ff5733',
        }
      },
    },
  },
  plugins: [],
}
