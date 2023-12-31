/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    fontFamily : {
      Vazir : [ "Vazir" , "sans-serif" ] 
    } ,
    
    screens: {
      // => @media (min-width: px)
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {
      backgroundImage: {
        'header-pattern': "url('/images/headerBgDesktop.png')",
        'header-Respattern' : "url('/images/headerBgMobile.png')",
        'body-pattern': "url('/images/bodyBg.png')",
        'quick-access-1' : "url('/images/categories/category-left.jpg')",
        'quick-access-2' : "url('/images/categories/category-right.jpg')",
      },
      colors : {
        'black' : '#000000',
        'white': '#ffffff',
        Orange : {
          200 : "#FED7AA" ,
          300 : "#FDBA74"
        } ,
        Gray : {
          100 : "#F3F4F6" ,
          300 : "#D1D5DB" ,
          400 : "#9CA3AF" ,
        },
        Zinc : {
          600 : "#52525B" ,
          700 : "#3F3F46" ,
        },
        Teal : { 
          600 : "#0D9488" ,
          700 : "#0F766E" ,
        },
        Emerald : {
          500 : "#10B981" ,
          600 : "#059669" ,
        },
        Red : {
          400 : "#F87171"
        },
        Yellow : {
          400 : "#FACC15" 
        }
      },
      container : {
        center : true ,
        padding : {
          DEFAULT : "2rem" ,
          lg : "0.625rem"
        }
      }
    },
  },
  plugins: [],
}
