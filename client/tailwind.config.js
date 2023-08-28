/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          fontSm:'var(--font-sm-color)',
          fontMd:'var(--font-md-color)',
          oFont:'var(--o-font-color)',
          link:'var(--link-color)',
        }
      },
      backgroundColor:{
        skin:{
          fill:'var(--fill-color)',
          oFill:'var( --o-fill-color)',
          fillAside:'var(--fill-aside-color)',
        }
      },
      boxShadow:{
        skin:{
          shadow:'var(--shadow-color)',
        }
      },
    },
  },
  plugins: [],
}

