import type { Config } from 'tailwindcss';

const config: Config = {
  // Ensure styles take precedence over other libraries
  important: 'body',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};

export default config;
