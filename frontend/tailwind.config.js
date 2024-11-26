/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1a1a1a",
        "border-padding": "#2b2b2b",
        "second-border-padding": "#1d1d1d",
        "third-border-padding": "#0b0b0b",
        "text-primary": "#ffffff",
        "secondary-color-text": "#d1cfcf",
      },
      screens: {
        verySmall: "340px",
        verySmall2: "362px",
        extraSmall: "400px",
        xs: "480px", // Aggiunta per dispositivi più piccoli
        sm: "640px", // Tailwind CSS sm
        md: "767px", // Tailwind CSS md
        md2: "818px",
        md3: "870px",
        md4: "940px",
        lg: "1024px", // Tailwind CSS lg
        lg2: "1100px",
        xl: "1280px", // Tailwind CSS xl
        xl2: "1400px", // Variabile per dimensioni maggiori
        "2xl": "1536px", // Tailwind CSS 2xl
        "3xl": "1600px", // Un altro breakpoint grande
        "4xl": "1920px", // Large screens, full HD
        "5xl": "2560px", // Ultra-wide screens
        cloud1: "1100px", // Breakpoint personalizzato per cloud
        cloud2: "1300px", // Breakpoint personalizzato per cloud
        cloud3: "1400px", // Breakpoint personalizzato per cloud
        // duplicati eliminati
      },
    },
    plugins: [],
  },
};
