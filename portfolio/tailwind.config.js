import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/*eslint-env node*//**
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#151515"
      }
    },
  },
  plugins: [],
};
