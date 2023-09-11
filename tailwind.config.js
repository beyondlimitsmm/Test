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
      backgroundImage: {
        "room-door": "url('/src/assets/images/rooms-door.svg')",
        room: "url('/src/assets/images/rooms.png')",
        articles: "url('/src/assets/images/articles.png')",
        "bar-details": "url('/src/assets/images/bar-details.png')",
        foodAndDrink: "url('/src/assets/images/FoodAndDrink.png')",
      },
      transitionTimingFunction: {
        "flip-hover": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
