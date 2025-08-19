import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
  './app/**/*.{js,jsx,ts,tsx}',
  './index.html',
  './*.{js,jsx,ts,tsx}'
],
  plugins: [],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A2A3A',
          cream: '#F5F2EA',
          gold:  '#C3A343',
          gray:  '#8C8C8C',

        }
      },
      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
        Source: ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
}

export default config;