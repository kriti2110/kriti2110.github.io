/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green':  '#0A3323',
        'moss':        '#839958',
        'beige':       '#F7F4D5',
        'rosy':        '#D3968C',
        'midnight':    '#105666',
        'beige-dark':  '#E8E3C0',
      },
      fontFamily: {
        pixel:  ['"Press Start 2P"', 'monospace'],
        retro:  ['"VT323"', 'monospace'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        window: '6px 6px 0px rgba(10,51,35,0.55)',
        'window-sm': '4px 4px 0px rgba(10,51,35,0.55)',
      },
    },
  },
  plugins: [],
};
