
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'greyCustom': {
          100: 'hsl(0, 0%, 98%)',
          400: 'hsl(0, 0%, 41%)',
          900: 'hsl(0, 0%, 8%)'
        },
        'redCustom': {
          500: '#ff5252'
        },
        'linearGradient': {
          600: '#6448fe',
          700: '#600594'
        }
      }
    },
  },
  plugins: [],
}