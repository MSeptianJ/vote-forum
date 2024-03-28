/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import FLOWBITE from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Inter Var", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        secondary: "#5C9EAD",
        primary: "#326273",
        accent: "#36F760",
      },
      height: {
        content: `calc(100vh - 6rem)`,
      },
    },
  },
  plugins: [FLOWBITE],
};
