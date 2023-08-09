/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
    },
    colors: {
      'background'   : '#F9F9F9',
      'primary'      : {
        '50' : '#007197',
        '100': '#007EA9'
      },
      'secondary'    : '#008D68',
      'subtitle'     : '#5F728C',
      'text'         : '#7A7A7A',
      'title'        : '#1F1F1F',
      'available-card' : {
        '50' : '#386CF1',
        '100': '#4A7DFF',
      },
      'active-card'  : {
        '50' : '#5339ED',
        '100': '#644AFF',
      },
      'approved-card': {
        '50' : '#E16D19',
        '100' : '#F97A1D',
      },
      'start-card'   : {
        '50' : '#C8A21B',
        '100': '#D8AE17',
      },
      'refunded-card': {
        '50'  : '#2A9604',
        '100' : '#2DA403',
      },
      'expired-card' : {
        '50'  : '#CC3C89',
        '100' : '#E03C94',
      },
      'refused-card' : {
        '50'  : '#D52317',
        '100' : '#ED2316', 
      }
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic' : 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const plugins = [];
