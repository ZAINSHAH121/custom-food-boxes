import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode using a class (e.g. <html class="dark">)
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scan all relevant source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',    // Blue
        secondary: '#9333EA',  // Purple
        accent: '#F59E0B',     // Amber (used for highlights)
        background: '#F9FAFB', // Light gray background
        darkBg: '#1F2937',     // Optional: custom dark background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    typography,
  ],
};
