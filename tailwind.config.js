/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0f172a",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl":"6rem",
        }
      }
    },
  },
  plugins: [],
}

