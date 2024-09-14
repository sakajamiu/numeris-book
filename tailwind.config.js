/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Neue-font':['Neue Haas Grotesk Display Pro', 'sans-serif']
      },
      colors:{
        Grey: '#697598',
        Darkgrey:'#373B47'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

