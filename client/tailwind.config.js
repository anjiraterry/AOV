/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'hover:to-red-700',
    'hover:to-pink-700',
    'hover:to-green-700',
    'hover:to-orange-700'
    // Add all other possible hover colors here
  ],
  theme: {
    extend: {},
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}