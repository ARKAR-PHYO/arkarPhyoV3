/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prinary: "#171C23",
        secondary: "#21272F",
        tertiary: "#88949B",
        alcohol: "#F0FCF9",
        ruby: "#29D882",
        "secondary-ruby": "#00BD95",
      },
      fontFamily: {
        Hind: ["Hind", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
