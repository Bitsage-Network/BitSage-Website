import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '384px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // BitSage Purple Scale
        sage: {
          950: "var(--sage-purple-950)",
          900: "var(--sage-purple-900)",
          800: "var(--sage-purple-800)",
          700: "var(--sage-purple-700)",
          600: "var(--sage-purple-600)",
          500: "var(--sage-purple-500)",
          400: "var(--sage-purple-400)",
          300: "var(--sage-purple-300)",
        },
        // Cyber Cyan Accents
        "sage-cyan": {
          900: "var(--sage-cyan-900)",
          700: "var(--sage-cyan-700)",
          600: "var(--sage-cyan-600)",
          500: "var(--sage-cyan-500)",
          400: "var(--sage-cyan-400)",
          300: "var(--sage-cyan-300)",
          200: "var(--sage-cyan-200)",
        },
        // Energy Gold
        "sage-gold": {
          600: "var(--sage-gold-600)",
          500: "var(--sage-gold-500)",
          400: "var(--sage-gold-400)",
          300: "var(--sage-gold-300)",
          200: "var(--sage-gold-200)",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cosmic-bg":
          "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)",
        "fractal-gradient":
          "linear-gradient(135deg, #00ffff 0%, #ff69b4 50%, #00ff88 100%)",
        "cosmic-gradient":
          "linear-gradient(45deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)",
        "stellar-gradient":
          "linear-gradient(90deg, #ffd700 0%, #ff6b35 50%, #ff69b4 100%)",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [animate],
};

export default config;

