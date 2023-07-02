/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        30: "30%",
      },
      responsive: ["responsive"],
      colors: {
        "gray-custom": "#ececec",
        "light-blue-custom": "#7ec7fe",
      },
    },
  },
  plugins: [],
};
