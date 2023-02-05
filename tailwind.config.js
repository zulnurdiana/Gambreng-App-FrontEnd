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
        "error-50": "#FFF0F0",
        "error-300": "#FFA4A4",
        "error-500": "#FF6868",
        "error-700": "#B23E3E",
        "error-900": "#651515",
        "warning-50": "#FFFBEF",
        "warning-300": "#FDE89D",
        "warning-500": "#FBD85C",
        "warning-700": "#A99038",
        "warning-900": "#574813",
        "neutral-50": "#F0F0F3",
        "neutral-100": "#E0E1E6",
        "neutral-300": "#A2A5B5",
        "neutral-500": "#646983",
        "neutral-700": "#3C3F4F",
        "neutral-900": "#14151A",
        bright: "#FFFFFF",
      },
      boxShadow: {
        glow: "0px 4px 10px #8B98E5",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "20%": { transform: "translateY(0)", opacity: 1 },
          "90%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-10%)", opacity: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
