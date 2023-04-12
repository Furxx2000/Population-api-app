/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      violet: '#651FFF',
      white: '#ffffff',
      lightGray: 'rgba(255, 255, 255, 0.3)',
    },
    fontFamily: {
      english: ['Ubuntu', 'sans-serif'],
      chinese: ['Noto-Sans-TC', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        default: '0px 7px 10px rgba(0, 0, 0, 0.2)',
      },
      dropShadow: {
        default: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
