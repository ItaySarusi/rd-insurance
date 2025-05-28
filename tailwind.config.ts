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
        'heebo': ['Heebo', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0a0a0b',
        'bg-secondary': '#1a1a1d',
        'bg-tertiary': '#2d2d32',
        'blue-primary': '#87ceeb',
        'blue-secondary': '#5f9ea0',
        'blue-tertiary': '#e0f6ff',
        'blue-accent': '#add8e6',
      },
      spacing: {
        'section': '6rem',
        'container': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 2s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(135, 206, 235, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(135, 206, 235, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 