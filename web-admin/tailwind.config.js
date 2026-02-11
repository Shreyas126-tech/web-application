/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ffac33',
          main: '#ff9800',
          dark: '#b26a00',
          contrastText: '#000',
        },
      },
    },
  },
  plugins: [],
}
