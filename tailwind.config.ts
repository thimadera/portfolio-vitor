import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff5c00",
          "orange-light": "#ff8a4d",
          cream: "#fffaf7",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(255, 92, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
