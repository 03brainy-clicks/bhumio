/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bhumio: {
          primary: "#27CA9D",
          secondary: "#D0FBE9",
          light: "#ECFDF7",
          dark: "#29b28b",
        },
      },
    },
  },
  plugins: [],
};
