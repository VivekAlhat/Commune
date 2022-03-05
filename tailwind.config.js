module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ['"Nunito Sans"', "Sans"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
