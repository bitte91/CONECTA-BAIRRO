import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A67C5A",
        secondary: "#87CEEB",
        accent: "#F4D03F",
        glass: "rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.12)"
      }
    },
  },
  plugins: [containerQueries],
};
export default config;