/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "48p": "48%",
      },
      color: {
        darkGreen: "#84cc16",
      },
    },
  },
  plugins: [],
};
