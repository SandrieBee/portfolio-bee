/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFB",
        surface: "#F1F2F4",
        line: "#DEE0E4",
        ink: "#23262B",
        muted: "#646A72",
        accent: {
          soft: "#B7D0E6",
          DEFAULT: "#3F6C94",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          '"Plus Jakarta Sans Variable"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(35, 38, 43, 0.04), 0 4px 16px rgba(35, 38, 43, 0.06)",
        lift: "0 2px 4px rgba(35, 38, 43, 0.05), 0 12px 32px rgba(35, 38, 43, 0.1)",
      },
    },
  },
  plugins: [],
};