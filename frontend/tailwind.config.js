/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#F5C92A",
        "custom-black": "#121212",
      },
    },
  },
  plugins: [],
};
