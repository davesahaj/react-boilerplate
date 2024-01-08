/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // to work with mantine styles
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
