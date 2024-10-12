/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      width: {
        164:'656px',
        200:'800px'
      },
      height: {
        200:'800px'
      },
      maxWidth: {
        120:'480px'
      },
      fontSize: {
        '18':'18px'
      },
      
    }
  },
  plugins: [tailwindScrollbar],
};
