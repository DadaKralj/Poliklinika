import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '1025px',  // Podignut sa 768px - tableti će koristiti mobilne stilove
      'lg': '1280px',
      'xl': '1536px',
    },
  },
  plugins: [],
}

export default config
