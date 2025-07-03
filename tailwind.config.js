/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Enable Tailwind for all files in src/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Tailwind blue-600
        secondary: "#1e40af", // Tailwind blue-800
        accent: "#facc15",    // Tailwind yellow-400
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
