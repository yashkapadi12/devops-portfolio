/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c1117",
          raised: "#141b24",
          border: "#1e2a38",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dim: "#0891b2",
          glow: "rgba(34, 211, 238, 0.15)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(34, 211, 238, 0.12)",
      },
    },
  },
  plugins: [],
};
