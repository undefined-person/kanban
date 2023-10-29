/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#635FC7',
        primaryLight: '#A8A4FF',
        black: '#000112',
        veryDarkGray: '#20212C',
        darkGray: '#2B2C37',
        mediumGray: '#828FA3',
        lightGray: '#F4F7FD',
        red: '#EA5555',
        redLight: '#FF9898',
        linesLight: '#E4EBFA',
        linesDark: '#3E3F4E',
      },
    },
  },
  plugins: [],
}
