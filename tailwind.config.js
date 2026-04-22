// / tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // This covers components/Home.vue
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F9F7F2',
        'brand-dark': '#1A2F2F',
        'brand-orange': '#E67E22',
        'brand-accent': '#84A59D',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
}