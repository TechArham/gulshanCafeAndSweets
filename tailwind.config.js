/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // for components folder
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: "#f39f5a", // custom blue
        secondary: "#F59E0B", // custom amber
        accent: "#10B981", // custom green
        dark: "#111827", // dark background
        light: "#F3F4F6", // light background
      },
      fontFamily: {
        'barlow-condensed': ['var(--font-barlow-condensed)', 'sans-serif'],
        'rt-body': ['var(--rt-body-font)', 'sans-serif'],
        'rt-heading': ['var(--rt-heading-font)', 'sans-serif'],
        'rt-menu': ['var(--rt-menu-font)', 'sans-serif'],
        'sans': ['var(--font-barlow-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
