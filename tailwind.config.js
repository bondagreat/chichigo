/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        '580': "580px",
        '728': "728px",
      },
      minHeight: {

      },
      maxWidth: {

      },
      maxHeight: {

      },
      height: {
        '100': "400px",
        '66': "66px",
        '650': "650px",
        '632': "632px",
      },
      width: {
        '100': "400px",
        '68': "68px",
        '650': "650px",
        '870': "870px",
      },
      gap: {
        '18': "4.5rem",
      },
      colors: {
        'my-blue': '#324A6F',
        'my-white': '#F6F3EE',
        'my-gray': '#9DA3AF',
        'my-orange': '#C5874A',
        'my-crs': '#2B384B',
      }
    },
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
