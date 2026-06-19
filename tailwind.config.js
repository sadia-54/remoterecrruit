/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3E85',
          dark: '#0f2557',
          light: '#2a52a8',
        },
        sky: {
          brand: '#52B4DA',
        },
        pink: {
          brand: '#FF4F8B',
        },
        purple: {
          brand: '#3159D3',
        },
        lavender: '#E8EEFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
