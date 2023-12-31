/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        10: 'repeat(10, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
        19: 'repeat(19, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        10: 'repeat(10, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
        19: 'repeat(19, minmax(0, 1fr))',
      },
      gridRow: {
        'span-20': 'span 20 / span 20',
        'span-18': 'span 18 / span 18',
        'span-16': 'span 16 / span 16',
      },
      gridColumn: {
        'span-20': 'span 20 / span 20',
        'span-16': 'span 16 / span 16',
      },
    },
  },
  plugins: [],
}
