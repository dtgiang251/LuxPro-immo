/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#85053B',
        'text-gray': '#939393',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['38px', '44px'],
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '4px 10px 30px 0 rgba(0, 0, 0, 0.06)',
        'property': '0 25px 50px -12px rgba(0, 0, 0, 0.16)',
        'search': '0 30px 60px -15px rgba(30, 52, 96, 0.15)',
        'hero-card': '0 25px 50px -12px rgba(30, 52, 96, 0.07)',
      },
      backdropBlur: {
        'xs': '5px',
      },
    },
  },
  plugins: [],
}
