/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "1250px" },
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
