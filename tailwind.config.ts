import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2d5bff',
          dark: '#1e3fb3',
        },
      },
    },
  },
  plugins: [],
};

export default config;
