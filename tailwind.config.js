/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jacques: ["Jacques Francois", "serif"],
        monda: ["Monda", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
