/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dispay': ['Figtree'],
        'body': ['Figtree'],
      },
    },
  },
  plugins: [],
}
