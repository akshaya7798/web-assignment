import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",

        "facebook-blue": "hsl(208, 92%, 53%)",
        "twitter-blue": "hsl(203, 89%, 53%)",
        "youtube-red": "hsl(348, 97%, 39%)",

        "light-theme-toggle": "hsl(230, 22%, 74%)",
        // dark
        "very-dark-blue-bg": "#443448",
        "very-dark-blue-top-bg-pattern": "#443448",
        "dark-desaturated-blue-card-bg": "#56485Acd",
        "desaturated-blue-text": "hsl(228, 34%, 66%)",
        "white-text": "hsl(0, 0%, 100%)",

        //light
        "white-bg": "#B4CFB0",
        "very-pale-blue-top-bg-pattern": "#B4CFB0",
        "light-grayish-blue-card-bg": "#FEFBF3",
        "dark-grayish-blue-text": "hsl(228, 12%, 44%)",
        "very-dark-blue-text": "hsl(230, 17%, 14%)",
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(to right hsl(37,97%,70%), hsl(329,70%,58%))",
        "dark-theme-toggle":
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
export default config;