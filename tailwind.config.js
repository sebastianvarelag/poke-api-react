/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: '#EF5350',
      secondary: '#1D1D1B'
    },
    fontFamily: {
      'Monda': ['monda', 'sans-serif']
    }
  },
  
  plugins: [],
}