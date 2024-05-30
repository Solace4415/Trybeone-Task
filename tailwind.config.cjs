/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#434E61",
        primary: "#2F80ED",
      },
    },
  },
  plugins: [],
};

module.exports = config;
