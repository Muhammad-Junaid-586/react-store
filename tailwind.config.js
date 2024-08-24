/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      screens: {
        'mysm' : '590px',
        'mobile': '475px',     // Extra small devices
        'myMd': '992px',    // Small devices
        'mytablet': '700px',    // Medium devices
        'laptop': '1024px',
       
      },
    },
  
  },
  plugins: [
    
  ],
}

