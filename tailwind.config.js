/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        bg: '#080810',
        surface: '#0f0f1a',
        card: '#12121e',
        border: '#1c1c2e',
        accent: '#00e5ff',
        accent2: '#ff3d71',
        accent3: '#ffe066',
        muted: '#5a5a72',
        light: '#d4d4e8',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.9s ease both',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
