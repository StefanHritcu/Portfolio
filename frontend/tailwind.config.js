/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1a1a1a",
        "border-padding": "#2b2b2b",
        "second-border-padding": "#1d1d1d",
        "text-primary": "#ffffff",
        "secondary-color-text": "#d1cfcf",
      },
      screens: {
        verySmall: "340px",
        extraSmall: "400px",
        sm: "640px",
        md: "767px",
        md2: "818px",
        md3: "870px",
        md4: "940px",
        lg: "1024px",
        lg2: "1100px",

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
