/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1a1a1a",
        "border-padding": "#2b2b2b",
        "text-primary": "#ffffff",
        "secondary-color-text": "#d1cfcf",
      },
      screens: {
        "extra-small": "400px",
        sm: "640px",
        md: "767px",
        md2: "818px",
        md3: "870px",
        lg: "1024px",

        //only for cloud bobbles
        cloud1: "1100px",
        cloud2: "1300px",
        cloud3: "1400px",

        xl: "1280px",
        "2xl": "1536px",
      },
    },
    plugins: [],
  },
};
