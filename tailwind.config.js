 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      backgroundImage: {
          'progress': 'conic-gradient(#4B53FF_0deg,#4B53FF_calc(var(--value)*3.6deg),#A4CEFF_calc(var(--value)*3.6deg))',
        },

      colors: {
        'blue': '#5a66f1',
        'red': '#f43f5e',
        'light-blue': '#60a5fa',
        'light-white': '#d9defc',
        'light-gray': '#eeeffe',
        'light-medium': '#cbd5e1',
        'dark-gray': '#64748b',
        'then-blue': '#F8FAFC',
      },

      width: {
        '2.5': '10',
        '9.5': '38px',
        '3.5': '14px',
        '27.5': '110px',
        '97.75': '391px',
        '53.5': '214px',
        '47.5': '190px',
        '36.25': '145px',
        '37.5': '150px',
        '42.5': '170px',
        '43.75': '175px',
        '101.75': '407px',
        '13': '52px',
        '1.5': '6%',
        '23.5': '94%',
        '21.25': '85%',
        '3.75': '15%',
        '5.25': '21%',
        '19.25': '77%',
      },

      spacing: {
        '2.25': '9px',
        '1.25': '5px',
        '3.5': '14px',
      },
        
     },

     fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: [ "Lobster","sans-serif"]
    },

   },
   plugins: [],
 }