/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cM: "Chillax-Medium",
        cR: "Chillax-Regular",
        cSB: "Chillax-SemiBold",
        cuda: "CUDA",
        samarkan: "Samarkan",
      },
    },
  },
  plugins: [],
}