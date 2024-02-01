import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        "color-custom-red": "hsl(var(--color-custom-red))",
        "color-custom-dark-blue": "hsl(var(--color-custom-dark-blue))",
        "color-custom-greyish-blue": "hsl(var(--color-custom-greyish-blue))",
        "color-semi-dark-blue": "hsl(var(--color-semi-dark-blue))",
      },
    },
  },
  plugins: [],
};
export default config;
