/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        typing: " typing 2s steps(10) infinite alternate ",
        rotate: "rotate 2s linear infinite ",
      },
      keyframes: {
        typing: {
          "0%, 5%": { width: "0%" },
          "70%,100%": { width: "100%" },
        },
        rotate: {
          "0%": { transform: "translate(5px, 0px)" },
          "10%": { transform: "translate(5px, 0px)" },
          "30%": { transform: "translate(5px, 0px)" },
          "50%": { transform: "translate(0px, 5px)" },
          "70%": { transform: "translate(-5px, 0px)" },
          "100%": { transform: "translate(0px, -5px)" },
        },
      },
      minWidth: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
