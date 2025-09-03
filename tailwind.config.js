/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // for components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f39f5a", // custom blue
        secondary: "#F59E0B", // custom amber
        accent: "#10B981", // custom green
        dark: "#111827", // dark background
        light: "#F3F4F6", // light background
      },
    },
  },
  plugins: [],
};
