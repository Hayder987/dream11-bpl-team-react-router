/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnBg: "rgb(231, 254, 41)",
        footerBg: "rgb(6, 9, 26)",
        navBg: "rgba(252, 252, 252, 0.764)",
        footerBg2: "rgba(255, 255, 255, 0.15)"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

