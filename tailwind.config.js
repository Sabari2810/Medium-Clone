module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUp: "slideUp 200ms ease-in",
      },
      keyframes: {
        slideUp: {
          "0%": {
            bottom: "0",
          },
          "25%": {
            bottom: "1",
          },
          "50%": {
            bottom: "2",
          },
          "75%": {
            bottom: "3",
          },
          "100%": {
            bottom: "4",
          },
        },
      },
    },
  },
  plugins: [],
};
