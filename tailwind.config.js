/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [require("flowbite/plugin")],
};

