/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 4px 2px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}