/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const backgroundColors = {
  neutral: {
    DEFAULT: "hsl(var(--color-bg-neutral) / <alpha-value>)",
  },
  brand: {
    DEFAULT: "hsl(var(--color-bg-brand) / <alpha-value>)",
    hovered: "hsl(var(--color-bg-brand-hovered) / <alpha-value>)",
  },
  subtle: {
    DEFAULT: "hsl(var(--color-bg-subtle) / <alpha-value>)",
    hovered: "hsl(var(--color-bg-subtle-hovered) / <alpha-value>)",
    selected: "hsl(var(--color-bg-subtle-selected) / <alpha-value>)",
  },
};

const borderColors = {
  neutral: {
    DEFAULT: "hsl(var(--color-border-neutral) / <alpha-value>)",
  },
};

const textColors = {
  neutral: {
    DEFAULT: "hsl(var(--color-text-neutral) / <alpha-value>)",
  },
  brand: {
    DEFAULT: "hsl(var(--color-text-brand) / <alpha-value>)",
    inverse: "hsl(var(--color-text-brand-inverse) / <alpha-value>)",
  },
  subtle: {
    DEFAULT: "hsl(var(--color-text-subtle) / <alpha-value>)",
    hovered: "hsl(var(--color-text-subtle-hovered) / <alpha-value>)",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      // Background concerns
      backgroundColor: backgroundColors,
      gradientColorStops: backgroundColors,

      // Border concerns
      borderColor: borderColors,
      stroke: borderColors,
      outlineColor: borderColors,
      ringColor: borderColors,

      // Text concerns
      textColor: textColors,
      fill: textColors,
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".text-body": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "1.375rem",
          "@media screen(xl)": {
            fontSize: "0.9375rem",
            lineHeight: theme("lineHeight.6"),
          },
        },
        ".text-heading-md": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: "1.87px",
          "@media screen(xl)": {
            fontSize: "0.9375rem",
            letterSpacing: "2px",
          },
        },
        ".text-heading-lg": {
          fontSize: "1.75rem",
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-rating": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.6"),
          letterSpacing: "O.17px",
          "@media screen(xl)": {
            fontSize: theme("fontSize.base"),
            letterSpacing: "O.2px",
          },
        },
      });
    }),
  ],
};
