import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paprika: '#B83030',
        gold: '#C9922A',
        darkgreen: '#1F3A1F',
        'paprika-dark': '#8B2020',
        'gold-dark': '#A67520',
      },
    },
  },
  plugins: [],
}
export default config
