module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home-mobile":
          "url('/src/assets/home/background-home-mobile.jpg')",
        "background-home-tablet":
          "url('/src/assets/home/background-home-tablet.jpg')",
        "background-home-desktop":
          "url('/src/assets/home/background-home-desktop.jpg')",
        "background-destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "background-destination-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "background-destination-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
      },
      backgroundColor: {
        nav: "rgba(255, 255, 255, 0.04)",
      },
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        bellefair: ["Bellefair", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowcondensed: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        "solid-blue": "#D0D6F9",
        explore: "#0B0D17",
        "dark-grey": "#383B4B",
      },
    },
  },
  plugins: [],
};
