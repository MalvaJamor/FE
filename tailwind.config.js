/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -6px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        custom: ['jakarta', 'sans-serif']
      },
      colors: {
        'custom-purplish-blue': '#546FFF',
        'custom-dark-blue': '##141522' 
      },
      fontWeight: {
        'lighter':'600',
        'moreLight': '400',
      },
    },
  },
  plugins: [],
}