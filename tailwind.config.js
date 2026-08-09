/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#0D0F12",
          card: "#13161C",
          elevated: "#181C24",
          surface: "#1F242D",
        },
        amber: {
          accent: "#FFB020",
          glow: "#FFB02033",
        },
        telemetry: {
          blue: "#38BDF8",
          blueGlow: "#38BDF833",
          green: "#22C55E",
          red: "#EF4444",
        },
        neutral: {
          light: "#FFFFFF",
          muted: "#A1A1AA",
          dim: "#52525B",
          dark: "#18181B",
        }
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(255, 176, 32, 0.25)',
        'blue-glow': '0 0 20px rgba(56, 189, 248, 0.25)',
        'hud-card': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'circuit-grid': 'radial-gradient(circle, rgba(56,189,248,0.06) 1px, transparent 1px)',
        'hud-gradient': 'linear-gradient(135deg, rgba(19,22,28,0.9) 0%, rgba(13,15,18,0.95) 100%)',
      }
    },
  },
  plugins: [],
}
