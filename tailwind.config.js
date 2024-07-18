/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#cea608',
        // primaryColor: '#FFD700',
        lightYellow: '#FFF7cc',
        white: '#FFFFFF',
        softGray: '#F5F5F5',
        lightGray: '#D3D3D3',
        // green: '#98FB98'
        green: '#215759'
      }
    },
  },
  plugins: [],
}