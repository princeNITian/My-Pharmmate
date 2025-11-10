/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfdfa",
          100: "#cff7f0",
          200: "#a5eee4",
          300: "#6fdcd4",
          400: "#38c4be",
          500: "#0fa39f",
          600: "#0f766e", // ✅ main brand color
          700: "#0d5e59",
          800: "#0f4944",
          900: "#0f3b38",
        },
      },
    },
  },
  plugins: [],
};
