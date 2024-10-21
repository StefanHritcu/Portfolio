/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1a1a1a",
        "border-padding": "#252525",
        "text-primary": "#ffffff",
      },
      screens: {
        "extra-small": "400px",
        sm: "640px",
        md: "767px",
        md2: "818px",
        md3: "870px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    plugins: [],
  },
};
