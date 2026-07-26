/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx.ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#1C1B29',
        paper: '#FAF7F2',
        amber: '#C08A3E',
        forest: '#33473E',
        rose: '#B4534A',
      },
    },
  },
  plugins: [],
}