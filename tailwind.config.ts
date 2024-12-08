import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#818181',
        'light-gray': '#D9D9D9',
        black: '#181818',
        primary: '#0059B2',
        white: '#FFFFFF',
        transparent: 'transparent',
      },
      backgroundImage: () => ({
        'hero-pattern': 'url("/assets-hero.svg")',
      }),
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '960px',     // Este será el máximo ancho
        xl: '960px',     // Mantenemos 960px incluso en pantallas más grandes
        '2xl': '960px',  // Mantenemos 960px para 2xl también
      },
    },
  },
  plugins: [],
} satisfies Config;
