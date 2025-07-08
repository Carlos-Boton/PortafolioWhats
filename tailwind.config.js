/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      rotate: (() => {
        const rotaciones = {};
        for (let i = 1; i < 360; i++) {
          if (![0, 45, 90, 180].includes(i)) {
            rotaciones[i] = `${i}deg`;
          }
        }
        return rotaciones;
      })(),
    },
  },
  plugins: [],
}
