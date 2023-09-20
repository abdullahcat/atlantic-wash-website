import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'atlantic-red': '#e63946',
        'atlantic-blue1': '#a8dadc',
        'atlantic-blue2': '#457b9d',
        'atlantic-blue3': '#1d3557',
        "atlantic-gray": "#5c5c5c",
        "atlantic-yellow": "#fff466",
        "atlantic-white": "#f1faee",

      },
      fontFamily: {
        'freshman': ['Freshman', 'cursive'],
      },

    },
  },
  plugins: [],
}
export default config
