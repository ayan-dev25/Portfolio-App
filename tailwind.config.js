/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0e1630',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

