/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        grey: "#F5F8FA",
        mGreen: "#187C7C",
        sGreen: "#008080",
        black: "#222222",
        fGrey: "#EEEEF0",
        tGrey: "#888888",
        bGrey: "#E5E7EB",
        nRed: "#FF0000",
        pGrey: "#D1D5DB",
        cpYellow: "#FEF3C7",
        tpYellow: "#92400E",
        caGreen: "#D1FAE5",
        taGreen: "#065F46",
      },

      fontFamily: {
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
