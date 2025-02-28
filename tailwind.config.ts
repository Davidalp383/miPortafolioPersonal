import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        exo: ['Exo', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        glow: `
          0 0 10px rgba(111, 185, 143, 0.8),  
          0 0 20px rgba(44, 120, 115, 0.6),  
          0 0 30px rgba(44, 120, 115, 0.4),
          0 0 50px rgba(44, 120, 115, 0.2)
        `,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          textShadow: `
            0 0 10px rgba(111, 185, 143, 0.8),
            0 0 20px rgba(44, 120, 115, 0.6),
            0 0 30px rgba(44, 120, 115, 0.4),
            0 0 50px rgba(44, 120, 115, 0.2)
          `,
        },
      })})
  ],
} satisfies Config;
