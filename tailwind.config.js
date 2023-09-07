/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#3A1E13",
        whiteGray: "#F8F9FA",
        hoverTest: "#3A1E13",
        hoverPale: "#b18e7d",
      },
      transitionTimingFunction: {
        "flip-hover": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
