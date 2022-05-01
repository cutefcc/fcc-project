const typography = require("@tailwindcss/typography");
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.html", "./public/index.html"],
  important: "#root",
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [typography, require("./plugin")],
};
