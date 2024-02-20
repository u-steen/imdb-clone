/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#F5C92A",
        "custom-darkgray": "#121212",
        "custom-darkgray-hover": "#181818",
        "custom-darkgray-active": "#282828",
      },
      fontFamily: {
        roboto: ["roboto", "monospace"],
        oswald: ["oswald", "monospace"],
      },
    },
  },
  plugins: [],
};
