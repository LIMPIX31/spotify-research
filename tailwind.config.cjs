/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Jetbrains Mono']
    },
    extend: {
      colors: {
        'back': {
          DEFAULT: '#2E2938',
          '50': '#9288A8',
          '100': '#867B9E',
          '200': '#6F6387',
          '300': '#5A506D',
          '400': '#443C52',
          '500': '#2E2938',
          '600': '#221E29',
          '700': '#16131B',
          '800': '#0A090C',
          '900': '#000000'
        },
        'accent': {
          DEFAULT: '#B4ACF9',
          '50': '#FFFFFF',
          '100': '#F9F8FF',
          '200': '#E8E5FD',
          '300': '#D6D2FC',
          '400': '#C5BFFA',
          '500': '#B4ACF9',
          '600': '#9A8FF7',
          '700': '#8073F5',
          '800': '#6756F3',
          '900': '#4D3AF1'
        }
      }
    },
  },
  plugins: [],
}
