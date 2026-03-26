import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paprika: {
          DEFAULT: "#B83030",
          dark: "#8B2020",
          light: "#D44444",
        },
        gold: {
          DEFAULT: "#C9922A",
          dark: "#A67520",
          light: "#E0B050",
        },
        forest: {
          DEFAULT: "#1F3A1F",
          light: "#2D5A2D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
