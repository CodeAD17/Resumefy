/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#EBF5FF',
          500: '#0096FF',
          600: '#0077CC',
        },
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}