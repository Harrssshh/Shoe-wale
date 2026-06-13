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
        pitch: "#0a0a0a",
        court: "#141414",
        track: "#1e1e1e",
        volt: "#ccff00",
        muted: "rgba(255,255,255,0.55)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
