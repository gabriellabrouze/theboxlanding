/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#255B4B',
        secondary: '#E9E4DA',
        accent: '#4A738E',
      },
      fontFamily: {
        'lora': ['"Lora"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'source': ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
}
