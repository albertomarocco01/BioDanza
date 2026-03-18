/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFF8E6', // Avorio/Crema - Base luminosa e accogliente
          dark: '#E9EFF4',    // Azzurro/Grigio chiarissimo
        },
        text: {
          primary: '#4B5749', // Verde Bosco/Olivo
          secondary: '#5E2F00', // Marrone Terra
        },
        accent: {
          biodanza: '#DE84A8', // Rosa Antico/Petalo
          metamedicina: '#502FC8', // Viola/Indaco
        }
      },
      fontFamily: {
        serif: ["var(--font-average)", "serif"], // Average as main text
        display: ["var(--font-centaur)", "serif"], // Centaur as Logo/Display
        cursive: ["var(--font-quintessential)", "cursive"], // Slogans
      },
    },
  },
  plugins: [],
};

export default config;