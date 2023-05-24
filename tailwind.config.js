/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    extend: {
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
      colors: {
        main: "#ef4230",
        second: "#515155",
        bg: "#ede7d7",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};

