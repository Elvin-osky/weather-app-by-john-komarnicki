/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      // Custom Colors
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    // Custom Fonts
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    // Container
    container: {
      padding: "2rem",
      center: true,
    },
    // Media Query
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
