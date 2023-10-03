/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      'black' : '#000000',
      'white': '#ffffff',
      Orange : {
        200 : "#FED7AA" ,
        300 : "#FDBA74"
      } ,
      Gray : {
        100 : "#9CA3AF" ,
        300 : "#D1D5DB" ,
        400 : "#9CA3AF" ,
      }
    },
    extend: {
      backgroundImage: {
        'header-pattern': "url('/images/headerBgDesktop.png')",
      },

    },
  },
  plugins: [],
}
