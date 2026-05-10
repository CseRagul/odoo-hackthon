/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#2563EB",
        light: "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      backgroundImage: {
        auth: "linear-gradient(to right, #0f172a, #1e293b)",
      },
    },
  },

  plugins: [],
}