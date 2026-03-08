import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#f5f5f5",
        muted: "#1a1a1a",
      },
      boxShadow: {
        glass: "0 18px 60px rgba(0,0,0,0.65)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

