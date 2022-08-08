/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "torch-red": {
          DEFAULT: "#FF184B",
          50: "#FFE9E7",
          100: "#FFD2D0",
          200: "#FFA2A3",
          300: "#FF747F",
          400: "#FF4662",
          500: "#FF184B",
          600: "#DA003F",
          700: "#9D0038",
          800: "#5F0029",
          900: "#220011",
        },
      },
    },
  },
  plugins: [],
};
