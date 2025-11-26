/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8b0f45',
        'primary-dark': '#6a0b35',
        charcoal: '#1b1f26',
        stone: '#6b7280',
        sand: '#f5f3f0',
      },
      fontFamily: {
        sans: ['\"DM Sans\"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
