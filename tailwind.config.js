/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      responsive: ["responsive"],
      colors: {
        "gray-custom": "#ececec",
        "light-blue-custom": "#7ec7fe",
      },
    },
  },
  plugins: [],
};
