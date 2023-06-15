/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root", //全域覆蓋 MUI style
  theme: {
    extend: {},
  },
  plugins: [],
}

