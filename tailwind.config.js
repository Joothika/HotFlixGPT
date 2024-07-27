/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        typing: " typing 2s steps(10) infinite alternate ",
      },
      keyframes: {
        typing: {
          "0%, 5%": { width: "0%" },
          "70%,100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
