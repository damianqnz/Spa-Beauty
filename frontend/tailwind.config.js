/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      roboto: ["Roboto", "sans-serif"],
      Poiret: ["Poiret One", "cursive"],
      Primary: ["Poppins"],
    },
    container: {
      padding: {
        default: '30px',
        lg: '0',
      },
    },
    extend: {
      colors: {
        Primary: '#222222',
        secondary: '#F5E6E0',
      },
    },
  },
  plugins: [ require("flowbite/plugin")
  ],
}
