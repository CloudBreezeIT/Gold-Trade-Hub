/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          usetheme: "#eab308",
        },


      },
      boxShadow: {
        catCardShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        productCardShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}