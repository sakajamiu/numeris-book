/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Neue-font':['Neue Haas Grotesk Text Pro', 'sans-serif']
      },
      colors:{
        Grey: '#697598',
        Darkgrey:'#373B47',
        primary: '#1F1F23',
        blue:'#003EFF',
        black: '#1F1F23',
        Lightgrey:'#F6F8FA',
        grey3 :'#666F77',
        grey2:'#B7BDCF',
        ash:'#666F77',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

