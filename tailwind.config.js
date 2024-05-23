/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '50%',
          },
        },
      },
      animation: {
        animate: 'animate 14s linear infinite',
      },
    },
  },
  plugins: [],
}

