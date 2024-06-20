/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      cairo: "Cairo",
    },
    colors: {
      // Includes all default Tailwind colors
      ...colors,
    },
    extend: {
      animation: {
        rotate: "rotate 1.5s infinite linear",
      },
      keyframes: {
        rotate: {
          to: { transform: "rotate(1turn)" },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
