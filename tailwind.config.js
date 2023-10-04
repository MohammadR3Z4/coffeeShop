/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // => @media (min-width: px)
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
      },
      Zinc : {
        600 : "#52525B" ,
        700 : "#3F3F46" ,
      },
    },
    extend: {
      backgroundImage: {
        'header-pattern': "url('/images/headerBgDesktop.png')",
        'body-pattern': "url('/images/bodyBg.png')",
      },
      container : {
        center : true ,
        padding : {
          DEFAULT : "1rem" ,
          lg : "0.625rem"
        }
      }
    },
  },
  plugins: [],
}
