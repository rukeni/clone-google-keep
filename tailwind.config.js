const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      cobalt: {
        DEFAULT: '#0047AB',
        50: '#64A4FF',
        100: '#4F98FF',
        200: '#2680FF',
        300: '#0069FD',
        400: '#0058D4',
        500: '#0047AB',
        600: '#003073',
        700: '#00183B',
        800: '#000103',
        900: '#000000',
      },
    },
    extend: {},
  },
  // plugins: [require('daisyui')],
};
