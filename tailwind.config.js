/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "theme-purple": "#3700b3",
        "theme-purple-lighter": "#6200ed",
        "theme-purple-lightest": "#b985f9",
        "theme-yellow": "#f9d044",
        "theme-cyan": "#0dd7c1"
      },
    },
  },
  plugins: [],
}

