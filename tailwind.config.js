/** @type {import('tailwindcss').Config} */

// Each color reads a CSS variable (defined per theme in src/index.css).
// The <alpha-value> placeholder keeps opacity classes like bg-surface/60 working.
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        card: token("card"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        scrim: token("scrim"),
        accent: {
          soft: token("accent-soft"),
          DEFAULT: token("accent"),
          dark: token("accent-dark"),
        },
        "on-accent": token("on-accent"),
        success: {
          soft: token("success-soft"),
          ink: token("success-ink"),
        },
        danger: {
          soft: token("danger-soft"),
          ink: token("danger-ink"),
        },
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ['"Outfit Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(var(--shadow-color) / 0.04), 0 4px 16px rgb(var(--shadow-color) / 0.06)",
        lift: "0 2px 4px rgb(var(--shadow-color) / 0.05), 0 12px 32px rgb(var(--shadow-color) / 0.1)",
      },
    },
  },
  plugins: [],
};