import type { Config } from 'tailwindcss'

const config: Config = {
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
        'grey-100': '#525252',
        'grey-200': '#c3c3c3',
        'grey-900': 'rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
