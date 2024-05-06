/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily: {
      cairo: "Cairo",
    },
    extend: {
       animation: {
        rotate: 'rotate 1.5s infinite linear',
      },
      keyframes: {
        rotate: {
          to: { transform: 'rotate(1turn)' },
        },
      },
    },
  },
  plugins: [],
};
