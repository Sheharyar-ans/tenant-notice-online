/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./us/**/*.html",
    "./uk/**/*.html",
    "./guides/**/*.html",
    "./legal/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        legal: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#0f172a',
          slate: '#1e293b',
          emerald: '#059669',
          lightEmerald: '#10b981',
          accent: '#0284c7'
        }
      }
    },
  },
  plugins: [],
}
