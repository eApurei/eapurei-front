import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': '#6cc2b6',
        'primary-100': '#009681',
        'secondary-50': '#B5abc2',
        'secondary-100': '#7c6992',
        'secondary-900': '#9e8f2b',
        'tertiary-100': '#f0f0f0f0',
        'dark-100': '#383838',
        'dark-200': '#b4e1e7',
        'dark-300': '#a6a6a6',
        'grey-100': '#525252',
        'grey-200': '#c3c3c3',
        'grey-900': 'rgba(0, 0, 0, 0.2)',
        'grey-950': 'rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    screens: {
      lg_1: { max: '1120px' },
      lg_2: { max: '960px' },
      md_1: { max: '768px' },
      md_2: { max: '280px' },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
