

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        interSemiBold: ['inter_semi_bold', 'fallback-inter_semi_bold', 'Arial', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px', // custom breakpoint
      },
    },
  
  },
  plugins: [],
}