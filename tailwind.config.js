/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
   primary: "#ffc25d",
  grayCustom: "#333646",
  darkGray: "#252734"
},
container:{
  center:true,
  padding:{
    DEFAULT:'1rem',
    sm:'2rem',
  }
}
    },
  },
  plugins: [],
}

