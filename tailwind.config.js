/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kt-yellow': '#FFC300',
        'kt-orange': '#FF732E',
        'kt-ink': '#1A1D1D',
        'kt-white': '#FFFFFF',
        'kt-slate': '#5B5F5F',
        'kt-fog': '#E8E8E6',
        'kt-cream': '#FFF8EA',
        'kt-success': '#2E9E5B',
        'kt-error': '#E3473A',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'kt-soft': '0 2px 12px rgba(26, 29, 29, 0.06)',
        'kt-glow': '0 0 0 3px rgba(255, 115, 46, 0.15)',
        'kt-glow-yellow': '0 0 0 3px rgba(255, 195, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
