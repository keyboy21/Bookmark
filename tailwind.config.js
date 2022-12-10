/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#5267DF',
        'bookmark-red': '#E70909',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#707385',
        'bookmark-white': '#FCFCFC',
        morp: '#EBECF0',
      },
      animation: {
        spin: 'spin 3s linear infinite',
        ping: 'ping 2s linear infinite',
      },

      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },

    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}
