/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 40s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-green-2px': { '-webkit-text-stroke': '2px #95C11E' },
        '.text-stroke-white': { '-webkit-text-stroke': '2px #fff' },
      };
      addUtilities(newUtilities);
    },
  ],
};
