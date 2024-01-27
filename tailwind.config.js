/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'ts3': '2px 4px 6px rgba(0,0,0,0.05)'
      }
    },
  },
  plugins: [],
}

