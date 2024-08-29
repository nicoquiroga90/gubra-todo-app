/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './public/index.html',
    './src/**/*.{html,jsx,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'poppins': 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
