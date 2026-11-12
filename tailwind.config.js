/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          primary: '#0EA5E9',
          'primary-deep': '#2563EB',
          secondary: '#10B981',
          'secondary-light': '#22C55E',
          glow: '#38BDF8',
          whatsapp: '#25D366',
        },
        surface: {
          canvas: '#050814',
          subtle: '#091124',
          card: 'rgba(15, 23, 42, 0.65)',
          elevated: '#0F172A',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(14, 165, 233, 0.35)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'glow-button': '0 4px 20px rgba(14, 165, 233, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};
