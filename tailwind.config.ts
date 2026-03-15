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
        gold: {
          DEFAULT: "var(--color-gold)",
          light: "rgba(184, 158, 103, 0.4)",
        },
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        bg: "var(--color-bg)",
        "ph-light": "var(--color-ph-light)",
        "ph-mid": "var(--color-ph-mid)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        slow: "var(--transition-slow)",
      },
    },
  },
  plugins: [],
};
export default config;
