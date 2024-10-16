/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'slate': '#dddddd',
      'black': '#000000',
      'gray': {
        100: '#EFEFEF',
        200: '#808080',
        300: '#1C1C1C',
      },
      'success': {
        100: '#E1F8E0',
        200: '#82E480',
        300: '#05C801',
      },
      'alert': {
        100: '#F8E0E0',
        200: '#E48080',
        300: '#DB0000',
      },
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    screens: {

      'xxs': '375px',
      // => @media (min-width: 375px) { ... }

      'xs': '425px',
      // => @media (min-width: 425px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
