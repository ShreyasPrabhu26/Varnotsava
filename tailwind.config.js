/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter": ['Inter', "sans-serif"],
      "Rockybilly": ["Rockybilly", "inter"],
      "Autumn": ["Autumn", "inter"],
    },
    extend: {},
  },
  plugins: [],
}