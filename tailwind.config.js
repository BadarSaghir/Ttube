/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{tsx,jsx,ts,js}','./components/**/*.{tsx,jsx,ts,js}'],
  theme: {
    extend: {
      width:{
          1600:'1600px',
          400:'400px',
          450:'450px',
          210:'210px',
          550:'550px',
          260:'260px',
          650:'650px'


      },
      
    },
  },
  plugins: [],
}
