/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kaakeslime: '#BFC23F',
        kaakesbrown: '#523E20',
      },
    },
  },
  plugins: [],
};
