/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Dashboard.js",
    // Components
    "./src/components/Navbar.js",
    "./src/components/DataCard.js",
    "./src/components/NoGraphData.js",
    "./src/components/HorizontalGraphData.js",
    "./src/components/Sidenav.js"
  ],
  theme: {
    theme: {
      colors: {
        'blue': '#caf0f8',
        'transparent_black': 'rgba(0, 0, 0, 0.9)'
      },
      fontFamily: {
        monsterrat: ['Monsterrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
    extend: {},
  },
  plugins: [],
}

