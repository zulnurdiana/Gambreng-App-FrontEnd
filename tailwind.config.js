/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FE4918",
        secondary: "#64748b",
        dark: "#111827",
        "primary-50": "#F6ECD8",
      },
    },
  },
  plugins: [],
};
