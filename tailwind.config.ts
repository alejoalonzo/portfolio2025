import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
      primary: ['var(--font-jetbrains-mono)', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
          dark: '#005bb5',
        },
      },
    },
  },
  plugins: [],
}

export default config
