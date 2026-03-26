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
        paprika: "#B83030",
        gold: "#C9922A",
        darkgreen: "#1F3A1F",
        "paprika-dark": "#8B1F1F",
        "paprika-light": "#D04040",
        "gold-light": "#E5A832",
        "gold-dark": "#A67520",
        cream: "#FAF7F2",
        "warm-gray": "#8B7355",
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        "serif-alt": ["Source Serif 4", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #FAF7F2 0%, #F5ECD7 50%, #EDD8B5 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #1F3A1F 0%, #2D4A2D 50%, #1F3A1F 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
