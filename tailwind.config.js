/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/data.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: '#030303',
        accent: {
          1: 'var(--color-accent-1)',
          2: 'var(--color-accent-2)',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-cyan-500/20',
    'border-cyan-500',
    'bg-accent-1/20',
    'border-accent-1',
    'bg-indigo-600',
    'bg-[#ccff00]',
    'shadow-indigo-600/20',
    'shadow-[#ccff00]/20',
    'text-black',
    'text-white',
    'text-gray-400',
    'hover:text-white',
    'bg-[#ccff00]/10',
    'border-[#ccff00]/20',
    'text-[#ccff00]'
  ]
}
